/*! For license information please see 454.707be173.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkfoodwagon_project=self.webpackChunkfoodwagon_project||[]).push([[454],{1846:function(e,t,n){n.d(t,{T:function(){return p}});var r=n(4942),a=n(9439),i=n(1694),c=n.n(i),o=n(2791),s="sortPopup_sort__L5lC4",d="sortPopup_sort__title__pXWEr",u="sortPopup_sort__list__QavWT",l="sortPopup_sort__link__-aKpl",_="sortPopup_sort__popup__GHvBf",f="sortPopup_sort__item__khQdw",m="sortPopup_sort__item_active__f4ayl",h=n(184);function p(e){var t=e.activeSortType,n=e.classNames,i=e.handleClickSortType,p=e.items,v=e.orderType,x=(0,o.useState)(!1),g=(0,a.Z)(x,2),b=g[0],y=g[1],j=(0,o.useRef)(),N=p.find((function(e){return e.type===t})).name;return(0,o.useEffect)((function(){var e=function(e){var t;null!==(t=j.current)&&void 0!==t&&t.contains(e.target)||y(!1)};return document.body.addEventListener("click",e),function(){return document.body.removeEventListener("click",e)}}),[]),(0,h.jsxs)("div",{className:c()(s,n),children:[(0,h.jsxs)("div",{className:d,ref:j,children:["sort by",(0,h.jsx)("span",{className:l,onClick:function(){y(!b)},children:N})]}),b&&(0,h.jsx)("div",{className:_,children:(0,h.jsx)("ul",{className:u,children:p&&p.map((function(e,n){var a=e.name,o=e.order,s=e.type;return(0,h.jsx)("li",{className:c()(f,(0,r.Z)({},m,s===t&&o===v)),onClick:function(){return function(e,t){i(e,t)}(s,o)},children:a},"".concat(s,"_").concat(n))}))})})]})}p.defaultProps={items:[]}},1454:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var r=n(1413),a=n(2791),i=n(9434),c=n(7689),o=n(6721),s=n(770),d=n(9439),u=n(1694),l=n.n(u),_=function(e){(0,a.useEffect)(e,[])},f=function(e){var t=(0,a.useRef)(e);t.current=e,_((function(){return function(){return t.current()}}))},m=function(e){var t=(0,a.useRef)(0),n=(0,a.useState)(e),r=n[0],i=n[1],c=(0,a.useCallback)((function(e){cancelAnimationFrame(t.current),t.current=requestAnimationFrame((function(){i(e)}))}),[]);return f((function(){cancelAnimationFrame(t.current)})),[r,c]};var h=function(e){var t=m({x:0,y:0}),n=t[0],r=t[1];return(0,a.useEffect)((function(){var t=function(){e.current&&r({x:e.current.scrollLeft,y:e.current.scrollTop})};return e.current&&function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)}(e.current,"scroll",t,{capture:!1,passive:!0}),function(){e.current&&function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}(e.current,"scroll",t)}}),[e]),n},p=n(7215),v=n(9020),x=n(329),g=n(1846),b=n(4023),y=n(4912),j=n(8175),N=n(184),P=function(e){return(0,N.jsxs)(j.ZP,(0,r.Z)((0,r.Z)({backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",height:503,speed:2,viewBox:"0 0 343 503",width:343},e),{},{children:[(0,N.jsx)("rect",{height:"228",rx:"16",ry:"16",width:"343",x:"0",y:"0"}),(0,N.jsx)("rect",{height:"53",rx:"8",ry:"8",width:"343",x:"0",y:"244"}),(0,N.jsx)("rect",{height:"26",rx:"8",ry:"8",width:"343",x:"0",y:"305"}),(0,N.jsx)("rect",{height:"26",rx:"8",ry:"8",width:"70",x:"0",y:"339"}),(0,N.jsx)("rect",{height:"60",rx:"8",ry:"8",width:"343",x:"0",y:"390"})]}))},C="restaurantPage_restaurant__+H-Gb",w="restaurantPage_menuList__xQTkZ",k="restaurantPage_menuList__item__4Moak",E="restaurantPage_filters__o4vtt",T="restaurantPage_alert__q-B7B",I="restaurantPage_filters__sortBy__0GdfH",O=[{name:"popularity ",order:"desc",type:"rating"},{name:"price ascending",order:"asc",type:"price"},{name:"price descending",order:"desc",type:"price"},{name:"discount",order:"desc",type:"discount"},{name:"alphabetically",order:"asc",type:"title"}];function Z(){(0,c.TH)().pathname;var e=(0,a.useRef)(null),t=(0,a.useState)({x:0,y:0}),n=(0,d.Z)(t,2),s=n[0],u=n[1];h(e,(function(e){var t=e.scrollX,n=e.scrollY;return u({x:t,y:n})})),console.log(s);var _=(0,c.UO)().restaurantId,f=(0,i.I0)(),m=(0,i.v9)(p.uT),j=(0,i.v9)(x.i1),Z=(0,i.v9)(x.Ji),L=(0,i.v9)(v.PR),q=(0,i.v9)(v.MX),R=(0,i.v9)(v.bQ),A=function(e){f((0,p.D4)(e))};(0,a.useEffect)((function(){f((0,v.t2)({currentPage:L,limit:4,order:j,restaurantId:_,sortType:Z}))}),[Z,m,_,j,L]);var B=function(e){f((0,o.gK)(e))},F=function(e){f((0,o.gb)(e))},M=function(e){f((0,o.nQ)(e))},Q=new Array(4).fill(0).map((function(e,t){return(0,N.jsx)(P,{},t)}));return q||null!==R&&void 0!==R&&R.length?(0,N.jsxs)("div",{className:C,ref:e,children:[(0,N.jsxs)("div",{className:"container",children:[(0,N.jsx)("div",{className:E,children:(0,N.jsx)(g.T,{activeSortType:Z,classNames:I,handleClickSortType:function(e,t){f((0,x.Td)({order:t,type:e}))},items:O,orderType:j})}),(0,N.jsx)("div",{className:w,children:q&&R?R.map((function(e){return(0,N.jsx)(b.Z,(0,r.Z)((0,r.Z)({classNames:k},e),{},{handleAddProduct:B,handleInputCount:M,handleRemoveProduct:F}),e.id)})):Q})]}),(0,N.jsx)("div",{className:"container",children:(0,N.jsx)(y.t,{currentPage:L,handleChangePage:A,pageCount:5})})]}):(0,N.jsx)("div",{className:l()(C),ref:e,children:(0,N.jsxs)("div",{className:"container",children:[(0,N.jsx)("div",{className:T,children:"Nothing was found according to your request. Go to another page."}),(0,N.jsx)(y.t,{currentPage:L,handleChangePage:A,pageCount:5})]})})}var L=n(4942),q=n(1087),R=n(3080),A=n(8016),B=n(2027),F=n(6191),M={card:"card_card__7r6FN",card__left:"card_card__left__MRxAo",card__image:"card_card__image__d5eJx",card__info:"card_card__info__vFCI0",card__discount:"card_card__discount__tO0e9",card__discount_size:"card_card__discount_size__3iI2P",card__discount_off:"card_card__discount_off__+7AzH",info:"card_info__d7Ft6",info__title:"card_info__title__hOjQb",info__name:"card_info__name__yRK6S",info__nameIcon:"card_info__nameIcon__VFag3",info__nameLink:"card_info__nameLink__n-2yn",info__prices:"card_info__prices__cUTwJ",info__price:"card_info__price__3fk5l",info__price_theme:"card_info__price_theme__o9kkP",info__ingredients:"card_info__ingredients__yq+no",info__btns:"card_info__btns__QA71g",buttons__order:"card_buttons__order__ilXjp"};function Q(e){var t,n,r=e.discount,a=e.handleAddProduct,c=e.handleInputCount,o=e.handleRemoveProduct,s=e.id,d=e.image,u=e.ingredients,_=e.price,f=e.restaurantId,m=e.restaurantName,h=e.title,p=null===(t=(0,i.v9)((function(e){return e.cart})).cart[f])||void 0===t||null===(n=t.items[s])||void 0===n?void 0:n.quantity,v=function(){a({discount:r,id:s,image:d,price:_,restaurantId:f,restaurantName:m,title:h})};return(0,N.jsxs)("div",{className:M.card,children:[(0,N.jsxs)("div",{className:M.card__left,children:[(0,N.jsx)("img",{alt:h,className:M.card__image,src:"".concat("/foodwagon_project").concat(d)}),r?(0,N.jsxs)("div",{className:M.card__discount,children:[r,(0,N.jsx)("div",{className:M.card__discount_size,children:"%"}),(0,N.jsx)("div",{className:M.card__discount_off,children:"off"})]}):null]}),(0,N.jsxs)("div",{className:l()(M.card__info,M.info),children:[(0,N.jsx)("p",{className:M.info__title,children:h}),(0,N.jsxs)("p",{className:M.info__name,children:[(0,N.jsx)(R.Q,{className:M.info__nameIcon,src:"/foodwagon_project/images/popular-items/map.svg",wrapper:"span"}),(0,N.jsx)(q.rU,{className:M.info__nameLink,children:m})]}),(0,N.jsxs)("div",{className:M.info__prices,children:[(0,N.jsxs)("div",{className:l()(M.info__price,(0,L.Z)({},M.info__price_theme,r)),children:["$ ",_]}),r?(0,N.jsxs)("div",{className:M.info__price,children:["$ ",(_-_*r/100).toFixed(2)]}):null]}),(0,N.jsxs)("p",{className:M.info__ingredients,children:["Ingredients: ",(0,A.O)(u.join(", "),215)]}),(0,N.jsx)("div",{className:l()(M.info__btns,M.buttons),children:p?(0,N.jsx)(F.r,{handleInputQuantity:function(e){return c({id:s,price:_,quantity:e,restaurantId:f})},handleMinusProduct:function(){o({discount:r,id:s,image:d,price:_,restaurantId:f,restaurantName:m,title:h})},handlePlusProduct:v,quantity:p||0}):(0,N.jsx)(B.Y,{classNames:M.buttons__order,handleClick:v,label:"Order Now"})})]})]})}var U=function(e){return(0,N.jsx)(j.ZP,(0,r.Z)((0,r.Z)({backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",height:331,speed:2,viewBox:"0 0 357 331",width:357},e),{},{children:(0,N.jsx)("rect",{height:"301",rx:"16",ry:"16",width:"357",x:"0",y:"0"})}))},S=function(e){return(0,N.jsxs)(j.ZP,(0,r.Z)((0,r.Z)({backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",height:331,speed:2,viewBox:"0 0 700 331",width:700},e),{},{children:[(0,N.jsx)("rect",{height:"50",rx:"8",ry:"8",width:"700",x:"0",y:"10"}),(0,N.jsx)("rect",{height:"26",rx:"8",ry:"8",width:"700",x:"0",y:"74"}),(0,N.jsx)("rect",{height:"29",rx:"8",ry:"8",width:"70",x:"0",y:"115"}),(0,N.jsx)("rect",{height:"72",rx:"8",ry:"8",width:"700",x:"0",y:"154"}),(0,N.jsx)("rect",{height:"60",rx:"8",ry:"8",width:"283",x:"0",y:"241"})]}))},X="productPage_productPage__WzbfR",D="productPage_product__88yhg",J="productPage_placeholder__v46jd";var G=function(){var e=(0,c.UO)().id,t=(0,i.I0)(),n=(0,c.TH)().pathname,d=(0,i.v9)(s.nk),u=(0,i.v9)(s.TP);(0,a.useEffect)((function(){window.scrollTo(0,0)}),[n]),(0,a.useEffect)((function(){t((0,s.MX)({id:e,limit:1}))}),[e,t]);var l=function(e){t((0,o.gK)(e))},_=function(e){t((0,o.gb)(e))},f=function(e){t((0,o.nQ)(e))},m=new Array(1).fill(0).map((function(e,t){return(0,N.jsxs)("div",{className:J,children:[(0,N.jsx)(U,{}),(0,N.jsx)(S,{})]},t)}));return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("div",{className:X,children:(0,N.jsx)("div",{className:"container",children:(0,N.jsx)("div",{className:D,children:d&&u?u.map((function(e,t){return(0,a.createElement)(Q,(0,r.Z)((0,r.Z)({},e),{},{handleAddProduct:l,handleInputCount:f,handleRemoveProduct:_,key:"".concat(e.id).concat(t)}))})):m})})}),(0,N.jsx)(Z,{})]})}},4023:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(1632),a=n(9806),i=n(1694),c=n.n(i),o=n(9434),s=n(1087),d=n(8016),u=n(4419),l=n(2027),_=n(6191),f={card:"card_card__nnBxD",card__up:"card_card__up__x-DIG",card__image:"card_card__image__J+-Zw",card__name:"card_card__name__5vXlv",card__location:"card_card__location__7pN9u",card__locationIcon:"card_card__locationIcon__JTTmX",card__price:"card_card__price__diVrw",card__btn:"card_card__btn__N6ebH",card__btns:"card_card__btns__RoEqI"},m=n(184);function h(e){var t,n,i=e.classNames,h=e.discount,p=e.handleAddProduct,v=e.handleInputCount,x=e.handleRemoveProduct,g=e.id,b=e.image,y=e.price,j=e.restaurantId,N=e.restaurantName,P=e.title,C={discount:h,id:g,image:b,price:y,restaurantId:j,restaurantName:N,title:P},w=null===(t=(0,o.v9)((function(e){return e.cart})).cart[j])||void 0===t||null===(n=t.items[g])||void 0===n?void 0:n.quantity,k=function(){p(C)};return(0,m.jsxs)("div",{className:c()(f.card,i),children:[(0,m.jsx)("div",{className:f.card__up,children:(0,m.jsxs)(s.rU,{className:f.card__upLink,to:"/restaurant/".concat(j,"/product/").concat(g),children:[(0,m.jsx)("img",{alt:"food",className:f.card__image,src:"/foodwagon_project"+b}),h>0&&(0,m.jsx)(u.s,{discount:h,view:"smallLabel"})]})}),(0,m.jsx)(s.rU,{className:f.card__name,to:"/restaurant/".concat(j,"/product/").concat(g),children:(0,d.O)(P,47)}),(0,m.jsxs)(s.rU,{className:f.card__location,children:[(0,m.jsx)(a.G,{className:f.card__locationIcon,icon:r.opg}),(0,d.O)(N,24)]}),(0,m.jsxs)("p",{className:f.card__price,children:["$ ",y]}),w?(0,m.jsx)(_.r,{handleInputQuantity:function(e){return v({id:g,quantity:e,restaurantId:j})},handleMinusProduct:function(){x(C)},handlePlusProduct:k,quantity:w||0}):(0,m.jsx)(l.Y,{classNames:f.card__btn,handleClick:k,label:"Order Now"})]})}},630:function(e,t,n){n.d(t,{A:function(){return u}});var r=n(4942),a=n(9439),i=n(1694),c=n.n(i),o=n(2791),s={buttons:"counter_buttons__MwR8a",buttons__input:"counter_buttons__input__cPDJv",button:"counter_button__F1VDI",disabledBtn:"counter_disabledBtn__mVuPx"},d=n(184);function u(e){var t=e.classNames,n=e.handleInputQuantity,i=e.handleMinusProduct,u=e.handlePlusProduct,l=e.quantity,_=(0,o.useState)(l),f=(0,a.Z)(_,2),m=f[0],h=f[1];return(0,d.jsxs)("div",{className:c()(s.buttons,t),children:[(0,d.jsx)("button",{className:c()(s.button,s.buttons__plus,(0,r.Z)({},s.disabledBtn,m>98)),disabled:m>98,onClick:function(){u(),h(m+1)},children:"+"}),(0,d.jsx)("input",{className:c()(s.buttons__input),maxLength:"2",onChange:function(e){var t=e.target.value.replace(/[^0-9]/gi,"");""!==t?(h(+t),n(+t)):h("")},type:"text",value:m}),(0,d.jsx)("button",{className:c()(s.buttons__minus,s.button),onClick:function(){i(),h(m-1)},children:"\u2013"})]})}u.defaultProps={quantity:0}},4419:function(e,t,n){n.d(t,{s:function(){return h}});var r=n(4942),a=n(1694),i=n.n(a),c="discount_label__jB0h4",o="discount_label__discount__NdxTg",s="discount_label__discountPercent__0Xzk2",d="discount_label__discountOff__0eCdn",u="discount_smallLabel__JhXcr",l="discount_smallLabel__discount__lvwUU",_="discount_smallLabel__discountPercent__vbNrZ",f="discount_smallLabel__discountOff__cFEvX",m=n(184);function h(e){var t=e.classNames,n=e.discount,a="smallLabel"===e.view;return(0,m.jsxs)("div",{className:i()(c,t,(0,r.Z)({},u,a)),children:[(0,m.jsx)("div",{className:i()(o,(0,r.Z)({},l,a)),children:n}),(0,m.jsx)("div",{className:i()(s,(0,r.Z)({},_,a)),children:"%"}),(0,m.jsx)("div",{className:i()(d,(0,r.Z)({},f,a)),children:"off"})]})}},4912:function(e,t,n){n.d(t,{t:function(){return o}});var r=n(6048),a=n.n(r),i="pagination_root__9UftT",c=n(184);function o(e){var t=e.currentPage,n=e.handleChangePage,r=e.pageCount;return(0,c.jsx)(a(),{breakLabel:"...",className:i,forcePage:t-1,nextLabel:">",onPageChange:function(e){return n(e.selected+1)},pageCount:r,pageRangeDisplayed:4,previousLabel:"<",renderOnZeroPageCount:null})}},2027:function(e,t,n){n.d(t,{Y:function(){return d}});var r=n(1694),a=n.n(r),i=n(3080),c="buttonFind_buttonFind__J+yq3",o="buttonFind_buttonFind__icon__b6drS",s=n(184);function d(e){var t=e.classNames,n=e.handleClick,r=e.icon,d=e.label;return(0,s.jsxs)("button",{className:a()(c,t),onClick:n,children:[r&&"search"===r&&(0,s.jsx)(i.Q,{className:o,src:"".concat("/foodwagon_project","/images/find-food/search-panel/search.svg"),wrapper:"span"}),(0,s.jsx)("span",{children:d})]})}},6191:function(e,t,n){n.d(t,{r:function(){return u}});var r=n(1694),a=n.n(r),i=(n(2791),n(1087)),c=n(630),o=n(2027),s={buttons:"buttonsWithCounter_buttons__etXeM",buttons__btnToCart:"buttonsWithCounter_buttons__btnToCart__ULXaM",buttons__btnToCart_color:"buttonsWithCounter_buttons__btnToCart_color__AyVgx"},d=n(184);function u(e){var t=e.handleInputQuantity,n=e.handleMinusProduct,r=e.handlePlusProduct,u=e.quantity;return(0,d.jsxs)("div",{className:s.buttons,children:[(0,d.jsx)(i.rU,{className:s.buttons__link,to:"/cart",children:(0,d.jsx)(o.Y,{classNames:a()(s.buttons__btnToCart,s.buttons__btnToCart_color),label:"To Cart"})}),(0,d.jsx)(c.A,{classNames:s.buttons__counter,handleInputQuantity:t,handleMinusProduct:n,handlePlusProduct:r,quantity:u})]})}},8016:function(e,t,n){n.d(t,{O:function(){return r}});var r=function(e,t){return(null===e||void 0===e?void 0:e.length)>t?"".concat(e.slice(0,t-1),"..."):e}},8175:function(e,t,n){var r=n(2791),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)};var i=function(e){var t=e.animate,n=void 0===t||t,i=e.animateBegin,c=e.backgroundColor,o=void 0===c?"#f5f6f7":c,s=e.backgroundOpacity,d=void 0===s?1:s,u=e.baseUrl,l=void 0===u?"":u,_=e.children,f=e.foregroundColor,m=void 0===f?"#eee":f,h=e.foregroundOpacity,p=void 0===h?1:h,v=e.gradientRatio,x=void 0===v?2:v,g=e.gradientDirection,b=void 0===g?"left-right":g,y=e.uniqueKey,j=e.interval,N=void 0===j?.25:j,P=e.rtl,C=void 0!==P&&P,w=e.speed,k=void 0===w?1.2:w,E=e.style,T=void 0===E?{}:E,I=e.title,O=void 0===I?"Loading...":I,Z=e.beforeMask,L=void 0===Z?null:Z,q=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),R=y||Math.random().toString(36).substring(6),A=R+"-diff",B=R+"-animated-diff",F=R+"-aria",M=C?{transform:"scaleX(-1)"}:null,Q="0; "+N+"; 1",U=k+"s",S="top-bottom"===b?"rotate(90)":void 0;return(0,r.createElement)("svg",a({"aria-labelledby":F,role:"img",style:a(a({},T),M)},q),O?(0,r.createElement)("title",{id:F},O):null,L&&(0,r.isValidElement)(L)?L:null,(0,r.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+l+"#"+A+")",style:{fill:"url("+l+"#"+B+")"}}),(0,r.createElement)("defs",null,(0,r.createElement)("clipPath",{id:A},_),(0,r.createElement)("linearGradient",{id:B,gradientTransform:S},(0,r.createElement)("stop",{offset:"0%",stopColor:o,stopOpacity:d},n&&(0,r.createElement)("animate",{attributeName:"offset",values:-x+"; "+-x+"; 1",keyTimes:Q,dur:U,repeatCount:"indefinite",begin:i})),(0,r.createElement)("stop",{offset:"50%",stopColor:m,stopOpacity:p},n&&(0,r.createElement)("animate",{attributeName:"offset",values:-x/2+"; "+-x/2+"; "+(1+x/2),keyTimes:Q,dur:U,repeatCount:"indefinite",begin:i})),(0,r.createElement)("stop",{offset:"100%",stopColor:o,stopOpacity:d},n&&(0,r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+x),keyTimes:Q,dur:U,repeatCount:"indefinite",begin:i})))))},c=function(e){return e.children?(0,r.createElement)(i,a({},e)):(0,r.createElement)(o,a({},e))},o=function(e){return(0,r.createElement)(c,a({viewBox:"0 0 476 124"},e),(0,r.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,r.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.ZP=c}}]);
//# sourceMappingURL=454.707be173.chunk.js.map