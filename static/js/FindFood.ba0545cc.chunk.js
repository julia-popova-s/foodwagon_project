(self.webpackChunkfoodwagon_online_shop=self.webpackChunkfoodwagon_online_shop||[]).push([[775],{4779:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Ee});var o=n(1632),s=n(9806),r=n(2791),a=n(9434),i=n(7689),c=n(3080),l=n(3232),d=n(2435),u=n(5742),p=n(4850),f=n(3947),m=n(7540);function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},h.apply(this,arguments)}const _=(e,t)=>{const n={};for(const o in e)-1===t.indexOf(o)&&(n[o]=e[o]);return n},v=r.createContext(null),y=r.createContext(null),b=e=>t=>r.createElement(y.Consumer,null,(n=>r.createElement(e,h({parent:n},t)))),g=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const[t,n]=(0,r.useState)(!1),o=(0,r.useRef)(e),s=(()=>{const e=(0,r.useContext)(v);if(null===e)throw new Error("Couldn't find Yandex.Maps API in the context. Make sure that hook useYMaps is inside <YMaps /> provider");return e})(),a=s.getApi();return(0,r.useEffect)((()=>{s.load().then((()=>Promise.all(o.current.map(s.loadModule)))).then((()=>n(!0)))}),[]),t&&a?a:null},j=()=>{},C=["onLoad","onError","modules","apiLoader"];function O(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return o=>{const{width:s,height:a,modules:i=[],onLoad:c=j}=o,l=g(n.concat(i)),d=!t||!!l,u=_(o,C);return(0,r.useEffect)((()=>l?c(l):void 0),[l]),d?r.createElement(e,h({ymaps:l},u)):r.createElement("div",{style:{width:s,height:a}})}}const x="undefined"!=typeof window,E={lang:"ru_RU",load:"",ns:"",mode:"release"},w=e=>{const{version:t="2.1",enterprise:n=!1,query:o={lang:"ru_RU",load:"",ns:""},preload:s=!1,children:a}=e,i=(0,r.useRef)((e=>{const{query:t=E}=e,n=Date.now().toString(32),o=t.ns||"",s="__yandex-maps-api-onload__$$"+n,r="__yandex-maps-api-onerror__$$"+n,a=x?window:{},i={};let c;const l=()=>o?a[o]:c,d=()=>{delete a[s],delete a[r]};return{load:()=>{if(l())return Promise.resolve(c);if(i[o])return i[o];const n={onload:s,onerror:r,...E,...t},u=Object.keys(n).map((e=>"".concat(e,"=").concat(n[e]))).join("&"),p=["https://".concat(e.enterprise?"enterprise.":"","api-maps.yandex.ru"),e.version,"?"+u].join("/");return i[o]=new Promise(((e,t)=>{a[s]=t=>{d(),t.ready((()=>{c=t,e(t)}))},a[r]=e=>{d(),t(e)},(e=>new Promise(((t,n)=>{const o=document.createElement("script");o.type="text/javascript",o.onload=t,o.onerror=n,o.src=e,o.async=!0,document.head.appendChild(o)})))(p).catch(a[r])})),i[o]},getApi:l,loadModule:e=>new Promise(((t,n)=>{c.modules.require(e).done((n=>{n.forEach((t=>{!function(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const s="string"==typeof t?t.split("."):t.slice();let r,a=e;for(;s.length>1;)r=s.shift(),a[r]||(a[r]={}),a=a[r];const i=s[0];a[i]=!0===o&&a[i]||n}(c,e,t,!0)})),t(c)}),n)}))}})({version:t,enterprise:n,query:o,preload:s}));return(0,r.useEffect)((()=>{s&&i.current.load()}),[i.current]),r.createElement(v.Provider,{value:i.current},a)},k=/^on(?=[A-Z])/;function R(e){return Object.keys(e).reduce(((t,n)=>{if(k.test(n)){const o=n.replace(k,"").toLowerCase();t._events[o]=e[n]}else t[n]=e[n];return t}),{_events:{}})}function N(e,t,n){"function"==typeof n&&e.events.add(t,n)}function F(e,t,n){"function"==typeof n&&e.events.remove(t,n)}function P(e,t,n){Object.keys(Object.assign({},t,n)).forEach((o=>{t[o]!==n[o]&&(F(e,o,t[o]),N(e,o,n[o]))}))}const D=e=>"default"+e.charAt(0).toUpperCase()+e.slice(1);function S(e,t){return void 0!==e[t]||void 0===e[D(t)]}function I(e,t,n){return(S(e,t)?e[t]:e[D(t)])||n}function U(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(e!==t){if(e&&("current"in e?e.current=null:"function"==typeof e&&e(null)),!t)return;"current"in t?t.current=n:"function"==typeof t&&t(n)}}function T(e){const{width:t,height:n,style:o,className:s}=e;return void 0!==o||void 0!==s?Object.assign({},o&&{style:o},s&&{className:s}):{style:{width:t,height:n}}}class M extends r.Component{constructor(e){super(e),this.state={error:null,errorInfo:null}}componentDidCatch(e,t){const{onError:n=(()=>{})}=this.props;n(e),this.setState({error:e,errorInfo:t})}render(){return this.state.error?null:this.props.children}}const A=e=>t=>{let{onError:n,...o}=t;return r.createElement(M,{onError:n},r.createElement(e,o))};class B extends r.Component{constructor(){super(),this.instance=null,this.state={instance:null},this._parentElement=null,this._getRef=e=>{this._parentElement=e}}componentDidMount(){this.instance=B.mountObject(this._parentElement,this.props.ymaps.Map,this.props),this.setState({instance:this.instance})}componentDidUpdate(e){null!==this.instance&&B.updateObject(this.instance,e,this.props)}componentWillUnmount(){B.unmountObject(this.instance,this.props)}render(){const e=T(this.props),t=R(this.props),n=_(t,["_events","state","defaultState","options","defaultOptions","instanceRef","ymaps","children","width","height","style","className"]);return r.createElement(y.Provider,{value:this.state.instance},r.createElement("div",h({ref:this._getRef},e,n),this.props.children))}static mountObject(e,t,n){const{instanceRef:o,_events:s}=R(n),r=new t(e,I(n,"state"),I(n,"options"));return Object.keys(s).forEach((e=>N(r,e,s[e]))),U(null,o,r),r}static updateObject(e,t,n){const{_events:o,instanceRef:s}=R(n),{_events:r,instanceRef:a}=R(t);if(S(n,"state")){const o=I(t,"state",{}),s=I(n,"state",{});o.type!==s.type&&e.setType(s.type),o.behaviors!==s.behaviors&&(o.behaviors&&e.behaviors.disable(o.behaviors),s.behaviors&&e.behaviors.enable(s.behaviors)),s.zoom&&o.zoom!==s.zoom&&e.setZoom(s.zoom),s.center&&o.center!==s.center&&e.setCenter(s.center),s.bounds&&o.bounds!==s.bounds&&e.setBounds(s.bounds)}if(S(n,"options")){const o=I(t,"options"),s=I(n,"options",{});o!==s&&e.options.set(s)}I(t,"width")===I(n,"width")&&I(t,"height")===I(n,"height")||e.container.fitToViewport(),P(e,r,o),U(a,s,e)}static unmountObject(e,t){const{instanceRef:n,_events:o}=R(t);null!==e&&(Object.keys(o).forEach((t=>F(e,t,o[t]))),e.destroy(),U(n))}}const L=A(O(B,!0,["Map"]));L.defaultProps={width:320,height:240};class z extends r.Component{constructor(){super(),this.state={instance:null},this._parentElement=null,this._getRef=e=>{this._parentElement=e}}componentDidMount(){this._mounted=!0,this.props.ymaps.panorama.isSupported()&&z.mountObject(this._parentElement,this.props.ymaps.panorama,this.props).then((e=>this._mounted&&this.setState({instance:e})))}componentDidUpdate(e){null!==this.state.instance&&z.updateObject(this.state.instance,e,this.props)}componentWillUnmount(){this._mounted=!1,z.unmountObject(this.state.instance,this.props)}render(){const e=T(this.props);return r.createElement("div",h({ref:this._getRef},e))}static mountObject(e,t,n){const{instanceRef:o,_events:s}=R(n),r=I(n,"point"),a=I(n,"locateOptions"),i=I(n,"options");return new Promise(((n,c)=>{t.locate(r,a).done((r=>{if(r.length>0){const a=new t.Player(e,r[0],i);U(null,o,a),Object.keys(s).forEach((e=>N(a,e,s[e]))),n(a)}}),c)}))}static updateObject(e,t,n){const{_events:o,instanceRef:s}=R(n),{_events:r,instanceRef:a}=R(t);if(S(n,"options")){const o=I(t,"options"),s=I(n,"options");o!==s&&e.options.set(s)}if(S(n,"point")){const o=I(n,"point"),s=I(t,"point"),r=I(n,"locateOptions");o!==s&&e.moveTo(o,r)}P(e,r,o),U(a,s,e)}static unmountObject(e,t){const{instanceRef:n,_events:o}=R(t);null!==e&&(Object.keys(o).forEach((t=>F(e,t,o[t]))),U(n))}}A(O(z,!0,["panorama.isSupported","panorama.locate","panorama.createPlayer","panorama.Player"])).defaultProps={width:320,height:240};class Z extends r.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const e=Z.mountControl(this.props.ymaps.control[this.props.name],this.props);this.instance=e,this.setState({instance:e})}componentDidUpdate(e){null!==this.instance&&Z.updateControl(this.instance,e,this.props)}componentWillUnmount(){Z.unmountControl(this.instance,this.props)}render(){return r.createElement(y.Provider,{value:this.state.instance},this.props.children)}static mountControl(e,t){const{instanceRef:n,parent:o,lazy:s,_events:r}=R(t),a=new e({data:I(t,"data"),options:I(t,"options"),state:I(t,"state"),mapTypes:I(t,"mapTypes"),lazy:s});if(Object.keys(r).forEach((e=>N(a,e,r[e]))),o&&o.controls&&"function"==typeof o.controls.add)o.controls.add(a);else{if(!o||!o.add||"function"!=typeof o.add)throw new Error("No parent found to mount ".concat(t.name));o.add(a)}return U(null,n,a),a}static updateControl(e,t,n){const{_events:o,instanceRef:s}=R(n),{_events:r,instanceRef:a}=R(t);if(S(n,"options")){const o=I(t,"options"),s=I(n,"options");o!==s&&e.options.set(s)}if(S(n,"data")){const o=I(t,"data"),s=I(n,"data");o!==s&&e.data.set(s)}if(S(n,"state")){const o=I(t,"state"),s=I(n,"state");o!==s&&e.state.set(s)}if(S(n,"mapTypes")){const o=I(t,"mapTypes"),s=I(n,"mapTypes");o!==s&&(e.removeAllMapTypes(),s.forEach((t=>e.addMapType(t))))}P(e,r,o),U(a,s,e)}static unmountControl(e,t){const{instanceRef:n,parent:o,_events:s}=R(t);null!==e&&(Object.keys(s).forEach((t=>F(e,t,s[t]))),o.controls&&"function"==typeof o.controls.remove?o.controls.remove(e):o.remove&&"function"==typeof o.remove&&o.remove(e),U(n))}}A(b(O((e=>r.createElement(Z,h({},e,{name:"Button"}))),!0,["control.Button"]))),A(b(O((e=>r.createElement(Z,h({},e,{name:"FullscreenControl"}))),!0,["control.FullscreenControl"]))),A(b(O((e=>r.createElement(Z,h({},e,{name:"GeolocationControl"}))),!0,["control.GeolocationControl"]))),A(b(O((e=>r.createElement(Z,h({},e,{name:"ListBox"}))),!0,["control.ListBox"]))),A(b(O((e=>r.createElement(Z,h({},e,{name:"ListBoxItem"}))),!0,["control.ListBoxItem"]))),A(b(O((e=>r.createElement(Z,h({},e,{name:"RouteButton"}))),!0,["control.RouteButton"]))),A(b(O((e=>r.createElement(Z,h({},e,{name:"RouteEditor"}))),!0,["control.RouteEditor"]))),A(b(O((e=>r.createElement(Z,h({},e,{name:"RoutePanel"}))),!0,["control.RoutePanel"]))),A(b(O((e=>r.createElement(Z,h({},e,{name:"RulerControl"}))),!0,["control.RulerControl"]))),A(b(O((e=>r.createElement(Z,h({},e,{name:"SearchControl"}))),!0,["control.SearchControl"]))),A(b(O((e=>r.createElement(Z,h({},e,{name:"TrafficControl"}))),!0,["control.TrafficControl"]))),A(b(O((e=>r.createElement(Z,h({},e,{name:"TypeSelector"}))),!0,["control.TypeSelector"]))),A(b(O((e=>r.createElement(Z,h({},e,{name:"ZoomControl"}))),!0,["control.ZoomControl"])));class W extends r.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const e=W.mountObject(this.props.ymaps.Clusterer,this.props);this.instance=e,this.setState({instance:e})}componentDidUpdate(e){null!==this.state.instance&&W.updateObject(this.instance,e,this.props)}componentWillUnmount(){W.unmountObject(this.instance,this.props)}render(){return r.createElement(y.Provider,{value:this.state.instance},this.props.children)}static mountObject(e,t){const{instanceRef:n,parent:o,_events:s}=R(t),r=new e(I(t,"options"));if(Object.keys(s).forEach((e=>N(r,e,s[e]))),o.geoObjects&&"function"==typeof o.geoObjects.add)o.geoObjects.add(r);else{if(!o.add||"function"!=typeof o.add)throw new Error("No parent found to mount Clusterer");o.add(r)}return U(null,n,r),r}static updateObject(e,t,n){const{_events:o,instanceRef:s}=R(n),{_events:r,instanceRef:a}=R(t);if(S(n,"options")){const o=I(t,"options"),s=I(n,"options");o!==s&&e.options.set(s)}P(e,r,o),U(a,s,e)}static unmountObject(e,t){const{instanceRef:n,parent:o,_events:s}=R(t);null!==e&&(Object.keys(s).forEach((t=>F(e,t,s[t]))),o.geoObjects&&"function"==typeof o.geoObjects.remove?o.geoObjects.remove(e):o.remove&&"function"==typeof o.remove&&o.remove(e),U(n))}}A(b(O(W,!0,["Clusterer"])));class Q extends r.Component{constructor(){super(),this.state={instance:null}}componentDidMount(){const e=Q.mountObject(this.props.ymaps.ObjectManager,this.props);this.instance=e,this.setState({instance:e})}componentDidUpdate(e){null!==this.instance&&Q.updateObject(this.instance,e,this.props)}componentWillUnmount(){Q.unmountObject(this.instance,this.props)}render(){return null}static mountObject(e,t){const{instanceRef:n,parent:o,_events:s}=R(t),r=I(t,"options",{}),a=I(t,"features",{}),i=I(t,"filter",null),c=I(t,"objects",{}),l=I(t,"clusters",{}),d=new e(r);if(d.add(a||[]),d.setFilter(i),d.objects.options.set(c),d.clusters.options.set(l),Object.keys(s).forEach((e=>N(d,e,s[e]))),o.geoObjects&&"function"==typeof o.geoObjects.add)o.geoObjects.add(d);else{if(!o.add||"function"!=typeof o.add)throw new Error("No parent found to mount ObjectManager");o.add(d)}return U(null,n,d),d}static updateObject(e,t,n){const{_events:o,instanceRef:s}=R(n),{_events:r,instanceRef:a}=R(t);if(S(n,"options")){const o=I(t,"options"),s=I(n,"options");o!==s&&e.options.set(s)}if(S(n,"objects")){const o=I(t,"objects"),s=I(n,"objects");o!==s&&e.objects.options.set(s)}if(S(n,"clusters")){const o=I(t,"clusters"),s=I(n,"clusters");o!==s&&e.clusters.options.set(s)}if(S(n,"filter")){const o=I(t,"filter"),s=I(n,"filter");o!==s&&e.setFilter(s)}if(S(n,"features")){const o=I(t,"features"),s=I(n,"features");o!==s&&(e.remove(o),e.add(s))}P(e,r,o),U(a,s,e)}static unmountObject(e,t){const{instanceRef:n,parent:o,_events:s}=R(t);null!==e&&(Object.keys(s).forEach((t=>F(e,t,s[t]))),o.geoObjects&&"function"==typeof o.geoObjects.remove?o.geoObjects.remove(e):o.remove&&"function"==typeof o.remove&&o.remove(e),U(n))}}var $=A(b(O(Q,!0,["ObjectManager"])));class V extends r.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const{name:e,ymaps:t,dangerZone:n}=this.props,o=V.mountObject(n&&"function"==typeof n.modifyConstructor?n.modifyConstructor(t[e]):t[e],this.props);this.instance=o,this.setState({instance:o})}componentDidUpdate(e){null!==this.instance&&V.updateObject(this.instance,e,this.props)}componentWillUnmount(){V.unmountObject(this.instance,this.props)}render(){return null}static mountObject(e,t){const{instanceRef:n,parent:o,_events:s}=R(t),r=new e(I(t,"geometry"),I(t,"properties"),I(t,"options"));if(Object.keys(s).forEach((e=>N(r,e,s[e]))),o&&o.geoObjects&&"function"==typeof o.geoObjects.add)o.geoObjects.add(r);else{if(!o||!o.add||"function"!=typeof o.add)throw new Error("No parent found to mount ".concat(t.name));o.add(r)}return U(null,n,r),r}static updateObject(e,t,n){const{_events:o,instanceRef:s}=R(n),{_events:r,instanceRef:a}=R(t);if(S(n,"geometry")){const o=I(t,"geometry",{}),s=I(n,"geometry",{});Array.isArray(s)&&s!==o?Array.isArray(s[0])&&"number"==typeof s[1]?(e.geometry.setCoordinates(s[0]),e.geometry.setRadius(s[1])):e.geometry.setCoordinates(s):"object"==typeof s&&(s.coordinates!==o.coordinates&&e.geometry.setCoordinates(s.coordinates),s.radius!==o.radius&&e.geometry.setRadius(s.radius))}if(S(n,"properties")){const o=I(t,"properties"),s=I(n,"properties");o!==s&&e.properties.set(s)}if(S(n,"options")){const o=I(t,"options"),s=I(n,"options");o!==s&&e.options.set(s)}P(e,r,o),U(a,s,e)}static unmountObject(e,t){const{instanceRef:n,parent:o,_events:s}=R(t);null!==e&&(Object.keys(s).forEach((t=>F(e,t,s[t]))),o.geoObjects&&"function"==typeof o.geoObjects.remove?o.geoObjects.remove(e):o.remove&&"function"==typeof o.remove&&o.remove(e),U(n))}}const q={modifyConstructor(e){function t(t,n,o){e.call(this,{geometry:t,properties:n},o)}return t.prototype=e.prototype,t}};A(b(O((e=>r.createElement(V,h({},e,{name:"GeoObject",dangerZone:q}))),!0,["GeoObject"]))),A(b(O((e=>r.createElement(V,h({},e,{name:"Circle"}))),!0,["Circle"])));var G=A(b(O((e=>r.createElement(V,h({},e,{name:"Placemark"}))),!0,["Placemark"]))),K=(A(b(O((e=>r.createElement(V,h({},e,{name:"Polygon"}))),!0,["Polygon"]))),A(b(O((e=>r.createElement(V,h({},e,{name:"Polyline"}))),!0,["Polyline"]))),A(b(O((e=>r.createElement(V,h({},e,{name:"Rectangle"}))),!0,["Rectangle"]))),n(1694)),Y=n.n(K),H=n(5095),X=n.n(H);const J={balloon:"balloon_balloon__Ip6jF",balloon__logo:"balloon_balloon__logo__zjO7C",balloon__closeIcon:"balloon_balloon__closeIcon__P0USw",balloon__image:"balloon_balloon__image__bqjgK",balloon__close:"balloon_balloon__close__O0nhr",visible:"balloon_visible__ozQHK"};var ee=n(184);const te=e=>{let{address:t,coord:n,handleClick:o,isActive:s,status:r}=e;return(0,ee.jsxs)("div",{className:Y()(J.balloon,{[J.visible]:s}),children:[(0,ee.jsx)("div",{className:J.balloon__contact,children:"Your location:"}),(0,ee.jsx)("div",{className:J.balloon__address,children:t}),(0,ee.jsxs)("div",{className:J.balloon__address,children:["Coordinates: ",n.join(", ")]}),(0,ee.jsxs)("div",{children:["Delivery: ",r?"Available":"No"]}),(0,ee.jsx)("button",{className:J.balloon__close,onClick:o,children:(0,ee.jsx)(c.Q,{className:J.balloon__closeIcon,src:"".concat("/foodwagon-online-shop","/images/find-food/close.svg"),wrapper:"span"})})]})},ne={features:[{geometry:{coordinates:[[[30.317557572666534,59.926709209445455],[30.31853845407954,59.908747560199146],[30.321055173222035,59.908938009542545],[30.340903519932148,59.91628143603289],[30.34536671573281,59.91628143603289],[30.35171818668041,59.915290195578685],[30.358960151020604,59.91422350144856],[30.363372384850113,59.91401608470413],[30.369533418957324,59.914293537976185],[30.37464570933971,59.91517167570822],[30.392961632061247,59.91834604836555],[30.39731933906929,59.919484054040396],[30.398184775654276,59.9200198692472],[30.393667935673072,59.922497560421434],[30.389172553364254,59.928723286809166],[30.390685319248792,59.932223396685586],[30.396736382786283,59.93795200760245],[30.39802384311343,59.94080517457784],[30.398098944965877,59.94271073757233],[30.400298356358253,59.94926632680774],[30.399311303440733,59.95175797069334],[30.397208451572986,59.953366945394],[30.39354455405859,59.95496238971217],[30.38979482585575,59.9562564456284],[30.38710188800474,59.956434004442656],[30.38559189304071,59.95623160851031],[30.38412481342097,59.9557063724889],[30.37209260120287,59.95124962471725],[30.363305833449683,59.94974430066047],[30.349025752654,59.95013177685424],[30.345925119032987,59.949453690528266],[30.341064956298194,59.948937043993276],[30.331859614958994,59.94685961278085],[30.33683217855989,59.93892322881185],[30.335067033115635,59.93401100208173],[30.317557572666534,59.926709209445455]]],type:"Polygon"},id:0,properties:{description:'<div style="margin-bottom: 10px;"><strong>Delivery cost: 3$</strong></div>',fill:"#ed4543","fill-opacity":.2,stroke:"#b3b3b3","stroke-opacity":0,"stroke-width":"0"},type:"Feature"},{geometry:{coordinates:[[[30.264981955459618,59.9567962610097],[30.199646026065437,59.968023448258606],[30.169090300967973,59.95080722529315],[30.205997497012916,59.90936544563101],[30.31854298727787,59.908729629378556],[30.31755056994245,59.92671635778719],[30.335070759227836,59.93400738050088],[30.336846381595894,59.93891741426239],[30.331862837246344,59.946856988818254],[30.293615877798302,59.94700499658315],[30.264981955459618,59.9567962610097]]],type:"Polygon"},id:1,properties:{description:'<div style="margin-bottom: 10px;"><strong>Delivery cost: 3$</strong></div>',fill:"#ed4543","fill-opacity":.2,stroke:"#b3b3b3","stroke-opacity":0,"stroke-width":"0"},type:"Feature"},{geometry:{coordinates:[[[30.331857919739864,59.9468556967079],[30.341084718751066,59.948946582544735],[30.345918059395903,59.94945784723438],[30.349024057435095,59.950135933461446],[30.363304138230347,59.94974307563543],[30.37208032612708,59.95125259269921],[30.385574850015093,59.956232065300675],[30.387098344735556,59.9564392173057],[30.389802011422514,59.95625896822289],[30.393567832879437,59.95496222199212],[30.39722100155763,59.95336408710427],[30.399323853425273,59.951755112255405],[30.400310906342714,59.94926346813624],[30.398111494950417,59.94273479220603],[30.398047121934024,59.94079693197237],[30.396763633197057,59.937951021273946],[30.390697300272862,59.932224968122135],[30.38918478985355,59.92871417601343],[30.391899185376563,59.924987496898986],[30.420985059934033,59.93079274799345],[30.435619192319283,59.93346346737091],[30.442485647397394,59.93499257245471],[30.445489721494084,59.936392395379656],[30.45093997021234,59.93789983069446],[30.4782341291479,59.944897736946885],[30.541319685178124,59.94623255377958],[30.55711253185781,59.96241829775388],[30.550246076779697,59.97240128977449],[30.522780256467193,59.98152103953561],[30.501150922971096,59.98427367628628],[30.48192484875235,59.994422039546485],[30.477118330197673,60.01195930333351],[30.46578867931872,60.02158363824368],[30.491194563107765,60.06228408109402],[30.43626292248278,60.07927063274563],[30.365538435178056,60.095048248449004],[30.26254160900617,60.10190571826372],[30.166067915158507,60.0751534867464],[29.95011790295141,60.038934706821934],[29.962477522092037,60.01109985092908],[30.011724782523764,59.9909448999639],[30.199672532615285,59.968018224624764],[30.264984322127837,59.95679641593396],[30.29361958557071,59.947005151458676],[30.331857919739864,59.9468556967079]]],type:"Polygon"},id:2,properties:{description:'<div style="margin-bottom: 10px;"><strong>Delivery cost: 3$</strong></div>',fill:"#ed4543","fill-opacity":.2,stroke:"#b3b3b3","stroke-opacity":0,"stroke-width":"0"},type:"Feature"},{geometry:{coordinates:[[[30.39188845654023,59.92497672537026],[30.39366407890809,59.92249921990695],[30.398186283307165,59.920018835586696],[30.397324385562865,59.919479579892105],[30.392968478122633,59.91834568641537],[30.36956888667663,59.91428651398849],[30.363410534778456,59.91400097944435],[30.358979525485854,59.914205702562214],[30.345364632526156,59.91626902534273],[30.34091216556145,59.916274412431086],[30.32107454768721,59.90891481949039],[30.318553271213226,59.908726228614185],[30.20600778094817,59.909329715580654],[30.12131434909393,59.86495487622657],[30.011451067843932,59.86426425113543],[29.949652972140804,59.88980779816408],[29.79996425143767,59.91671076431287],[29.76563197604705,59.93532308713607],[29.67362147800017,59.94152486691147],[29.65576869479705,59.907055805288635],[29.679114642062665,59.88359631539802],[29.76700526706267,59.86357361165538],[29.793097796359557,59.857357208798135],[29.831549944797043,59.81588472664123],[29.90433436862518,59.80965938322088],[29.971625628390797,59.82003430743956],[30.10758143893768,59.81519307943185],[30.15427333346893,59.796513159668955],[30.272376360812665,59.83386249918776],[30.325934710422054,59.80758400946622],[30.33005458346892,59.772282814787644],[30.390479388156425,59.75288582455442],[30.494849505343932,59.78959200546058],[30.51132899753143,59.85459398892704],[30.531928362765797,59.87047935897711],[30.526435198703307,59.89463814605622],[30.540854754367267,59.945830973760465],[30.478026690402388,59.944883678389736],[30.445507588305833,59.936383717008],[30.44249278537309,59.93498389368851],[30.39188845654023,59.92497672537026]]],type:"Polygon"},id:3,properties:{description:'<div style="margin-bottom: 10px;"><strong>Delivery cost: 3$</strong></div>',fill:"#ed4543","fill-opacity":.2,stroke:"#b3b3b3","stroke-opacity":0,"stroke-width":"0"},type:"Feature"}],metadata:{creator:"Yandex Map Constructor",name:"delivery"},type:"FeatureCollection"},oe="maps_map__VRIjd",se="maps_pointer__ftc4i",re="maps_placemark__n1fBE",ae="maps_active__Hc82u",ie="maps_preloader__SqNrR",ce=e=>{let{coord:t,handleChangeAddress:n,handleChangeCoord:o,handleChangeStatus:s,place:a,placemarks:i}=e;const[l,d]=(0,r.useState)(),[u,p]=(0,r.useState)(!0),[f,m]=(0,r.useState)(null),[h,_]=(0,r.useState)(!1),[v,y]=(0,r.useState)(!1),[b,g]=(0,r.useState)(!0),j=(0,r.useRef)(),C=(0,r.useRef)(),O=(0,r.useCallback)(X()((e=>{o(e)}),500),[]);(0,r.useEffect)((()=>{if(f&&C.current){f.searchContaining(C.current).get(0)?(p(!0),s(!0)):(p(!1),s(!1))}if(l&&null!==t&&void 0!==t&&t.length){g(!1);(null===l||void 0===l?void 0:l.geocode(t)).then((e=>{g(!0);const t=e.geoObjects.get(0);n(t.getAddressLine())})).catch((e=>{console.error("The Promise is rejected!",e)}))}}),[t,f]);const x=()=>{y(!v)};return(0,ee.jsx)(w,{query:{apikey:"587fecc9-b210-449c-9f9a-d61aa4ddbad0",coordorder:"longlat",lang:"en_RU"},children:(0,ee.jsxs)(L,{modules:["geolocation","geocode","control.ZoomControl","control.FullscreenControl","geoObject.addon.balloon","control.GeolocationControl","geoQuery"],state:{behaviors:["default"],center:t,controls:["zoomControl","fullscreenControl","geolocationControl"],zoom:15},className:oe,instanceRef:j,onActionBegin:()=>{y(!1),_(!0)},onActionEnd:()=>{_(!1)},onBoundsChange:e=>{var t,n;if((null===(t=e.originalEvent)||void 0===t?void 0:t.newZoom)===(null===(n=e.originalEvent)||void 0===n?void 0:n.oldZoom)){const t=e.get("target").getCenter();O(t)}},onLoad:e=>{if(d(e),e&&j.current){const t=null===e||void 0===e?void 0:e.geoQuery(ne).addToMap(j.current);t.each((function(e){e.options.set({fillColor:e.properties.get("fill"),fillOpacity:e.properties.get("fill-opacity"),strokeColor:e.properties.get("stroke"),strokeOpacity:e.properties.get("stroke-opacity"),strokeWidth:e.properties.get("stroke-width")}),e.properties.set("balloonContent",e.properties.get("description"))})),m(t)}},children:[(0,ee.jsxs)("div",{className:Y()(se,{[ae]:h}),onClick:x,children:[(0,ee.jsx)(c.Q,{className:Y()(re,{[ae]:h}),src:"".concat("/foodwagon-online-shop","/images/find-food/search-panel/location.svg"),wrapper:"span"}),!b&&(0,ee.jsx)(c.Q,{className:ie,src:"".concat("/foodwagon-online-shop","/images/find-food/preloader.svg")})]}),(0,ee.jsx)(G,{geometry:t,instanceRef:C,options:{iconOffset:[0,0],visible:!1}}),(0,ee.jsx)($,{clusters:{preset:"islands#redClusterIcons"},objects:{openBalloonOnClick:!0,preset:"islands#redDotIcon"},options:{clusterize:!0,gridSize:50},features:i,modules:["objectManager.addon.objectsBalloon","objectManager.addon.objectsHint","objectManager.Balloon"]}),(0,ee.jsx)(te,{address:a,coord:t,handleClick:x,isActive:v,status:u})]})})},le="deliveryTab_deliveryTab__l+wdz",de="deliveryTab_deliveryTab__btnName__-2aoE",ue="deliveryTab_deliveryTab__btnIcon__3GDGZ",pe="deliveryTab_deliveryTabActive__mENLg",fe=e=>{let{active:t,handleClickItem:n,icon:o,label:s}=e;return(0,ee.jsxs)("button",{className:Y()(le,{[pe]:t}),onClick:n,children:[(0,ee.jsx)(c.Q,{className:ue,src:"".concat("/foodwagon-online-shop").concat(o),wrapper:"span"}),(0,ee.jsx)("span",{className:de,children:s})]})},me="deliveryMethod_delivery__liU7Z",he=[{icon:"/images/find-food/delivery/delivery.svg",label:"Delivery"},{icon:"/images/find-food/delivery/pickup.svg",label:"Pickup"}],_e=()=>{const[e,t]=(0,r.useState)(0);return(0,ee.jsx)("div",{className:me,children:he&&he.map(((n,o)=>{let{icon:s,label:r}=n;return(0,ee.jsx)(fe,{active:e===o,handleClickItem:()=>{t(o)},icon:s,label:r},"".concat(r,"_").concat(o))}))})};var ve=n(549),ye=n(4261);const be="popup_popup__JXiIA",ge="popup_popup__item__1iVkY",je="popup_popup__item__active__LZPhw",Ce="popup_popup__errorMessage__f6c1r",Oe=(0,r.forwardRef)(((e,t)=>{let{errorMessage:n,handleChangeLocation:o,handleChangeStatus:s,isOpen:a,list:i}=e;const c=(0,r.useRef)(null),[l,d]=(0,r.useState)(-1);return(0,r.useEffect)((()=>{var e;null===(e=c.current)||void 0===e||e.focus()}),[l]),(0,ee.jsx)(ve.Z,{classNames:"alert",in:a,timeout:300,unmountOnExit:!0,children:(0,ee.jsxs)("ul",{className:be,onKeyDown:e=>{"ArrowDown"===e.key&&(e.preventDefault(),d((e=>i&&e<i.length-1?e+1:0))),"ArrowUp"===e.key&&(e.preventDefault(),d((e=>i&&e>0?e-1:0))),"Escape"===e.key&&(e.preventDefault(),s(!1),d(-1))},ref:t,tabIndex:0,children:[i.map(((e,t)=>(0,ee.jsx)("li",{className:Y()(ge,{[je]:t===l}),onClick:()=>o(e),onKeyDown:t=>((e,t)=>{"Enter"===e.key&&(e.preventDefault(),o(t),d(-1))})(t,e),ref:t===l?c:void 0,tabIndex:0,children:e.address},(0,ye.Z)()))),n&&(0,ee.jsx)("div",{className:Ce,children:n})]})})})),xe={findFoodWrapper:"findFood_findFoodWrapper__FXIB9",findFood__search:"findFood_findFood__search__O4Jvt",findFood__title:"findFood_findFood__title__I6rH7",findFood__text:"findFood_findFood__text__9o3sf",findFood__enter:"findFood_findFood__enter__Yo30+",findFood__input:"findFood_findFood__input__M84UT",findFood__link:"findFood_findFood__link__vHopU",searchPanel:"findFood_searchPanel__tnV23",searchPanel__input:"findFood_searchPanel__input__C1DOw",searchPanel__loader:"findFood_searchPanel__loader__uzyXs",searchPanel__inputIcon:"findFood_searchPanel__inputIcon__+877I",hidden:"findFood_hidden__W6bC9"},Ee=()=>{const e=(0,r.useRef)(null),t=(0,r.useRef)(null),n=(0,l.TL)(),h=(0,a.v9)(d.K7),_=(0,a.v9)(d.eH),v=(0,a.v9)(d.dS),y=(0,a.v9)(u.Nw),b=(0,a.v9)(u.qu),[g,j]=(0,r.useState)(""),[C,O]=(0,r.useState)(!1),[x,E]=(0,r.useState)([30.3515,59.9497]),[w,k]=(0,r.useState)(""),[R,N]=(0,r.useState)(!0),F=(0,i.s0)();(0,r.useEffect)((()=>{b.length&&n((0,u.ps)())}),[b]);const P=(0,r.useCallback)((e=>{E(e)}),[]),D=(0,r.useCallback)((e=>{k(e)}),[]),S=(0,r.useCallback)((e=>{let{address:t,coords:n}=e;D(t),P(n),O(!1)}),[]);(0,r.useEffect)((()=>{g&&(n((0,d.Kx)({searchValue:g.replace(";","%3B")})),O(!0))}),[g]);const I=(0,r.useCallback)((e=>{O(e)}),[]),U=(0,r.useCallback)((e=>{N(e)}),[]);return(0,r.useEffect)((()=>{const n=n=>{var o,s;null!==(o=t.current)&&void 0!==o&&o.contains(n.target)||null!==(s=e.current)&&void 0!==s&&s.contains(n.target)?O(!0):O(!1)};return document.body.addEventListener("mousedown",n),()=>document.body.removeEventListener("mousedown",n)}),[]),(0,ee.jsx)("main",{className:xe.findFoodWrapper,children:(0,ee.jsx)("div",{className:"container",children:(0,ee.jsxs)("div",{className:xe.findFood,children:[(0,ee.jsx)("h1",{className:xe.findFood__title,children:"Are you starving?"}),(0,ee.jsx)("p",{className:xe.findFood__text,children:"Within a few clicks, find meals that are accessible near you"}),(0,ee.jsxs)("div",{className:xe.findFood__searchPanel,children:[(0,ee.jsx)(_e,{}),(0,ee.jsxs)("div",{className:xe.findFood__search,children:[(0,ee.jsxs)("div",{className:xe.searchPanel,children:[(0,ee.jsx)(f.o,{address:w,classNames:xe.searchPanel__input,handleKeyDown:e=>{var n;t.current&&"ArrowDown"===e.key&&(e.preventDefault(),null===(n=t.current)||void 0===n||n.focus());"Enter"===e.key&&h.length&&(e.preventDefault(),S(h[0]))},handleSearchValue:e=>{j(e)},placeholder:"Enter Your Address",ref:e,children:(0,ee.jsx)(s.G,{className:xe.searchPanel__inputIcon,icon:o.opg,size:"xl"})}),v===p.qb.LOADING&&g?(0,ee.jsx)("div",{className:xe.searchPanel__loader,children:(0,ee.jsx)(c.Q,{src:"".concat("/foodwagon-online-shop","/images/find-food/search-panel/loader.svg")})}):null,(0,ee.jsx)(m.Q,{classNames:xe.search__btn,handleClick:()=>{n((0,d.l6)({address:w,coords:x,status:R})),F("search")},icon:"search",label:"Find Food"})]}),(0,ee.jsx)(Oe,{errorMessage:_,handleChangeLocation:S,handleChangeStatus:I,isOpen:C,list:h,ref:t})]}),w&&(0,ee.jsx)(ce,{coord:x,handleChangeAddress:D,handleChangeCoord:P,handleChangeStatus:U,place:w,placemarks:y})]})]})})})}},3947:(e,t,n)=>{"use strict";n.d(t,{o:()=>h});var o=n(1694),s=n.n(o),r=n(5095),a=n.n(r),i=n(2791),c=n(3080);const l="textInput_search__EBFuj",d="textInput_search__input__XdEXy",u="textInput_search__inputIcon__1k8ND",p="textInput_search__clearBtn__rPrtc",f="textInput_search__clearIcon__dynk9";var m=n(184);const h=(0,i.forwardRef)(((e,t)=>{let{address:n,children:o,classNames:r,handleKeyDown:h,handleSearchValue:_,iconUrl:v,placeholder:y}=e;const b=(0,i.useRef)(null),[g,j]=(0,i.useState)(""),C=()=>{var e;j(""),_(""),null===(e=b.current)||void 0===e||e.focus()},O=(0,i.useCallback)(a()((e=>{_(e)}),500),[]);return(0,i.useEffect)((()=>{n&&j(n)}),[n]),(0,i.useEffect)((()=>{var e;null===(e=b.current)||void 0===e||e.focus()}),[]),(0,m.jsxs)("div",{className:s()(l,r),ref:t,children:[(0,m.jsx)("input",{onKeyDown:e=>{var t;h&&h(e),"Delete"===(t=e).key&&(t.preventDefault(),C())},autoComplete:"off",className:d,maxLength:150,name:"find",onChange:e=>{j(e.target.value),O(e.target.value)},placeholder:y,ref:b,type:"text",value:g}),g&&(0,m.jsx)("button",{className:p,onClick:C,children:(0,m.jsx)(c.Q,{className:f,src:"".concat("/foodwagon-online-shop","/images/ui/clear_icon.svg"),wrapper:"span"})}),o,v&&(0,m.jsx)(c.Q,{className:u,src:"".concat("/foodwagon-online-shop").concat(v),wrapper:"span"})]})}))},7540:(e,t,n)=>{"use strict";n.d(t,{Q:()=>l});var o=n(1694),s=n.n(o),r=n(3080);const a="searchButton_searchButton__HUIsC",i="searchButton_searchButton__icon__th0CE";var c=n(184);const l=e=>{let{classNames:t,handleClick:n,icon:o,label:l}=e;return(0,c.jsxs)("button",{className:s()(a,t),onClick:n,children:[o&&"search"===o&&(0,c.jsx)(r.Q,{className:i,src:"".concat("/foodwagon-online-shop","/images/find-food/search-panel/search.svg"),wrapper:"span"}),(0,c.jsx)("span",{children:l})]})}},5095:(e,t,n)=>{var o=NaN,s="[object Symbol]",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,d="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,u="object"==typeof self&&self&&self.Object===Object&&self,p=d||u||Function("return this")(),f=Object.prototype.toString,m=Math.max,h=Math.min,_=function(){return p.Date.now()};function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&f.call(e)==s}(e))return o;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):a.test(e)?o:+e}e.exports=function(e,t,n){var o,s,r,a,i,c,l=0,d=!1,u=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=o,r=s;return o=s=void 0,l=t,a=e.apply(r,n)}function b(e){var n=e-c;return void 0===c||n>=t||n<0||u&&e-l>=r}function g(){var e=_();if(b(e))return j(e);i=setTimeout(g,function(e){var n=t-(e-c);return u?h(n,r-(e-l)):n}(e))}function j(e){return i=void 0,p&&o?f(e):(o=s=void 0,a)}function C(){var e=_(),n=b(e);if(o=arguments,s=this,c=e,n){if(void 0===i)return function(e){return l=e,i=setTimeout(g,t),d?f(e):a}(c);if(u)return i=setTimeout(g,t),f(c)}return void 0===i&&(i=setTimeout(g,t)),a}return t=y(t)||0,v(n)&&(d=!!n.leading,r=(u="maxWait"in n)?m(y(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),C.cancel=function(){void 0!==i&&clearTimeout(i),l=0,o=c=s=i=void 0},C.flush=function(){return void 0===i?a:j(_())},C}},4261:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});const o={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let s;const r=new Uint8Array(16);function a(){if(!s&&(s="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!s))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(r)}const i=[];for(let d=0;d<256;++d)i.push((d+256).toString(16).slice(1));function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return i[e[t+0]]+i[e[t+1]]+i[e[t+2]]+i[e[t+3]]+"-"+i[e[t+4]]+i[e[t+5]]+"-"+i[e[t+6]]+i[e[t+7]]+"-"+i[e[t+8]]+i[e[t+9]]+"-"+i[e[t+10]]+i[e[t+11]]+i[e[t+12]]+i[e[t+13]]+i[e[t+14]]+i[e[t+15]]}const l=function(e,t,n){if(o.randomUUID&&!t&&!e)return o.randomUUID();const s=(e=e||{}).random||(e.rng||a)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=s[e];return t}return c(s)}}}]);
//# sourceMappingURL=FindFood.ba0545cc.chunk.js.map