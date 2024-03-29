/*! For license information please see 80.0ae6381c.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkfoodwagon_online_shop=self.webpackChunkfoodwagon_online_shop||[]).push([[80],{2281:(e,t)=>{var r=/; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,n=/^[\u000b\u0020-\u007e\u0080-\u00ff]+$/,i=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,o=/\\([\u000b\u0020-\u00ff])/g,a=/([\\"])/g,s=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;function l(e){var t=String(e);if(i.test(t))return t;if(t.length>0&&!n.test(t))throw new TypeError("invalid parameter value");return'"'+t.replace(a,"\\$1")+'"'}function c(e){this.parameters=Object.create(null),this.type=e}t.Q=function(e){if(!e)throw new TypeError("argument string is required");var t="object"===typeof e?function(e){var t;"function"===typeof e.getHeader?t=e.getHeader("content-type"):"object"===typeof e.headers&&(t=e.headers&&e.headers["content-type"]);if("string"!==typeof t)throw new TypeError("content-type header is missing from object");return t}(e):e;if("string"!==typeof t)throw new TypeError("argument string is required to be a string");var n=t.indexOf(";"),i=-1!==n?t.slice(0,n).trim():t.trim();if(!s.test(i))throw new TypeError("invalid media type");var a=new c(i.toLowerCase());if(-1!==n){var l,u,f;for(r.lastIndex=n;u=r.exec(t);){if(u.index!==n)throw new TypeError("invalid parameter format");n+=u[0].length,l=u[1].toLowerCase(),34===(f=u[2]).charCodeAt(0)&&-1!==(f=f.slice(1,-1)).indexOf("\\")&&(f=f.replace(o,"$1")),a.parameters[l]=f}if(n!==t.length)throw new TypeError("invalid parameter format")}return a}},3080:(e,t,r)=>{r.d(t,{Q:()=>x});var n=r(3366),i=r(7462),o=r(1721),a=r(5971),s=r(2281),l=new Map,c=function(e){return e.cloneNode(!0)},u=function(){return"file:"===window.location.protocol},f=function(e,t,r){var n=new XMLHttpRequest;n.onreadystatechange=function(){try{if(!/\.svg/i.test(e)&&2===n.readyState){var t=n.getResponseHeader("Content-Type");if(!t)throw new Error("Content type not found");var i=(0,s.Q)(t).type;if("image/svg+xml"!==i&&"text/plain"!==i)throw new Error("Invalid content type: ".concat(i))}if(4===n.readyState){if(404===n.status||null===n.responseXML)throw new Error(u()?"Note: SVG injection ajax calls do not work locally without adjusting security settings in your browser. Or consider using a local webserver.":"Unable to load SVG file: "+e);if(!(200===n.status||u()&&0===n.status))throw new Error("There was a problem injecting the SVG: "+n.status+" "+n.statusText);r(null,n)}}catch(o){if(n.abort(),!(o instanceof Error))throw o;r(o,n)}},n.open("GET",e),n.withCredentials=t,n.overrideMimeType&&n.overrideMimeType("text/xml"),n.send()},p={},d=function(e,t){p[e]=p[e]||[],p[e].push(t)},h=function(e,t,r){if(l.has(e)){var n=l.get(e);if(void 0===n)return void d(e,r);if(n instanceof SVGSVGElement)return void r(null,c(n))}l.set(e,void 0),d(e,r),f(e,t,(function(t,r){var n;t?l.set(e,t):(null===(n=r.responseXML)||void 0===n?void 0:n.documentElement)instanceof SVGSVGElement&&l.set(e,r.responseXML.documentElement),function(e){for(var t=function(t,r){setTimeout((function(){if(Array.isArray(p[e])){var r=l.get(e),n=p[e][t];r instanceof SVGSVGElement&&n(null,c(r)),r instanceof Error&&n(r),t===p[e].length-1&&delete p[e]}}),0)},r=0,n=p[e].length;r<n;r++)t(r)}(e)}))},v=function(e,t,r){f(e,t,(function(e,t){var n;e?r(e):(null===(n=t.responseXML)||void 0===n?void 0:n.documentElement)instanceof SVGSVGElement&&r(null,t.responseXML.documentElement)}))},m=0,g=[],b={},y="http://www.w3.org/1999/xlink",w=function(e,t,r,n,i,o,s){var l=e.getAttribute("data-src")||e.getAttribute("src");if(l){if(-1!==g.indexOf(e))return g.splice(g.indexOf(e),1),void(e=null);g.push(e),e.setAttribute("src",""),(n?h:v)(l,i,(function(n,i){if(!i)return g.splice(g.indexOf(e),1),e=null,void s(n);var c=e.getAttribute("id");c&&i.setAttribute("id",c);var u=e.getAttribute("title");u&&i.setAttribute("title",u);var f=e.getAttribute("width");f&&i.setAttribute("width",f);var p=e.getAttribute("height");p&&i.setAttribute("height",p);var d=Array.from(new Set((0,a.ev)((0,a.ev)((0,a.ev)([],(i.getAttribute("class")||"").split(" "),!0),["injected-svg"],!1),(e.getAttribute("class")||"").split(" "),!0))).join(" ").trim();i.setAttribute("class",d);var h=e.getAttribute("style");h&&i.setAttribute("style",h),i.setAttribute("data-src",l);var v=[].filter.call(e.attributes,(function(e){return/^data-\w[\w-]*$/.test(e.name)}));if(Array.prototype.forEach.call(v,(function(e){e.name&&e.value&&i.setAttribute(e.name,e.value)})),r){var w,E,S,A,j,O={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],path:[],pattern:["fill","stroke"],radialGradient:["fill","stroke"]};Object.keys(O).forEach((function(e){w=e,S=O[e];for(var t=function(e,t){var r;A=E[e].id,j=A+"-"+ ++m,Array.prototype.forEach.call(S,(function(e){for(var t=0,n=(r=i.querySelectorAll("["+e+'*="'+A+'"]')).length;t<n;t++){var o=r[t].getAttribute(e);o&&!o.match(new RegExp('url\\("?#'+A+'"?\\)'))||r[t].setAttribute(e,"url(#"+j+")")}}));for(var n=i.querySelectorAll("[*|href]"),o=[],a=0,s=n.length;a<s;a++){var l=n[a].getAttributeNS(y,"href");l&&l.toString()==="#"+E[e].id&&o.push(n[a])}for(var c=0,u=o.length;c<u;c++)o[c].setAttributeNS(y,"href","#"+j);E[e].id=j},r=0,n=(E=i.querySelectorAll(w+"[id]")).length;r<n;r++)t(r)}))}i.removeAttribute("xmlns:a");for(var x,C,R=i.querySelectorAll("script"),k=[],I=0,q=R.length;I<q;I++)(C=R[I].getAttribute("type"))&&"application/ecmascript"!==C&&"application/javascript"!==C&&"text/javascript"!==C||((x=R[I].innerText||R[I].textContent)&&k.push(x),i.removeChild(R[I]));if(k.length>0&&("always"===t||"once"===t&&!b[l])){for(var G=0,T=k.length;G<T;G++)new Function(k[G])(window);b[l]=!0}var V=i.querySelectorAll("style");if(Array.prototype.forEach.call(V,(function(e){e.textContent+=""})),i.setAttribute("xmlns","http://www.w3.org/2000/svg"),i.setAttribute("xmlns:xlink",y),o(i),!e.parentNode)return g.splice(g.indexOf(e),1),e=null,void s(new Error("Parent node is null"));e.parentNode.replaceChild(i,e),g.splice(g.indexOf(e),1),e=null,s(null,i)}))}else s(new Error("Invalid data-src or src attribute"))},E=r(2007),S=r(2791),A=["afterInjection","beforeInjection","desc","evalScripts","fallback","httpRequestWithCredentials","loading","renumerateIRIElements","src","title","useRequestCache","wrapper"],j="http://www.w3.org/2000/svg",O="http://www.w3.org/1999/xlink",x=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).initialState={hasError:!1,isLoading:!0},t.state=t.initialState,t._isMounted=!1,t.reactWrapper=void 0,t.nonReactWrapper=void 0,t.refCallback=function(e){t.reactWrapper=e},t}(0,o.Z)(t,e);var r=t.prototype;return r.renderSVG=function(){var e,t=this;if(this.reactWrapper instanceof(e=this.reactWrapper,((null==e?void 0:e.ownerDocument)||document).defaultView||window).Node){var r,n,i=this.props,o=i.desc,a=i.evalScripts,s=i.httpRequestWithCredentials,l=i.renumerateIRIElements,c=i.src,u=i.title,f=i.useRequestCache,p=this.props.onError,d=this.props.beforeInjection,h=this.props.afterInjection,v=this.props.wrapper;"svg"===v?((r=document.createElementNS(j,v)).setAttribute("xmlns",j),r.setAttribute("xmlns:xlink",O),n=document.createElementNS(j,v)):(r=document.createElement(v),n=document.createElement(v)),r.appendChild(n),n.dataset.src=c,this.nonReactWrapper=this.reactWrapper.appendChild(r);var m=function(e){t.removeSVG(),t._isMounted?t.setState((function(){return{hasError:!0,isLoading:!1}}),(function(){p(e)})):p(e)};!function(e,t){var r=void 0===t?{}:t,n=r.afterAll,i=void 0===n?function(){}:n,o=r.afterEach,a=void 0===o?function(){}:o,s=r.beforeEach,l=void 0===s?function(){}:s,c=r.cacheRequests,u=void 0===c||c,f=r.evalScripts,p=void 0===f?"never":f,d=r.httpRequestWithCredentials,h=void 0!==d&&d,v=r.renumerateIRIElements,m=void 0===v||v;if(e&&"length"in e)for(var g=0,b=0,y=e.length;b<y;b++)w(e[b],p,m,u,h,l,(function(t,r){a(t,r),e&&"length"in e&&e.length===++g&&i(g)}));else e?w(e,p,m,u,h,l,(function(t,r){a(t,r),i(1),e=null})):i(0)}(n,{afterEach:function(e,r){e?m(e):t._isMounted&&t.setState((function(){return{isLoading:!1}}),(function(){try{h(r)}catch(e){m(e)}}))},beforeEach:function(e){if(e.setAttribute("role","img"),o){var t=e.querySelector(":scope > desc");t&&e.removeChild(t);var r=document.createElement("desc");r.innerHTML=o,e.prepend(r)}if(u){var n=e.querySelector(":scope > title");n&&e.removeChild(n);var i=document.createElement("title");i.innerHTML=u,e.prepend(i)}try{d(e)}catch(a){m(a)}},cacheRequests:f,evalScripts:a,httpRequestWithCredentials:s,renumerateIRIElements:l})}},r.removeSVG=function(){var e;null!=(e=this.nonReactWrapper)&&e.parentNode&&(this.nonReactWrapper.parentNode.removeChild(this.nonReactWrapper),this.nonReactWrapper=null)},r.componentDidMount=function(){this._isMounted=!0,this.renderSVG()},r.componentDidUpdate=function(e){var t=this;(function(e,t){for(var r in e)if(!(r in t))return!0;for(var n in t)if(e[n]!==t[n])return!0;return!1})((0,i.Z)({},e),this.props)&&this.setState((function(){return t.initialState}),(function(){t.removeSVG(),t.renderSVG()}))},r.componentWillUnmount=function(){this._isMounted=!1,this.removeSVG()},r.render=function(){var e=this.props;e.afterInjection,e.beforeInjection,e.desc,e.evalScripts;var t=e.fallback;e.httpRequestWithCredentials;var r=e.loading;e.renumerateIRIElements,e.src,e.title,e.useRequestCache;var o=e.wrapper,a=(0,n.Z)(e,A),s=o;return S.createElement(s,(0,i.Z)({},a,{ref:this.refCallback},"svg"===o?{xmlns:j,xmlnsXlink:O}:{}),this.state.isLoading&&r&&S.createElement(r,null),this.state.hasError&&t&&S.createElement(t,null))},t}(S.Component);x.defaultProps={afterInjection:function(){},beforeInjection:function(){},desc:"",evalScripts:"never",fallback:null,httpRequestWithCredentials:!1,loading:null,onError:function(){},renumerateIRIElements:!0,title:"",useRequestCache:!0,wrapper:"div"},x.propTypes={afterInjection:E.func,beforeInjection:E.func,desc:E.string,evalScripts:E.oneOf(["always","once","never"]),fallback:E.oneOfType([E.func,E.object,E.string]),httpRequestWithCredentials:E.bool,loading:E.oneOfType([E.func,E.object,E.string]),onError:E.func,renumerateIRIElements:E.bool,src:E.string.isRequired,title:E.string,useRequestCache:E.bool,wrapper:E.oneOf(["div","span","svg"])}},7462:(e,t,r)=>{function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}r.d(t,{Z:()=>n})},1721:(e,t,r)=>{function n(e,t){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},n(e,t)}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,n(e,t)}r.d(t,{Z:()=>i})},3366:(e,t,r)=>{function n(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}r.d(t,{Z:()=>n})},5971:(e,t,r)=>{r.d(t,{_T:()=>n,ev:()=>i});function n(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}Object.create;function i(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError}}]);
//# sourceMappingURL=80.0ae6381c.chunk.js.map