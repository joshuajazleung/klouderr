(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["file"],{"11e9":function(t,e,i){var n=i("52a7"),r=i("4630"),a=i("6821"),o=i("6a99"),s=i("69a8"),c=i("c69a"),l=Object.getOwnPropertyDescriptor;e.f=i("9e1e")?l:function(t,e){if(t=a(t),e=o(e,!0),c)try{return l(t,e)}catch(i){}if(s(t,e))return r(!n.f.call(t,e),t[e])}},"5dbc":function(t,e,i){var n=i("d3f4"),r=i("8b97").set;t.exports=function(t,e,i){var a,o=e.constructor;return o!==i&&"function"==typeof o&&(a=o.prototype)!==i.prototype&&n(a)&&r&&r(t,a),t}},"7f7f":function(t,e,i){var n=i("86cc").f,r=Function.prototype,a=/^\s*function ([^ (]*)/,o="name";o in r||i("9e1e")&&n(r,o,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},"8b97":function(t,e,i){var n=i("d3f4"),r=i("cb7c"),a=function(t,e){if(r(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=i("9b43")(Function.call,i("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,i){return a(t,i),e?t.__proto__=i:n(t,i),t}}({},!1):void 0),check:a}},9093:function(t,e,i){var n=i("ce10"),r=i("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,r)}},"94df":function(t,e,i){"use strict";const n=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],r=["B","kiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],a=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],o=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],s=(t,e)=>{let i=t;return"string"===typeof e||Array.isArray(e)?i=t.toLocaleString(e):!0===e&&(i=t.toLocaleString()),i};t.exports=(t,e)=>{if(!Number.isFinite(t))throw new TypeError(`Expected a finite number, got ${typeof t}: ${t}`);e=Object.assign({bits:!1,binary:!1},e);const i=e.bits?e.binary?o:a:e.binary?r:n;if(e.signed&&0===t)return" 0 "+i[0];const c=t<0,l=c?"-":e.signed?"+":"";if(c&&(t=-t),t<1){const n=s(t,e.locale);return l+n+" "+i[0]}const f=Math.min(Math.floor(e.binary?Math.log(t)/Math.log(1024):Math.log10(t)/3),i.length-1);t=Number((t/Math.pow(e.binary?1024:1e3,f)).toPrecision(3));const u=s(t,e.locale),p=i[f];return l+u+" "+p}},"9c88":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.file?i("div",[i("nav",{staticClass:"level is-mobile"},[i("div",{staticClass:"level-item has-text-centered"},[i("div",[i("p",{staticClass:"heading"},[t._v(t._s(t.$t("file.type")))]),i("p",{staticClass:"title is-4"},[t._v(t._s(t.file.extension.toUpperCase()))])])]),i("div",{staticClass:"level-item has-text-centered"},[i("div",[i("p",{staticClass:"heading"},[t._v(t._s(t.$t("file.size")))]),i("p",{staticClass:"title is-4"},[t._v(t._s(t._f("humanBytes")(t.file.size)))])])]),i("div",{staticClass:"level-item has-text-centered"},[i("div",[i("p",{staticClass:"heading"},[t._v(t._s(t.$t("file.downloaded")))]),i("p",{staticClass:"title is-4"},[t._v(t._s(t.file.downloadCount))])])]),i("div",{staticClass:"level-item has-text-centered"},[i("div",[i("p",{staticClass:"heading"},[t._v(t._s(t.$t("file.visited")))]),i("p",{staticClass:"title is-4"},[t._v(t._s(t.file.visitCount))])])])]),i("hr"),i("h1",{staticClass:"title is-5 tracking-wide mt-12 text-center"},[t._v(t._s(t.file.name))])]):t._e()},r=[],a=(i("7f7f"),i("c5f6"),i("bc3a")),o=i.n(a),s=i("94df"),c=i.n(s),l=i("0c12"),f={data:function(){return{file:null,title:"",downloaded:!1,showDownloadButtons:!1}},filters:{humanBytes:function(t){return c()(Number(t))}},mounted:function(){var t=this;o.a.get("/api/files/".concat(this.$route.params.id)).then((function(e){var i=e.data;t.file=i,t.file.visitCount+=1,t.title="".concat(i.name," - "),setTimeout((function(){t.showDownloadButtons=!0}),2e3)})).catch((function(e){return console.log(e),500===e.response.status?l["a"].$emit("error","Server Error: Unable to handle the request now. Please try again later."):t.$router.push("/404")}))},methods:{onFileDownload:function(){this.file.downloadCount+=1,this.downloaded=!0,o.a.post("/api//download/".concat(this.file.encodedName))}},metaInfo:function(){return{title:this.title}}},u=f,p=i("2877"),d=Object(p["a"])(u,n,r,!1,null,null,null);e["default"]=d.exports},aa77:function(t,e,i){var n=i("5ca1"),r=i("be13"),a=i("79e5"),o=i("fdef"),s="["+o+"]",c="​",l=RegExp("^"+s+s+"*"),f=RegExp(s+s+"*$"),u=function(t,e,i){var r={},s=a((function(){return!!o[t]()||c[t]()!=c})),l=r[t]=s?e(p):o[t];i&&(r[i]=l),n(n.P+n.F*s,"String",r)},p=u.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(f,"")),t};t.exports=u},c5f6:function(t,e,i){"use strict";var n=i("7726"),r=i("69a8"),a=i("2d95"),o=i("5dbc"),s=i("6a99"),c=i("79e5"),l=i("9093").f,f=i("11e9").f,u=i("86cc").f,p=i("aa77").trim,d="Number",b=n[d],h=b,v=b.prototype,_=a(i("2aeb")(v))==d,g="trim"in String.prototype,y=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=g?e.trim():p(e,3);var i,n,r,a=e.charCodeAt(0);if(43===a||45===a){if(i=e.charCodeAt(2),88===i||120===i)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+e}for(var o,c=e.slice(2),l=0,f=c.length;l<f;l++)if(o=c.charCodeAt(l),o<48||o>r)return NaN;return parseInt(c,n)}}return+e};if(!b(" 0o1")||!b("0b1")||b("+0x1")){b=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof b&&(_?c((function(){v.valueOf.call(i)})):a(i)!=d)?o(new h(y(e)),i,b):y(e)};for(var m,w=i("9e1e")?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;w.length>N;N++)r(h,m=w[N])&&!r(b,m)&&u(b,m,f(h,m));b.prototype=v,v.constructor=b,i("2aba")(n,d,b)}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=file.44741c90.js.map