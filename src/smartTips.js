(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,F=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),K=new WeakMap;let nt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(F&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=K.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&K.set(e,t))}return t}toString(){return this.cssText}};const ft=r=>new nt(typeof r=="string"?r:r+"",void 0,W),lt=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new nt(e,r,W)},$t=(r,t)=>{if(F)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=N.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},Y=F?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ft(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:mt,defineProperty:gt,getOwnPropertyDescriptor:_t,getOwnPropertyNames:yt,getOwnPropertySymbols:vt,getPrototypeOf:At}=Object,m=globalThis,G=m.trustedTypes,bt=G?G.emptyScript:"",I=m.reactiveElementPolyfillSupport,E=(r,t)=>r,L={toAttribute(r,t){switch(t){case Boolean:r=r?bt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},q=(r,t)=>!mt(r,t),Q={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:q};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),m.litPropertyMetadata??(m.litPropertyMetadata=new WeakMap);class v extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Q){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&gt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=_t(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const h=s==null?void 0:s.call(this);o.call(this,n),this.requestUpdate(t,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Q}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;const t=At(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){const e=this.properties,i=[...yt(e),...vt(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Y(s))}else t!==void 0&&e.push(Y(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $t(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var o;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:L).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var o;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:L;this._$Em=s,this[s]=h.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??q)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[E("elementProperties")]=new Map,v[E("finalized")]=new Map,I==null||I({ReactiveElement:v}),(m.reactiveElementVersions??(m.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=globalThis,k=w.trustedTypes,X=k?k.createPolicy("lit-html",{createHTML:r=>r}):void 0,ht="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,at="?"+$,xt=`<${at}>`,y=document,P=()=>y.createComment(""),C=r=>r===null||typeof r!="object"&&typeof r!="function",ct=Array.isArray,St=r=>ct(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",D=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tt=/-->/g,et=/>/g,g=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),st=/'/g,it=/"/g,dt=/^(?:script|style|textarea|title)$/i,Et=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),R=Et(1),b=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),rt=new WeakMap,_=y.createTreeWalker(y,129);function pt(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return X!==void 0?X.createHTML(t):t}const wt=(r,t)=>{const e=r.length-1,i=[];let s,o=t===2?"<svg>":"",n=S;for(let h=0;h<e;h++){const l=r[h];let c,p,a=-1,u=0;for(;u<l.length&&(n.lastIndex=u,p=n.exec(l),p!==null);)u=n.lastIndex,n===S?p[1]==="!--"?n=tt:p[1]!==void 0?n=et:p[2]!==void 0?(dt.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=g):p[3]!==void 0&&(n=g):n===g?p[0]===">"?(n=s??S,a=-1):p[1]===void 0?a=-2:(a=n.lastIndex-p[2].length,c=p[1],n=p[3]===void 0?g:p[3]==='"'?it:st):n===it||n===st?n=g:n===tt||n===et?n=S:(n=g,s=void 0);const f=n===g&&r[h+1].startsWith("/>")?" ":"";o+=n===S?l+xt:a>=0?(i.push(c),l.slice(0,a)+ht+l.slice(a)+$+f):l+$+(a===-2?h:f)}return[pt(r,o+(r[e]||"<?>")+(t===2?"</svg>":"")),i]};class T{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const h=t.length-1,l=this.parts,[c,p]=wt(t,e);if(this.el=T.createElement(c,i),_.currentNode=this.el.content,e===2){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(s=_.nextNode())!==null&&l.length<h;){if(s.nodeType===1){if(s.hasAttributes())for(const a of s.getAttributeNames())if(a.endsWith(ht)){const u=p[n++],f=s.getAttribute(a).split($),H=/([.?@])?(.*)/.exec(u);l.push({type:1,index:o,name:H[2],strings:f,ctor:H[1]==="."?Ct:H[1]==="?"?Tt:H[1]==="@"?Ot:z}),s.removeAttribute(a)}else a.startsWith($)&&(l.push({type:6,index:o}),s.removeAttribute(a));if(dt.test(s.tagName)){const a=s.textContent.split($),u=a.length-1;if(u>0){s.textContent=k?k.emptyScript:"";for(let f=0;f<u;f++)s.append(a[f],P()),_.nextNode(),l.push({type:2,index:++o});s.append(a[u],P())}}}else if(s.nodeType===8)if(s.data===at)l.push({type:2,index:o});else{let a=-1;for(;(a=s.data.indexOf($,a+1))!==-1;)l.push({type:7,index:o}),a+=$.length-1}o++}}static createElement(t,e){const i=y.createElement("template");return i.innerHTML=t,i}}function x(r,t,e=r,i){var n,h;if(t===b)return t;let s=i!==void 0?(n=e._$Co)==null?void 0:n[i]:e._$Cl;const o=C(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((h=s==null?void 0:s._$AO)==null||h.call(s,!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=x(r,s._$AS(r,t.values),s,i)),t}class Pt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??y).importNode(e,!0);_.currentNode=s;let o=_.nextNode(),n=0,h=0,l=i[0];for(;l!==void 0;){if(n===l.index){let c;l.type===2?c=new M(o,o.nextSibling,this,t):l.type===1?c=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(c=new Ut(o,this,t)),this._$AV.push(c),l=i[++h]}n!==(l==null?void 0:l.index)&&(o=_.nextNode(),n++)}return _.currentNode=y,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class M{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=x(this,t,e),C(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==b&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):St(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==d&&C(this._$AH)?this._$AA.nextSibling.data=t:this.T(y.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=T.createElement(pt(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(e);else{const n=new Pt(s,this),h=n.u(this.options);n.p(e),this.T(h),this._$AH=n}}_$AC(t){let e=rt.get(t.strings);return e===void 0&&rt.set(t.strings,e=new T(t)),e}k(t){ct(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new M(this.S(P()),this.S(P()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(o===void 0)t=x(this,t,e,0),n=!C(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else{const h=t;let l,c;for(t=o[0],l=0;l<o.length-1;l++)c=x(this,h[i+l],e,l),c===b&&(c=this._$AH[l]),n||(n=!C(c)||c!==this._$AH[l]),c===d?t=d:t!==d&&(t+=(c??"")+o[l+1]),this._$AH[l]=c}n&&!s&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ct extends z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Tt extends z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Ot extends z{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=x(this,t,e,0)??d)===b)return;const i=this._$AH,s=t===d&&i!==d||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ut{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){x(this,t)}}const B=w.litHtmlPolyfillSupport;B==null||B(T,M),(w.litHtmlVersions??(w.litHtmlVersions=[])).push("3.1.2");const Mt=(r,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const o=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new M(t.insertBefore(P(),o),o,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class A extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Mt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return b}}var ot;A._$litElement$=!0,A.finalized=!0,(ot=globalThis.litElementHydrateSupport)==null||ot.call(globalThis,{LitElement:A});const V=globalThis.litElementPolyfillSupport;V==null||V({LitElement:A});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ut=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:q},Nt=(r=Ht,t,e)=>{const{kind:i,metadata:s}=e;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(e.name,r),i==="accessor"){const{name:n}=e;return{set(h){const l=t.get.call(this);t.set.call(this,h),this.requestUpdate(n,l,r)},init(h){return h!==void 0&&this.P(n,void 0,r),h}}}if(i==="setter"){const{name:n}=e;return function(h){const l=this[n];t.call(this,h),this.requestUpdate(n,l,r)}}throw Error("Unsupported decorator location: "+i)};function j(r){return(t,e)=>typeof e=="object"?Nt(r,t,e):((i,s,o)=>{const n=s.hasOwnProperty(o);return s.constructor.createProperty(o,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(s,o):void 0})(r,t,e)}const Rt="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='25.6'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20320'%3e%3cpath%20fill='%2300E8FF'%20d='m64%20192l25.926-44.727l38.233-19.114l63.974%2063.974l10.833%2061.754L192%20320l-64-64l-38.074-25.615z'%3e%3c/path%3e%3cpath%20fill='%23283198'%20d='M128%20256V128l64-64v128l-64%2064ZM0%20256l64%2064l9.202-60.602L64%20192l-37.542%2023.71L0%20256Z'%3e%3c/path%3e%3cpath%20fill='%23324FFF'%20d='M64%20192V64l64-64v128l-64%2064Zm128%20128V192l64-64v128l-64%2064ZM0%20256V128l64%2064l-64%2064Z'%3e%3c/path%3e%3cpath%20fill='%230FF'%20d='M64%20320V192l64%2064z'%3e%3c/path%3e%3c/svg%3e",Lt="/vite.svg";var kt=Object.defineProperty,zt=Object.getOwnPropertyDescriptor,Z=(r,t,e,i)=>{for(var s=i>1?void 0:i?zt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&kt(t,e,s),s};let O=class extends A{constructor(){super(...arguments),this.docsHint="Click on the Vite and Lit logos to learn more",this.count=0}render(){return R`
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src=${Lt} class="logo" alt="Vite logo" />
        </a>
        <a href="https://lit.dev" target="_blank">
          <img src=${Rt} class="logo lit" alt="Lit logo" />
        </a>
      </div>
      <slot></slot>
      <div class="card">
        <button @click=${this._onClick} part="button">
          count is ${this.count}
        </button>
      </div>
      <p class="read-the-docs">${this.docsHint}</p>
    `}_onClick(){this.count++}};O.styles=lt`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.lit:hover {
      filter: drop-shadow(0 0 2em #325cffaa);
    }

    .card {
      padding: 2em;
    }

    .read-the-docs {
      color: #888;
    }

    ::slotted(h1) {
      font-size: 3.2em;
      line-height: 1.1;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
    a:hover {
      color: #535bf2;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
  `;Z([j()],O.prototype,"docsHint",2);Z([j({type:Number})],O.prototype,"count",2);O=Z([ut("my-element")],O);function jt(r,t,e=!1){let i=null;return function(...s){const o=this,n=()=>{i=null,e||r.apply(o,s)},h=e&&!i;i!==null&&clearTimeout(i),i=setTimeout(n,t),h&&r.apply(o,s)}}const It=(r,t)=>{const e=r.trim(),i=t.trim(),s=e.indexOf(i);return s===-1?e:e.slice(s+i.length).replace(/\n/g,"<br />")};var Dt=Object.defineProperty,Bt=Object.getOwnPropertyDescriptor,J=(r,t,e,i)=>{for(var s=i>1?void 0:i?Bt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Dt(t,e,s),s};let U=class extends A{constructor(){super(),this.userText="",this.promptText="",this.getPrompt=jt(r=>this.setPromptText(r),550),this.placeholder="即刻开始改变世界！"}firstUpdated(){this.renderRoot.getElementById("dzm-textarea").focus(),this.promptText=this.placeholder}render(){return R`
      <div id="box" class="box" @click=${this.ClickInput} >
        <span id="dzm-textarea" class="dzm-textarea" contenteditable="true"  @input=${r=>this.inputChange(r)}></span>
        ${this.getSmartTips()}
      </div>
      <button @click=${this.acceptingTeleprompter}>接受提词器</button>
    `}acceptingTeleprompter(){let r=this.userText+this.promptText,t=this.renderRoot.getElementById("dzm-textarea");t.innerHTML=r,this.promptText=""}getSmartTips(){const r=this.promptText.split("<br />");return R`
      <span class="PromptContent">
      ${r.map(t=>R`${t}<br>`)}
    </span>
    `}inputChange(r){let e=r.target.textContent||"";this.userText=e||"";const i={text:this.userText};this.getPrompt(i)}setPromptText(r){r.text&&fetch("http://localhost:8000/api/smartCompose",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(t=>{if(!t.ok)throw new Error("Network response was not ok "+t.statusText);return t.json()}).then(t=>{console.log("Success:",t),t.completion?this.userText?this.promptText=It(t.completion,this.userText):this.promptText=this.placeholder:this.promptText="很抱歉，无法为您提供帮助！"}).catch(t=>{console.error("Error:",t)})}ClickInput(r){var i,s;let t=this.renderRoot.getElementById("dzm-textarea");if(t==r.target)return;t.focus(),console.log("执行了聚焦");let e=window.getSelection();if(e){let o=((s=(i=t.lastChild)==null?void 0:i.textContent)==null?void 0:s.length)||0,n=t.lastChild;if(n){let h=document.createRange();h.setStart(n,o),h.setEnd(n,o),e.removeAllRanges(),e.addRange(h)}}}};U.styles=lt`
    :host {
      margin: 0 auto;
    }

    .box {
      width: 35ch; 
      border: 1px solid red; 
      word-wrap: break-word; /* 在必要时可以在单词内换行 */
      white-space: normal; /* 允许自然换行 */
    }

    .dzm-textarea {  
      border: 0;
    }

    [contenteditable]:focus {
      outline: none;
    }

    .PromptContent {
      color: rgb(192, 192, 192);
      user-select:none;
    }
  `;J([j({type:String})],U.prototype,"userText",2);J([j({type:String})],U.prototype,"promptText",2);U=J([ut("smart-tips")],U);
