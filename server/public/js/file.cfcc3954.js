(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["file"],{"9c88":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[e.file?t("div",[t("h1",{staticClass:"subtitle title--no-sp is-3"},[e._v(e._s(e.file.name))]),t("span",{staticClass:"subtitle is-6"},[e._v("\n      "+e._s(e.file.downloadCount)+"\n      "+e._s(e.$t("file.downloads"))+" / "+e._s(e.file.visitCount)+" "+e._s(e.$t("file.visits"))+"\n    ")]),t("div",{staticClass:"mt-6"},[t("Adsense",{attrs:{"data-ad-client":"ca-pub-4679085340013866","data-ad-slot":"6511749031"}}),t("div",[t("a",{staticClass:"button is-rounded is-dark mr-4",class:{"pointer-events-none":e.downloaded},attrs:{href:""+e.file.url,target:"_blank",disabled:e.downloaded},on:{click:e.onFileDownload}},[e._v(e._s(e.$t("file.downloadFile",{num:"1"})))]),t("a",{staticClass:"button is-rounded is-white",class:{"pointer-events-none":e.downloaded},attrs:{href:""+e.file.url_s3,target:"_blank",disabled:e.downloaded},on:{click:e.onFileDownload}},[e._v(e._s(e.$t("file.downloadFile",{num:"2"})))])]),t("Adsense",{attrs:{"data-ad-client":"ca-pub-4679085340013866","data-ad-slot":"6511749031"}})],1)]):e._e(),e._m(0)])},s=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"mt-6"},[t("article",{staticClass:"message max-w-md mr-auto ml-auto"},[t("div",{staticClass:"message-header"},[t("p",{staticClass:"mb-0"},[e._v("\n          Alibaba Cloud services revenues are nearing a $4\n          billion annual run rate.\n        ")])]),t("div",{staticClass:"message-body"},[e._v("\n        The figure and associated growth rates suggests the China-based technology\n        giant may eventually leapfrog Google Cloud Platform (GCP) revenues while pursuing\n        Amazon Web Services (AWS) and Microsoft Azure for global public cloud dominance.\n        Alibaba cloud revenues were US$962 million for the quarter ended December 31, 2018 —\n        up a robust 84 percent compared to the corresponding quarter in 2017, the company\n        disclosed this morning. At that growth rate, Alibaba could be positioned to leapfrog\n        Google Cloud Platform (GCP) annual revenues sometime between 2019 and 2021,\n        ChannelE2E suspects.\n        (Note: ChannelE2E will update actual cloud revenue figures/estimates from AWS,\n        Azure and GCP as each company discloses quarterly financial results in the days\n        ahead. We’ll potentially mix IBM into the conversation as well. Stay tuned.)\n        Alibaba Cloud: What’s Driving Growth?\n        The company is gaining momentum with enterprise customers, Alibaba indicated.\n        Moreover, the company launched 678 new cloud-related features during the quarter —\n        addressing such areas as data intelligence, AI applications, security and\n        enterprise solutions.\n        Alibaba has also aligned its cloud services executive team with the company’s\n        overall technology organization. Jeff Zhang is leading the overall effort as\n        president of Alibaba Cloud and CTO of the China-based technology giant.\n        Despite the momentum, I don’t believe Alibaba Cloud is profitable. We’ll be\n        checking the earnings call to learn if such data points are disclosed.\n      ")])])])}],i=(t("7f7f"),t("cadf"),t("551c"),t("097d"),t("bc3a")),o=t.n(i),l=t("0c12"),r={data:function(){return{file:null,title:"",downloaded:!1}},mounted:function(){var e=this;o.a.get("/api/files/".concat(this.$route.params.id)).then(function(a){var t=a.data;e.file=t,e.file.visitCount+=1,e.title="".concat(t.name," - ")}).catch(function(a){return console.log(a),500===a.response.status?l["a"].$emit("error","Server Error: Unable to handle the request now. Please try again later."):e.$router.push("/404")})},methods:{onFileDownload:function(){this.file.downloadCount+=1,this.downloaded=!0,o.a.post("/api//download/".concat(this.file.encodedName))}},metaInfo:function(){return{title:this.title}}},d=r,c=t("2877"),u=Object(c["a"])(d,n,s,!1,null,null,null);a["default"]=u.exports}}]);
//# sourceMappingURL=file.cfcc3954.js.map