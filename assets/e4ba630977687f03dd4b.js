"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([["58023"],{137707:function(e){e.exports="/assets/511e8321949194fd8ed3.svg"},62640:function(e){e.exports="/assets/c61fe8d4e58fa62f15fb.svg"},639933:function(e){e.exports="/assets/f24b23296e9c6847e7f4.svg"},484614:function(e,n,t){var l,i=t(200651),r=t(192379),a=t(846519),s=t(481060),o=t(572004),d=t(388032);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}class u extends(l=r.PureComponent){componentWillUnmount(){this._timeout.stop()}render(){let{text:e}=this.props,{mode:n}=this.state,t=n===s.CopyInput.Modes.SUCCESS?d.intl.string(d.t["t5VZ8/"]):e;return(0,i.jsx)(s.CopyInput,{...this.props,onCopy:this.handleCopy,mode:n,text:t,supportsCopy:o.wS})}handleCopy(e){let{onCopy:n,delay:t=1e3}=this.props,l=(0,o.JG)(e);this.setState({mode:l?s.CopyInput.Modes.SUCCESS:s.CopyInput.Modes.ERROR}),this._timeout.start(t,()=>this.setState({mode:s.CopyInput.Modes.DEFAULT})),null==n||n(e)}getVerticalButtonColor(e){switch(e){case s.CopyInput.Modes.SUCCESS:return s.Button.Colors.GREEN;case s.CopyInput.Modes.ERROR:return s.Button.Colors.RED;default:return s.Button.Colors.BRAND}}constructor(e){super(e),c(this,"_timeout",void 0),this.state={mode:s.CopyInput.Modes.DEFAULT},this._timeout=new a.V7,this.handleCopy=this.handleCopy.bind(this)}}c(u,"defaultProps",{delay:1e3}),n.Z=u},96698:function(e,n,t){t.d(n,{Z:function(){return d}});var l=t(200651);t(192379);var i=t(120356),r=t.n(i),a=t(481060),s=t(118012),o=t(913943);function d(e){let{steps:n,stepIndex:t,onClick:i}=e;return(0,l.jsx)("div",{className:o.container,children:n.map((e,n)=>{let d=t===n;return(0,l.jsxs)(a.Clickable,{onClick:()=>i(n),className:o.stepContainer,children:[(0,l.jsx)("div",{className:r()(o.progressBar,{[o.selectedProgressBar]:d})}),(0,l.jsx)(s.Z,{color:d?s.Z.Colors.BRAND:s.Z.Colors.MUTED,size:s.Z.Sizes.SIZE_12,children:e})]},e)})})}},356685:function(e,n,t){t.d(n,{X:function(){return r}});var l=t(544891),i=t(981631);async function r(e,n,t){return(await l.tn.get({url:i.ANM.DIRECTORY_ENTRIES_BROADCAST_INFO(e),query:{type:n,entity_id:t},rejectWithError:!1})).body}},433775:function(e,n,t){t.d(n,{Z:function(){return u}}),t(47120);var l=t(192379),i=t(442837),r=t(951539),a=t(592125),s=t(356685),o=t(486527),d=t(981631);let c={can_broadcast:!1};function u(e,n,t){let[u,m]=l.useState(c),[x,h]=l.useState(!1),g=l.useRef(!1),v=null==e?void 0:e.id,j=null==e?void 0:e.hasFeature(d.oNc.HAS_DIRECTORY_ENTRY);l.useEffect(()=>{if(!j){m(c);return}if(!g.current&&null!=v)(async()=>{g.current=!0;try{let e=await (0,s.X)(v,o.C2.GUILD_SCHEDULED_EVENT,n);m(e)}catch(e){m(c)}g.current=!1})()},[v,j,n]),l.useEffect(()=>{var e;if(!u.can_broadcast){h(!1);return}h(null===(e=u.has_broadcast)||void 0===e||e)},[u]);let p=(0,i.e7)([a.Z],()=>(0,r.wg)(t,[a.Z]));return{broadcastInfo:u,broadcastToDirectoryChannels:p&&x,setBroadcastToDirectoryChannels:h,canEveryoneRoleViewEvent:p}}},545165:function(e,n,t){t.d(n,{SU:function(){return a},sR:function(){return s}}),t(47120),t(653041);var l=t(442837),i=t(357156);t(427679);var r=t(984933);function a(e,n){let[t]=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[r.ZP];if(null==n)return[];let l=t.getChannels(e)[r.Zb],a=[];for(let{channel:e}of l){let{canCreateGuildEvent:t,canManageAllEvents:l}=(0,i.Gw)(e),r=t||l;if(e.type===n)e.isGuildVoice()&&r?a.push(e):e.isGuildStageVoice()&&r&&a.push(e)}return a}function s(e,n){return(0,l.Wu)([r.ZP],()=>a(e,n,[r.ZP]),[e,n])}t(496675),t(85243)},77810:function(e,n,t){t.d(n,{q:function(){return s}}),t(724458),t(653041);var l=t(442837),i=t(146085),r=t(984933),a=t(496675);function s(e){var n;let t=null!==(n=null==e?void 0:e.id)&&void 0!==n?n:null;return(0,l.Wu)([r.ZP,a.Z],()=>r.ZP.getChannels(t)[r.Zb].reduce((e,n)=>{let t=n.channel;return t.isGuildStageVoice()?(function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.Z;return!!e.isGuildStageVoice()&&n.can(i.yP,e)}(n.channel,a.Z)&&e.push(t),e):e},[]),[t])}},401876:function(e,n,t){t.d(n,{Z:function(){return c}});var l=t(200651),i=t(192379),r=t(481060),a=t(377171),s=t(854698),o=t(388032),d=t(195197);function c(e){let{startDate:n,recurrenceRule:t,onRecurrenceChange:c}=e,u=i.useMemo(()=>(0,s.zi)(n,t),[t,n]),m=(0,s.P8)(n),x=e=>e.toString(),h=(0,l.jsxs)("div",{className:d.title,children:[o.intl.string(o.t["59TVxM"]),(0,l.jsx)(r.TextBadge,{text:o.intl.string(o.t.y2b7CA),color:a.Z.BG_BRAND})]});return(0,l.jsx)(r.FormItem,{title:h,required:!0,children:(0,l.jsx)(r.Select,{placeholder:"gaming",options:m,select:c,serialize:x,isSelected:e=>null!=u&&x(e)===x(u)})})}},440371:function(e,n,t){t.d(n,{Z:function(){return u}});var l=t(200651);t(192379);var i=t(913527),r=t.n(i),a=t(481060),s=t(854698),o=t(401876),d=t(388032),c=t(297229);function u(e){let{className:n,onScheduleChange:t,onRecurrenceChange:i,onTimeChange:u,timeSelected:m=!0,schedule:x,recurrenceRule:h,showEndDate:g=!1,requireEndDate:v=!1,disableStartDateTime:j=!1}=e;if(null==x)return null;let p=null,f=x.startDate,I=r()(),N=r()().add(s.G3,"days"),C=r()().add(s.Ib,"days");null!=h&&(N.add(s.hn,"years"),C.add(s.hn,"years"));let E=e=>{t({...x,endDate:e})};return g&&(p=null!=x.endDate||v?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:c.doubleInput,children:[(0,l.jsx)(a.FormItem,{title:d.intl.string(d.t.CTLgZG),required:v,children:(0,l.jsx)(a.DateInput,{value:x.endDate,onSelect:E,minDate:x.startDate,maxDate:C})}),(0,l.jsx)(a.FormItem,{title:d.intl.string(d.t.j2RuXF),required:v,children:(0,l.jsx)(a.TimeInput,{value:x.endDate,onChange:E})})]}),v?null:(0,l.jsx)(a.Button,{onClick:()=>{E(void 0)},look:a.Button.Looks.BLANK,size:a.Button.Sizes.MIN,children:(0,l.jsxs)("div",{className:c.link,children:[(0,l.jsx)(a.CircleXIcon,{size:"custom",color:"currentColor",width:17,height:17,className:c.removeIcon}),(0,l.jsx)(a.Text,{variant:"text-sm/normal",children:d.intl.string(d.t.petdfn)})]})})]}):(0,l.jsx)(a.Button,{look:a.Button.Looks.BLANK,size:a.Button.Sizes.MIN,onClick:()=>{E(r()(x.startDate).add(1,"hour"))},children:(0,l.jsxs)("div",{className:c.link,children:[(0,l.jsx)(a.CirclePlusIcon,{size:"custom",color:"currentColor",width:20,height:20,className:c.addIcon}),(0,l.jsx)(a.Text,{variant:"text-sm/normal",children:d.intl.string(d.t.ncdPcn)})]})})),(0,l.jsxs)("div",{className:n,children:[(0,l.jsxs)("div",{className:c.doubleInput,children:[(0,l.jsx)(a.FormItem,{title:d.intl.string(d.t.kKOIwM),required:!0,children:(0,l.jsx)(a.DateInput,{value:x.startDate,onSelect:e=>{t({...x,startDate:e})},minDate:I,maxDate:N,disabled:j})}),(0,l.jsx)(a.FormItem,{title:d.intl.string(d.t["6dGmCA"]),required:!0,children:(0,l.jsx)(a.TimeInput,{value:x.startDate,onChange:e=>{if(!!e.isValid())null==u||u(!0),t({...x,startDate:e})},hideValue:!m,disabled:j})})]}),p,null!=f&&null!=i&&(0,l.jsx)(o.Z,{onRecurrenceChange:i,startDate:f,recurrenceRule:h})]})}},195367:function(e,n,t){t.d(n,{Z:function(){return C}}),t(47120);var l=t(200651),i=t(192379),r=t(913527),a=t.n(r),s=t(481060),o=t(516129),d=t(813197),c=t(930180),u=t(46920),m=t(924301),x=t(236373),h=t(854698),g=t(405613),v=t(440371),j=t(765305),p=t(486324),f=t(388032),I=t(378816);function N(e){let{editBroadcastInfoData:n}=e,{broadcastInfo:t,broadcastToDirectoryChannels:i,setBroadcastToDirectoryChannels:r,canEveryoneRoleViewEvent:a}=n;return t.can_broadcast?(0,l.jsxs)(s.FormItem,{title:f.intl.string(f.t.BgAW29),className:I.formItem,children:[(0,l.jsx)(s.Tooltip,{text:(0,l.jsx)(s.Text,{className:I.broadcastInfoTooltip,variant:"text-sm/normal",children:f.intl.string(f.t.gTgUmZ)}),"aria-label":f.intl.string(f.t.gTgUmZ),shouldShow:!a,children:e=>(0,l.jsx)("div",{...e,children:(0,l.jsx)(s.Checkbox,{type:s.Checkbox.Types.INVERTED,disabled:!a,value:i,onChange:(e,n)=>r(n),children:(0,l.jsx)(s.Text,{variant:"text-md/normal",color:"interactive-active",children:f.intl.string(f.t["8GW68/"])})})})}),(0,l.jsx)(s.Text,{className:I.broadcastInfoDescription,variant:"text-xs/normal",color:"header-secondary",children:f.intl.string(f.t.V8Oq8P)})]}):null}function C(e){let{guildEvent:n,guildEventId:r,guildId:C,editBroadcastInfoData:E,error:S,validationErrorMessage:T,onChange:y,canSetFocus:b=!1}=e,{entityType:Z,channelId:_,description:R,name:k,image:A,scheduledEndTime:D,scheduledStartTime:L,recurrenceRule:B}=n,M=(0,c._d)(_),z=(0,c.K3)(_),U=null!=n&&(0,m.xt)(n),P=i.useMemo(()=>{let e=(0,h.v1)(n);return null!=e?e:{startDate:a()(L)}},[n,L]),[G,V]=i.useState(()=>(0,h.zi)(a()(L),B)),w=i.useRef(null);i.useEffect(()=>{if(b){var e;null===(e=w.current)||void 0===e||e.focus()}},[b]);let F=e=>{y({image:e})},O=(e,n)=>{if(null==e||void 0===n){F(null);return}(0,s.openModalLazy)(async()=>{let{default:i}=await Promise.all([t.e("70687"),t.e("48017"),t.e("40998")]).then(t.bind(t,850085));return t=>(0,l.jsx)(i,{imgURI:e,file:n,onCrop:F,uploadType:p.pC.SCHEDULED_EVENT_IMAGE,allowSkip:!0,...t})})};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:I.blockedUsersContainer,children:null!=_&&!U&&(M>0||z>0)&&(0,l.jsx)(u.mv,{channelId:_})}),(0,l.jsxs)("div",{className:I.form,children:[(0,l.jsxs)(s.FormItem,{title:f.intl.string(f.t["0HbEQ0"]),className:I.topicFormItem,required:!0,children:[(0,l.jsx)(s.TextInput,{className:I.textInput,onChange:e=>{y({name:e})},placeholder:f.intl.string(f.t["6/yarq"]),maxLength:j.p,value:k,autoComplete:"off",inputRef:w}),null!=S?(0,l.jsx)(s.Text,{color:"text-danger",variant:"text-xs/normal",className:I.warning,children:S.getAnyErrorMessage()}):null]}),(0,l.jsx)(v.Z,{className:I.formItem,onScheduleChange:e=>{let{startDate:n,endDate:t}=e,l={scheduledStartTime:null==n?void 0:n.toISOString(),scheduledEndTime:null==t?void 0:t.toISOString()};null!=n&&null!=D&&(null==t?void 0:t.isBefore(n))&&(l.scheduledEndTime=n.add(1,"hour").toISOString()),null!=n&&null!=G&&(l.recurrenceRule=(0,h.mF)(G,n)),y(l)},onRecurrenceChange:e=>{let n=P.startDate;if(null!=n)y({recurrenceRule:(0,h.mF)(e,n)}),V(e)},schedule:P,recurrenceRule:B,showEndDate:Z===j.WX.EXTERNAL,requireEndDate:Z===j.WX.EXTERNAL,disableStartDateTime:U,guildId:C}),null!=T?(0,l.jsx)(s.Text,{color:"text-danger",variant:"text-xs/normal",className:I.warning,children:T}):null,(0,l.jsx)(s.FormItem,{title:f.intl.string(f.t["+gRCCw"]),className:I.formItem,children:(0,l.jsx)(s.TextArea,{className:I.__invalid_descriptionInput,placeholder:f.intl.string(f.t["kWO/Ex"]),value:R,onChange:e=>{y({description:e})},maxLength:j.wm,autosize:!0})}),(0,l.jsxs)(s.FormItem,{title:f.intl.string(f.t.Ly121d),className:I.formItem,children:[(0,l.jsx)(s.Text,{variant:"text-xs/normal",color:"header-secondary",className:I.addImageHint,children:f.intl.string(f.t.B9C9bW)}),null!=A?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Z,{className:I.imagePreview,iconWrapperClassName:I.imagePreviewInner,image:A,makeURL:e=>{if(null==e)return null;if(null!=C){var t;return null!==(t=(0,g.Z)((0,x.Gb)(n,C,r)))&&void 0!==t?t:null}},onChange:O,hint:f.intl.string(f.t.G44Xmp),showRemoveButton:!1,enabled:!0}),(0,l.jsx)(s.Button,{size:s.Button.Sizes.SMALL,onClick:()=>F(null),children:f.intl.string(f.t.gmUvOz)})]}):(0,l.jsxs)(s.Button,{size:s.Button.Sizes.SMALL,children:[f.intl.string(f.t.vKCGYW),(0,l.jsx)(d.ZP,{onChange:O})]})]}),(0,l.jsx)(N,{editBroadcastInfoData:E})]})]})}},779250:function(e,n,t){t.r(n),t.d(n,{default:function(){return V}}),t(47120);var l,i,r=t(200651),a=t(192379),s=t(392711),o=t(442837),d=t(481060),c=t(447543),u=t(607070),m=t(745510),x=t(96698),h=t(313201),g=t(433775),v=t(984933),j=t(430824),p=t(971130),f=t(981888),I=t(924301),N=t(482241),C=t(951539),E=t(545165),S=t(236373),T=t(230900),y=t(854698),b=t(334877),Z=t(785468),_=t(377329),R=t(311166),k=t(744782),A=t(129526),D=t(765305),L=t(981631),B=t(388032),M=t(859312);let{INVITE_OPTIONS_7_DAYS:z,INVITE_OPTIONS_UNLIMITED:U}=p.ZP;function P(e){let{modal:n}=e,{createMultipleConfetti:t}=a.useContext(m.h);return a.useEffect(()=>{let e=null==n?void 0:n.getScrollerNode();if(null==e)return;let l=e.getBoundingClientRect();t({position:{type:"static-random",minValue:{x:l.left-100,y:l.top-100},maxValue:{x:l.left+100,y:l.top+100}},velocity:{type:"static-random",minValue:{x:-20,y:-20},maxValue:{x:-60,y:-60}}},80),t({position:{type:"static-random",minValue:{x:l.right-100,y:l.top-100},maxValue:{x:l.right+100,y:l.top+100}},velocity:{type:"static-random",minValue:{x:20,y:-20},maxValue:{x:60,y:-60}}},80)},[t,n]),null}function G(e){let{guildId:n,guildEvent:t,guildEventId:i,editBroadcastInfoData:c,isEdit:m,formErrors:g,transitionState:v,loading:j,error:p,onChange:f,onSave:N,onClose:C,createdEvent:E}=e,S=(0,h.Dt)(),T=a.useRef(t),y=!(0,s.isEqual)(T.current,t),A=a.useMemo(()=>[{slideId:0,label:B.intl.string(B.t["56QlKS"]),valid:null==g.entity,userErrorMessage:g.entity},{slideId:1,label:B.intl.string(B.t["w5/ntb"]),valid:null==g.schedule&&null==g.topic&&(!m||y),userErrorMessage:g.schedule},{slideId:2,label:B.intl.string(B.t["8aJzT0"]),valid:!0}],[g,m,y]),D=Object.keys(l).length,L=(0,I.xt)(t),z=e=>Math.max(0,Math.min(e,D-1)),[U,G]=a.useState(L?1:0),[V,w]=a.useState(!1),F=a.useMemo(()=>A.slice(0,U+1).map(e=>e.valid).every(Boolean),[A,U]),O=U>=A.length?3:A[z(U)].slideId,X=3===O;(0,b.l)(e=>e.onUpdateCanCloseModal)(X);let W=(0,o.e7)([u.Z],()=>u.Z.useReducedMotion),H=a.useRef(null),q=e=>{w(!1),G(z(e))};a.useEffect(()=>{null!=E&&q(3)},[null==E?void 0:E.id,q]);let Y=()=>{if(!!F)2===O?N():X?C():q(U+1)},K=()=>{q(U-1)},Q=B.intl.string(B.t.PDTjLC);return 2===O&&(Q=m?B.intl.string(B.t.e5VEcH):B.intl.string(B.t["60lJ0N"])),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(d.ModalRoot,{transitionState:v,"aria-labelledby":S,size:d.ModalSize.DYNAMIC,children:[!W&&X?(0,r.jsx)(P,{modal:H.current}):null,(0,r.jsxs)(d.ModalContent,{className:M.content,scrollerRef:H,children:[!X&&(0,r.jsx)(x.Z,{steps:A.map(e=>e.label),stepIndex:U,onClick:e=>{e<U?K():e>U&&Y()}}),(0,r.jsxs)(d.Slides,{activeSlide:O,width:440,onSlideReady:e=>{w(e===O)},children:[(0,r.jsx)(d.Slide,{id:0,children:(0,r.jsx)(Z.Z,{guildId:n,guildEvent:t,validationErrorMessage:g.entity,isSlideReady:V,onChange:f})}),(0,r.jsx)(d.Slide,{id:1,children:(0,r.jsx)(R.Z,{guildEvent:t,guildEventId:i,guildId:n,editBroadcastInfoData:c,onChange:f,error:p,validationErrorMessage:g.schedule,isSlideReady:V})}),(0,r.jsx)(d.Slide,{id:2,children:(0,r.jsx)(_.Z,{guildId:n,guildEvent:t,guildEventId:i,error:p})}),(0,r.jsx)(d.Slide,{id:3,children:(0,r.jsx)(k.Z,{onClose:C,event:E})})]})]}),!X&&(0,r.jsxs)(d.ModalFooter,{className:M.footer,children:[(0,r.jsxs)("div",{className:M.inline,children:[(0,r.jsx)(d.Button,{color:d.Button.Colors.PRIMARY,onClick:C,children:B.intl.string(B.t["ETE/oK"])}),(0,r.jsx)(d.Button,{onClick:Y,disabled:!F,className:M.button,submitting:j,children:Q})]}),0!==O&&(0,r.jsx)(d.Button,{look:d.Button.Looks.LINK,size:d.Button.Sizes.MIN,onClick:K,color:d.Button.Colors.LINK,children:B.intl.string(B.t["13/7kZ"])})]})]})})}function V(e){let{guildId:n,guildScheduledEventId:l,transitionState:i,onClose:s}=e,u=(0,o.e7)([j.Z],()=>j.Z.getGuild(n)),m=(0,o.e7)([I.ZP],()=>I.ZP.getGuildScheduledEvent(l),[l]),x=(0,o.e7)([v.ZP],()=>v.ZP.getDefaultChannel(n),[n]),h=(0,S.j$)(m,x),[p,b]=a.useState(h),[Z]=a.useState((0,S.Ql)(m)),[_,R]=a.useState(null),k=e=>{var n;let t=(0,C.so)(e),l=null!==(n=e.channel_id)&&void 0!==n?n:null==x?void 0:x.id;null!=l&&c.Z.createInvite(l,{max_age:z.value,max_uses:U.value},L.t4x.GUILD_EVENTS),t?R(e):s()},M=(0,g.Z)(u,null==m?void 0:m.id,p),[P,{loading:V,error:w}]=(0,f.Z)(async()=>{if(null!=_)return;let e={broadcastToDirectoryChannels:M.broadcastToDirectoryChannels};if(Z&&null!=l)return await N.Z.saveEvent(l,p,n,e),s();let t=await N.Z.createGuildEvent(p,n,e);return k(t.body),t}),F=a.useMemo(()=>(0,A.Z)(p,Z),[p,Z]);return(0,r.jsx)(G,{guildId:n,guildEvent:p,guildEventId:l,editBroadcastInfoData:M,isEdit:Z,formErrors:F,transitionState:i,loading:V,error:w,onChange:e=>{if(null!=e.entityType){var t;let l=(0,T.xC)(e.entityType),[i]=(0,E.SU)(n,l);e.channelId=null!==(t=null==i?void 0:i.id)&&void 0!==t?t:null,e.entityType!==D.WX.EXTERNAL&&p.entityType===D.WX.EXTERNAL&&(e.entityMetadata=null)}b(n=>({...n,...e}))},onSave:()=>{null!=p.recurrenceRule&&Z&&(0,y.BP)(m,p)?(0,d.openModalLazy)(async()=>{let{ConfirmModal:e}=await Promise.resolve().then(t.bind(t,481060));return n=>(0,r.jsxs)(e,{...n,header:B.intl.string(B.t.BW1Qoq),confirmText:B.intl.string(B.t.e5VEcH),cancelText:B.intl.string(B.t.oEAioK),onConfirm:P,children:[(0,r.jsx)(d.Text,{variant:"text-md/normal",children:B.intl.string(B.t.aNCYam)}),(0,r.jsx)("br",{}),(0,r.jsx)(d.Text,{variant:"text-md/normal",children:B.intl.format(B.t.RWBa5e,{})})]})}):P()},onClose:s,createdEvent:_})}(i=l||(l={}))[i.ENTITY=0]="ENTITY",i[i.SETTINGS=1]="SETTINGS",i[i.PREVIEW=2]="PREVIEW",i[i.SUCCESS=3]="SUCCESS"},785468:function(e,n,t){t.d(n,{Z:function(){return B}}),t(47120);var l=t(200651),i=t(192379),r=t(913527),a=t.n(r),s=t(442837),o=t(481060),d=t(933557),c=t(592125),u=t(430824),m=t(496675),x=t(699516),h=t(594174),g=t(924301),v=t(518756),j=t(545165),p=t(77810),f=t(274311),I=t(230900),N=t(366815),C=t(765305),E=t(981631),S=t(388032),T=t(601335);let y=e=>e===C.WX.EXTERNAL,b=(e,n)=>{let t=c.Z.getChannel(e);if(null==t)return null;let i=t.type===E.d4z.GUILD_STAGE_VOICE,r=(0,f.Q)(t,n),a=r?o.VoiceNormalIcon:o.VoiceLockIcon,s=r?o.StageIcon:o.StageLockIcon;return(0,l.jsx)(i?s:a,{color:"currentColor",size:"md",className:T.channelOptionIcon})},Z=e=>{let{guildId:n,channelType:t,channel:i,onSelectChannel:r,disabled:a,entityType:s}=e,c=t===E.d4z.GUILD_STAGE_VOICE,u=(0,f.Q)(i,s),m=(0,j.sR)(n,t);return(0,l.jsxs)(o.FormItem,{title:c?S.intl.string(S.t.S7GjDw):S.intl.string(S.t["7RYWCA"]),className:T.options,disabled:a,required:!0,children:[(0,l.jsx)(o.SearchableSelect,{value:null==i?void 0:i.id,options:m.map(e=>({value:e.id,label:(0,d.F6)(e,h.default,x.Z,!0)})),onChange:e=>{let n=m.find(n=>n.id===e);r(null!=n?n:void 0)},renderOptionPrefix:e=>b(null==e?void 0:e.value,s),isDisabled:a}),!u&&(0,l.jsx)(o.Text,{color:"header-secondary",className:T.channelPrivate,variant:"text-sm/normal",children:S.intl.string(S.t.F3bDaW)})]})};function _(e,n,t,l){return n?{disabled:!0,tooltipText:S.intl.string(S.t.yutP5e)}:t?0===l&&e!==C.WX.EXTERNAL?{disabled:!0,tooltipText:S.intl.string(S.t["DkY+cH"])}:{disabled:!1,tooltipText:null}:{disabled:!0,tooltipText:S.intl.string(S.t.HeF1kZ)}}let R=e=>n=>{e({entityMetadata:{location:n}})},k=e=>n=>{var t;e({channelId:null!==(t=null==n?void 0:n.id)&&void 0!==t?t:null})},A=(e,n)=>t=>{let{value:l}=t,i={entityType:l,scheduledEndTime:void 0};if(y(l)){var r;let e=(null!==(r=a()(n.scheduledStartTime))&&void 0!==r?r:a()()).add(2,"hour");i.scheduledEndTime=e.toISOString()}e(i)};function D(e){let{guildId:n,guildEvent:t,onChange:r,isFocusReady:a}=e,{entityType:d,channelId:u}=t,m=(0,s.e7)([c.Z],()=>c.Z.getChannel(u),[u]),x=i.useRef(null);i.useEffect(()=>{if(a&&y(d)){var e;null===(e=x.current)||void 0===e||e.focus()}},[a,d]);let h=R(r),v=k(r),j=(0,I.xV)(t),p=(0,I.xC)(d),f=(0,g.xt)(t);return null==d||d===C.WX.NONE?null:y(d)?(0,l.jsx)(o.FormItem,{title:S.intl.string(S.t.yx785O),className:T.options,required:!0,children:(0,l.jsx)(o.TextInput,{className:T.__invalid_textInput,onChange:h,placeholder:S.intl.string(S.t.mkCMiY),maxLength:C.gG,value:null!=j?j:"",inputRef:x})}):null==p?null:(0,l.jsx)(Z,{guildId:n,channelType:p,onSelectChannel:v,channel:m,entityType:d,disabled:f})}function L(e){let{guildId:n,guildEvent:t,onChange:r}=e,a=(0,s.e7)([u.Z],()=>u.Z.getGuild(n),[n]),d=(0,v.Z)(n,void 0),c=(0,v.Z)(n,E.d4z.GUILD_VOICE),m=(0,v.Z)(n,E.d4z.GUILD_STAGE_VOICE),x=(0,j.sR)(n,E.d4z.GUILD_VOICE),h=(0,p.q)(a),f=null==a?void 0:a.hasFeature(E.oNc.COMMUNITY),I=(0,g.xt)(t),N=A(r,t),y=i.useMemo(()=>{let e=[{name:S.intl.string(S.t.BVZqJi),value:C.WX.VOICE,desc:S.intl.string(S.t["EV//4e"]),icon:o.VoiceNormalIcon,..._(C.WX.VOICE,I,c,x.length)},{name:S.intl.string(S.t.w7ipb2),value:C.WX.EXTERNAL,desc:S.intl.string(S.t.DYxrHh),icon:o.LocationIcon,..._(C.WX.EXTERNAL,I,d,0)}];return f?[{name:S.intl.string(S.t.EErMzM),value:C.WX.STAGE_INSTANCE,desc:S.intl.string(S.t.LgALpq),icon:o.StageIcon,..._(C.WX.STAGE_INSTANCE,I,m,h.length)},...e]:e},[d,c,m,f,x.length,h.length,I]);return(0,l.jsx)(o.RadioGroup,{value:t.entityType,options:y,onChange:N,className:T.options})}function B(e){let{guildId:n,guildEvent:i,validationErrorMessage:r,onChange:a,isSlideReady:d=!1}=e,{entityType:c}=i,x=(0,s.e7)([u.Z],()=>u.Z.getGuild(n),[n]),h=(0,p.q)(x),g=(0,s.e7)([m.Z],()=>m.Z.can(E.Plq.MANAGE_CHANNELS,x)),v=null==x?void 0:x.hasFeature(E.oNc.COMMUNITY),j=A(a,i),f=v&&!y(c)&&0===h.length&&g&&null!=c;return(0,l.jsxs)("div",{className:T.container,children:[(0,l.jsx)(o.Heading,{variant:"heading-xl/semibold",className:T.header,children:S.intl.string(S.t["DC+Qm5"])}),(0,l.jsx)(o.Text,{color:"header-secondary",className:T.text,variant:"text-sm/normal",children:S.intl.string(S.t.IwmXLC)}),(0,l.jsx)(L,{guildId:n,guildEvent:i,onChange:a}),(0,l.jsx)(D,{guildId:n,guildEvent:i,isFocusReady:d,onChange:a}),f?(0,l.jsx)(N.Z,{onClick:()=>{j({value:C.WX.STAGE_INSTANCE,name:S.intl.string(S.t.EErMzM)}),(0,o.openModalLazy)(async()=>{let{default:e}=await Promise.all([t.e("90508"),t.e("7590"),t.e("80284"),t.e("45094"),t.e("2958")]).then(t.bind(t,218613));return t=>(0,l.jsx)(e,{...t,channelType:E.d4z.GUILD_STAGE_VOICE,guildId:n})})}}):null]})}},377329:function(e,n,t){t.d(n,{Z:function(){return p}});var l=t(200651),i=t(192379),r=t(442837),a=t(481060),s=t(471445),o=t(41776),d=t(592125),c=t(430824),u=t(594174),m=t(236373),x=t(230900),h=t(405613),g=t(460838),v=t(388032),j=t(959320);function p(e){var n,t,p;let{guildId:f,guildEvent:I,guildEventId:N,error:C}=e,E=i.useMemo(()=>(0,m.Gb)(I,f),[I,f]),{channel_id:S,name:T,image:y,description:b}=E,Z=(0,r.e7)([d.Z],()=>d.Z.getChannel(S),[S]),_=(0,r.e7)([c.Z],()=>c.Z.getGuild(f),[f]),R=(0,x.cS)(E),k=(0,r.e7)([u.default],()=>null!=I.creatorId?u.default.getUser(I.creatorId):u.default.getCurrentUser(),[I.creatorId]),A=(0,r.e7)([o.Z],()=>o.Z.isLurking(f),[f]),D=(0,s.KS)(Z,_);return(0,l.jsxs)("div",{className:j.content,children:[(0,l.jsx)(g.Z,{className:j.previewCard,guild:_,channel:Z,location:null!=R?R:void 0,creator:k,name:T,description:b,imageSource:(t=(0,m.Gb)(I,f,N),null==(p=y)&&null==t.image?null:null!=p&&/^data:/.test(p)?p:(0,h.Z)(t)),isActive:!1,isUserLurking:A,speakers:[],speakerCount:0,rsvped:!0,guildEvent:E,eventPreview:E}),(0,l.jsxs)("div",{className:j.textContainer,children:[(0,l.jsx)(a.Heading,{variant:"heading-xl/semibold",children:v.intl.string(v.t.yBsFEx)}),(0,l.jsx)(a.Text,{color:"header-secondary",variant:"text-md/normal",className:j.subheader,children:null!=location?v.intl.string(v.t.KDPFi4):v.intl.format(v.t.f55NX1,{channelName:null!==(n=null==Z?void 0:Z.name)&&void 0!==n?n:"",channelHook:()=>{var e;return(0,l.jsxs)("div",{className:j.channelName,children:[null!=D?(0,l.jsx)(D,{size:"custom",color:"currentColor",width:20,height:20,className:j.icon}):(0,l.jsx)(a.LocationIcon,{size:"custom",color:"currentColor",height:18,width:18,className:j.locationIcon}),null!==(e=null==Z?void 0:Z.name)&&void 0!==e?e:R]})}})}),null!=C&&(0,l.jsx)(a.Text,{color:"text-danger",variant:"text-xs/normal",className:j.subheader,children:C.getAnyErrorMessage()})]})]})}},311166:function(e,n,t){t.d(n,{Z:function(){return o}});var l=t(200651);t(192379);var i=t(481060),r=t(195367),a=t(388032),s=t(115672);function o(e){let{isSlideReady:n,...t}=e;return(0,l.jsxs)("div",{className:s.__invalid_slideContainer,children:[(0,l.jsxs)("div",{className:s.header,children:[(0,l.jsx)(i.Heading,{variant:"heading-xl/semibold",children:a.intl.string(a.t.GG6vbm)}),(0,l.jsx)(i.Text,{color:"header-secondary",className:s.text,variant:"text-sm/normal",children:a.intl.string(a.t.q5lgwc)})]}),(0,l.jsx)(r.Z,{...t,canSetFocus:n})]})}},744782:function(e,n,t){t.d(n,{Z:function(){return C}});var l=t(200651);t(192379);var i=t(442837),r=t(481060),a=t(264229),s=t(366980),o=t(603236),d=t(939863),c=t(984933),u=t(430824),m=t(341165),x=t(626135),h=t(572004),g=t(971130),v=t(230900),j=t(981631),p=t(388032),f=t(880083);let{INVITE_OPTIONS_7_DAYS:I,INVITE_OPTIONS_UNLIMITED:N}=g.ZP;function C(e){var n,t,C;let{onClose:E,event:S}=e,T=null==S?void 0:S.guild_id,y=(0,i.e7)([c.ZP],()=>{var e;return null!=T?null===(e=c.ZP.getDefaultChannel(T))||void 0===e?void 0:e.id:null},[T]),b=(0,i.e7)([u.Z],()=>u.Z.getGuild(T),[T]),{channel_id:Z,id:_}=null!=S?S:{},R=(0,i.e7)([m.Z],()=>{let e=null!=Z?Z:y;return null==e?null:m.Z.getInvite(e)},[Z,y]);if(null==S)return E(),null;let k=null!==(n=null==b?void 0:b.vanityURLCode)&&void 0!==n?n:null==R?void 0:R.code,A=null!=k?(0,a.tV)({baseCode:k,guildScheduledEventId:_}):null,D=null==A||null==R,L=(0,s.Z)(null!=A?A:""),B=null!==(t=null==R?void 0:R.maxAge)&&void 0!==t?t:I.value,M=null!==(C=null==R?void 0:R.maxUses)&&void 0!==C?C:N.value;return(0,l.jsxs)("div",{className:f.container,children:[(0,l.jsx)(r.Clickable,{onClick:E,className:f.close,"aria-label":p.intl.string(p.t.cpT0Cg),children:(0,l.jsx)(r.XSmallIcon,{size:"md",color:"currentColor"})}),(0,l.jsx)(d.Z,{children:(0,l.jsx)("div",{className:f.iconContainer,children:(0,l.jsx)(r.CalendarIcon,{size:"custom",color:"currentColor",height:30,width:30,className:f.icon})})}),(0,l.jsx)(r.Heading,{variant:"heading-xl/semibold",className:f.header,children:p.intl.string(p.t.UzNv7u)}),(0,l.jsx)(r.Text,{variant:"text-md/normal",color:"header-secondary",className:f.body,children:p.intl.string(p.t.UetJjI)}),(0,l.jsxs)("div",{className:f.invite,children:[(0,l.jsx)(o.S,{value:L,autoFocus:!1,onCopy:e=>{if(D)return;(0,h.JG)(e);let n=(0,v.xC)(S.entity_type);x.default.track(j.rMx.COPY_INSTANT_INVITE,{server:S.guild_id,channel:Z,channel_type:n,location:j.t4x.GUILD_EVENTS,code:R.code,guild_scheduled_event_id:null==S?void 0:S.id})}}),(null==b?void 0:b.vanityURLCode)==null&&(0,l.jsx)(r.Text,{variant:"text-xs/normal",color:"header-secondary",className:f.inviteDetail,children:(0,g.Vg)(B,M)})]})]})}},366815:function(e,n,t){t.d(n,{Z:function(){return m}});var l=t(200651);t(192379);var i=t(442837),r=t(481060),a=t(536442),s=t(142497),o=t(388032),d=t(142863),c=t(137707);let u=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.Text,{color:"header-primary",variant:"text-xs/normal",className:d.inlineText,children:o.intl.string(o.t.GcZzp6)}),(0,l.jsx)(r.Text,{color:"header-primary",variant:"text-xs/normal",className:d.inlineText,children:o.intl.string(o.t["/NEGrK"])}),(0,l.jsx)(r.Text,{color:"header-primary",variant:"text-xs/normal",className:d.inlineText,children:o.intl.string(o.t.eUbuHB)}),(0,l.jsx)(r.Text,{color:"header-primary",variant:"text-xs/normal",className:d.inlineText,children:o.intl.string(o.t.sCAZeH)})]});function m(e){let{onClick:n}=e;return(0,i.e7)([a.qc],()=>!a.qc.hasHotspot(a.v6.STAGE_CHANNEL_UPSELL))?null:(0,l.jsxs)("div",{className:d.container,children:[(0,l.jsxs)("div",{className:d.content,children:[(0,l.jsxs)("div",{className:d.textContainer,children:[(0,l.jsx)(r.Heading,{variant:"heading-md/semibold",children:o.intl.string(o.t.Sx8Ezs)}),(0,l.jsx)(r.Text,{color:"header-secondary",variant:"text-xs/normal",className:d.descriptionText,children:o.intl.string(o.t.JUzPho)}),(0,l.jsx)(r.Text,{color:"header-secondary",variant:"text-xs/normal",children:o.intl.format(o.t.Vh7rPz,{suggestionsHook:u})})]}),(0,l.jsx)("div",{className:d.image,children:(0,l.jsx)("img",{src:c,alt:o.intl.string(o.t["uIm/n5"])})})]}),(0,l.jsxs)("div",{className:d.footer,children:[(0,l.jsx)(r.Button,{onClick:n,color:r.Button.Colors.PRIMARY,size:r.Button.Sizes.SMALL,className:d.button,children:o.intl.string(o.t["X/3SyM"])}),(0,l.jsx)(r.Button,{onClick:()=>{s.Kw(a.v6.STAGE_CHANNEL_UPSELL)},color:r.Button.Colors.TRANSPARENT,size:r.Button.Sizes.SMALL,look:r.ButtonLooks.LINK,children:o.intl.string(o.t["5E9SBw"])})]})]})}},129526:function(e,n,t){t.d(n,{Z:function(){return d}});var l=t(913527),i=t.n(l),r=t(230900),a=t(854698),s=t(765305),o=t(388032);function d(e,n){return{entity:function(e){let{entityType:n,channelId:t}=e,l=(0,r.xV)(e);return null==n||n===s.WX.NONE?"An event type must be specified.":(null==l||""===l.trim())&&null==t?"Either a location or channel must be specified.":void 0}(e),schedule:function(e,n){let t=(0,a.v1)(e),{entityType:l}=e;if(null==t||(null==t?void 0:t.startDate)==null)return o.intl.string(o.t.M73YyM);let{startDate:r,endDate:d}=t;return l===s.WX.EXTERNAL&&null==d?o.intl.string(o.t["H16p//"]):!n&&r.isBefore(i()())?o.intl.string(o.t.AXR5Sk):null!=d&&null!=r&&d.isBefore(r)?o.intl.string(o.t.LpjF4O):null!=d&&d.isBefore(i()())?o.intl.string(o.t.ViDcm5):void 0}(e,n),topic:function(e){let{name:n}=e;return null==n||""===n.trim()?"Topic must be specified.":void 0}(e)}}},516129:function(e,n,t){t.d(n,{Z:function(){return g}});var l=t(200651);t(192379);var i=t(120356),r=t.n(i),a=t(780384),s=t(481060),o=t(410030),d=t(44315),c=t(208567),u=t(981631),m=t(351079);let x=u.Ilk.PRIMARY_400,h=u.Ilk.PRIMARY_500;function g(e){let{enabled:n,imageClassName:t,iconWrapperClassName:i,...u}=e,g=(0,o.ZP)(),v=(0,a.wj)(g)?x:h,j={height:18,width:18,color:(0,d.Lq)(v)};return(0,l.jsx)(c.Z,{className:r()({[m.avatarUploader]:n,[m.avatarUploaderDisabled]:!n}),imageClassName:r()(t,m.avatarUploaderInnerSquare,{[m.avatarUploaderInnerSquareDisabled]:!n}),icon:null!=u.image&&""!==u.image?(0,l.jsx)(s.PencilIcon,{size:"custom",...j}):(0,l.jsx)(s.ImagePlusIcon,{size:"custom",...j}),iconClassName:r()(m.avatarUploadIcon,m.hideDefaultIcon),iconWrapperClassName:i,showIcon:!0,showIconDisabled:!0,hideSize:!0,...u})}},208567:function(e,n,t){t.d(n,{S:function(){return j}}),t(47120);var l,i=t(200651),r=t(192379),a=t(120356),s=t.n(a),o=t(512722),d=t.n(o),c=t(481060),u=t(624138),m=t(813197),x=t(981631),h=t(388032),g=t(640041);function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function j(e){let{className:n,icon:t=null}=e;return(0,i.jsx)(c.ThemeProvider,{theme:x.BRd.LIGHT,children:e=>(0,i.jsx)("div",{className:s()(g.imageUploaderIcon,n,e),children:t})})}class p extends(l=r.PureComponent){handleExternalFileChange(e){d()(null!=this.inputRef.current,"ImageInputRef asked to handleExternalFileChange when not mounted"),this.inputRef.current.handleFileChange(e)}render(){var e;let n,t,l,r;let{image:a,hint:o,name:d,makeURL:v,disabled:p,onChange:f,showIcon:I,showIconDisabled:N,className:C,imageClassName:E,iconClassName:S,iconWrapperClassName:T,icon:y,hideSize:b,imageStyle:Z,showRemoveButton:_,maxFileSizeBytes:R,onFileSizeError:k,onOpenImageSelectModal:A,"aria-label":D}=this.props;if(null!=(n=null!=a&&/^data:/.test(a)?a:v(a))?t='url("'.concat(n,'")'):null!=d&&(l=(0,i.jsx)(c.Heading,{variant:"heading-xxl/normal",color:"always-white",className:g.imageUploaderAcronym,children:(0,u.Zg)(d)})),p)return(0,i.jsx)("div",{className:s()(g.imageUploader,g.disabled,C),children:(0,i.jsxs)("div",{className:s()(g.imageUploaderInner,E),style:{...Z,backgroundImage:t},children:[l,N&&(0,i.jsx)("div",{className:s()(g.imageUploaderIcon,g.imageUploaderIconDisabled,S),children:y})]})});null!=a?r=(0,i.jsx)(c.Anchor,{className:g.removeButton,onClick:this.handleRemove,children:h.intl.string(h.t.N86XcH)}):!b&&(r=(0,i.jsx)("small",{className:g.sizeInfo,children:h.intl.format(h.t.AH4c7e,{size:x.IXf})}));let L=null!==(e=null!=D?D:o)&&void 0!==e?e:h.intl.string(h.t["Ge+94+"]);return(0,i.jsxs)("div",{className:s()(g.imageUploader,C),children:[(0,i.jsx)(c.FocusRing,{within:!0,children:(0,i.jsxs)("div",{className:I?s()(g.imageUploaderIconWrapper,T):void 0,children:[(0,i.jsxs)("div",{className:s()(g.imageUploaderInner,E),style:{...Z,backgroundImage:t},children:[(0,i.jsx)("span",{"aria-hidden":!0,children:l}),null!=A?(0,i.jsx)(c.Clickable,{className:g.imageUploaderFileInput,"aria-label":L,onClick:A}):(0,i.jsx)(m.ZP,{ref:this.inputRef,onChange:f,className:g.imageUploaderFileInput,"aria-label":L,tabIndex:0,maxFileSizeBytes:R,onFileSizeError:k})]}),null!=o&&(0,i.jsx)("div",{className:g.imageUploaderHint,"aria-hidden":"true",children:o}),I&&(0,i.jsx)(j,{className:S,icon:y})]})}),_?r:null]})}constructor(...e){super(...e),v(this,"inputRef",r.createRef()),v(this,"handleRemove",()=>{this.props.onChange(null)})}}v(p,"defaultProps",{name:"",makeURL:e=>e,disabled:!1,showIcon:!1,hideSize:!1,showRemoveButton:!0,maxFileSizeBytes:1/0,icon:null}),n.Z=p},603236:function(e,n,t){t.d(n,{I:function(){return E},S:function(){return C}});var l=t(200651),i=t(192379),r=t(120356),a=t.n(r),s=t(533800),o=t(442837),d=t(481060),c=t(484614),u=t(914010),m=t(246946),x=t(626135),h=t(630388),g=t(971130),v=t(530436),j=t(245335),p=t(981631),f=t(388032),I=t(755527),N=t(232186);let C=o.ZP.connectStores([m.Z],()=>({hideValue:m.Z.hideInstantInvites}))(e=>{let{value:n,autoFocus:t,hideValue:i,onCopy:r,disabled:a}=e;return(0,l.jsx)(c.Z,{value:i?f.intl.string(f.t["6HzNgY"]):n,buttonColor:d.Button.Colors.BRAND,onCopy:r,autoFocus:t,disabled:a})}),E=e=>{let{guild:n,noInvitesAvailable:t,showFriends:r,onClose:o,modalState:c,isGuestInviteCreationToggleEnabled:m,inviteFlags:E,setInviteFlags:S,showGuestInviteToggleForCurrentVoiceChannel:T,copyValue:y,changePage:b,inviteChannel:Z,source:_,code:R,guildScheduledEvent:k,disabled:A}=e,{maxAge:D,maxUses:L,networkError:B,showVanityURL:M}=c,z=i.useCallback(()=>{x.default.track(p.rMx.COPY_INSTANT_INVITE,{server:u.Z.getGuildId(),channel:null==Z?void 0:Z.id,channel_type:null==Z?void 0:Z.type,location:_,code:R,guild_scheduled_event_id:null==k?void 0:k.id})},[Z,_,R,k]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(C,{value:y,autoFocus:r,onCopy:z,disabled:A}),m?(0,l.jsx)("div",{className:I.temporaryMembershipContainerBackground,children:(0,l.jsx)(d.FormSwitch,{className:I.temporaryMembershipContainer,value:(0,h.yE)(E,s.$.IS_GUEST_INVITE),onChange:e=>S((0,h.mB)(E,s.$.IS_GUEST_INVITE,e)),note:f.intl.string(f.t["/FeTKy"]),disabled:A,hideBorder:!0,children:T?f.intl.string(f.t.BPL98f):f.intl.string(f.t["2snqsL"])})}):null,t||M?null:(0,l.jsxs)(d.Text,{variant:"text-xs/normal",className:a()(N.marginTop8,I.footerText),children:[(0,g.Vg)(D,L)," ",r?(0,l.jsx)(d.Anchor,{onClick:()=>b(j.RV.SETTINGS),children:f.intl.string(f.t.VNe8Pz)}):null]}),!t&&r&&M?(0,l.jsxs)(d.Text,{variant:"text-xs/normal",className:a()(N.marginTop8,I.footerText),children:[f.intl.string(f.t["0M2U9/"])," "]}):null,null!=B?(0,l.jsx)(v.W,{guild:n,error:B,onClose:o}):null]})}},530436:function(e,n,t){t.d(n,{W:function(){return u}});var l=t(200651),i=t(192379),r=t(481060),a=t(434404),s=t(496675),o=t(981631),d=t(388032),c=t(755527);function u(e){let{guild:n,error:t,onClose:u}=e,m=n.id,x=i.useCallback(()=>{u(),a.Z.open(m,o.pNK.INSTANT_INVITES)},[m,u]),h=i.useCallback(e=>(0,l.jsx)(r.Clickable,{className:c.errorLink,onClick:x,children:(0,l.jsx)(r.Text,{variant:"text-xs/normal",color:"text-link",tag:"span",children:e})}),[x]),g=i.useCallback(e=>(0,l.jsx)(r.Anchor,{href:o.EYA.INVITES_HELP,target:"_blank",children:(0,l.jsx)(r.Text,{variant:"text-xs/normal",color:"text-link",tag:"span",children:e})}),[]),v=t.code!==o.evJ.TOO_MANY_INVITES?t.getAnyErrorMessage():s.Z.can(o.Plq.MANAGE_GUILD,n)?d.intl.format(d.t["H/RUY2"],{inviteListHook:h,inviteHelpHook:g}):d.intl.string(d.t["/FxH6O"]);return(0,l.jsx)(r.Text,{className:c.errorMessage,variant:"text-xs/normal",color:"text-danger",children:v})}},46920:function(e,n,t){t.d(n,{Ie:function(){return f},mv:function(){return j}}),t(47120);var l=t(200651);t(192379);var i=t(442837),r=t(692547),a=t(481060),s=t(239091),o=t(584511),d=t(118012),c=t(922611),u=t(699516),m=t(51144),x=t(88751),h=t(930180),g=t(388032),v=t(834110);let j=e=>{let{channelId:n}=e,t=(0,h._d)(n);return(0,c.Do)({location:"blocked-users-notice"})?(0,l.jsx)(p,{channelId:n}):0===t?null:(0,l.jsxs)("div",{className:v.blockedNotice,children:[(0,l.jsx)(a.DenyIcon,{size:"lg",className:v.__invalid_blockedIcon,color:r.Z.unsafe_rawColors.RED_400.css}),(0,l.jsx)(a.Text,{variant:"text-xs/normal",color:"header-secondary",children:g.intl.format(g.t["6Tcdt7"],{number:t})}),(0,l.jsx)(a.Clickable,{className:v.blockedButton,onClick:e=>{(0,s.vq)(e,e=>(0,l.jsx)(I,{...e,channelId:n}),{position:"left",align:"bottom"})},children:g.intl.string(g.t.rUEjBQ)})]})},p=e=>{let{channelId:n}=e,t=(0,h._d)(n),i=(0,h.K3)(n);if(0===t&&0===i)return null;let o=e=>{(0,s.vq)(e,e=>(0,l.jsx)(I,{...e,channelId:n}),{position:"left",align:"bottom"})};return t>0&&i>0?(0,l.jsxs)("div",{className:v.blockedNotice,children:[(0,l.jsx)(a.DenyIcon,{size:"lg",color:r.Z.unsafe_rawColors.RED_400.css}),(0,l.jsx)(a.Text,{variant:"text-xs/normal",color:"header-secondary",children:g.intl.string(g.t["P/KFX1"])}),(0,l.jsx)(a.Clickable,{className:v.blockedButton,onClick:o,children:g.intl.string(g.t.rUEjBQ)})]}):i>0?(0,l.jsxs)("div",{className:v.blockedNotice,children:[(0,l.jsx)(a.EyeSlashIcon,{size:"lg"}),(0,l.jsx)(a.Text,{variant:"text-xs/normal",color:"header-secondary",children:g.intl.format(g.t.Ri3o39,{number:i})}),(0,l.jsx)(a.Clickable,{className:v.blockedButton,onClick:o,children:g.intl.string(g.t.rUEjBQ)})]}):(0,l.jsxs)("div",{className:v.blockedNotice,children:[(0,l.jsx)(a.DenyIcon,{size:"lg",color:r.Z.unsafe_rawColors.RED_400.css}),(0,l.jsx)(a.Text,{variant:"text-xs/normal",color:"header-secondary",children:g.intl.format(g.t["6Tcdt7"],{number:t})}),(0,l.jsx)(a.Clickable,{className:v.blockedButton,onClick:o,children:g.intl.string(g.t.rUEjBQ)})]})},f=e=>{let{user:n,showStatus:t,speaker:r,channelId:s}=e,c=(0,i.e7)([x.ZP],()=>x.ZP.isModerator(n.id,s)),h=(0,i.e7)([u.Z],()=>u.Z.isBlocked(n.id)),j=null;return t&&(j=r?g.intl.string(g.t.LqMmGx):c?g.intl.string(g.t.GMZqSk):g.intl.string(g.t.suRAp6)),(0,l.jsxs)("div",{className:v.user,children:[(0,l.jsx)(o.Z,{src:n.getAvatarURL(null,32),size:a.AvatarSizes.SIZE_32,muted:!1,deafen:!1,speaking:!1,ringing:!1,renderIcon:r?()=>(0,l.jsx)(a.MicrophoneIcon,{size:"md",color:"currentColor",className:v.icon}):null},n.id),(0,l.jsxs)("div",{className:v.userInfo,children:[(0,l.jsxs)("div",{className:v.username,children:[(0,l.jsx)(d.Z,{size:t?d.Z.Sizes.SIZE_16:d.Z.Sizes.SIZE_14,children:m.ZP.getName(n)}),(0,l.jsx)(d.Z,{size:t?d.Z.Sizes.SIZE_16:d.Z.Sizes.SIZE_14,color:d.Z.Colors.HEADER_SECONDARY,children:"#".concat(n.discriminator)})]}),(0,l.jsxs)("div",{className:v.username,children:[(0,l.jsx)(a.Text,{variant:"text-xs/normal",color:h?"text-danger":"text-normal",children:h?g.intl.string(g.t["4bDptL"]):g.intl.string(g.t.tFY5ZW)}),(0,l.jsxs)(a.Text,{variant:"text-xs/normal",color:"text-muted",children:["| ",j]})]})]})]})},I=e=>{let{channelId:n}=e,t=(0,h.z)(n),i=(0,h.bA)(n);return(0,l.jsx)(a.Scroller,{className:v.container,children:[...t,...i].map(e=>{let{user:t}=e;return(0,l.jsx)(f,{user:t,channelId:n},t.id)})})}}}]);
//# sourceMappingURL=e4ba630977687f03dd4b.js.map