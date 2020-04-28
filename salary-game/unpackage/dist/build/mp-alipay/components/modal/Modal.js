;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/modal/Modal"],{4905:function(n,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{modalShow:!1,luckPosition:1,isWin:!1,tip:"很遗憾您未中奖，谢谢参与！",p1:"客服将会联系您",p2:"领取奖品！",p:"客服将会联系您领取奖品！"}},mounted:function(){var n=this;this.$EventBus.$on("closeModal",function(t){n.luckPosition=t.luckPosition+1,n.tip=t.tip,n.isWin=t.isWin,n.modalShow=!0})},methods:{},beforeDestroy:function(){this.$EventBus.$off("closeModal")}};t.default=e},"6e7b":function(n,t,o){"use strict";var e=o("9ed8"),u=o.n(e);u.a},"7c1d":function(n,t,o){"use strict";o.r(t);var e=o("c297"),u=o("97f5");for(var i in u)"default"!==i&&function(n){o.d(t,n,function(){return u[n]})}(i);o("6e7b");var c,f=o("f0c5"),r=Object(f["a"])(u["default"],e["b"],e["c"],!1,null,"e3bf5320",null,!1,e["a"],c);t["default"]=r.exports},"97f5":function(n,t,o){"use strict";o.r(t);var e=o("4905"),u=o.n(e);for(var i in e)"default"!==i&&function(n){o.d(t,n,function(){return e[n]})}(i);t["default"]=u.a},"9ed8":function(n,t,o){},c297:function(n,t,o){"use strict";var e,u=function(){var n=this,t=n.$createElement;n._self._c;n._isMounted||(n.e0=function(t){n.modalShow=!1})},i=[];o.d(t,"b",function(){return u}),o.d(t,"c",function(){return i}),o.d(t,"a",function(){return e})}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/modal/Modal-create-component',
    {
        'components/modal/Modal-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("7c1d"))
        })
    },
    [['components/modal/Modal-create-component']]
]);
