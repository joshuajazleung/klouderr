(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["file"],{"11e9":function(e,t,n){var a=n("52a7"),o=n("4630"),i=n("6821"),s=n("6a99"),r=n("69a8"),l=n("c69a"),h=Object.getOwnPropertyDescriptor;t.f=n("9e1e")?h:function(e,t){if(e=i(e),t=s(t,!0),l)try{return h(e,t)}catch(n){}if(r(e,t))return o(!a.f.call(e,t),e[t])}},"5dbc":function(e,t,n){var a=n("d3f4"),o=n("8b97").set;e.exports=function(e,t,n){var i,s=t.constructor;return s!==n&&"function"==typeof s&&(i=s.prototype)!==n.prototype&&a(i)&&o&&o(e,i),e}},"7f7f":function(e,t,n){var a=n("86cc").f,o=Function.prototype,i=/^\s*function ([^ (]*)/,s="name";s in o||n("9e1e")&&a(o,s,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},"8b97":function(e,t,n){var a=n("d3f4"),o=n("cb7c"),i=function(e,t){if(o(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{a=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),a(e,[]),t=!(e instanceof Array)}catch(o){t=!0}return function(e,n){return i(e,n),t?e.__proto__=n:a(e,n),e}}({},!1):void 0),check:i}},9093:function(e,t,n){var a=n("ce10"),o=n("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return a(e,o)}},"94df":function(e,t,n){"use strict";const a=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],o=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],i=(e,t)=>{let n=e;return"string"===typeof t?n=e.toLocaleString(t):!0===t&&(n=e.toLocaleString()),n};e.exports=(e,t)=>{if(!Number.isFinite(e))throw new TypeError(`Expected a finite number, got ${typeof e}: ${e}`);t=Object.assign({bits:!1},t);const n=t.bits?o:a;if(t.signed&&0===e)return" 0 "+n[0];const s=e<0,r=s?"-":t.signed?"+":"";if(s&&(e=-e),e<1){const a=i(e,t.locale);return r+a+" "+n[0]}const l=Math.min(Math.floor(Math.log10(e)/3),n.length-1);e=Number((e/Math.pow(1e3,l)).toPrecision(3));const h=i(e,t.locale),c=n[l];return r+h+" "+c}},"9c88":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.file?n("div",[n("nav",{staticClass:"level is-mobile"},[n("div",{staticClass:"level-item has-text-centered"},[n("div",[n("p",{staticClass:"heading"},[e._v(e._s(e.$t("file.type")))]),n("p",{staticClass:"title is-4"},[e._v(e._s(e.file.extension.toUpperCase()))])])]),n("div",{staticClass:"level-item has-text-centered"},[n("div",[n("p",{staticClass:"heading"},[e._v(e._s(e.$t("file.size")))]),n("p",{staticClass:"title is-4"},[e._v(e._s(e._f("humanBytes")(e.file.size)))])])]),n("div",{staticClass:"level-item has-text-centered"},[n("div",[n("p",{staticClass:"heading"},[e._v(e._s(e.$t("file.downloaded")))]),n("p",{staticClass:"title is-4"},[e._v(e._s(e.file.downloadCount))])])]),n("div",{staticClass:"level-item has-text-centered"},[n("div",[n("p",{staticClass:"heading"},[e._v(e._s(e.$t("file.visited")))]),n("p",{staticClass:"title is-4"},[e._v(e._s(e.file.visitCount))])])])]),n("hr"),n("h1",{staticClass:"title is-5 tracking-wide mt-12 text-center"},[e._v(e._s(e.file.name))]),n("div",{staticClass:"ads mt-10 text-center"},[n("Adsense",{attrs:{"data-ad-client":"ca-pub-4679085340013866","data-ad-slot":"9178412838"}}),n("Adsense",{attrs:{"data-ad-client":"ca-pub-4679085340013866","data-ad-slot":"6511749031"}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showDownloadButtons,expression:"showDownloadButtons"}],staticClass:"text-center"},[n("a",{staticClass:"button is-primary is-rounded mr-4 uppercase font-bold",class:{"pointer-events-none":e.downloaded},attrs:{href:""+e.file.url_s3,target:"_blank",disabled:e.downloaded},on:{click:e.onFileDownload}},[e._v(e._s(e.$t("file.downloadFile",{num:"1"})))])]),n("div",{staticClass:"ads text-center"},[n("Adsense",{attrs:{"data-ad-client":"ca-pub-4679085340013866","data-ad-slot":"6511749031"}})],1),"en"===e.$i18n.locale?n("div",{staticClass:"mt-20"},[n("h4",{staticClass:"title title--no-sp is-6"},[e._v("5 reasons why PS5 will lose to Xbox next generation – Reader’s Feature")]),n("p",[e._v("\n         A reader explains why he thinks Microsoft has the advantage next gen and not Sony, as he predicts Project Scarlett to win over PS5. Before I start this feature, I want to say that I will almost certainly buy both next gen consoles and currently own a PlayStation 4 and Xbox One. I know some people tend to take these console wars deadly seriously, but I see them more as a football match between long-time rivals, where you want both to do well so you get an exciting match. So please excuse the provocative title, although I do genuinely think that Sony are in the more difficult position going into the next generation of consoles and that Project Scarlett has a very good chance of beating it. 1. Winner’s disadvantage As we know the winner of one generation of consoles does not usually go on to win in the next. In fact, Sony are the only ones to achieve that feat, between the PlayStation 1 and 2 eras. (They also won last generation but only by the skin of their teeth, thanks to the Xbox not doing as well outside of the US and UK, but I think we can all agree that the Xbox 360 was very much in the driving seat last gen and inspired all the major change in the industry.) But Sony has had such an easy ride of it this gen, with Microsoft and Nintendo discounting themselves out of the race before they even started. Nintendo came back in fine style with the Switch but Microsoft has just left the Xbox One to drift aimlessly. But that has clearly been a calculated strategy and I believe that Microsoft realised that they could not win this gen and so immediately put all their efforts into planning the next one, and so should be much more prepared for next gen than Sony, who has had to spend most of their time keeping this one ticking over. 2. The race for power It’s pretty obvious that Phil Spencer, head of Xbox, disagreed with everything that was done with the Xbox One at launch, including its lack of power compared to the PlayStation 4. You could see that in how keen he was on the Xbox One X and I see zero chance of him not ensuring that Project Scarlett is more powerful than PlayStation 5. They’ve already hinted as much and I’m sure they’re taking detailed notes on everything Sony says about the PlayStation 5 (notice Microsoft haven’t said anything yet) and will ensure they manage to one-up them. They have a clear advantage in that sense too, in that Microsoft are a much, much bigger company than Sony and can afford to take a loss on their hardware to make sure it’s more powerful. Although of course hardware isn’t the only issue in the new generation… 3. Streaming masters The other thing Microsoft have been doing all gen, apart from forcing Sony to take backwards compatibility seriously, is getting ready for streaming. They’re so far ahead of this that Sony themselves having signed up to use their tech and Google are already looking like amateur hour when it comes to Stadia. Microsoft’s failure with the Xbox One has made them far less precious about consoles than Sony are and they’re clearly going to make streaming at least as important in the next gen. Again, Sony’s overwhelming success puts them at a disadvantage, since because the PlayStation 4 has done so well it’s obvious to try and replicate that success again next gen. But everything so far points towards Sony’s streaming plans being much less advanced, even with the experience they should have gained from PlayStation Now. 4. Multiplayer options It’s obvious that one of the big reasons for the PlayStation 4’s success is its exclusive games, all of which have been primarily single-player. But Sony has been talking a lot lately about how it wants to make multiplayer games as well, and not rely so much on the formula we’ve seen this gen. But making a successful multiplayer game is a lot more hit and miss than a single-player game, which Sony knows how to do and can even get mediocre teams, like the ones that did Days Gone, to knock out a massive hit. But none of their teams have made a multiplayer game in a long time. I’m also worried their first thought is going to be to bring back the SOCOM franchise, which was always boring, and try and belatedly get onto the Battle Royale bandwagon. Something which, sensibly, Microsoft has vowed not to do with Halo Infinite. 5. Internal politics I’ll be honest this whole article was inspired by the news earlier in the week that Sony is cutting staff in Europe in order to centralise all their non-developers in America. That doesn’t necessarily sound like anything particularly interesting, but as has been pointed out it’s an incredibly stupid idea that seems to have been done purely because of some sort of exec power struggle at Sony. What happened previously is that the UK and other European countries, as well as Japan, got to commission their own games and do their own marketing for all games and the console itself. What’s happening now is that America is taking over more control so everything will be more similar. That’s a terrible idea with no upside (sound familiar in terms of current politics?) and Sony are mad to even think about it, as it instantly denies them an advantage they’ve had over Microsoft for decades. Sony has had it easy this gen but next gen… they’re going to have a real fight on their hands.\n       ")])]):n("div",{staticClass:"mt-20"},[n("h4",{staticClass:"title title--no-sp is-6"},[e._v("透视腾讯、阿里财报背后的云端新战局")]),n("p",[e._v("\n          腾讯、阿里两大巨头先后发布季度财报，让两家的云计算产业再次成为了外界讨论的热点。\n\n          腾讯率先放榜。腾讯2019财年Q2财报显示“金融科技及企业服务收入”收入为228.88亿元，撇除备付金余额的利息收入影响同比增长57%。腾讯一如既往地没有在季度财报中单独披露云计算收入，但提及“云服务收入稳健增长”。参考腾讯云近几个季度的同比增长速度都在三位数，财报中的“稳健”也说明腾讯云依然保持着很高的加速度。\n\n          阿里巴巴2020财年Q1财报隔日而至。财报显示，当季阿里云收入为77.87亿元，同比增长约66%。可以对比的是，2019财年Q4，阿里云收入为77.26亿元，同比增长76%。阿里云的营收能力在国内依旧是一枝独秀，但对比看，领头羊的增速压力在进一步显现。\n\n          对于云计算业务的增长动力，双方财报表述差异明显。阿里云表示，增长“由每位客户平均支出增加所推动”。腾讯则表示：“在企业服务方面，伴随销售团队及产品类型扩大，腾讯云获得了更多主要客户及大型合同，收入同比稳健增长。”——阿里侧重于展现对存量的挖掘，而腾讯的信心在于增量的快速提升。\n\n          两强并进之余，云计算市场竞争格局也正发生着微妙的变化。\n\n          此前Gartner发布的报告显示，腾讯云2018年在IaaS市场增速达到128%，整体市场份额位列全球第六名、亚太区第四名，增速全球第一。财报发布前，高盛也曾预估腾讯云可贡献38亿元营收，这一数字已经接近阿里云的一半，双方的收入差距进一步缩小。\n\n          最近半年来腾讯云与合作方对外公开宣布的、与营收直接相关的“市场打单”动作，也印证着外界的外界的评价。\n\n          今年6月上旬，腾讯云、腾讯产业投资基金、东华软件和华体科技的四方联合体中标成都市“智慧绿道”项目，成都将会建设锦城绿道和沿线的商业等设施，铺开城市“绿色网络”，腾讯云方面提供智慧化解决方案，该单价格高达8.7亿元。\n\n          紧接着在7月初，腾讯云中标长沙市城市超级大脑项目，根据长沙政府采购网公示内容，中标价格高达5.2亿元，主要用于打造长沙新型智慧城市建设的“神经中枢”，加快推动长沙的数字化发展进程。\n\n          这些动作与财报中“……获得更多主要客户及大型合同，云业务的收入同比稳健增长”相契合。\n\n          而上述营收可观的项目都指向一个领域：政务。事实上，它们某种程度上都可以看做腾讯云在政务领域标杆案例的规模化复制。\n\n          例如，长沙市城市超级大脑项目即是腾讯城市发展解决方案“WeCity未来城市”的首个落地项目，而WeCity是腾讯云标杆项目规模化复制在政务领域的主要载体。\n\n          WeCity被腾讯财报在谈到腾讯云不多的表述中重点提到，官方定义是“以腾讯云的基础产品和能力为底层，为数字政务、城市治理、城市决策和产业互联等领域提供解决方案，并通过微信、小程序等工具触达用户”，简单说就是一个全新的政务业务品牌，其目的是将腾讯在政务大本营广东的典型项目“数字广东”经验拓展到更多地区。\n\n          在这之前，腾讯云的政务相关解决方案已经在全国22个省份落地，在政务领域实现了三年25倍的增长。腾讯云通过WeCity开始“批量复制”政务案例并不意外。\n\n          由此可见，过去一段时间腾讯签署的那些“战略合作协议”，未来都有可能承载WeCity的规模化复制，带来可观的营收增长。\n\n          除了政务，腾讯云在金融方面也在走类似的规模化复制道路。截至目前，腾讯云已有6000+金融客户，150多家银行客户，公开信息中四大国有银行中有3家和腾讯云有合作。\n\n          放眼国际市场，同季度亚马逊AWS营收增长37%、微软Azure增长64%、阿里云增长66%，增速都出现相对下滑。\n\n          虽然这可以认为是因为体量越大、增长越难，但随之而来的是打法的变化。阿里财报中写到，阿里云“本季业务增长主要来自于平均每个用户消费额的提升”，这既可以看作是现有存量用户的深挖，也表明在快速复制的行业大背景下，阿里云实现客户数量到客户质量的换挡，这个过程降了一些增速未必是坏事。\n\n          事实上，自去年以来，阿里云在其基础设施优势基础上，先后提出了“达尔文计划”——通过一系列包括平台、芯片和微基站在内的全链路生态服务，交付给企业一张自有可控的物联网，以及“新制造”概念——加入更多物联网和人工智能技术，落地柔性供应链，实现按需定制，这很明显都是要把整体解决方案推广到更多客户群的动作。\n        ")])])]):e._e()},o=[],i=(n("7f7f"),n("c5f6"),n("bc3a")),s=n.n(i),r=n("94df"),l=n.n(r),h=n("0c12"),c={data:function(){return{file:null,title:"",downloaded:!1,showDownloadButtons:!1}},filters:{humanBytes:function(e){return l()(Number(e))}},mounted:function(){var e=this;s.a.get("/api/files/".concat(this.$route.params.id)).then((function(t){var n=t.data;e.file=n,e.file.visitCount+=1,e.title="".concat(n.name," - "),setTimeout((function(){e.showDownloadButtons=!0}),2e3)})).catch((function(t){return console.log(t),500===t.response.status?h["a"].$emit("error","Server Error: Unable to handle the request now. Please try again later."):e.$router.push("/404")}))},methods:{onFileDownload:function(){this.file.downloadCount+=1,this.downloaded=!0,s.a.post("/api//download/".concat(this.file.encodedName))}},metaInfo:function(){return{title:this.title}}},d=c,u=n("2877"),f=Object(u["a"])(d,a,o,!1,null,null,null);t["default"]=f.exports},aa77:function(e,t,n){var a=n("5ca1"),o=n("be13"),i=n("79e5"),s=n("fdef"),r="["+s+"]",l="​",h=RegExp("^"+r+r+"*"),c=RegExp(r+r+"*$"),d=function(e,t,n){var o={},r=i((function(){return!!s[e]()||l[e]()!=l})),h=o[e]=r?t(u):s[e];n&&(o[n]=h),a(a.P+a.F*r,"String",o)},u=d.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(h,"")),2&t&&(e=e.replace(c,"")),e};e.exports=d},c5f6:function(e,t,n){"use strict";var a=n("7726"),o=n("69a8"),i=n("2d95"),s=n("5dbc"),r=n("6a99"),l=n("79e5"),h=n("9093").f,c=n("11e9").f,d=n("86cc").f,u=n("aa77").trim,f="Number",g=a[f],p=g,y=g.prototype,m=i(n("2aeb")(y))==f,w="trim"in String.prototype,v=function(e){var t=r(e,!1);if("string"==typeof t&&t.length>2){t=w?t.trim():u(t,3);var n,a,o,i=t.charCodeAt(0);if(43===i||45===i){if(n=t.charCodeAt(2),88===n||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:a=2,o=49;break;case 79:case 111:a=8,o=55;break;default:return+t}for(var s,l=t.slice(2),h=0,c=l.length;h<c;h++)if(s=l.charCodeAt(h),s<48||s>o)return NaN;return parseInt(l,a)}}return+t};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof g&&(m?l((function(){y.valueOf.call(n)})):i(n)!=f)?s(new p(v(t)),n,g):v(t)};for(var b,S=n("9e1e")?h(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;S.length>_;_++)o(p,b=S[_])&&!o(g,b)&&d(g,b,c(p,b));g.prototype=y,y.constructor=g,n("2aba")(a,f,g)}},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=file.a54a379f.js.map