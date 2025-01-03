import http.server
import socketserver
import os
import re
import subprocess
from urllib.parse import urlparse

PORT = 6032  # Change the port number if needed

class Proxy(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Parse the path to separate out the query parameters
        parsed_url = urlparse(self.path)
        base_path = parsed_url.path  # This removes any query parameters

        # Log the request path for debugging
        print(f"Handling GET request for: {base_path}")
        
        # Normalize path (strip trailing slashes if not the root "/")
        if base_path != '/':
            base_path = base_path.rstrip('/')
        
        # Handle custom routes
        if base_path == '/guild-directory':
            self.serve_app_index('app')
        elif base_path == '/oauth2/authorize':  # Match stripped path for OAuth2
            self.serve_app_index('oauth2/authorize')
        elif base_path == '/register':
            self.serve_app_index('login')
        elif base_path.startswith('/channels/@me') or re.match(r'^/channels/\d+/\d+$', base_path):
            self.serve_app_index('app')
        elif base_path.startswith('/invite'):
            self.serve_app_index('app')
        elif base_path == '/developers/applications':  # <-- Match this specific path
            self.serve_app_index('developers')
        elif re.match(r'^/developers/\d+/\d+$', base_path):  # Match specific developer routes
            self.serve_app_index('developers')
        else:
            # Serve local files if it's not a special route
            self.serve_local_file(base_path)

    def serve_app_index(self, folder):
        """
        Serve the index.html file from a given folder (like 'app' or 'login').
        """
        index_file_path = os.path.join(os.getcwd(), folder, 'index.html')

        if os.path.isfile(index_file_path):
            # Serve index.html if it exists
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()

            with open(index_file_path, 'rb') as file:
                self.wfile.write(file.read())
        else:
            # If index.html is not found, return a 404 error
            self.send_error(404, f'File not found: {folder}/index.html')
    
    def serve_local_file(self, requested_path):
        """
        Serve files from the local directory based on the request path.
        """
        # Log the file serving attempt
        print(f"Attempting to serve file: {requested_path}")
        
        # Remove leading slashes from the path to avoid errors
        local_file_path = os.path.join(os.getcwd(), requested_path.lstrip('/'))

        if os.path.isdir(local_file_path):
            # Check if index.html exists in the directory
            index_file_path = os.path.join(local_file_path, 'index.html')
            if os.path.isfile(index_file_path):
                # Serve index.html
                self.send_response(200)
                self.send_header('Content-type', 'text/html')
                self.end_headers()

                with open(index_file_path, 'rb') as file:
                    self.wfile.write(file.read())
            else:
                # Serve a directory listing if no index.html is found
                self.send_response(200)
                self.send_header('Content-type', 'text/html')
                self.end_headers()
                self.wfile.write(b"<html><body><h2>Directory Listing</h2><ul>")

                for item in os.listdir(local_file_path):
                    item_path = os.path.join(requested_path.strip('/'), item)
                    self.wfile.write(f'<li><a href="{item_path}">{item}</a></li>'.encode())

                self.wfile.write(b"</ul></body></html>")
        elif os.path.isfile(local_file_path):
            # Serve the file if it exists
            self.send_response(200)
            self.send_header('Content-type', self.guess_type(local_file_path))
            self.end_headers()

            with open(local_file_path, 'rb') as file:
                self.wfile.write(file.read())
        else:
            # Check if the requested path is under /assets
            if "/assets" in requested_path:
                local_path = f".{requested_path}"  # Assuming assets are in the current directory

                # Check if the file already exists locally
                if not os.path.isfile(local_path):
                    # If file doesn't exist, use wget to download it
                    url = f"https://discord.com{requested_path}"
                    try:
                        print(f"Attempting to download missing file: {url}")
                        result = subprocess.run(['wget', url, '-P', os.path.dirname(local_path)],
                                                check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
                        print(f"Downloaded {url} successfully.")
                    except subprocess.CalledProcessError as e:
                        # Log the error and send 404 if wget fails
                        print(f"Failed to download {url}: {e.stderr.decode()}")
                        self.send_error(404, f'File not found and could not be downloaded: {requested_path}')
                        return
            else:
                # File or directory not found
                self.send_error(404, f'File not found: {requested_path}')

# Set up the server
with socketserver.TCPServer(("", PORT), Proxy) as httpd:
    print(f"Serving at port {PORT}")
    httpd.serve_forever()
