(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[71,74],{115:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n(53);var c=n(37);const a=()=>c.n>1},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(23),a=n(20);const r=e=>Object(c.a)(e)?JSON.parse(e)||{}:Object(a.a)(e)?e:{}},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(66),a=n(115),r=n(20),s=n(116);const o=e=>{if(!Object(a.a)())return{className:"",style:{}};const t=Object(r.a)(e)?e:{},n=Object(s.a)(t.style);return Object(c.__experimentalUseBorderProps)({...t,style:n})}},20:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a}));const c=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function a(e,t){return c(e)&&t in e}},21:function(e,t,n){"use strict";var c=n(0),a=n(6),r=n.n(a);t.a=e=>{let t,{label:n,screenReaderLabel:a,wrapperElement:s,wrapperProps:o={}}=e;const l=null!=n,i=null!=a;return!l&&i?(t=s||"span",o={...o,className:r()(o.className,"screen-reader-text")},Object(c.createElement)(t,o,a)):(t=s||c.Fragment,l&&i&&n!==a?Object(c.createElement)(t,o,Object(c.createElement)("span",{"aria-hidden":"true"},n),Object(c.createElement)("span",{className:"screen-reader-text"},a)):Object(c.createElement)(t,o,n))}},285:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(66),a=n(115),r=n(20),s=n(116);const o=e=>{if(!Object(a.a)())return{className:"",style:{}};const t=Object(r.a)(e)?e:{},n=Object(s.a)(t.style);return Object(c.__experimentalUseColorProps)({...t,style:n})}},289:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(20),a=n(116);const r=e=>{const t=Object(c.a)(e)?e:{},n=Object(a.a)(t.style),r=Object(c.a)(n.typography)?n.typography:{};return{style:{fontSize:t.fontSize?`var(--wp--preset--font-size--${t.fontSize})`:r.fontSize,lineHeight:r.lineHeight,fontWeight:r.fontWeight,fontStyle:r.fontStyle,textTransform:r.textTransform,fontFamily:t.fontFamily}}}},325:function(e,t,n){"use strict";n.r(t),n.d(t,"Block",(function(){return f}));var c=n(0),a=n(1),r=n(6),s=n.n(r),o=n(21),l=n(52),i=n(151),u=n(285),b=n(289),d=n(327),p=n(137);n(326);const f=e=>{const{className:t,align:n}=e,{parentClassName:r}=Object(l.useInnerBlockLayoutContext)(),{product:p}=Object(l.useProductDataContext)(),f=Object(i.a)(e),m=Object(u.a)(e),O=Object(b.a)(e),j=Object(d.a)(e);if(!p.id||!p.on_sale)return null;const g="string"==typeof n?"wc-block-components-product-sale-badge--align-"+n:"";return Object(c.createElement)("div",{className:s()("wc-block-components-product-sale-badge",t,g,{[r+"__product-onsale"]:r},m.className,f.className),style:{...m.style,...f.style,...O.style,...j.style}},Object(c.createElement)(o.a,{label:Object(a.__)("Sale","woo-gutenberg-products-block"),screenReaderLabel:Object(a.__)("Product on sale","woo-gutenberg-products-block")}))};t.default=Object(p.withProductDataContext)(f)},326:function(e,t){},327:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(66),a=n(115),r=n(20),s=n(116);const o=e=>{if(!Object(a.a)())return{style:{}};const t=Object(r.a)(e)?e:{},n=Object(s.a)(t.style);return Object(c.__experimentalGetSpacingClassesAndStyles)({...t,style:n})}},351:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var c=n(15),a=n.n(c),r=n(0),s=n(1),o=n(6),l=n.n(o),i=n(2),u=n(52),b=n(289),d=n(151),p=n(327),f=n(137),m=n(73),O=n(325);n(352);const j=()=>Object(r.createElement)("img",{src:i.PLACEHOLDER_IMG_SRC,alt:"",width:void 0,height:void 0}),g=e=>{let{image:t,loaded:n,showFullSize:c,fallbackAlt:s}=e;const{thumbnail:o,src:l,srcset:i,sizes:u,alt:b}=t||{},d={alt:b||s,hidden:!n,src:o,...c&&{src:l,srcSet:i,sizes:u}};return Object(r.createElement)(r.Fragment,null,d.src&&Object(r.createElement)("img",a()({"data-testid":"product-image"},d)),!t&&Object(r.createElement)(j,null))},y=e=>{const{className:t,imageSizing:n="full-size",showProductLink:c=!0,showSaleBadge:a,saleBadgeAlign:o="right"}=e,{parentClassName:i}=Object(u.useInnerBlockLayoutContext)(),{product:f,isLoading:y}=Object(u.useProductDataContext)(),{dispatchStoreEvent:h}=Object(m.a)(),w=Object(b.a)(e),v=Object(d.a)(e),k=Object(p.a)(e);if(!f.id)return Object(r.createElement)("div",{className:l()(t,"wc-block-components-product-image",{[i+"__product-image"]:i},v.className),style:{...w.style,...v.style,...k.style}},Object(r.createElement)(j,null));const S=!!f.images.length,E=S?f.images[0]:null,_=c?"a":r.Fragment,N=Object(s.sprintf)(
/* translators: %s is referring to the product name */
Object(s.__)("Link to %s","woo-gutenberg-products-block"),f.name),x={href:f.permalink,...!S&&{"aria-label":N},onClick:()=>{h("product-view-link",{product:f})}};return Object(r.createElement)("div",{className:l()(t,"wc-block-components-product-image",{[i+"__product-image"]:i},v.className),style:{...w.style,...v.style,...k.style}},Object(r.createElement)(_,c&&x,!!a&&Object(r.createElement)(O.default,{align:o,product:f}),Object(r.createElement)(g,{fallbackAlt:f.name,image:E,loaded:!y,showFullSize:"cropped"!==n})))};t.b=Object(f.withProductDataContext)(y)},352:function(e,t){},531:function(e,t,n){"use strict";n.r(t);var c=n(137),a=n(351);t.default=Object(c.withFilteredAttributes)({showProductLink:{type:"boolean",default:!0},showSaleBadge:{type:"boolean",default:!0},saleBadgeAlign:{type:"string",default:"right"},imageSizing:{type:"string",default:"full-size"},productId:{type:"number",default:0},isDescendentOfQueryLoop:{type:"boolean",default:!1}})(a.b)},6:function(e,t,n){var c;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var c=arguments[t];if(c){var r=typeof c;if("string"===r||"number"===r)e.push(c);else if(Array.isArray(c)){if(c.length){var s=a.apply(null,c);s&&e.push(s)}}else if("object"===r)if(c.toString===Object.prototype.toString)for(var o in c)n.call(c,o)&&c[o]&&e.push(o);else e.push(c.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(c=function(){return a}.apply(t,[]))||(e.exports=c)}()}}]);