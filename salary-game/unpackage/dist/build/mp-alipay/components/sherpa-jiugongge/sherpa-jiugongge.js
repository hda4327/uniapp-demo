;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/sherpa-jiugongge/sherpa-jiugongge"],{"05ec":function(t,i,n){},"32f2":function(t,i,n){"use strict";n.r(i);var o=n("38f8"),e=n("8383");for(var c in e)"default"!==c&&function(t){n.d(i,t,function(){return e[t]})}(c);n("fdb7");var u,s=n("f0c5"),r=Object(s["a"])(e["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);i["default"]=r.exports},"38f8":function(t,i,n){"use strict";var o,e=function(){var t=this,i=t.$createElement;t._self._c},c=[];n.d(i,"b",function(){return e}),n.d(i,"c",function(){return c}),n.d(i,"a",function(){return o})},8383:function(t,i,n){"use strict";n.r(i);var o=n("ede9"),e=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(i,t,function(){return o[t]})}(c);i["default"]=e.a},ede9:function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=n("5bb6"),e=null,c={data:function(){return{color:[.5,.5,.5,.5,.5,.5,.5,.5],images:[],clickLuck:"clickLuck",luckPosition:0,initChangeNum:0,luckyProList:{},tipPrefix:"恭喜您获得“",tipPostfix:"”！",modalTip:"",testImg:""}},components:{},created:function(){var i=this;this.loadAnimation(),(0,o.reqLotteryList)(function(t){i.luckyProList=t.data}),(0,o.reqHaveNum)(function(t){i.initChangeNum=t.data.brush_num,i.$emit("changeNum",i.initChangeNum)},{open_id:t.getStorageSync("openid")})},props:{intime:{default:50,type:Number}},methods:{input:function(t){var i=Number(t.detail.value);this.luckPosition=i},computeLucyList:function(){var t=this,i=[],n=0;for(var o in this.luckyProList)n+=this.luckyProList[o].prob,i.unshift(n);i.push(-1);var e=Math.random();console.log(i),console.log(e),i.every(function(i,n){return!(e>i)||(t.luckPosition=8-n,!1)}),console.log(this.luckPosition)},toReqSaveRecord:function(){var i={name:this.luckyProList[this.luckPosition]["tip"],open_id:t.getStorageSync("openid"),phone:t.getStorageSync("phone")};(0,o.reqSavePrize)(function(t){console.log(t)},i),(0,o.reqBrushNum)(function(t){console.log(t)},{open_id:i.open_id})},clickLucks:function(){var i=this;if("clickLuck"==this.clickLuck){if(console.log("cishu",this.initChangeNum),this.initChangeNum<=0)return void t.showModal({title:"提示",content:"您已抽过奖品了",showCancel:!1,success:function(t){},fail:function(){},complete:function(){}});this.computeLucyList(),this.toReqSaveRecord(),this.initChangeNum--,this.$emit("changeNum",this.initChangeNum),this.clickLuck="",clearInterval(e);var n=0;e=setInterval(function(){n>7?(n=0,i.$set(i.color,7,.5)):0!=n&&i.$set(i.color,n-1,.5),i.$set(i.color,n,1),n++},this.intime);var o=2e3;setTimeout(function(){i.stop(i.luckPosition)},o)}},stop:function(t){var i=this;clearInterval(e);for(var n=-1,o=i.color,c=0;c<o.length;c++)1==o[c]&&(n=c);var u=n+1;i.stopLuck(t,u,this.intime,10)},stopLuck:function(t,i,n,o){var e=this,c=this;setTimeout(function(){i>7?(i=0,c.$set(c.color,7,.5)):0!=i&&c.$set(c.color,i-1,.5),c.color[i]=1,n<400||i!=t?(o++,n+=o,i++,c.stopLuck(t,i,n,o)):setTimeout(function(){e.clickLuck="clickLuck",e.loadAnimation();var i={luckPosition:e.luckPosition,tip:e.tipPrefix+e.luckyProList[t].tip+e.tipPostfix,isWin:!0};1===t&&(i.isWin=!1,i.tip="很遗憾您未中奖，谢谢参与！"),e.$EventBus.$emit("closeModal",i)},1e3)},n)},loadAnimation:function(){var t=this,i=0;null==e&&(e=setInterval(function(){i>7?(i=0,t.$set(t.color,7,.5)):0!=i&&t.$set(t.color,i-1,.5),t.color[i]=1,t.$set(t.color,i,1),i++},1e3))}}};i.default=c}).call(this,n("c11b")["default"])},fdb7:function(t,i,n){"use strict";var o=n("05ec"),e=n.n(o);e.a}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/sherpa-jiugongge/sherpa-jiugongge-create-component',
    {
        'components/sherpa-jiugongge/sherpa-jiugongge-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("32f2"))
        })
    },
    [['components/sherpa-jiugongge/sherpa-jiugongge-create-component']]
]);
