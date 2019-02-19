(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["upload"],{2679:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("uploader",{on:{uploaded:e.onFileUploaded}}),i("uploaded-file-list",{attrs:{files:e.uploadedFiles}})],1)},r=[],s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("file-upload",{ref:"upload",attrs:{maximum:e.maximum,drop:!0,multiple:!0,"post-action":e.postAction,accept:e.allowedExtentions,size:e.size||0},on:{input:e.updatetValue,"input-filter":e.inputFilter},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}},[i("div",{staticClass:"upload-area"},[i("p",{staticClass:"block"},[e._v(e._s(e.$t("upload.drop-here")))]),i("button",{staticClass:"button is-primary is-rounded is-large"},[e._v("\n        "+e._s(e.$t("upload.selectFiles")))])])]),i("p",{staticClass:"text-red mt-2"},[e._v(e._s(this.error))]),e.files.length>0?i("div",{staticClass:"mt-6"},[i("p",{staticClass:"mb-2"},[e._v(e._s(e.$t("upload.files-chosen",{num:e.files.length})))]),i("ul",{staticClass:"file-list"},e._l(e.files,function(t){return i("li",{key:t.id},[i("div",{staticClass:"flex items-center justify-between"},[i("span",[e._v(e._s(t.name))]),i("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(i){i.preventDefault(),e.remove(t)}}})]),i("div",[t.active||"0.00"!==t.progress?i("progress",{staticClass:"progress is-small is-primary",attrs:{max:"100"},domProps:{value:Math.round(t.progress)}},[e._v(e._s(t.progress)+"%")]):e._e()])])}),0),e.$refs.upload&&e.$refs.upload.active?e._e():i("a",{staticClass:"button is-rounded mt-5",on:{click:function(t){t.preventDefault(),e.$refs.upload.active=!0}}},[e._v(e._s(e.$t("upload.start-uploading")))])]):e._e()],1)},o=[],a=(i("7f7f"),i("ac6a"),i("8019")),u=i.n(a),l=i("0c12"),c={data:function(){return{files:[],postAction:"/api/upload",putAction:"/api/upload",error:"",maximum:5,size:52428800,allowedExtentions:"image/*,video/*,application/pdf,application/zip,application/x-rar-compressed,application/x-bittorrent"}},components:{"file-upload":u.a},methods:{remove:function(e){this.$refs.upload.remove(e)},updatetValue:function(e){var t=this;e.forEach(function(e){e.success&&(t.remove(e),t.$emit("uploaded",e.response)),e.error&&l["a"].$emit("error","Unexpected server error, please try again later.")})},inputFilter:function(e,t,i){if(this.error="",0!==this.maximum&&this.files.length>=this.maximum&&e&&!t)return this.error="You can only upload ".concat(this.maximum," at a time。"),i();if(e&&!t){if(!/\.(jpeg|jpg|gif|png|webp|pdf|torrent|zip|rar|mp4)$/i.test(e.name))return this.error="You can't upload ".concat(e.name,"。"),i();if(e.size>this.size)return this.error="File exceeds the maximum size of 50MB",i()}return null}}},d=c,p=i("2877"),f=Object(p["a"])(d,s,o,!1,null,null,null),h=f.exports,m=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"mt-6"},[i("ul",{staticClass:"fileList"},e._l(e.files,function(t){return i("li",{key:t.name,staticClass:"mb-12"},[i("div",{staticClass:"title is-6 mb-2"},[e._v(e._s(t.name))]),i("div",{staticClass:"flex justify-between items-center mb-4"},[i("span",{staticClass:"mr-4"},[e._v(e._s(e.$t("upload.download-link")))]),i("div",{staticClass:"relative w-3/4"},[i("input",{staticClass:"input cursor-pointer",attrs:{type:"text"},domProps:{value:e._f("fileDownloadPath")(t.encodedName)},on:{click:e.copyToClipboard}}),i("span",{staticClass:"flex items-center h-full px-2 text-white\n            pointer-events-none bg-black absolute pin-t pin-r"},[e._v(e._s(e.$t("upload.copy")))])])]),i("div",{staticClass:"flex justify-between items-center"},[i("span",{staticClass:"mr-4"},[e._v(e._s(e.$t("upload.remove-link")))]),i("div",{staticClass:"relative w-3/4"},[i("input",{staticClass:"input cursor-pointer",attrs:{type:"text"},domProps:{value:e.getFileRemoveUrl(t.encodedName,t.removeCode)},on:{click:e.copyToClipboard}}),i("span",{staticClass:"flex items-center h-full px-2 text-white\n            pointer-events-none bg-black absolute pin-t pin-r"},[e._v(e._s(e.$t("upload.copy")))])])])])}),0)])},v=[],y={props:["files"],filters:{fileDownloadPath:function(e){return"".concat(window.location.origin,"/files/").concat(e)}},methods:{getFileRemoveUrl:function(e,t){return"".concat(window.location.origin,"/files/").concat(e,"/delete/").concat(t)},copyToClipboard:function(e){var t=this;this.copyToClipboardHelper(e.target.value);var i=e.target.nextSibling;i.textContent=this.$t("upload.copied"),setTimeout(function(){i.textContent=t.$t("upload.copy")},1e3)},copyToClipboardHelper:function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);var i=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select(),document.execCommand("copy"),document.body.removeChild(t),i&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(i))}}},g=y,b=Object(p["a"])(g,m,v,!1,null,null,null),k=b.exports,x={data:function(){return{uploadedFiles:[]}},components:{uploader:h,"uploaded-file-list":k},methods:{onFileUploaded:function(e){this.uploadedFiles.unshift(e)}}},C=x,w=Object(p["a"])(C,n,r,!1,null,null,null);t["default"]=w.exports},"7f7f":function(e,t,i){var n=i("86cc").f,r=Function.prototype,s=/^\s*function ([^ (]*)/,o="name";o in r||i("9e1e")&&n(r,o,{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(e){return""}}})},8019:function(e,t,i){
/*!
 * Name: vue-upload-component
 * Version: 2.8.19
 * Author: LianYue
 */
(function(t,i){e.exports=i()})(0,function(){"use strict";var e=function(e){var t=new XMLHttpRequest;return t.open(e.method||"GET",e.url),t.responseType="json",e.headers&&Object.keys(e.headers).forEach(function(i){t.setRequestHeader(i,e.headers[i])}),t},t=function(e,t){return new Promise(function(i,n){e.onload=function(){if(e.status>=200&&e.status<300){var t;try{t=JSON.parse(e.response)}catch(r){t=e.response}i(t)}else n(e.response)},e.onerror=function(){return n(e.response)},e.send(JSON.stringify(t))})},i=function(e,t){var i=new FormData;for(var n in t)i.append(n,t[n]);return new Promise(function(t,n){e.onload=function(){if(e.status>=200&&e.status<300){var i;try{i=JSON.parse(e.response)}catch(r){i=e.response}t(i)}else n(e.response)},e.onerror=function(){return n(e.response)},e.send(i)})};function n(i){var n=e(i);return t(n,i.body)}var r=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}();function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(e,i){s(this,t),this.file=e,this.options=i}return r(t,[{key:"createChunks",value:function(){this.chunks=[];var e=0,t=this.chunkSize;while(e<this.fileSize)this.chunks.push({blob:this.file.file.slice(e,t),startOffset:e,active:!1,retries:this.maxRetries}),e=t,t=e+this.chunkSize}},{key:"updateFileProgress",value:function(){this.file.progress=this.progress}},{key:"pause",value:function(){this.file.active=!1,this.stopChunks()}},{key:"stopChunks",value:function(){this.chunksUploading.forEach(function(e){e.xhr.abort(),e.active=!1})}},{key:"resume",value:function(){this.file.active=!0,this.startChunking()}},{key:"upload",value:function(){var e=this;return this.promise=new Promise(function(t,i){e.resolve=t,e.reject=i}),this.start(),this.promise}},{key:"start",value:function(){var e=this;n({method:"POST",headers:Object.assign({},this.headers,{"Content-Type":"application/json"}),url:this.action,body:Object.assign(this.startBody,{phase:"start",mime_type:this.fileType,size:this.fileSize,name:this.fileName})}).then(function(t){if("success"!==t.status)return e.file.response=t,e.reject("server");e.sessionId=t.data.session_id,e.chunkSize=t.data.end_offset,e.createChunks(),e.startChunking()}).catch(function(t){e.file.response=t,e.reject("server")})}},{key:"startChunking",value:function(){for(var e=0;e<this.maxActiveChunks;e++)this.uploadNextChunk()}},{key:"uploadNextChunk",value:function(){if(this.file.active){if(this.hasChunksToUpload)return this.uploadChunk(this.chunksToUpload[0]);if(0===this.chunksUploading.length)return this.finish()}}},{key:"uploadChunk",value:function(t){var n=this;t.progress=0,t.active=!0,this.updateFileProgress(),t.xhr=e({method:"POST",headers:this.headers,url:this.action}),t.xhr.upload.addEventListener("progress",function(e){e.lengthComputable&&(t.progress=Math.round(e.loaded/e.total*100))},!1),i(t.xhr,Object.assign(this.uploadBody,{phase:"upload",session_id:this.sessionId,start_offset:t.startOffset,chunk:t.blob})).then(function(e){if(t.active=!1,"success"===e.status)t.uploaded=!0;else if(t.retries--<=0)return n.stopChunks(),n.reject("upload");n.uploadNextChunk()}).catch(function(){if(t.active=!1,t.retries--<=0)return n.stopChunks(),n.reject("upload");n.uploadNextChunk()})}},{key:"finish",value:function(){var e=this;this.updateFileProgress(),n({method:"POST",headers:Object.assign({},this.headers,{"Content-Type":"application/json"}),url:this.action,body:Object.assign(this.finishBody,{phase:"finish",session_id:this.sessionId})}).then(function(t){if(e.file.response=t,"success"!==t.status)return e.reject("server");e.resolve(t)}).catch(function(t){e.file.response=t,e.reject("server")})}},{key:"maxRetries",get:function(){return parseInt(this.options.maxRetries)}},{key:"maxActiveChunks",get:function(){return parseInt(this.options.maxActive)}},{key:"fileType",get:function(){return this.file.type}},{key:"fileSize",get:function(){return this.file.size}},{key:"fileName",get:function(){return this.file.name}},{key:"action",get:function(){return this.options.action||null}},{key:"startBody",get:function(){return this.options.startBody||{}}},{key:"uploadBody",get:function(){return this.options.uploadBody||{}}},{key:"finishBody",get:function(){return this.options.finishBody||{}}},{key:"headers",get:function(){return this.options.headers||{}}},{key:"readyToUpload",get:function(){return!!this.chunks}},{key:"progress",get:function(){var e=this,t=this.chunksUploaded.length/this.chunks.length*100,i=this.chunksUploading.reduce(function(t,i){return t+(0|i.progress)/e.chunks.length},0);return Math.min(t+i,100)}},{key:"chunksToUpload",get:function(){return this.chunks.filter(function(e){return!e.active&&!e.uploaded})}},{key:"hasChunksToUpload",get:function(){return this.chunksToUpload.length>0}},{key:"chunksUploading",get:function(){return this.chunks.filter(function(e){return!!e.xhr&&!!e.active})}},{key:"chunksUploaded",get:function(){return this.chunks.filter(function(e){return!!e.uploaded})}}]),t}(),a={methods:{change:function(e){this.$parent.addInputFile(e.target),e.target.files?(e.target.value="",/safari/i.test(navigator.userAgent)||(e.target.type="",e.target.type="file")):(this.$destroy(),new this.constructor({parent:this.$parent,el:this.$el}))}}},u=a,l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("input",{attrs:{type:"file",name:e.$parent.name,id:e.$parent.inputId||e.$parent.name,accept:e.$parent.accept,capture:e.$parent.capture,disabled:e.$parent.disabled,webkitdirectory:e.$parent.directory&&e.$parent.features.directory,directory:e.$parent.directory&&e.$parent.features.directory,multiple:e.$parent.multiple&&e.$parent.features.html5},on:{change:e.change}})},c=[],d=void 0,p=void 0,f=void 0,h=!1;function m(e,t,i,n,r,s,o,a){var u=("function"===typeof i?i.options:i)||{};return u.render||(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,r&&(u.functional=!0)),u._scopeId=n,u}function v(){var e=document.head||document.getElementsByTagName("head")[0],t=v.styles||(v.styles={}),i="undefined"!==typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(n,r){if(!document.querySelector('style[data-vue-ssr-id~="'+n+'"]')){var s=i?r.media||"default":n,o=t[s]||(t[s]={ids:[],parts:[],element:void 0});if(!o.ids.includes(n)){var a=r.source,u=o.ids.length;if(o.ids.push(n),r.map&&(a+="\n/*# sourceURL="+r.map.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r.map))))+" */"),i&&(o.element=o.element||document.querySelector("style[data-group="+s+"]")),!o.element){var l=o.element=document.createElement("style");l.type="text/css",r.media&&l.setAttribute("media",r.media),i&&(l.setAttribute("data-group",s),l.setAttribute("data-next-index","0")),e.appendChild(l)}if(i&&(u=parseInt(o.element.getAttribute("data-next-index")),o.element.setAttribute("data-next-index",u+1)),o.element.styleSheet)o.parts.push(a),o.element.styleSheet.cssText=o.parts.filter(Boolean).join("\n");else{var c=document.createTextNode(a),d=o.element.childNodes;d[u]&&o.element.removeChild(d[u]),d.length?o.element.insertBefore(c,d[u]):o.element.appendChild(c)}}}}}var y=m({render:l,staticRenderFns:c},d,u,p,h,f,v,void 0),g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function k(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}var x={headers:{},action:"",minSize:1048576,maxActive:3,maxRetries:5,handler:o},C={components:{InputFile:y},props:{inputId:{type:String},name:{type:String,default:"file"},accept:{type:String},capture:{},disabled:{},multiple:{type:Boolean},maximum:{type:Number,default:function(){return this.multiple?0:1}},addIndex:{type:[Boolean,Number]},directory:{type:Boolean},postAction:{type:String},putAction:{type:String},customAction:{type:Function},headers:{type:Object,default:Object},data:{type:Object,default:Object},timeout:{type:Number,default:0},drop:{default:!1},dropDirectory:{type:Boolean,default:!0},size:{type:Number,default:0},extensions:{default:Array},value:{type:Array,default:Array},thread:{type:Number,default:1},chunkEnabled:{type:Boolean,default:!1},chunk:{type:Object,default:function(){return x}}},data:function(){return{files:this.value,features:{html5:!0,directory:!1,drag:!1},active:!1,dropActive:!1,uploading:0,destroy:!1}},mounted:function(){var e=document.createElement("input");if(e.type="file",e.multiple=!0,window.FormData&&e.files?("boolean"!==typeof e.webkitdirectory&&"boolean"!==typeof e.directory||(this.features.directory=!0),this.features.html5&&"undefined"!==typeof e.ondrop&&(this.features.drop=!0)):this.features.html5=!1,this.maps={},this.files)for(var t=0;t<this.files.length;t++){var i=this.files[t];this.maps[i.id]=i}this.$nextTick(function(){this.$parent&&this.$parent.$forceUpdate(),this.watchDrop(this.drop)})},beforeDestroy:function(){this.destroy=!0,this.active=!1},computed:{uploaded:function(){for(var e=void 0,t=0;t<this.files.length;t++)if(e=this.files[t],e.fileObject&&!e.error&&!e.success)return!1;return!0},chunkOptions:function(){return Object.assign(x,this.chunk)},className:function(){return["file-uploads",this.features.html5?"file-uploads-html5":"file-uploads-html4",this.features.directory&&this.directory?"file-uploads-directory":void 0,this.features.drop&&this.drop?"file-uploads-drop":void 0,this.disabled?"file-uploads-disabled":void 0]}},watch:{active:function(e){this.watchActive(e)},dropActive:function(){this.$parent&&this.$parent.$forceUpdate()},drop:function(e){this.watchDrop(e)},value:function(e){if(this.files!==e){this.files=e;var t=this.maps;this.maps={};for(var i=0;i<this.files.length;i++){var n=this.files[i];this.maps[n.id]=n}for(var r in this.maps){var s=this.maps[r],o=t[r];s!==o&&this.emitFile(s,o)}for(var a in t)this.maps[a]||this.emitFile(void 0,t[a])}}},methods:{clear:function(){if(this.files.length){var e=this.files;this.files=[],this.maps={},this.emitInput();for(var t=0;t<e.length;t++)this.emitFile(void 0,e[t])}return!0},get:function(e){return!!e&&("object"===("undefined"===typeof e?"undefined":b(e))?this.maps[e.id]||!1:this.maps[e]||!1)},add:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.addIndex,i=e,n=i instanceof Array;n||(i=[i]);for(var r=[],s=0;s<i.length;s++){var o=i[s];this.features.html5&&o instanceof Blob&&(o={file:o,size:o.size,name:o.webkitRelativePath||o.relativePath||o.name||"unknown",type:o.type});var a=!1;if(!1===o.fileObject||(o.fileObject?a=!0:"undefined"!==typeof Element&&o.el instanceof Element?a=!0:"undefined"!==typeof Blob&&o.file instanceof Blob&&(a=!0)),a&&(o=g({fileObject:!0,size:-1,name:"Filename",type:"",active:!1,error:"",success:!1,putAction:this.putAction,postAction:this.postAction,timeout:this.timeout},o,{response:{},progress:"0.00",speed:0}),o.data=g({},this.data,o.data?o.data:{}),o.headers=g({},this.headers,o.headers?o.headers:{})),o.id||(o.id=Math.random().toString(36).substr(2)),!this.emitFilter(o,void 0)){if(this.maximum>1&&r.length+this.files.length>=this.maximum)break;if(r.push(o),1===this.maximum)break}}if(!r.length)return!1;1===this.maximum&&this.clear();var u=void 0;if(!0===t||0===t)u=r.concat(this.files);else if(t){var l;u=this.files.concat([]),(l=u).splice.apply(l,[t,0].concat(r))}else u=this.files.concat(r);this.files=u;for(var c=0;c<r.length;c++){var d=r[c];this.maps[d.id]=d}this.emitInput();for(var p=0;p<r.length;p++)this.emitFile(r[p],void 0);return n?r:r[0]},addInputFile:function(e){var t=[];if(e.files)for(var i=0;i<e.files.length;i++){var n=e.files[i];t.push({size:n.size,name:n.webkitRelativePath||n.relativePath||n.name,type:n.type,file:n})}else{var r=e.value.replace(/\\/g,"/").split("/");delete e.__vuex__,t.push({name:r[r.length-1],el:e})}return this.add(t)},addDataTransfer:function(e){var t=this,i=[];if(e.items&&e.items.length){for(var n=[],r=0;r<e.items.length;r++){var s=e.items[r];s=s.getAsEntry?s.getAsEntry()||s.getAsFile():s.webkitGetAsEntry&&s.webkitGetAsEntry()||s.getAsFile(),s&&n.push(s)}return new Promise(function(e,r){var s=function r(s){var o=n[s];if(!o||t.maximum>0&&i.length>=t.maximum)return e(t.add(i));t.getEntry(o).then(function(e){i.push.apply(i,k(e)),r(s+1)})};s(0)})}if(e.files.length){for(var o=0;o<e.files.length;o++)if(i.push(e.files[o]),this.maximum>0&&i.length>=this.maximum)break;return Promise.resolve(this.add(i))}return Promise.resolve([])},getEntry:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new Promise(function(n,r){if(e.isFile)e.file(function(e){n([{size:e.size,name:i+e.name,type:e.type,file:e}])});else if(e.isDirectory&&t.dropDirectory){var s=[],o=e.createReader(),a=function r(){o.readEntries(function(o){var a=function a(u){return!o[u]&&0===u||t.maximum>0&&s.length>=t.maximum?n(s):o[u]?void t.getEntry(o[u],i+e.name+"/").then(function(e){s.push.apply(s,k(e)),a(u+1)}):r()};a(0)})};a()}else n([])})},replace:function(e,t){var i=this.get(e),n=this.get(t);if(!i||!n||i===n)return!1;var r=this.files.concat([]),s=r.indexOf(i),o=r.indexOf(n);return-1!==s&&-1!==o&&(r[s]=n,r[o]=i,this.files=r,this.emitInput(),!0)},remove:function(e){var t=this.get(e);if(t){if(this.emitFilter(void 0,t))return!1;var i=this.files.concat([]),n=i.indexOf(t);if(-1===n)return console.error("remove",t),!1;i.splice(n,1),this.files=i,delete this.maps[t.id],this.emitInput(),this.emitFile(void 0,t)}return t},update:function(e,t){var i=this.get(e);if(i){var n=g({},i,t);if(!i.fileObject||!i.active||n.active||n.error||n.success||(n.error="abort"),this.emitFilter(n,i))return!1;var r=this.files.concat([]),s=r.indexOf(i);return-1===s?(console.error("update",i),!1):(r.splice(s,1,n),this.files=r,delete this.maps[i.id],this.maps[n.id]=n,this.emitInput(),this.emitFile(n,i),n)}return!1},emitFilter:function(e,t){var i=!1;return this.$emit("input-filter",e,t,function(){return i=!0,i}),i},emitFile:function(e,t){this.$emit("input-file",e,t),!(e&&e.fileObject&&e.active)||t&&t.active?e&&e.fileObject&&e.active||!t||!t.fileObject||!t.active||this.uploading--:(this.uploading++,this.$nextTick(function(){var t=this;setTimeout(function(){t.upload(e).then(function(){e=t.get(e),e&&e.fileObject&&t.update(e,{active:!1,success:!e.error})}).catch(function(i){t.update(e,{active:!1,success:!1,error:i.code||i.error||i.message||i})})},parseInt(50*Math.random()+50,10))})),!this.active||Boolean(e)===Boolean(t)&&e.active===t.active||this.watchActive(!0)},emitInput:function(){this.$emit("input",this.files)},upload:function(e){var t=this.get(e);if(!t)return Promise.reject("not_exists");if(!t.fileObject)return Promise.reject("file_object");if(t.error)return Promise.reject(t.error);if(t.success)return Promise.resolve(t);var i=this.extensions;if(i&&(i.length||"undefined"===typeof i.length)&&("object"===("undefined"===typeof i?"undefined":b(i))&&i instanceof RegExp||("string"===typeof i&&(i=i.split(",").map(function(e){return e.trim()}).filter(function(e){return e})),i=new RegExp("\\.("+i.join("|").replace(/\./g,"\\.")+")$","i")),-1===t.name.search(i)))return Promise.reject("extension");if(this.size>0&&t.size>=0&&t.size>this.size)return Promise.reject("size");if(this.customAction)return this.customAction(t,this);if(this.features.html5){if(this.shouldUseChunkUpload(t))return this.uploadChunk(t);if(t.putAction)return this.uploadPut(t);if(t.postAction)return this.uploadHtml5(t)}return t.postAction?this.uploadHtml4(t):Promise.reject("No action configured")},shouldUseChunkUpload:function(e){return this.chunkEnabled&&!!this.chunkOptions.handler&&e.size>this.chunkOptions.minSize},uploadChunk:function(e){var t=this.chunkOptions.handler;return e.chunk=new t(e,this.chunkOptions),e.chunk.upload()},uploadPut:function(e){var t=[],i=void 0;for(var n in e.data)i=e.data[n],null!==i&&void 0!==i&&t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));var r=t.length?(-1===e.putAction.indexOf("?")?"?":"&")+t.join("&"):"",s=new XMLHttpRequest;return s.open("PUT",e.putAction+r),this.uploadXhr(s,e,e.file)},uploadHtml5:function(e){var t=new window.FormData,i=void 0;for(var n in e.data)i=e.data[n],i&&"object"===("undefined"===typeof i?"undefined":b(i))&&"function"!==typeof i.toString?i instanceof File?t.append(n,i,i.name):t.append(n,JSON.stringify(i)):null!==i&&void 0!==i&&t.append(n,i);t.append(this.name,e.file,e.file.filename||e.name);var r=new XMLHttpRequest;return r.open("POST",e.postAction),this.uploadXhr(r,e,t)},uploadXhr:function(e,t,i){var n=this,r=t,s=0,o=0;e.upload.onprogress=function(e){if(r=n.get(r),e.lengthComputable&&r&&r.fileObject&&r.active){var t=Math.round(Date.now()/1e3);t!==s&&(s=t,r=n.update(r,{progress:(e.loaded/e.total*100).toFixed(2),speed:e.loaded-o}),o=e.loaded)}};var a=setInterval(function(){if(r=n.get(r),!r||!r.fileObject||r.success||r.error||!r.active){a&&(clearInterval(a),a=!1);try{e.abort(),e.timeout=1}catch(t){}}},100);return new Promise(function(t,s){var o=void 0,u=function(i){if(!o){if(o=!0,a&&(clearInterval(a),a=!1),r=n.get(r),!r)return s("not_exists");if(!r.fileObject)return s("file_object");if(r.error)return s(r.error);if(!r.active)return s("abort");if(r.success)return t(r);var u={};switch(i.type){case"timeout":case"abort":u.error=i.type;break;case"error":e.status?e.status>=500?u.error="server":e.status>=400&&(u.error="denied"):u.error="network";break;default:e.status>=500?u.error="server":e.status>=400?u.error="denied":u.progress="100.00"}if(e.responseText){var l=e.getResponseHeader("Content-Type");l&&-1!==l.indexOf("/json")?u.response=JSON.parse(e.responseText):u.response=e.responseText}return r=n.update(r,u),r.error?s(r.error):t(r)}};for(var l in e.onload=u,e.onerror=u,e.onabort=u,e.ontimeout=u,r.timeout&&(e.timeout=r.timeout),r.headers)e.setRequestHeader(l,r.headers[l]);r=n.update(r,{xhr:e}),e.send(i)})},uploadHtml4:function(e){var t=this,i=e,n=function(e){27===e.keyCode&&e.preventDefault()},r=document.createElement("iframe");r.id="upload-iframe-"+i.id,r.name="upload-iframe-"+i.id,r.src="about:blank",r.setAttribute("style","width:1px;height:1px;top:-999em;position:absolute; margin-top:-999em;");var s=document.createElement("form");s.action=i.postAction,s.name="upload-form-"+i.id,s.setAttribute("method","POST"),s.setAttribute("target","upload-iframe-"+i.id),s.setAttribute("enctype","multipart/form-data");var o=void 0,a=void 0;for(var u in i.data)o=i.data[u],o&&"object"===("undefined"===typeof o?"undefined":b(o))&&"function"!==typeof o.toString&&(o=JSON.stringify(o)),null!==o&&void 0!==o&&(a=document.createElement("input"),a.type="hidden",a.name=u,a.value=o,s.appendChild(a));s.appendChild(i.el),document.body.appendChild(r).appendChild(s);var l=function(){var e=void 0;try{r.contentWindow&&(e=r.contentWindow.document)}catch(t){}if(!e)try{e=r.contentDocument?r.contentDocument:r.document}catch(t){e=r.document}return e&&e.body?e.body.innerHTML:null};return new Promise(function(e,o){setTimeout(function(){if(i=t.update(i,{iframe:r}),!i)return o("not_exists");var a=setInterval(function(){i=t.get(i),i&&i.fileObject&&!i.success&&!i.error&&i.active||(a&&(clearInterval(a),a=!1),r.onabort({type:i?"abort":"not_exists"}))},100),u=void 0,c=function(r){if(!u){if(u=!0,a&&(clearInterval(a),a=!1),document.body.removeEventListener("keydown",n),i=t.get(i),!i)return o("not_exists");if(!i.fileObject)return o("file_object");if(i.error)return o(i.error);if(!i.active)return o("abort");if(i.success)return e(i);var s=l(),c={};switch(r.type){case"abort":c.error="abort";break;case"error":i.error?c.error=i.error:c.error=null===s?"network":"denied";break;default:i.error?c.error=i.error:null===c?c.error="network":c.progress="100.00"}if(null!==s){if(s&&"{"===s.substr(0,1)&&"}"===s.substr(s.length-1,1))try{s=JSON.parse(s)}catch(d){}c.response=s}return i=t.update(i,c),i.error?o(i.error):e(i)}};r.onload=c,r.onerror=c,r.onabort=c,document.body.addEventListener("keydown",n),s.submit()},50)}).then(function(e){return r.parentNode&&r.parentNode.removeChild(r),e}).catch(function(e){return r.parentNode&&r.parentNode.removeChild(r),e})},watchActive:function(e){var t=void 0,i=0;while(t=this.files[i])if(i++,t.fileObject)if(e&&!this.destroy){if(this.uploading>=this.thread||this.uploading&&!this.features.html5)break;t.active||t.error||t.success||this.update(t,{active:!0})}else t.active&&this.update(t,{active:!1});else;0===this.uploading&&(this.active=!1)},watchDrop:function(e){var t=e;if(this.features.drop){if(this.dropElement)try{document.removeEventListener("dragenter",this.onDragenter,!1),document.removeEventListener("dragleave",this.onDragleave,!1),document.removeEventListener("drop",this.onDocumentDrop,!1),this.dropElement.removeEventListener("dragover",this.onDragover,!1),this.dropElement.removeEventListener("drop",this.onDrop,!1)}catch(i){}t?"string"===typeof t?t=document.querySelector(t)||this.$root.$el.querySelector(t):!0===t&&(t=this.$parent.$el):t=!1,this.dropElement=t,this.dropElement&&(document.addEventListener("dragenter",this.onDragenter,!1),document.addEventListener("dragleave",this.onDragleave,!1),document.addEventListener("drop",this.onDocumentDrop,!1),this.dropElement.addEventListener("dragover",this.onDragover,!1),this.dropElement.addEventListener("drop",this.onDrop,!1))}},onDragenter:function(e){if(e.preventDefault(),!this.dropActive&&e.dataTransfer){var t=e.dataTransfer;t.files&&t.files.length?this.dropActive=!0:t.types?t.types.indexOf&&-1!==t.types.indexOf("Files")?this.dropActive=!0:t.types.contains&&t.types.contains("Files")&&(this.dropActive=!0):this.dropActive=!0}},onDragleave:function(e){e.preventDefault(),this.dropActive&&("HTML"===e.target.nodeName||e.target===e.explicitOriginalTarget||!e.fromElement&&(e.clientX<=0||e.clientY<=0||e.clientX>=window.innerWidth||e.clientY>=window.innerHeight))&&(this.dropActive=!1)},onDragover:function(e){e.preventDefault()},onDocumentDrop:function(){this.dropActive=!1},onDrop:function(e){e.preventDefault(),this.addDataTransfer(e.dataTransfer)}}},w=C,j=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{class:e.className},[e._t("default"),e._v(" "),i("label",{attrs:{for:e.inputId||e.name}}),e._v(" "),i("input-file")],2)},A=[],O=function(e){e&&e("data-v-595958af_0",{source:"\n.file-uploads{overflow:hidden;position:relative;text-align:center;display:inline-block\n}\n.file-uploads.file-uploads-html4 input,.file-uploads.file-uploads-html5 label{background:#fff;opacity:0;font-size:20em;z-index:1;top:0;left:0;right:0;bottom:0;position:absolute;width:100%;height:100%\n}\n.file-uploads.file-uploads-html4 label,.file-uploads.file-uploads-html5 input{background:rgba(255,255,255,0);overflow:hidden;position:fixed;width:1px;height:1px;z-index:-1;opacity:0\n}",map:void 0,media:void 0})},_=void 0,E=void 0,$=!1;function S(e,t,i,n,r,s,o,a){var u=("function"===typeof i?i.options:i)||{};u.render||(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,r&&(u.functional=!0)),u._scopeId=n;var l=void 0;if(t&&(l=function(e){t.call(this,o(e))}),void 0!==l)if(u.functional){var c=u.render;u.render=function(e,t){return l.call(t),c(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return u}function F(){var e=document.head||document.getElementsByTagName("head")[0],t=F.styles||(F.styles={}),i="undefined"!==typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(n,r){if(!document.querySelector('style[data-vue-ssr-id~="'+n+'"]')){var s=i?r.media||"default":n,o=t[s]||(t[s]={ids:[],parts:[],element:void 0});if(!o.ids.includes(n)){var a=r.source,u=o.ids.length;if(o.ids.push(n),r.map&&(a+="\n/*# sourceURL="+r.map.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r.map))))+" */"),i&&(o.element=o.element||document.querySelector("style[data-group="+s+"]")),!o.element){var l=o.element=document.createElement("style");l.type="text/css",r.media&&l.setAttribute("media",r.media),i&&(l.setAttribute("data-group",s),l.setAttribute("data-next-index","0")),e.appendChild(l)}if(i&&(u=parseInt(o.element.getAttribute("data-next-index")),o.element.setAttribute("data-next-index",u+1)),o.element.styleSheet)o.parts.push(a),o.element.styleSheet.cssText=o.parts.filter(Boolean).join("\n");else{var c=document.createTextNode(a),d=o.element.childNodes;d[u]&&o.element.removeChild(d[u]),d.length?o.element.insertBefore(c,d[u]):o.element.appendChild(c)}}}}}var T=S({render:j,staticRenderFns:A},O,w,_,$,E,F,void 0),D=Object.freeze({default:T}),P=D&&T||D,z=P;return z})}}]);
//# sourceMappingURL=upload.f103f998.js.map