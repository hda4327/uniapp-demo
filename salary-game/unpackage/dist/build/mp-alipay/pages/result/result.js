(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/result/result"],{"2c91":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){return e.e("components/drawToCanvas/DrawToCanvas").then(e.bind(null,"9a78"))},o=function(){return e.e("components/advertisement").then(e.bind(null,"93a0"))},a=function(){return Promise.all([e.e("common/vendor"),e.e("components/confirm-btn")]).then(e.bind(null,"f667"))},r=function(){return e.e("pages/result/childCom/two-btn").then(e.bind(null,"019d"))},c={data:function(){return{btnText2:"点击抽取牙医专属奖品",isShowBtn:!1,advertisementBg:"../static/img/result-ad.png",adLink:"",config:""}},onLoad:function(){this.config=n.getStorageSync("config"),this.advertisementBg=this.config.banner.page2.src,n.setNavigationBarTitle({title:this.config.title.page2})},methods:{copyImg:function(){this.$refs.drawTo.btnCreate()},navToIndex:function(){n.reLaunch({url:"/pages/index/index"})},navToLottery:function(){n.navigateTo({url:"/pages/lottery/lottery"})},onShareAppMessage:function(){return{title:"口腔机构人员薪资测一测",path:"pages/index/index"}},toResAd:function(){""===this.config.banner.page2.link?n.navigateToMiniProgram({appId:"wx59108e780bac5b1d",path:"pages/form/info/info.html?scene=5e71777775a03c71e48475ec&appid=wx22c4fb115e6f4776",success:function(n){},fail:function(n){}}):(n.setStorageSync("ad_url",this.config.banner.page2.link),n.navigateTo({url:"/pages/index/adUrl"}))}},components:{DrawToCanvas:i,ConfirmBtn:a,TwoBtn:r,Advertisement:o}};t.default=c}).call(this,e("c11b")["default"])},5765:function(n,t,e){"use strict";var i=e("f4d7"),o=e.n(i);o.a},"7b68":function(n,t,e){"use strict";(function(n){e("51e7"),e("921b");i(e("66fd"));var t=i(e("fdb4"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("c11b")["createPage"])},b985:function(n,t,e){"use strict";e.r(t);var i=e("2c91"),o=e.n(i);for(var a in i)"default"!==a&&function(n){e.d(t,n,function(){return i[n]})}(a);t["default"]=o.a},c3f1:function(n,t,e){"use strict";var i,o=function(){var n=this,t=n.$createElement;n._self._c;n._isMounted||(n.e0=function(t){n.isShowBtn=!0})},a=[];e.d(t,"b",function(){return o}),e.d(t,"c",function(){return a}),e.d(t,"a",function(){return i})},f4d7:function(n,t,e){},fdb4:function(n,t,e){"use strict";e.r(t);var i=e("c3f1"),o=e("b985");for(var a in o)"default"!==a&&function(n){e.d(t,n,function(){return o[n]})}(a);e("5765");var r,c=e("f0c5"),u=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"118ee84d",null,!1,i["a"],r);t["default"]=u.exports}},[["7b68","common/runtime","common/vendor"]]]);