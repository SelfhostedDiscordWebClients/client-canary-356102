"use strict";(this.webpackChunkdiscord_developers=this.webpackChunkdiscord_developers||[]).push([[37418],{229680:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=p;var a,n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&{}.hasOwnProperty.call(e,l)){var o=n?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(a,l,o):a[l]=e[l]}return a.default=e,r&&r.set(e,a),a}(r(192379)),l=s(r(953322)),o=s(r(96082)),i=s(r(134897)),u=r(747141),d=r(544483);function s(e){return e&&e.__esModule?e:{default:e}}function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function c(e,t,r,n){a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103)
;var l=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=n;else if(o>1){for(var i=Array(o),u=0;u<o;u++)i[u]=arguments[u+3];t.children=i}if(t&&l)for(var d in l)void 0===t[d]&&(t[d]=l[d]);else t||(t=l||{});return{$$typeof:a,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function p(e){const{onCoverImageChange:t,coverImage:r,disabled:a}=e;return c(n.Fragment,{},void 0,c(o.default,{htmlFor:"cover-image-uploader"},void 0,d.Messages.RICH_PRESENCE_COVER_IMAGE),c(i.default,{},void 0,c("input",{type:"hidden",name:"coverImage",value:null!=r?r:""}),c(l.default,{id:"cover-image-uploader",avatar:r,onChange:e=>{null==t||t(e)},size:u.COVER_IMAGE_UPLOAD_SIZE,minSize:u.MINIMUM_COVER_IMAGE_SIZE,disabled:a})))}p.displayName="CoverImageUploader"},506757:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0
;var a,n,l=T(r(192379)),o=r(887614),i=r(318311),u=r(321168),d=T(r(277793)),s=r(341214),f=O(r(140715)),c=O(r(204633)),p=O(r(979133)),v=O(r(377275)),m=O(r(138594)),E=O(r(468287)),_=O(r(711919)),g=r(835912),S=O(r(405107)),y=O(r(555540)),I=T(r(305393)),A=O(r(615108)),h=r(151136),P=r(55424),C=r(804797),M=r(485292),N=r(747141),R=r(544483),b=O(r(718182));function O(e){return e&&e.__esModule?e:{default:e}}function w(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(w=function(e){return e?r:t})(e)}function T(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=w(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&{}.hasOwnProperty.call(e,l)){var o=n?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(a,l,o):a[l]=e[l]}return a.default=e,r&&r.set(e,a),a}function H(e,t,r,a){
n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var l=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=a;else if(o>1){for(var i=Array(o),u=0;u<o;u++)i[u]=arguments[u+3];t.children=i}if(t&&l)for(var d in l)void 0===t[d]&&(t[d]=l[d]);else t||(t=l||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function k(){const e=(0,o.useParams)(),t=(0,P.isNotNull)(e.id),n=(0,u.useStateFromStores)([S.default],(()=>S.default.getApplication(t))),O=(0,u.useStateFromStoresArray)([S.default],(()=>S.default.getApplicationAssets(t)));if(null==n)throw new Error("Application "+t+" not found");const w=l.useRef(null),T=l.useRef(null),[k,j]=l.useState(null),[D,W]=l.useState(!1),[G,F]=l.useState(!1),[L,U]=l.useState(),[B,V]=l.useState(!1);l.useEffect((()=>{d.fetchApplicationAssets(t).then((()=>{j(null);W(!0)})).catch((e=>{j(e.message);W(!0)}))}),[t]);const $=e=>d.deleteAsset(n.id,e),z=e=>(0,
h.getAssetImage)(n.id,e.id),X=e=>R.Messages.RICH_PRESENCE_ASSETS_MANAGER_HEADING.format({count:e}),Z=()=>H(f.default,{},void 0,H("img",{alt:R.Messages.RICH_PRESENCE_NO_ASSETS_UPLOADED,src:r(474460),className:b.default.emptyStateImage})),x=e=>null!=e.data?d.createAsset(n.id,{name:e.name,image:e.data,type:"1"}):Promise.resolve();return H(_.default,{hasUnsavedChanges:G,saving:B,onChange:()=>{G||F(!0)},onReset:()=>{null!=w.current&&w.current.resetAssets();null!=T.current&&T.current.resetImage();F(!1)},onSubmit:e=>{V(!0);const t=[];null!=w.current&&t.push(w.current.uploadAllAssets());void 0!==L&&t.push(d.updateApplication(n.id,{cover_image:e.coverImage}).then((()=>{U(void 0)})));Promise.all(t).then((()=>{j(null);F(!1);V(!1)})).catch((e=>{j(e.message);V(!1)}))}},void 0,H(p.default,{},void 0,H(c.default,{},void 0,R.Messages.RICH_PRESENCE_ASSETS_HEADING),H(E.default,{},void 0,R.Messages.RICH_PRESENCE_ASSETS_SUBHEADING),H("p",{},void 0,R.Messages.RICH_PRESENCE_ASSETS_SUBHEADING_LINK.format({
link:(0,C.prependBasename)(N.Routes.DOCS_RICH_PRESENCE_BEST_PRACTICES)}))),H(p.default,{},void 0,H(v.default,{},void 0,R.Messages.RICH_PRESENCE_INVITE_IMAGE_HEADING),H(m.default,{},void 0,R.Messages.RICH_PRESENCE_INVITE_IMAGE_SUBHEADING),H(M.RichPresenceInviteImage,{application:n,onCoverImageChange:e=>{F(!0);U(e)},handleRef:T})),H(p.default,{isFlush:!0},void 0,H(v.default,{},void 0,R.Messages.RICH_PRESENCE_ASSETS_SECTION_HEADING),H(m.default,{},void 0,R.Messages.RICH_PRESENCE_ASSETS_SECTION_SUBHEADING),H(I.default,{type:I.AlertTypes.WARNING},void 0,R.Messages.RICH_PRESENCE_ASSET_CACHING_WARNING),(()=>{if(!D)return a||(a=H(A.default,{}));if(null==n)return null;const e=null!=y.default.user&&(0,g.teamMemberCan)(n.owner.id,y.default.user.id,i.TeamMemberRoles.DEVELOPER);return H(s.AssetManager,{actionCopy:R.Messages.RICH_PRESENCE_ASSETS_ADD_IMAGES,assetLabel:R.Messages.RICH_PRESENCE_ASSETS_IMAGES,assetsHeadingRenderer:X,assets:O,getAssetUri:z,uploadAsset:x,deleteAsset:$,emptyState:Z(),
fileTypeDescription:R.Messages.RICH_PRESENCE_ASSETS_ACCEPTED_FILE_TYPES.format({minSize:N.MINIMUM_ASSET_IMAGE_SIZE,recommendedSize:N.RECOMMENDED_ASSET_IMAGE_SIZE}),minAssetSize:N.MINIMUM_ASSET_IMAGE_SIZE,handleRef:w,supportedExtensions:["jpg","jpeg","png"],disabled:!e})})()))}k.displayName="RichPresence";t.default=k},485292:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.RichPresenceInviteImage=g;var a,n=E(r(192379)),l=r(318311),o=v(r(96082)),i=v(r(12218)),u=r(835912),d=v(r(555540)),s=E(r(784810)),f=v(r(229680)),c=r(544483),p=v(r(147330));function v(e){return e&&e.__esModule?e:{default:e}}function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(m=function(e){return e?r:t})(e)}function E(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=m(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor
;for(var l in e)if("default"!==l&&{}.hasOwnProperty.call(e,l)){var o=n?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(a,l,o):a[l]=e[l]}return a.default=e,r&&r.set(e,a),a}function _(e,t,r,n){a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var l=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=n;else if(o>1){for(var i=Array(o),u=0;u<o;u++)i[u]=arguments[u+3];t.children=i}if(t&&l)for(var d in l)void 0===t[d]&&(t[d]=l[d]);else t||(t=l||{});return{$$typeof:a,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function g(e){let{application:t,onCoverImageChange:r,handleRef:a}=e;const[v,m]=n.useState(t.coverImage);n.useImperativeHandle(a,(()=>({resetImage:()=>{m(t.coverImage)}})));const E=null!=d.default.user&&(0,u.teamMemberCan)(t.owner.id,d.default.user.id,l.TeamMemberRoles.DEVELOPER);return _(s.default,{},void 0,_(s.GridSection,{},void 0,_(s.GridChild,{columnSpread:3,
className:p.default.inviteImage},void 0,_(f.default,{coverImage:v,onCoverImageChange:e=>{m(e);null==r||r(e)},disabled:!E})),_(s.GridChild,{columnSpread:8,columnSpreadExtraSmall:12,columnSpreadSmall:12,grow:1,shrink:1},void 0,_(o.default,{},void 0,c.Messages.RICH_PRESENCE_IRL_INVITE_IMAGE_EXAMPLE),_(i.default,{coverImage:v,name:t.name}))))}g.displayName="RichPresenceInviteImage"},12218:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=c;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&{}.hasOwnProperty.call(e,l)){var o=n?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(a,l,o):a[l]=e[l]}a.default=e,r&&r.set(e,a)}(r(192379));var a,n=u(r(726372)),l=u(r(947929)),o=u(r(390159)),i=u(r(153779));function u(e){
return e&&e.__esModule?e:{default:e}}function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function s(e,t,r,n){a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var l=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=n;else if(o>1){for(var i=Array(o),u=0;u<o;u++)i[u]=arguments[u+3];t.children=i}if(t&&l)for(var d in l)void 0===t[d]&&(t[d]=l[d]);else t||(t=l||{});return{$$typeof:a,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}const f=e=>{let{displayPlaceholderAvatar:t}=e;return s("div",{className:(0,n.default)(i.default.partyAvatar,{[i.default.partyAvatarPlaceholder]:t})})};f.displayName="UserAvatar";function c(e){const{name:t,coverImage:r}=e;return s("div",{className:i.default.invite},void 0,s("div",{className:i.default.coverImageWrapper},void 0,s("div",{className:i.default.coverImageActionable,style:{
backgroundImage:null!=r?"url('"+r+"')":void 0}})),s(o.default,{className:i.default.fullHeight},void 0,s(o.default,{direction:o.default.Direction.VERTICAL},void 0,s("div",{className:i.default.header},void 0,"Invite to join group"),s(o.default.Child,{className:i.default.partyStatus},void 0,"3 open slots"),s(o.default,{align:o.default.Align.END,wrap:o.default.Wrap.NO_WRAP},void 0,s(o.default.Child,{grow:0,shrink:0},void 0,s(o.default,{align:o.default.Align.CENTER,className:i.default.actionAndParty,wrap:o.default.Wrap.NO_WRAP},void 0,s(o.default.Child,{grow:0,shrink:0,wrap:!0},void 0,s(l.default,{className:i.default.actionButton,color:l.default.Color.GREEN,height:l.default.Height.SHORT},void 0,"Join")),s(o.default.Child,{grow:0,shrink:0,wrap:!0},void 0,function(){const e=[];for(let t=0;t<6;t++)e.push(s(f,{displayPlaceholderAvatar:t<3},t));return s("div",{className:i.default.partyMembers},void 0,e)}()))),s(o.default.Child,{grow:1,shrink:1},void 0,s("div",{className:i.default.name
},void 0,t))))))}c.displayName="InviteEmbedExample"},718182:(e,t,r)=>{r.r(t);r.d(t,{default:()=>a});const a={emptyStateImage:"emptyStateImage-3Q4eWE"}},147330:(e,t,r)=>{r.r(t);r.d(t,{default:()=>a});const a={inviteImage:"inviteImage-ojNMth"}},153779:(e,t,r)=>{r.r(t);r.d(t,{default:()=>a});const a={inFront:"inFront-1TP8We",invite:"invite-1J5PX7",fullHeight:"fullHeight-36vlGE",coverImageWrapper:"coverImageWrapper-26lEHI",coverImage:"coverImage-34gLXf",coverImageActionable:"coverImageActionable-1CPnhF coverImage-34gLXf",blurred:"blurred-2jDtfe",artwork:"artwork-3AgnXm",artworkActionable:"artworkActionable-35yWpi artwork-3AgnXm",header:"header-35NcCc inFront-1TP8We",partyStatus:"partyStatus-YZe6Jj inFront-1TP8We",name:"name-1pgC5t inFront-1TP8We",actionAndParty:"actionAndParty-3ws7Op",actionButton:"actionButton-lAoAoz inFront-1TP8We",partyMembers:"partyMembers-2iLWgs",partyMember:"partyMember-34j6nT inFront-1TP8We",partyAvatar:"partyAvatar-3YG8Am",
partyAvatarPlaceholder:"partyAvatarPlaceholder-2M6Sla"}}}]);
//# sourceMappingURL=4e23b3a7e528da1c8ac8.js.map