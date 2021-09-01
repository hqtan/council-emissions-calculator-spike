(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[940],{6729:function(e,r,n){"use strict";n.d(r,{NJ:function(){return g}});var t=n(4577),a=n(639),i=n(63),o=n(2326),l=n(5284),c=n(9676),u=n(227),s=n(4461),d=n(658),f=n(3808),v=n(8500),h=n(2947),p=n(7294);function m(){return(m=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function b(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}var[y,g]=(0,v.k)({strict:!1,name:"FormControlContext"});var k=(0,i.G)(((e,r)=>{var n=(0,o.j)("Form",e),i=function(e){var{id:r,isRequired:n,isInvalid:i,isDisabled:o,isReadOnly:l}=e,c=b(e,["id","isRequired","isInvalid","isDisabled","isReadOnly"]),u=(0,t.Me)(),f=r||"field-"+u,v=f+"-label",y=f+"-feedback",g=f+"-helptext",[k,O]=p.useState(!1),[j,C]=p.useState(!1),[x,P]=(0,a.k)(),w=p.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),m({id:g},e,{ref:(0,h.l)(r,(e=>{e&&C(!0)}))})}),[g]),E=p.useCallback((function(e,r){var n,t;return void 0===e&&(e={}),void 0===r&&(r=null),m({},e,{ref:r,"data-focus":(0,s.PB)(x),"data-disabled":(0,s.PB)(o),"data-invalid":(0,s.PB)(i),"data-readonly":(0,s.PB)(l),id:null!=(n=e.id)?n:v,htmlFor:null!=(t=e.htmlFor)?t:f})}),[f,o,x,i,l,v]),_=p.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),m({id:y},e,{ref:(0,h.l)(r,(e=>{e&&O(!0)})),"aria-live":"polite"})}),[y]),N=p.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),m({},e,c,{ref:r,role:"group"})}),[c]),T=p.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),m({},e,{ref:r,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]),S=p.useCallback((()=>{(0,d.A4)(P.on)}),[P]);return{isRequired:!!n,isInvalid:!!i,isReadOnly:!!l,isDisabled:!!o,isFocused:!!x,onFocus:S,onBlur:P.off,hasFeedbackText:k,setHasFeedbackText:O,hasHelpText:j,setHasHelpText:C,id:f,labelId:v,feedbackId:y,helpTextId:g,htmlProps:c,getHelpTextProps:w,getErrorMessageProps:_,getRootProps:N,getLabelProps:E,getRequiredIndicatorProps:T}}((0,l.Lr)(e)),{getRootProps:f}=i,v=b(i,["getRootProps","htmlProps"]),g=(0,s.cx)("chakra-form-control",e.className),k=p.useMemo((()=>v),[v]);return p.createElement(y,{value:k},p.createElement(c.Fo,{value:n},p.createElement(u.m$.div,m({},f({},r),{className:g,__css:{width:"100%",position:"relative"}}))))}));f.Ts&&(k.displayName="FormControl");var O=(0,i.G)(((e,r)=>{var n=g(),t=(0,c.yK)(),a=(0,s.cx)("chakra-form__helper-text",e.className);return p.createElement(u.m$.div,m({},null==n?void 0:n.getHelpTextProps(e,r),{__css:t.helperText,className:a}))}));f.Ts&&(O.displayName="FormHelperText")},639:function(e,r,n){"use strict";n.d(r,{k:function(){return a}});var t=n(7294);function a(e){void 0===e&&(e=!1);var[r,n]=(0,t.useState)(e);return[r,{on:(0,t.useCallback)((()=>{n(!0)}),[]),off:(0,t.useCallback)((()=>{n(!1)}),[]),toggle:(0,t.useCallback)((()=>{n((e=>!e))}),[])}]}},762:function(e,r,n){"use strict";n.d(r,{W:function(){return i}});var t=n(7294),a=n(8327);function i(e,r){void 0===r&&(r=[]);var n=t.useRef(e);return(0,a.G)((()=>{n.current=e})),t.useCallback((function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return null==n.current?void 0:n.current(...r)}),r)}},1034:function(e,r,n){"use strict";n.d(r,{p:function(){return o},T:function(){return l}});var t=n(658),a=n(7294),i=n(762);function o(e,r){var n=void 0!==e;return[n,n&&"undefined"!==typeof e?e:r]}function l(e){var{value:r,defaultValue:n,onChange:o,shouldUpdate:l=((e,r)=>e!==r)}=e,c=(0,i.W)(o),u=(0,i.W)(l),[s,d]=a.useState(n),f=void 0!==r,v=f?r:s,h=a.useCallback((e=>{var r=(0,t.Pu)(e,v);u(v,r)&&(f||d(r),c(r))}),[f,c,v,u]);return[v,h]}},8327:function(e,r,n){"use strict";n.d(r,{G:function(){return a}});var t=n(7294),a=n(4461).jU?t.useLayoutEffect:t.useEffect},3346:function(e,r,n){"use strict";n.d(r,{iA:function(){return v},hr:function(){return p},p3:function(){return m},Th:function(){return b},Tr:function(){return y},Td:function(){return g}});var t=n(63),a=n(2326),i=n(5284),o=n(9676),l=n(227),c=n(4461),u=n(3808),s=n(7294);function d(){return(d=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function f(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}var v=(0,t.G)(((e,r)=>{var n=(0,a.j)("Table",e),t=(0,i.Lr)(e),{className:u}=t,v=f(t,["className"]);return s.createElement(o.Fo,{value:n},s.createElement(l.m$.table,d({role:"table",ref:r,__css:n.table,className:(0,c.cx)("chakra-table",u)},v)))}));u.Ts&&(v.displayName="Table");var h=(0,t.G)(((e,r)=>{var{placement:n="bottom"}=e,t=f(e,["placement"]),a=(0,o.yK)();return s.createElement(l.m$.caption,d({},t,{ref:r,__css:d({},a.caption,{captionSide:n})}))}));u.Ts&&(h.displayName="TableCaption");var p=(0,t.G)(((e,r)=>{var n=(0,o.yK)();return s.createElement(l.m$.thead,d({},e,{ref:r,__css:n.thead}))})),m=(0,t.G)(((e,r)=>{var n=(0,o.yK)();return s.createElement(l.m$.tbody,d({},e,{ref:r,__css:n.tbody}))})),b=(0,t.G)(((e,r)=>{var{isNumeric:n}=e,t=f(e,["isNumeric"]),a=(0,o.yK)();return s.createElement(l.m$.th,d({},t,{ref:r,__css:a.th,"data-is-numeric":n}))})),y=(0,t.G)(((e,r)=>{var n=(0,o.yK)();return s.createElement(l.m$.tr,d({role:"row"},e,{ref:r,__css:n.tr}))})),g=(0,t.G)(((e,r)=>{var{isNumeric:n}=e,t=f(e,["isNumeric"]),a=(0,o.yK)();return s.createElement(l.m$.td,d({role:"gridcell"},t,{ref:r,__css:a.td,"data-is-numeric":n}))}))},1684:function(e,r,n){"use strict";n.d(r,{Z:function(){return c}});var t=n(5893),a=n(9008),i=n(4096),o=n(3850),l=n(9316);function c(e){var r=e.children;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.default,{children:[(0,t.jsx)("title",{children:"Emissions Calculator"}),(0,t.jsx)("meta",{name:"description",content:"Emissions calculator"}),(0,t.jsx)("link",{rel:"icon",href:"".concat(l.jW,"/favicon.ico")})]}),(0,t.jsx)(i.k,{height:"100vh",alignItems:"center",children:(0,t.jsx)(o.W,{centerContent:!0,maxW:"container.sm",children:r})})]})}},8437:function(e,r,n){"use strict";n.d(r,{Z:function(){return o}});var t=n(5893),a=n(5063),i=n(155);function o(e){var r=e.children,n=e.href,o=e.onClick,l=e.disabled,c=e.variant;return(0,t.jsx)(a.default,{href:n,passHref:!0,children:(0,t.jsx)(i.z,{mt:8,px:"12",colorScheme:"blue",disabled:l,onClick:o,variant:c||"solid",children:r})})}},9504:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return re}});var t=n(6265),a=n(1385),i=n(5893),o=n(7294),l=n(63),c=n(227),u=n(4461),s=n(3808),d=n(8500),f=n(1034),v=n(4577),h=n(2947);function p(){return(p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function m(e){void 0===e&&(e={});var{onChange:r,value:n,defaultValue:t,name:a,isNative:i}=e,l=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["onChange","value","defaultValue","name","isNative"]),[c,u]=o.useState(t||""),[d,m]=(0,f.p)(n,c),b=o.useRef(null),y=o.useCallback((()=>{var e=b.current;if(e){var r="input:not(:disabled):checked",n=e.querySelector(r);if(n)n.focus();else{r="input:not(:disabled)";var t=e.querySelector(r);null==t||t.focus()}}}),[]),g=(0,v.Me)(void 0,"radio"),k=a||g,O=o.useCallback((e=>{var n=(0,s.kA)(e)?e.target.value:e;d||u(n),null==r||r(String(n))}),[r,d]);return{getRootProps:o.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),p({},e,{ref:(0,h.l)(r,b),role:"radiogroup"})}),[]),getRadioProps:o.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),p({},e,{ref:r,name:k,[i?"checked":"isChecked"]:null!=m?e.value===m:void 0,onChange:O,"data-radiogroup":!0})}),[i,k,O,m]),name:k,ref:b,focus:y,setValue:u,value:m,onChange:O,htmlProps:l}}function b(){return(b=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var[y,g]=(0,d.k)({name:"RadioGroupContext",strict:!1}),k=(0,l.G)(((e,r)=>{var{colorScheme:n,size:t,variant:a,children:i,className:l}=e,s=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["colorScheme","size","variant","children","className"]),{value:d,onChange:f,getRootProps:v,name:h,htmlProps:p}=m(s),g=o.useMemo((()=>({name:h,size:t,onChange:f,colorScheme:n,value:d,variant:a})),[t,h,f,n,d,a]),k=v(p,r),O=(0,u.cx)("chakra-radio-group",l);return o.createElement(y,{value:g},o.createElement(c.m$.div,b({},k,{className:O}),i))}));s.Ts&&(k.displayName="RadioGroup");var O=n(2326),j=n(5284),C=n(820),x=n(658),P=n(5505),w=n(6729),E=n(639),_=n(5415);function N(){return(N=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function T(e){void 0===e&&(e={});var{defaultIsChecked:r,defaultChecked:n=r,isChecked:t,isFocusable:a,isDisabled:i,isReadOnly:l,isRequired:c,onChange:s,isInvalid:d,name:p,value:m,id:b,"data-radiogroup":y}=e,k=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["defaultIsChecked","defaultChecked","isChecked","isFocusable","isDisabled","isReadOnly","isRequired","onChange","isInvalid","name","value","id","data-radiogroup"]),O=(0,v.Me)(void 0,"radio"),j=(0,w.NJ)(),C=g(),P=!!j&&!(!!C||!!y)?j.id:O;P=null!=b?b:P;var T=null!=i?i:null==j?void 0:j.isDisabled,M=null!=l?l:null==j?void 0:j.isReadOnly,R=null!=c?c:null==j?void 0:j.isRequired,I=null!=d?d:null==j?void 0:j.isInvalid,[D,F]=(0,E.k)(),[z,B]=(0,E.k)(),[A,G]=(0,E.k)(),W=(0,o.useRef)(null),[$,q]=(0,o.useState)(Boolean(n)),[H,K]=(0,f.p)(t,$);(0,x.ZK)({condition:!!r,message:'The "defaultIsChecked" prop has been deprecated and will be removed in a future version. Please use the "defaultChecked" prop instead, which mirrors default React checkbox behavior.'});var L=(0,o.useCallback)((e=>{M||T?e.preventDefault():(H||q(e.target.checked),null==s||s(e))}),[H,T,M,s]),Z=(0,o.useCallback)((e=>{" "===e.key&&G.on()}),[G]),V=(0,o.useCallback)((e=>{" "===e.key&&G.off()}),[G]),Q=(0,o.useCallback)((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),N({},e,{ref:r,"data-active":(0,u.PB)(A),"data-hover":(0,u.PB)(z),"data-disabled":(0,u.PB)(T),"data-invalid":(0,u.PB)(I),"data-checked":(0,u.PB)(K),"data-focus":(0,u.PB)(D),"data-readonly":(0,u.PB)(M),"aria-hidden":!0,onMouseDown:(0,x.v0)(e.onMouseDown,G.on),onMouseUp:(0,x.v0)(e.onMouseUp,G.off),onMouseEnter:(0,x.v0)(e.onMouseEnter,B.on),onMouseLeave:(0,x.v0)(e.onMouseLeave,B.off)})}),[A,z,T,I,K,D,M,G.on,G.off,B.on,B.off]),{onFocus:U,onBlur:J}=null!=j?j:{},X=(0,o.useCallback)((function(e,r){void 0===e&&(e={}),void 0===r&&(r=null);var n=T&&!a;return N({},e,{id:P,ref:(0,h.l)(r,W),type:"radio",name:p,value:m,onChange:(0,x.v0)(e.onChange,L),onBlur:(0,x.v0)(J,e.onBlur,F.off),onFocus:(0,x.v0)(U,e.onFocus,(()=>{(0,x.A4)((()=>{F.on()}))})),onKeyDown:(0,x.v0)(e.onKeyDown,Z),onKeyUp:(0,x.v0)(e.onKeyUp,V),checked:K,disabled:n,readOnly:M,required:R,"aria-invalid":(0,u.Qm)(I),"aria-disabled":(0,u.Qm)(n),"aria-readonly":(0,u.Qm)(M),"aria-required":(0,u.Qm)(R),style:_.NL})}),[T,a,P,p,m,L,J,F,U,Z,V,K,M,R,I]);return{state:{isInvalid:I,isFocused:D,isChecked:K,isActive:A,isHovered:z,isDisabled:T,isReadOnly:M,isRequired:R},getCheckboxProps:Q,getInputProps:X,getLabelProps:function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),N({},e,{ref:r,onMouseDown:(0,x.v0)(e.onMouseDown,S),onTouchStart:(0,x.v0)(e.onTouchStart,S),"data-disabled":(0,u.PB)(T),"data-checked":(0,u.PB)(K),"data-invalid":(0,u.PB)(I)})},htmlProps:k}}function S(e){e.preventDefault(),e.stopPropagation()}function M(){return(M=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var R=(0,l.G)(((e,r)=>{var n,{onChange:t,value:a}=e,i=g(),l=(0,O.j)("Radio",M({},i,e)),u=(0,j.Lr)(e),{spacing:s="0.5rem",children:d,isFullWidth:f}=u,v=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(u,["spacing","children","isFullWidth"]),h=e.isChecked;null!=(null==i?void 0:i.value)&&null!=a&&(h=i.value===a);var p=t;null!=i&&i.onChange&&null!=a&&(p=(0,x.PP)(i.onChange,t));var m=null!=(n=null==e?void 0:e.name)?n:null==i?void 0:i.name,{getInputProps:b,getCheckboxProps:y,getLabelProps:k,htmlProps:w}=T(M({},v,{isChecked:h,onChange:p,name:m})),[E,_]=(0,P.Vl)(w,C.layoutPropNames),N=y(_),S=b({},r),R=k(),I=M({width:f?"full":void 0,display:"inline-flex",alignItems:"center",verticalAlign:"top"},l.container),D=M({display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0},l.control),F=M({userSelect:"none",marginStart:s},l.label);return o.createElement(c.m$.label,M({className:"chakra-radio"},E,{__css:I}),o.createElement("input",M({className:"chakra-radio__input"},S)),o.createElement(c.m$.span,M({className:"chakra-radio__control"},N,{__css:D})),d&&o.createElement(c.m$.span,M({className:"chakra-radio__label"},R,{__css:F}),d))}));s.Ts&&(R.displayName="Radio");var I,D,F,z,B,A,G,W,$=n(336),q=n(4115),H=n(3346),K=n(1684),L=n(1861),Z=n(9316),V=n(8437),Q=["title","titleId"];function U(){return(U=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function J(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var X=function(e){var r=e.title,n=e.titleId,t=J(e,Q);return o.createElement("svg",U({width:750,height:33,fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},t),r?o.createElement("title",{id:n},r):null,I||(I=o.createElement("rect",{y:7,width:750,height:20,rx:4,fill:"#E9ECEF"})),D||(D=o.createElement("path",{fill:"#E49273",d:"M0 7h300v20H0z"})),F||(F=o.createElement("path",{d:"M118.826 22v-1.379c0-.518.096-.964.287-1.337a3.28 3.28 0 01.763-.987c.317-.28.665-.527 1.043-.742.378-.22.756-.425 1.134-.616.383-.196.73-.397 1.043-.602.317-.21.572-.443.763-.7.196-.261.294-.567.294-.917 0-.453-.161-.821-.483-1.106-.317-.29-.749-.434-1.295-.434-.579 0-1.057.166-1.435.497-.378.331-.6.798-.665 1.4h-1.652a3.459 3.459 0 01.441-1.68c.285-.504.707-.905 1.267-1.204.56-.303 1.258-.455 2.093-.455.723 0 1.346.126 1.869.378.527.247.933.595 1.218 1.043.289.443.434.961.434 1.554 0 .518-.096.961-.287 1.33a3.122 3.122 0 01-.749.959 5.94 5.94 0 01-1.022.707c-.369.205-.74.399-1.113.581-.369.177-.709.364-1.022.56-.308.191-.558.41-.749.658-.187.247-.28.544-.28.889v.147h5.243V22h-7.14zm14.949.14c-1.036 0-1.866-.327-2.492-.98-.62-.658-.931-1.573-.931-2.744 0-.756.136-1.419.406-1.988a3.13 3.13 0 011.183-1.33c.514-.317 1.127-.476 1.841-.476 1.036 0 1.86.336 2.471 1.008.616.672.924 1.6.924 2.786 0 .733-.133 1.379-.399 1.939-.261.56-.646.999-1.155 1.316-.504.313-1.12.469-1.848.469zm.007-1.295c.588 0 1.022-.233 1.302-.7.285-.467.427-1.06.427-1.778 0-.443-.056-.852-.168-1.225a1.867 1.867 0 00-.553-.896c-.252-.229-.588-.343-1.008-.343-.597 0-1.038.229-1.323.686-.284.457-.427 1.05-.427 1.778 0 .439.056.847.168 1.225.112.373.297.677.553.91.257.229.6.343 1.029.343zm7.573 1.295a3.411 3.411 0 01-1.337-.28 2.507 2.507 0 01-1.029-.805c-.266-.36-.399-.803-.399-1.33v-4.963h1.708v4.767c0 .397.123.721.371.973.252.247.63.371 1.134.371.457 0 .823-.119 1.099-.357.275-.243.413-.59.413-1.043v-4.711h1.694V22H143.7l-.189-1.414c-.089.397-.245.71-.469.938-.22.224-.479.383-.777.476-.294.093-.598.14-.91.14zm9.637-6.174h-1.617l.007 4.151c0 .322.056.523.168.602.112.075.305.112.581.112h.896v1.078c-.098.037-.243.07-.434.098a4.543 4.543 0 01-.749.049c-.574 0-1.02-.075-1.337-.224-.313-.15-.53-.364-.651-.644a2.547 2.547 0 01-.182-1.008v-4.214h-1.176v-1.204h1.225l.427-2.149h1.225v2.142h1.617v1.211zm7.776 6.174c-1.036 0-1.867-.327-2.492-.98-.621-.658-.931-1.573-.931-2.744 0-.756.135-1.419.406-1.988a3.116 3.116 0 011.183-1.33c.513-.317 1.127-.476 1.841-.476 1.036 0 1.859.336 2.471 1.008.616.672.924 1.6.924 2.786 0 .733-.133 1.379-.399 1.939-.262.56-.647.999-1.155 1.316-.504.313-1.12.469-1.848.469zm.007-1.295c.588 0 1.022-.233 1.302-.7.284-.467.427-1.06.427-1.778 0-.443-.056-.852-.168-1.225a1.874 1.874 0 00-.553-.896c-.252-.229-.588-.343-1.008-.343-.598 0-1.039.229-1.323.686-.285.457-.427 1.05-.427 1.778 0 .439.056.847.168 1.225.112.373.296.677.553.91.256.229.599.343 1.029.343zm8.934-6.083v1.204h-1.631V22h-1.701v-6.034h-1.428v-1.204h1.428v-1.078c0-.579.159-1.024.476-1.337.322-.313.787-.469 1.393-.469h1.526l.007 1.162h-1.008c-.275 0-.464.072-.567.217-.102.14-.154.362-.154.665v.84h1.659zm5.298-2.884h6.293l-.063 1.421h-4.844l-.231 2.814a3.882 3.882 0 011.085-.546 4.079 4.079 0 011.204-.168 4.01 4.01 0 011.75.378c.527.252.947.623 1.26 1.113.317.49.476 1.09.476 1.799 0 .71-.159 1.323-.476 1.841-.313.518-.756.92-1.33 1.204-.57.28-1.244.42-2.023.42a5.043 5.043 0 01-1.799-.315 4.431 4.431 0 01-1.428-.882 3.622 3.622 0 01-.889-1.281l1.379-.728c.261.523.597.957 1.008 1.302.415.34.94.511 1.575.511.658 0 1.185-.182 1.582-.546.401-.369.602-.859.602-1.47a1.868 1.868 0 00-1.029-1.694 2.257 2.257 0 00-1.071-.252c-.36 0-.689.051-.987.154-.294.098-.623.317-.987.658a.254.254 0 01-.21-.007l-1.309-.532.462-5.194z",fill:"#212529"})),z||(z=o.createElement("path",{fill:"#E49273",d:"M299 7h1v20h-1z"})),B||(B=o.createElement("path",{d:"M324.366 31.474S330 29.167 330 22.995c0-3.63-2.967-6.42-5.968-7.957a12.577 12.577 0 00-14.382-8.686c-.305.06-.605.132-.9.21a10.27 10.27 0 00-17.681 1.034 10.383 10.383 0 00-14.112 11.355c-1.5-.397-3.576.065-3.23 3.61-3.274 1.436-5.422 5.452-1.961 8.913h52.6z",fill:"#EDEDED",stroke:"#000",strokeWidth:3,strokeMiterlimit:10})),A||(A=o.createElement("path",{d:"M294.202 20.977a1.788 1.788 0 100-3.577 1.788 1.788 0 000 3.577zM306.89 20.977a1.788 1.788 0 100-3.576 1.788 1.788 0 000 3.576z",stroke:"#000",strokeWidth:2,strokeMiterlimit:10})),G||(G=o.createElement("path",{d:"M294.951 19.362a.692.692 0 100-1.383.692.692 0 000 1.383zM307.64 19.362a.692.692 0 100-1.383.692.692 0 000 1.383z",fill:"#000"})),W||(W=o.createElement("path",{d:"M302.454 22.361l-3.004-.002",stroke:"#000",strokeWidth:2,strokeMiterlimit:10})))};function Y(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function ee(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?Y(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function re(){var e=(0,L.Z)(),r=e.answers,n=e.setAnswers,t=(0,o.useState)(r.week),l=t[0],c=t[1];return(0,i.jsxs)(K.Z,{children:[(0,i.jsx)(X,{}),(0,i.jsx)($.X,{children:"Question 2/5"}),(0,i.jsxs)(q.x,{textAlign:"center",mb:6,children:[(0,i.jsx)("br",{}),"Where would you work on a typical week? ",(0,i.jsx)("br",{}),"If you wouldn't work on a given day, don't select anything."]}),(0,i.jsxs)(H.iA,{variant:"striped",children:[(0,i.jsx)(H.hr,{children:(0,i.jsxs)(H.Tr,{children:[(0,i.jsx)(H.Th,{children:"Day:"}),(0,i.jsx)(H.Th,{children:"Office (or onsite) vs home"})]})}),(0,i.jsx)(H.p3,{children:Z.en.map((function(e,r){return(0,i.jsxs)(H.Tr,{children:[(0,i.jsx)(H.Td,{children:e}),(0,i.jsx)(H.Td,{children:(0,i.jsxs)(k,{onChange:function(e){var n=(0,a.Z)(l);n[r]=e,c(n)},children:[(0,i.jsx)(R,{value:"office",children:"Office / Onsite"}),(0,i.jsx)(R,{value:"home",ml:8,children:"Home"})]})})]},e)}))})]}),(0,i.jsx)(V.Z,{href:"/form/Question3",disabled:l.every((function(e){return"didNotWork"===e})),onClick:function(){return n((function(e){var r=ee(ee({},e),{},{week:l});return console.log("form 2 updates: ".concat(JSON.stringify(r))),r}))},children:"Continue"})]})}},9316:function(e,r,n){"use strict";n.d(r,{en:function(){return t},pM:function(){return a},Yd:function(){return i},jW:function(){return o}});var t=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],a=["walk","bicycle","scooter","train/tram","bus","car(shared)","car(solo)"],i=["education","health","transport","finance"],o="https://codeforaustralia.github.io/council-emissions-calculator-spike"},8626:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/Question2",function(){return n(9504)}])},1385:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function a(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(e){if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(r,{Z:function(){return a}})}},function(e){e.O(0,[613,283,774,888,179],(function(){return r=8626,e(e.s=r);var r}));var r=e.O();_N_E=r}]);