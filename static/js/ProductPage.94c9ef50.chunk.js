"use strict";(self.webpackChunkfoodwagon_online_shop=self.webpackChunkfoodwagon_online_shop||[]).push([[516],{787:(e,t,s)=>{s.d(t,{$:()=>i});var a=s(1694),n=s.n(a);const r="operatingStatus_text__LCgMG",c="operatingStatus_theme__Alnhe";var o=s(184);const i=e=>{let{classNames:t,isClosed:s,isOpened:a}=e;return(0,o.jsxs)("div",{className:n()(t,r,{[c]:s}),children:[s&&"Closed Now",a&&"Open Now"]})}},6115:(e,t,s)=>{s.d(t,{$:()=>a.$});var a=s(787)},4781:(e,t,s)=>{s.d(t,{R:()=>d});var a=s(1694),n=s.n(a);const r="priceBlock_priceBlock__t4r3F",c="priceBlock_priceBlock__price__V9L2q",o="priceBlock_priceBlock__price_theme__jCrMH";var i=s(184);const d=e=>{let{classNames:t,discount:s,price:a}=e;return(0,i.jsxs)("div",{className:r,children:[s?(0,i.jsxs)("div",{className:n()(c,t),children:["$ ",(a-a*s/100).toFixed(2)]}):null,(0,i.jsxs)("div",{className:n()(c,t,{[o]:s}),children:["$",a.toFixed(2)]})]})}},6610:(e,t,s)=>{s.d(t,{R:()=>a.R});var a=s(4781)},4804:(e,t,s)=>{s.d(t,{T:()=>x});var a=s(1694),n=s.n(a),r=s(2791),c=s(549),o=s(61);const i="sortPopup_sort__3+lQH",d="sortPopup_sort__title__29ue6",_="sortPopup_sort__list__55Yzq",l="sortPopup_sort__link__nOQ3-",u="sortPopup_sort__popup__RPH9T",h="sortPopup_sort__item__GcAEi",m="sortPopup_sort__item_active__2QF6O";var p=s(184);const x=e=>{var t;let{activeSortType:s,classNames:a,handleChangeSortType:x,items:v,orderType:g}=e;const[f,j]=(0,r.useState)(!1),b=()=>{j(!1)},N=(0,o.O)(b),C=null===v||void 0===v||null===(t=v.find((e=>e.type===s)))||void 0===t?void 0:t.name;return(0,p.jsxs)("div",{className:n()(i,a),children:[(0,p.jsxs)("div",{className:d,ref:N,children:["sort by",(0,p.jsx)("span",{className:l,onClick:()=>{j(!0)},children:C})]}),(0,p.jsx)(c.Z,{classNames:"alert",in:f,timeout:300,unmountOnExit:!0,children:(0,p.jsx)("div",{className:u,children:(0,p.jsx)("ul",{className:_,onClick:b,children:null===v||void 0===v?void 0:v.map(((e,t)=>{let{name:a,order:r,type:c}=e;return(0,p.jsx)("li",{className:n()(h,{[m]:c===s&&r===g}),onClick:()=>x(c,r),children:a},"".concat(c,"_").concat(t))}))})})})]})}},4264:(e,t,s)=>{s.r(t),s.d(t,{default:()=>Y});var a=s(2791),n=s(7689),r=s(3232),c=s(7597),o=s(2485),i=s(1694),d=s.n(i),_=s(5346),l=s(4446),u=s(1764),h=s(4804),m=s(8753),p=s(7707),x=s(8175),v=s(184);const g=e=>(0,v.jsxs)(x.ZP,{backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",height:503,speed:2,viewBox:"0 0 343 503",width:343,...e,children:[(0,v.jsx)("rect",{height:"228",rx:"16",ry:"16",width:"343",x:"0",y:"0"}),(0,v.jsx)("rect",{height:"53",rx:"8",ry:"8",width:"343",x:"0",y:"244"}),(0,v.jsx)("rect",{height:"26",rx:"8",ry:"8",width:"343",x:"0",y:"305"}),(0,v.jsx)("rect",{height:"26",rx:"8",ry:"8",width:"70",x:"0",y:"339"}),(0,v.jsx)("rect",{height:"60",rx:"8",ry:"8",width:"343",x:"0",y:"390"})]}),f="restaurantMenu_restaurant__tgUgc",j="restaurantMenu_menuList__mJRbS",b="restaurantMenu_menuList__item__ZM7PK",N="restaurantMenu_filters__uu3Xq",C="restaurantMenu_alert__uLwr6",y="restaurantMenu_filters__sortBy__tb9d5",P=[{name:"popularity ",order:l.x.DESC,type:l.u.RATING},{name:"increasing price",order:l.x.ASC,type:l.u.PRICE},{name:"decreasing price",order:l.x.DESC,type:l.u.PRICE},{name:"discount",order:l.x.DESC,type:l.u.DISCOUNT},{name:"alphabetically",order:l.x.ASC,type:l.u.TITLE}],w=()=>{const{restaurantId:e}=(0,n.UO)(),t=(0,r.TL)(),s=(0,r.CG)(_.uT),o=(0,r.CG)(_.oU),i=(0,r.CG)(_.Ji),l=(0,r.CG)(u.PR),x=(0,r.CG)(u.MX),w=(0,r.CG)(u.bQ),k=(0,r.CG)(u.dS);(0,a.useEffect)((()=>{window.scrollTo(0,0)}),[]),(0,a.useEffect)((()=>{window.scrollTo(0,0)}),[l]);const I=e=>{t((0,_.D4)(e))};(0,a.useEffect)((()=>{t((0,u.t2)({currentPage:l,limit:4,orderType:o,restaurantId:e,sortType:i}))}),[i,s,e,l,o]);const L=e=>{t((0,c.gK)(e))},D=e=>{t((0,c.gb)(e))},T=e=>{t((0,c.nQ)(e))},E=new Array(4).fill(0).map(((e,t)=>(0,v.jsx)(g,{},t)));return"reject"===k?(0,v.jsx)("div",{className:d()(f),children:(0,v.jsxs)("div",{className:"container",children:[(0,v.jsx)("div",{className:C,children:"Nothing was found according to your request. Go to another page."}),(0,v.jsx)(p.t,{currentPage:l,handleChangePage:I,pageCount:5})]})}):(0,v.jsxs)("div",{className:f,children:[(0,v.jsxs)("div",{className:"container",children:[(0,v.jsx)("div",{className:N,children:(0,v.jsx)(h.T,{activeSortType:i,classNames:y,handleChangeSortType:(e,s)=>{t((0,_.zR)({orderType:s,sortType:e}))},items:P,orderType:o})}),(0,v.jsx)("div",{className:j,children:x&&w?w.map((e=>(0,v.jsx)(m.Z,{classNames:b,...e,handleCountInput:T,handleProductAdd:L,handleProductRemove:D},e.id))):E})]}),(0,v.jsx)("div",{className:"container",children:(0,v.jsx)(p.t,{currentPage:l,handleChangePage:I,pageCount:5})})]})};var k=s(1087),I=s(3080),L=s(2435),D=s(6394),T=s(5742),E=s(4229);const O=e=>e.map((e=>e.toLowerCase())).join(", ");var R=s(9807),B=s(6028),S=s(1598),Z=s(8010),G=s(6115),M=s(6610);const q={card:"productDetails_card__hHGO0",card__left:"productDetails_card__left__5BwT8",card__image:"productDetails_card__image__YMoNz",card__info:"productDetails_card__info__Tq4IW",card__discount:"productDetails_card__discount__gL6ey",card__discount_size:"productDetails_card__discount_size__ZkZRY",card__discount_off:"productDetails_card__discount_off__66awI",info:"productDetails_info__Zuam0",info__title:"productDetails_info__title__3KQ4p",info__name:"productDetails_info__name__GVOJF",info__nameIcon:"productDetails_info__nameIcon__2g+nB",info__nameLink:"productDetails_info__nameLink__Zc0UD",info__prices:"productDetails_info__prices__7M6zT",info__ingredients:"productDetails_info__ingredients__QSQZe",info__btns:"productDetails_info__btns__vbyeL",info__btns_theme:"productDetails_info__btns_theme__4D1Lk",buttons__order:"productDetails_buttons__order__ZS3CA",discount:"productDetails_discount__HX5H6",info__nameStatus:"productDetails_info__nameStatus__nY7Cz"},Q=e=>{var t,s;let{discount:a,handleCountInput:n,handleProductAdd:o,handleProductRemove:i,id:_,image:l,ingredients:u,price:h,restaurantId:m,restaurantName:p,title:x}=e;const g=(0,r.CG)(c.iq),f=(0,r.CG)(T.Fp),j=(0,r.CG)(L.DD),b=f.find((e=>e.id===m)),N=j===D.l.DELIVERY?null===b||void 0===b?void 0:b.deliveryEnabled:null===b||void 0===b?void 0:b.pickupEnabled,C=null===(t=g[m])||void 0===t||null===(s=t.items[_])||void 0===s?void 0:s.quantity,y=()=>{o({discount:a,id:_,image:l,price:h,restaurantId:m,restaurantName:p,title:x})};return(0,v.jsxs)("div",{className:q.card,children:[(0,v.jsxs)("div",{className:q.card__left,children:[(0,v.jsx)("img",{alt:x,className:q.card__image,src:"".concat("/foodwagon-online-shop").concat(l)}),a?(0,v.jsx)(B.s,{classNames:q.card__discount,discount:a}):null,!!a&&(0,v.jsx)(B.s,{classNames:q.discount,discount:a,view:"smallLabel"})]}),(0,v.jsxs)("div",{className:d()(q.card__info,q.info),children:[(0,v.jsx)("p",{className:q.info__title,children:x}),(0,v.jsxs)("div",{className:q.info__name,children:[(0,v.jsxs)(k.rU,{className:q.info__nameLink,to:"",children:[(0,v.jsx)(I.Q,{className:q.info__nameIcon,src:"/foodwagon-online-shop/images/popular-items/map.svg",wrapper:"span"}),p]}),N&&(0,v.jsx)(G.$,{classNames:q.info__nameStatus,isClosed:N===E.E.CLOSED,isOpened:N===E.E.OPENED})]}),(0,v.jsx)(M.R,{classNames:q.info__prices,discount:a,price:h}),(0,v.jsxs)("p",{className:q.info__ingredients,children:["Ingredients: ",(0,R.O)(O(u),215)]}),(0,v.jsx)("div",{className:d()(q.info__btns,q.buttons),children:C?(0,v.jsx)(S.a,{classNames:q.info__btns_theme,handleProductMinus:()=>{i({discount:a,id:_,image:l,price:h,restaurantId:m,restaurantName:p,title:x})},handleProductPlus:y,handleQuantityInput:e=>n({id:_,quantity:e,restaurantId:m}),quantity:C||0}):(0,v.jsx)(Z.Q,{classNames:q.buttons__order,handleClick:y,label:"Order Now"})})]})]})},A=e=>(0,v.jsx)(x.ZP,{backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",height:331,speed:2,viewBox:"0 0 357 331",width:357,...e,children:(0,v.jsx)("rect",{height:"301",rx:"16",ry:"16",width:"357",x:"0",y:"0"})}),U=e=>(0,v.jsxs)(x.ZP,{backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",height:331,speed:2,viewBox:"0 0 700 331",width:700,...e,children:[(0,v.jsx)("rect",{height:"50",rx:"8",ry:"8",width:"700",x:"0",y:"10"}),(0,v.jsx)("rect",{height:"26",rx:"8",ry:"8",width:"700",x:"0",y:"74"}),(0,v.jsx)("rect",{height:"29",rx:"8",ry:"8",width:"70",x:"0",y:"115"}),(0,v.jsx)("rect",{height:"72",rx:"8",ry:"8",width:"700",x:"0",y:"154"}),(0,v.jsx)("rect",{height:"60",rx:"8",ry:"8",width:"283",x:"0",y:"241"})]}),H="productPage_productPage__DA7fP",z="productPage_product__qAq0F",F="productPage_placeholder__vQPpu",W="productPage_title__UAI7R",Y=()=>{const{id:e}=(0,n.UO)(),t=(0,r.TL)(),{pathname:s}=(0,n.TH)(),i=(0,r.CG)(o.nk),d=(0,r.CG)(o.TP),[_]=d;(0,a.useEffect)((()=>{window.scrollTo(0,0)}),[s]),(0,a.useEffect)((()=>{t((0,o.MX)({id:e,limit:1}))}),[e,t]);const l=new Array(1).fill(0).map(((e,t)=>(0,v.jsxs)("div",{className:F,children:[(0,v.jsx)(A,{}),(0,v.jsx)(U,{})]},t)));return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:H,children:(0,v.jsxs)("div",{className:"container",children:[(0,v.jsx)("h1",{className:W,children:"Restaurant menu"}),(0,v.jsx)("div",{className:z,children:i?(0,v.jsx)(Q,{..._,handleCountInput:e=>{t((0,c.nQ)(e))},handleProductAdd:e=>{t((0,c.gK)(e))},handleProductRemove:e=>{t((0,c.gb)(e))}}):l})]})}),(0,v.jsx)(w,{})]})}},8753:(e,t,s)=>{s.d(t,{Z:()=>v});var a=s(1632),n=s(9806),r=s(1694),c=s.n(r),o=s(1087),i=s(3232),d=s(7597),_=s(9807),l=s(6610),u=s(4032),h=s(1598),m=s(8010);const p={card:"card_card__U1p6D",card__up:"card_card__up__HDkkq",card__image:"card_card__image__cZROL",card__name:"card_card__name__hHTPj",card__location:"card_card__location__vExjm",card__locationIcon:"card_card__locationIcon__eX98w",card__price:"card_card__price__wRZm-",card__btn:"card_card__btn__giIGi",card__btns:"card_card__btns__0UUCZ",card__counter:"card_card__counter__YbYTm"};var x=s(184);const v=e=>{var t,s;const{classNames:r,discount:v,handleCountInput:g,handleProductAdd:f,handleProductRemove:j,id:b,image:N,price:C,restaurantId:y,restaurantName:P,title:w}=e,k={discount:v,id:b,image:N,price:C,restaurantId:y,restaurantName:P,title:w},I=null===(t=(0,i.CG)(d.iq)[y])||void 0===t||null===(s=t.items[b])||void 0===s?void 0:s.quantity,L=()=>{f(k)};return(0,x.jsxs)("div",{className:c()(p.card,r),children:[(0,x.jsx)("div",{className:p.card__up,children:(0,x.jsxs)(o.rU,{className:p.card__upLink,to:"/restaurant/".concat(y,"/product/").concat(b),children:[(0,x.jsx)("img",{alt:"food",className:p.card__image,src:"/foodwagon-online-shop"+N}),v>0&&(0,x.jsx)(u.s,{discount:v,view:"smallLabel"})]})}),(0,x.jsx)(o.rU,{className:p.card__name,to:"/restaurant/".concat(y,"/product/").concat(b),children:(0,_.O)(w,47)}),(0,x.jsxs)(o.rU,{className:p.card__location,to:"/restaurant/".concat(y,"/product/").concat(b),children:[(0,x.jsx)(n.G,{className:p.card__locationIcon,icon:a.opg}),(0,_.O)(P,24)]}),(0,x.jsx)(l.R,{classNames:p.card__price,discount:v,price:C}),I?(0,x.jsx)(h.a,{classNames:p.card__counter,handleProductMinus:()=>{j(k)},handleProductPlus:L,handleQuantityInput:e=>g({id:b,price:C,quantity:e,restaurantId:y}),quantity:I||0}):(0,x.jsx)(m.Q,{classNames:p.card__btn,handleClick:L,label:"Order Now"})]})}},4393:(e,t,s)=>{s.d(t,{A:()=>i});var a=s(1694),n=s.n(a),r=s(2791);const c={buttons:"counter_buttons__OVEIu",buttons__input:"counter_buttons__input__LU3WF",button:"counter_button__TZDrT",disabledBtn:"counter_disabledBtn__k6ceu"};var o=s(184);const i=e=>{let{classNames:t,handleProductMinus:s,handleProductPlus:a,handleQuantityInput:i,quantity:d}=e;const[_,l]=(0,r.useState)(d);return(0,o.jsxs)("div",{className:n()(c.buttons,t),children:[(0,o.jsx)("button",{className:n()(c.button,c.buttons__plus,{[c.disabledBtn]:_>98}),disabled:_>98,onClick:()=>{a(),l(_+1)},children:"+"}),(0,o.jsx)("input",{className:n()(c.buttons__input),maxLength:2,onChange:e=>{const t=e.target.value.replace(/[^0-9]/gi,"");""!==t?(l(+t),i(+t)):l(0)},type:"text",value:_}),(0,o.jsx)("button",{className:n()(c.buttons__minus,c.button),onClick:()=>{s(),l(_-1)},children:"\u2013"})]})};i.defaultProps={quantity:0}},4032:(e,t,s)=>{s.d(t,{s:()=>m});var a=s(1694),n=s.n(a);const r="discount_label__8oW+1",c="discount_label__discount__xZACj",o="discount_label__discountPercent__ninge",i="discount_label__discountOff__nYZns",d="discount_smallLabel__ZzO-o",_="discount_smallLabel__discount__c4Cpa",l="discount_smallLabel__discountPercent__GdmW4",u="discount_smallLabel__discountOff__WMe9z";var h=s(184);const m=e=>{let{classNames:t,discount:s,view:a}=e;const m="smallLabel"===a;return(0,h.jsxs)("div",{className:n()(r,t,{[d]:m}),children:[(0,h.jsx)("div",{className:n()(c,{[_]:m}),children:s}),(0,h.jsx)("div",{className:n()(o,{[l]:m}),children:"%"}),(0,h.jsx)("div",{className:n()(i,{[u]:m}),children:"off"})]})}},6028:(e,t,s)=>{s.d(t,{s:()=>a.s});var a=s(4032)},7707:(e,t,s)=>{s.d(t,{t:()=>o});var a=s(6048),n=s.n(a);const r="pagination_root__LfyJU";var c=s(184);const o=e=>{let{currentPage:t,handleChangePage:s,pageCount:a}=e;return(0,c.jsx)(n(),{breakLabel:"...",className:r,forcePage:t-1,nextLabel:">",onPageChange:e=>s(e.selected+1),pageCount:a,pageRangeDisplayed:4,previousLabel:"<",renderOnZeroPageCount:null})}},1598:(e,t,s)=>{s.d(t,{a:()=>d});var a=s(1694),n=s.n(a),r=s(1087),c=s(4393);const o={buttons:"counterWithButton_buttons__ESchW",buttons__link:"counterWithButton_buttons__link__WKvso"};var i=s(184);const d=e=>{let{classNames:t,handleProductMinus:s,handleProductPlus:a,handleQuantityInput:d,quantity:_}=e;return(0,i.jsxs)("div",{className:o.buttons,children:[(0,i.jsx)(r.rU,{className:n()(o.buttons__link,o.buttons__link_color,t),to:"/cart",children:"To Cart"}),(0,i.jsx)(c.A,{classNames:o.buttons__counter,handleProductMinus:s,handleProductPlus:a,handleQuantityInput:d,quantity:_})]})}},8010:(e,t,s)=>{s.d(t,{Q:()=>u});var a,n=s(1694),r=s.n(n),c=s(2791);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},o.apply(this,arguments)}function i(e,t){let{title:s,titleId:n,...r}=e;return c.createElement("svg",o({width:15,height:15,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},r),s?c.createElement("title",{id:n},s):null,a||(a=c.createElement("path",{d:"M13.8086 12.3049L11.0742 9.57056C10.9375 9.46118 10.7734 9.37915 10.6094 9.37915H10.1719C10.9102 8.42212 11.375 7.21899 11.375 5.87915C11.375 2.76196 8.80469 0.19165 5.6875 0.19165C2.54297 0.19165 0 2.76196 0 5.87915C0 9.02368 2.54297 11.5667 5.6875 11.5667C7 11.5667 8.20312 11.1292 9.1875 10.3635V10.8284C9.1875 10.9924 9.24219 11.1565 9.37891 11.2932L12.0859 14.0002C12.3594 14.2737 12.7695 14.2737 13.0156 14.0002L13.7812 13.2346C14.0547 12.9885 14.0547 12.5784 13.8086 12.3049ZM5.6875 9.37915C3.74609 9.37915 2.1875 7.82056 2.1875 5.87915C2.1875 3.96509 3.74609 2.37915 5.6875 2.37915C7.60156 2.37915 9.1875 3.96509 9.1875 5.87915C9.1875 7.82056 7.60156 9.37915 5.6875 9.37915Z",fill:"white"})))}const d=c.forwardRef(i),_=(s.p,{searchButton:"searchButton_searchButton__HUIsC"});var l=s(184);const u=e=>{let{classNames:t,handleClick:s,icon:a,label:n}=e;return(0,l.jsxs)("button",{className:r()(_.searchButton,t),onClick:s,children:[a&&"search"===a&&(0,l.jsx)(d,{className:_.searchButton__icon}),(0,l.jsx)("span",{children:n})]})}},61:(e,t,s)=>{s.d(t,{O:()=>n});var a=s(2791);const n=e=>{const t=(0,a.useRef)(null);return(0,a.useEffect)((()=>{const s=s=>{var a;null!==(a=t.current)&&void 0!==a&&a.contains(s.target)||e()};return document.body.addEventListener("mousedown",s),()=>document.body.removeEventListener("mousedown",s)}),[e]),t}},9807:(e,t,s)=>{s.d(t,{O:()=>a});const a=(e,t)=>(null===e||void 0===e?void 0:e.length)>t?"".concat(e.slice(0,t-1),"..."):e}}]);
//# sourceMappingURL=ProductPage.94c9ef50.chunk.js.map