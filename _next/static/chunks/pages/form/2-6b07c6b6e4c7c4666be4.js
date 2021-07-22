(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[921],{6729:function(e,n,r){"use strict";r.d(n,{NJ:function(){return g}});var t=r(4577),a=r(639),o=r(63),i=r(2326),l=r(5284),u=r(9676),s=r(227),c=r(4461),d=r(658),f=r(3808),v=r(8500),h=r(2947),p=r(7294);function m(){return(m=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function b(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}var[y,g]=(0,v.k)({strict:!1,name:"FormControlContext"});var k=(0,o.G)(((e,n)=>{var r=(0,i.j)("Form",e),o=function(e){var{id:n,isRequired:r,isInvalid:o,isDisabled:i,isReadOnly:l}=e,u=b(e,["id","isRequired","isInvalid","isDisabled","isReadOnly"]),s=(0,t.Me)(),f=n||"field-"+s,v=f+"-label",y=f+"-feedback",g=f+"-helptext",[k,j]=p.useState(!1),[C,O]=p.useState(!1),[x,P]=(0,a.k)(),_=p.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),m({id:g},e,{ref:(0,h.l)(n,(e=>{e&&O(!0)}))})}),[g]),w=p.useCallback((function(e,n){var r,t;return void 0===e&&(e={}),void 0===n&&(n=null),m({},e,{ref:n,"data-focus":(0,c.PB)(x),"data-disabled":(0,c.PB)(i),"data-invalid":(0,c.PB)(o),"data-readonly":(0,c.PB)(l),id:null!=(r=e.id)?r:v,htmlFor:null!=(t=e.htmlFor)?t:f})}),[f,i,x,o,l,v]),N=p.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),m({id:y},e,{ref:(0,h.l)(n,(e=>{e&&j(!0)})),"aria-live":"polite"})}),[y]),T=p.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),m({},e,u,{ref:n,role:"group"})}),[u]),E=p.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),m({},e,{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]),R=p.useCallback((()=>{(0,d.A4)(P.on)}),[P]);return{isRequired:!!r,isInvalid:!!o,isReadOnly:!!l,isDisabled:!!i,isFocused:!!x,onFocus:R,onBlur:P.off,hasFeedbackText:k,setHasFeedbackText:j,hasHelpText:C,setHasHelpText:O,id:f,labelId:v,feedbackId:y,helpTextId:g,htmlProps:u,getHelpTextProps:_,getErrorMessageProps:N,getRootProps:T,getLabelProps:w,getRequiredIndicatorProps:E}}((0,l.Lr)(e)),{getRootProps:f}=o,v=b(o,["getRootProps","htmlProps"]),g=(0,c.cx)("chakra-form-control",e.className),k=p.useMemo((()=>v),[v]);return p.createElement(y,{value:k},p.createElement(u.Fo,{value:r},p.createElement(s.m$.div,m({},f({},n),{className:g,__css:{width:"100%",position:"relative"}}))))}));f.Ts&&(k.displayName="FormControl");var j=(0,o.G)(((e,n)=>{var r=g(),t=(0,u.yK)(),a=(0,c.cx)("chakra-form__helper-text",e.className);return p.createElement(s.m$.div,m({},null==r?void 0:r.getHelpTextProps(e,n),{__css:t.helperText,className:a}))}));f.Ts&&(j.displayName="FormHelperText")},639:function(e,n,r){"use strict";r.d(n,{k:function(){return a}});var t=r(7294);function a(e){void 0===e&&(e=!1);var[n,r]=(0,t.useState)(e);return[n,{on:(0,t.useCallback)((()=>{r(!0)}),[]),off:(0,t.useCallback)((()=>{r(!1)}),[]),toggle:(0,t.useCallback)((()=>{r((e=>!e))}),[])}]}},762:function(e,n,r){"use strict";r.d(n,{W:function(){return o}});var t=r(7294),a=r(8327);function o(e,n){void 0===n&&(n=[]);var r=t.useRef(e);return(0,a.G)((()=>{r.current=e})),t.useCallback((function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return null==r.current?void 0:r.current(...n)}),n)}},1034:function(e,n,r){"use strict";r.d(n,{p:function(){return i},T:function(){return l}});var t=r(658),a=r(7294),o=r(762);function i(e,n){var r=void 0!==e;return[r,r&&"undefined"!==typeof e?e:n]}function l(e){var{value:n,defaultValue:r,onChange:i,shouldUpdate:l=((e,n)=>e!==n)}=e,u=(0,o.W)(i),s=(0,o.W)(l),[c,d]=a.useState(r),f=void 0!==n,v=f?n:c,h=a.useCallback((e=>{var n=(0,t.Pu)(e,v);s(v,n)&&(f||d(n),u(n))}),[f,u,v,s]);return[v,h]}},8327:function(e,n,r){"use strict";r.d(n,{G:function(){return a}});var t=r(7294),a=r(4461).jU?t.useLayoutEffect:t.useEffect},3346:function(e,n,r){"use strict";r.d(n,{iA:function(){return v},hr:function(){return p},p3:function(){return m},Th:function(){return b},Tr:function(){return y},Td:function(){return g}});var t=r(63),a=r(2326),o=r(5284),i=r(9676),l=r(227),u=r(4461),s=r(3808),c=r(7294);function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function f(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}var v=(0,t.G)(((e,n)=>{var r=(0,a.j)("Table",e),t=(0,o.Lr)(e),{className:s}=t,v=f(t,["className"]);return c.createElement(i.Fo,{value:r},c.createElement(l.m$.table,d({role:"table",ref:n,__css:r.table,className:(0,u.cx)("chakra-table",s)},v)))}));s.Ts&&(v.displayName="Table");var h=(0,t.G)(((e,n)=>{var{placement:r="bottom"}=e,t=f(e,["placement"]),a=(0,i.yK)();return c.createElement(l.m$.caption,d({},t,{ref:n,__css:d({},a.caption,{captionSide:r})}))}));s.Ts&&(h.displayName="TableCaption");var p=(0,t.G)(((e,n)=>{var r=(0,i.yK)();return c.createElement(l.m$.thead,d({},e,{ref:n,__css:r.thead}))})),m=(0,t.G)(((e,n)=>{var r=(0,i.yK)();return c.createElement(l.m$.tbody,d({},e,{ref:n,__css:r.tbody}))})),b=(0,t.G)(((e,n)=>{var{isNumeric:r}=e,t=f(e,["isNumeric"]),a=(0,i.yK)();return c.createElement(l.m$.th,d({},t,{ref:n,__css:a.th,"data-is-numeric":r}))})),y=(0,t.G)(((e,n)=>{var r=(0,i.yK)();return c.createElement(l.m$.tr,d({role:"row"},e,{ref:n,__css:r.tr}))})),g=(0,t.G)(((e,n)=>{var{isNumeric:r}=e,t=f(e,["isNumeric"]),a=(0,i.yK)();return c.createElement(l.m$.td,d({role:"gridcell"},t,{ref:n,__css:a.td,"data-is-numeric":r}))}))},1684:function(e,n,r){"use strict";r.d(n,{Z:function(){return l}});var t=r(5893),a=r(9008),o=r(4096),i=r(3850);function l(e){var n=e.children;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.default,{children:[(0,t.jsx)("title",{children:"Emissions Calculator"}),(0,t.jsx)("meta",{name:"description",content:"Emissions calculator"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsx)(o.k,{height:"100vh",alignItems:"center",children:(0,t.jsx)(i.W,{centerContent:!0,maxW:"container.sm",children:n})})]})}},5579:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return L}});var t=r(6265),a=r(1385),o=r(5893),i=r(7294),l=r(5063),u=r(336),s=r(4115),c=r(155),d=r(63),f=r(227),v=r(4461),h=r(3808),p=r(8500),m=r(1034),b=r(4577),y=r(2947);function g(){return(g=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function k(e){void 0===e&&(e={});var{onChange:n,value:r,defaultValue:t,name:a,isNative:o}=e,l=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["onChange","value","defaultValue","name","isNative"]),[u,s]=i.useState(t||""),[c,d]=(0,m.p)(r,u),f=i.useRef(null),v=i.useCallback((()=>{var e=f.current;if(e){var n="input:not(:disabled):checked",r=e.querySelector(n);if(r)r.focus();else{n="input:not(:disabled)";var t=e.querySelector(n);null==t||t.focus()}}}),[]),p=(0,b.Me)(void 0,"radio"),k=a||p,j=i.useCallback((e=>{var r=(0,h.kA)(e)?e.target.value:e;c||s(r),null==n||n(String(r))}),[n,c]);return{getRootProps:i.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),g({},e,{ref:(0,y.l)(n,f),role:"radiogroup"})}),[]),getRadioProps:i.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),g({},e,{ref:n,name:k,[o?"checked":"isChecked"]:null!=d?e.value===d:void 0,onChange:j,"data-radiogroup":!0})}),[o,k,j,d]),name:k,ref:f,focus:v,setValue:s,value:d,onChange:j,htmlProps:l}}function j(){return(j=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}var[C,O]=(0,p.k)({name:"RadioGroupContext",strict:!1}),x=(0,d.G)(((e,n)=>{var{colorScheme:r,size:t,variant:a,children:o,className:l}=e,u=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["colorScheme","size","variant","children","className"]),{value:s,onChange:c,getRootProps:d,name:h,htmlProps:p}=k(u),m=i.useMemo((()=>({name:h,size:t,onChange:c,colorScheme:r,value:s,variant:a})),[t,h,c,r,s,a]),b=d(p,n),y=(0,v.cx)("chakra-radio-group",l);return i.createElement(C,{value:m},i.createElement(f.m$.div,j({},b,{className:y}),o))}));h.Ts&&(x.displayName="RadioGroup");var P=r(2326),_=r(5284),w=r(820),N=r(658),T=r(5505),E=r(6729),R=r(639),S=r(5415);function I(){return(I=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function F(e){void 0===e&&(e={});var{defaultIsChecked:n,defaultChecked:r=n,isChecked:t,isFocusable:a,isDisabled:o,isReadOnly:l,isRequired:u,onChange:s,isInvalid:c,name:d,value:f,id:h,"data-radiogroup":p}=e,g=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["defaultIsChecked","defaultChecked","isChecked","isFocusable","isDisabled","isReadOnly","isRequired","onChange","isInvalid","name","value","id","data-radiogroup"]),k=(0,b.Me)(void 0,"radio"),j=(0,E.NJ)(),C=O(),x=!!j&&!(!!C||!!p)?j.id:k;x=null!=h?h:x;var P=null!=o?o:null==j?void 0:j.isDisabled,_=null!=l?l:null==j?void 0:j.isReadOnly,w=null!=u?u:null==j?void 0:j.isRequired,T=null!=c?c:null==j?void 0:j.isInvalid,[F,B]=(0,R.k)(),[M,A]=(0,R.k)(),[G,$]=(0,R.k)(),q=(0,i.useRef)(null),[K,H]=(0,i.useState)(Boolean(r)),[L,W]=(0,m.p)(t,K);(0,N.ZK)({condition:!!n,message:'The "defaultIsChecked" prop has been deprecated and will be removed in a future version. Please use the "defaultChecked" prop instead, which mirrors default React checkbox behavior.'});var U=(0,i.useCallback)((e=>{_||P?e.preventDefault():(L||H(e.target.checked),null==s||s(e))}),[L,P,_,s]),Z=(0,i.useCallback)((e=>{" "===e.key&&$.on()}),[$]),Q=(0,i.useCallback)((e=>{" "===e.key&&$.off()}),[$]),V=(0,i.useCallback)((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),I({},e,{ref:n,"data-active":(0,v.PB)(G),"data-hover":(0,v.PB)(M),"data-disabled":(0,v.PB)(P),"data-invalid":(0,v.PB)(T),"data-checked":(0,v.PB)(W),"data-focus":(0,v.PB)(F),"data-readonly":(0,v.PB)(_),"aria-hidden":!0,onMouseDown:(0,N.v0)(e.onMouseDown,$.on),onMouseUp:(0,N.v0)(e.onMouseUp,$.off),onMouseEnter:(0,N.v0)(e.onMouseEnter,A.on),onMouseLeave:(0,N.v0)(e.onMouseLeave,A.off)})}),[G,M,P,T,W,F,_,$.on,$.off,A.on,A.off]),{onFocus:z,onBlur:X}=null!=j?j:{},J=(0,i.useCallback)((function(e,n){void 0===e&&(e={}),void 0===n&&(n=null);var r=P&&!a;return I({},e,{id:x,ref:(0,y.l)(n,q),type:"radio",name:d,value:f,onChange:(0,N.v0)(e.onChange,U),onBlur:(0,N.v0)(X,e.onBlur,B.off),onFocus:(0,N.v0)(z,e.onFocus,(()=>{(0,N.A4)((()=>{B.on()}))})),onKeyDown:(0,N.v0)(e.onKeyDown,Z),onKeyUp:(0,N.v0)(e.onKeyUp,Q),checked:W,disabled:r,readOnly:_,required:w,"aria-invalid":(0,v.Qm)(T),"aria-disabled":(0,v.Qm)(r),"aria-readonly":(0,v.Qm)(_),"aria-required":(0,v.Qm)(w),style:S.NL})}),[P,a,x,d,f,U,X,B,z,Z,Q,W,_,w,T]);return{state:{isInvalid:T,isFocused:F,isChecked:W,isActive:G,isHovered:M,isDisabled:P,isReadOnly:_,isRequired:w},getCheckboxProps:V,getInputProps:J,getLabelProps:function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),I({},e,{ref:n,onMouseDown:(0,N.v0)(e.onMouseDown,D),onTouchStart:(0,N.v0)(e.onTouchStart,D),"data-disabled":(0,v.PB)(P),"data-checked":(0,v.PB)(W),"data-invalid":(0,v.PB)(T)})},htmlProps:g}}function D(e){e.preventDefault(),e.stopPropagation()}function B(){return(B=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}var M=(0,d.G)(((e,n)=>{var r,{onChange:t,value:a}=e,o=O(),l=(0,P.j)("Radio",B({},o,e)),u=(0,_.Lr)(e),{spacing:s="0.5rem",children:c,isFullWidth:d}=u,v=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(u,["spacing","children","isFullWidth"]),h=e.isChecked;null!=(null==o?void 0:o.value)&&null!=a&&(h=o.value===a);var p=t;null!=o&&o.onChange&&null!=a&&(p=(0,N.PP)(o.onChange,t));var m=null!=(r=null==e?void 0:e.name)?r:null==o?void 0:o.name,{getInputProps:b,getCheckboxProps:y,getLabelProps:g,htmlProps:k}=F(B({},v,{isChecked:h,onChange:p,name:m})),[j,C]=(0,T.Vl)(k,w.layoutPropNames),x=y(C),E=b({},n),R=g(),S=B({width:d?"full":void 0,display:"inline-flex",alignItems:"center",verticalAlign:"top"},l.container),I=B({display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0},l.control),D=B({userSelect:"none",marginStart:s},l.label);return i.createElement(f.m$.label,B({className:"chakra-radio"},j,{__css:S}),i.createElement("input",B({className:"chakra-radio__input"},E)),i.createElement(f.m$.span,B({className:"chakra-radio__control"},x,{__css:I})),c&&i.createElement(f.m$.span,B({className:"chakra-radio__label"},R,{__css:D}),c))}));h.Ts&&(M.displayName="Radio");var A=r(3346),G=r(1684),$=r(1861),q=r(9316);function K(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function H(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?K(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function L(){var e=(0,$.Z)(),n=e.answers,r=e.setAnswers,t=(0,i.useState)(n.week),d=t[0],f=t[1];return(0,o.jsxs)(G.Z,{children:[(0,o.jsx)(u.X,{children:"Question 2/5"}),(0,o.jsxs)(s.x,{textAlign:"center",mb:6,children:[(0,o.jsx)("br",{}),"Where did you work last week? ",(0,o.jsx)("br",{}),"If you didn't work on a given day, don't select anything."]}),(0,o.jsxs)(A.iA,{variant:"striped",children:[(0,o.jsx)(A.hr,{children:(0,o.jsxs)(A.Tr,{children:[(0,o.jsx)(A.Th,{children:"Day:"}),(0,o.jsx)(A.Th,{children:"Office (or onsite) vs home"})]})}),(0,o.jsx)(A.p3,{children:q.en.map((function(e,n){return(0,o.jsxs)(A.Tr,{children:[(0,o.jsx)(A.Td,{children:e}),(0,o.jsx)(A.Td,{children:(0,o.jsxs)(x,{onChange:function(e){var r=(0,a.Z)(d);r[n]=e,f(r)},children:[(0,o.jsx)(M,{value:"office",children:"Office / Onsite"}),(0,o.jsx)(M,{value:"home",ml:8,children:"Home"})]})})]},e)}))})]}),(0,o.jsx)(l.default,{href:"/form/3",passHref:!0,children:(0,o.jsx)(c.z,{mt:8,px:"12",colorScheme:"blue",disabled:d.every((function(e){return"didNotWork"===e})),onClick:function(){return r((function(e){return H(H({},e),{},{week:d})}))},children:"Continue"})})]})}},9316:function(e,n,r){"use strict";r.d(n,{en:function(){return t},pM:function(){return a},Yd:function(){return o}});var t=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],a=["walk","bicycle","train","tram","bus","car"],o=["education","health","transport","finance"]},3638:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/2",function(){return r(5579)}])},1385:function(e,n,r){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function a(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(e){if("string"===typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(n,{Z:function(){return a}})}},function(e){e.O(0,[613,283,774,888,179],(function(){return n=3638,e(e.s=n);var n}));var n=e.O();_N_E=n}]);