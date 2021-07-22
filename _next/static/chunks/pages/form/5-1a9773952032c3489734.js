(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[671],{6729:function(e,r,n){"use strict";n.d(r,{NJ:function(){return O}});var t=n(4577),i=n(639),l=n(63),a=n(2326),o=n(5284),s=n(9676),c=n(227),u=n(4461),d=n(658),f=n(3808),h=n(8500),p=n(2947),v=n(7294);function m(){return(m=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function b(e,r){if(null==e)return{};var n,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}var[y,O]=(0,h.k)({strict:!1,name:"FormControlContext"});var g=(0,l.G)(((e,r)=>{var n=(0,a.j)("Form",e),l=function(e){var{id:r,isRequired:n,isInvalid:l,isDisabled:a,isReadOnly:o}=e,s=b(e,["id","isRequired","isInvalid","isDisabled","isReadOnly"]),c=(0,t.Me)(),f=r||"field-"+c,h=f+"-label",y=f+"-feedback",O=f+"-helptext",[g,x]=v.useState(!1),[j,k]=v.useState(!1),[P,_]=(0,i.k)(),E=v.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),m({id:O},e,{ref:(0,p.l)(r,(e=>{e&&k(!0)}))})}),[O]),w=v.useCallback((function(e,r){var n,t;return void 0===e&&(e={}),void 0===r&&(r=null),m({},e,{ref:r,"data-focus":(0,u.PB)(P),"data-disabled":(0,u.PB)(a),"data-invalid":(0,u.PB)(l),"data-readonly":(0,u.PB)(o),id:null!=(n=e.id)?n:h,htmlFor:null!=(t=e.htmlFor)?t:f})}),[f,a,P,l,o,h]),C=v.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),m({id:y},e,{ref:(0,p.l)(r,(e=>{e&&x(!0)})),"aria-live":"polite"})}),[y]),N=v.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),m({},e,s,{ref:r,role:"group"})}),[s]),R=v.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),m({},e,{ref:r,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]),T=v.useCallback((()=>{(0,d.A4)(_.on)}),[_]);return{isRequired:!!n,isInvalid:!!l,isReadOnly:!!o,isDisabled:!!a,isFocused:!!P,onFocus:T,onBlur:_.off,hasFeedbackText:g,setHasFeedbackText:x,hasHelpText:j,setHasHelpText:k,id:f,labelId:h,feedbackId:y,helpTextId:O,htmlProps:s,getHelpTextProps:E,getErrorMessageProps:C,getRootProps:N,getLabelProps:w,getRequiredIndicatorProps:R}}((0,o.Lr)(e)),{getRootProps:f}=l,h=b(l,["getRootProps","htmlProps"]),O=(0,u.cx)("chakra-form-control",e.className),g=v.useMemo((()=>h),[h]);return v.createElement(y,{value:g},v.createElement(s.Fo,{value:n},v.createElement(c.m$.div,m({},f({},r),{className:O,__css:{width:"100%",position:"relative"}}))))}));f.Ts&&(g.displayName="FormControl");var x=(0,l.G)(((e,r)=>{var n=O(),t=(0,s.yK)(),i=(0,u.cx)("chakra-form__helper-text",e.className);return v.createElement(c.m$.div,m({},null==n?void 0:n.getHelpTextProps(e,r),{__css:t.helperText,className:i}))}));f.Ts&&(x.displayName="FormHelperText")},2202:function(e,r,n){"use strict";n.d(r,{Y:function(){return s}});var t=n(4461),i=n(658),l=n(6729);function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function o(e,r){if(null==e)return{};var n,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}function s(e){var r=function(e){var r,n,t,s=(0,l.NJ)(),{id:c,disabled:u,readOnly:d,required:f,isRequired:h,isInvalid:p,isReadOnly:v,isDisabled:m,onFocus:b,onBlur:y}=e,O=o(e,["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"]),g=[];null!=s&&s.hasFeedbackText&&null!=s&&s.isInvalid&&g.push(s.feedbackId);null!=s&&s.hasHelpText&&g.push(s.helpTextId);return a({},O,{"aria-describedby":g.join(" ")||void 0,id:null!=c?c:null==s?void 0:s.id,isDisabled:null!=(r=null!=u?u:m)?r:null==s?void 0:s.isDisabled,isReadOnly:null!=(n=null!=d?d:v)?n:null==s?void 0:s.isReadOnly,isRequired:null!=(t=null!=f?f:h)?t:null==s?void 0:s.isRequired,isInvalid:null!=p?p:null==s?void 0:s.isInvalid,onFocus:(0,i.v0)(null==s?void 0:s.onFocus,b),onBlur:(0,i.v0)(null==s?void 0:s.onBlur,y)})}(e),{isDisabled:n,isInvalid:s,isReadOnly:c,isRequired:u}=r;return a({},o(r,["isDisabled","isInvalid","isReadOnly","isRequired"]),{disabled:n,readOnly:c,required:u,"aria-invalid":(0,t.Qm)(s),"aria-required":(0,t.Qm)(u),"aria-readonly":(0,t.Qm)(c)})}},639:function(e,r,n){"use strict";n.d(r,{k:function(){return i}});var t=n(7294);function i(e){void 0===e&&(e=!1);var[r,n]=(0,t.useState)(e);return[r,{on:(0,t.useCallback)((()=>{n(!0)}),[]),off:(0,t.useCallback)((()=>{n(!1)}),[]),toggle:(0,t.useCallback)((()=>{n((e=>!e))}),[])}]}},1684:function(e,r,n){"use strict";n.d(r,{Z:function(){return o}});var t=n(5893),i=n(9008),l=n(4096),a=n(3850);function o(e){var r=e.children;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.default,{children:[(0,t.jsx)("title",{children:"Emissions Calculator"}),(0,t.jsx)("meta",{name:"description",content:"Emissions calculator"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsx)(l.k,{height:"100vh",alignItems:"center",children:(0,t.jsx)(a.W,{centerContent:!0,maxW:"container.sm",children:r})})]})}},4056:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return I}});var t=n(6265),i=n(5893),l=n(7294),a=n(5063),o=n(2202),s=n(63),c=n(227),u=n(2326),d=n(5284),f=n(820),h=n(4461),p=n(3808),v=n(5505),m=n(8554),b=n.n(m);function y(){return(y=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function O(e,r){if(null==e)return{};var n,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}var g=(0,s.G)(((e,r)=>{var{children:n,placeholder:t,className:i}=e,a=O(e,["children","placeholder","className"]),s=(0,o.Y)(a);return l.createElement(c.m$.select,y({},s,{ref:r,className:(0,h.cx)("chakra-select",i)}),t&&l.createElement("option",{value:""},t),n)}));p.Ts&&(g.displayName="SelectField");var x=(0,s.G)(((e,r)=>{var n=(0,u.j)("Select",e),t=(0,d.Lr)(e),{rootProps:i,placeholder:a,icon:o,color:s,height:h,h:p,minH:m,minHeight:x,iconColor:j,iconSize:k}=t,_=O(t,["rootProps","placeholder","icon","color","height","h","minH","minHeight","iconColor","iconSize","isFullWidth"]),[E,w]=(0,v.Vl)(_,f.layoutPropNames),C={width:"100%",height:"fit-content",position:"relative",color:s},N=b()({},n.field,{paddingEnd:"2rem",_focus:{zIndex:"unset"}});return l.createElement(c.m$.div,y({className:"chakra-select__wrapper",__css:C},E,i),l.createElement(g,y({ref:r,height:null!=p?p:h,minH:null!=m?m:x,placeholder:a},w,{__css:N}),e.children),l.createElement(P,y({"data-disabled":e.isDisabled},(j||s)&&{color:j||s},{__css:n.icon},k&&{fontSize:k}),o))}));p.Ts&&(x.displayName="Select");var j=e=>l.createElement("svg",y({viewBox:"0 0 24 24"},e),l.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})),k=(0,c.m$)("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),P=e=>{var{children:r=l.createElement(j,null)}=e,n=O(e,["children"]),t=l.cloneElement(r,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return l.createElement(k,y({},n,{className:"chakra-select__icon-wrapper"}),l.isValidElement(r)?t:null)};p.Ts&&(P.displayName="SelectIcon");var _=n(336),E=n(4115),w=n(155),C=n(1684),N=n(1861),R=n(9316);function T(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function F(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?T(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function I(){var e=(0,N.Z)(),r=e.answers,n=e.setAnswers,t=(0,l.useState)(r.department),o=t[0],s=t[1];return(0,i.jsxs)(C.Z,{children:[(0,i.jsx)(_.X,{children:"Question 4/5"}),(0,i.jsxs)(E.x,{textAlign:"center",children:[(0,i.jsx)("br",{}),"Which department do you work for?"]}),(0,i.jsx)(x,{mt:8,maxW:280,placeholder:"Please select",onChange:function(e){return s(e.target.value)},children:R.Yd.map((function(e){return(0,i.jsx)("option",{value:e,children:e.charAt(0).toUpperCase()+e.slice(1)},e)}))}),(0,i.jsx)(a.default,{href:"/results",passHref:!0,children:(0,i.jsx)(w.z,{mt:8,px:"12",colorScheme:"blue",disabled:!o,onClick:function(){return n((function(e){return F(F({},e),{},{department:o})}))},children:"Continue"})})]})}},9316:function(e,r,n){"use strict";n.d(r,{en:function(){return t},pM:function(){return i},Yd:function(){return l}});var t=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],i=["walk","bicycle","train","tram","bus","car"],l=["education","health","transport","finance"]},6404:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/5",function(){return n(4056)}])}},function(e){e.O(0,[613,283,774,888,179],(function(){return r=6404,e(e.s=r);var r}));var r=e.O();_N_E=r}]);