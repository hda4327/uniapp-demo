(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/lottery/lottery"],{"23f4":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("a043");var o=e("5bb6"),i=function(){return e.e("components/sherpa-jiugongge/sherpa-jiugongge").then(e.bind(null,"32f2"))},r=function(){return e.e("components/advertisement").then(e.bind(null,"93a0"))},c=function(){return e.e("components/modal/Modal").then(e.bind(null,"7c1d"))},a=function(){return Promise.all([e.e("common/vendor"),e.e("components/confirm-btn")]).then(e.bind(null,"f667"))},u=function(){return e.e("pages/lottery/childCom/record-show").then(e.bind(null,"078b"))},f=function(){return e.e("components/modal/Modal").then(e.bind(null,"7c1d"))},s={name:"lottery",data:function(){return{btnText:"邀请好友测一测",advertisementBg:"",openId:n.getStorageSync("openid"),recordList:{},changeNum:0,config:""}},onLoad:function(){var t=this;(0,o.reqGotPrizeList)(function(n){t.recordList=n.data}),this.config=n.getStorageSync("config"),this.advertisementBg=this.config.banner.page3.src,n.setNavigationBarTitle({title:this.config.title.page3})},watch:{changeNum:function(){return console.log(this.$refs.lotteryCom.initChangeNum),this.$refs.lotteryCom.initChangeNum}},components:{lotteryCom:i,Modal:c,ConfirmBtn:a,RecordShow:u,Advertisement:r,LotteryModal:f},methods:{confirmLeft:function(n){this.$emit("confirmLeft",n)},getChangeNum:function(n){this.changeNum=n},onShareAppMessage:function(){return{title:"口腔机构人员薪资测一测",path:"pages/index/index"}},toLotAd:function(){""===this.config.banner.page3.link?n.navigateToMiniProgram({appId:"wx9188524557398958",path:"pages/home/dashboard/index",success:function(n){},fail:function(n){}}):(n.setStorageSync("ad_url",this.config.banner.page3.link),n.navigateTo({url:"/pages/index/adUrl"}))}}};t.default=s}).call(this,e("c11b")["default"])},3070:function(n,t,e){"use strict";var o,i=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"b",function(){return i}),e.d(t,"c",function(){return r}),e.d(t,"a",function(){return o})},"64f0":function(n,t,e){"use strict";var o=e("8231"),i=e.n(o);i.a},8231:function(n,t,e){},b70e:function(n,t,e){"use strict";e.r(t);var o=e("23f4"),i=e.n(o);for(var r in o)"default"!==r&&function(n){e.d(t,n,function(){return o[n]})}(r);t["default"]=i.a},cf58:function(n,t,e){"use strict";(function(n){e("51e7"),e("921b");o(e("66fd"));var t=o(e("d2c4"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("c11b")["createPage"])},d2c4:function(n,t,e){"use strict";e.r(t);var o=e("3070"),i=e("b70e");for(var r in i)"default"!==r&&function(n){e.d(t,n,function(){return i[n]})}(r);e("64f0");var c,a=e("f0c5"),u=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,"03d0e4ef",null,!1,o["a"],c);t["default"]=u.exports}},[["cf58","common/runtime","common/vendor"]]]);