;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/uni-popup/uni-popup"],{"013d":function(t,n,i){},"122f":function(t,n,i){"use strict";var o=i("013d"),e=i.n(o);e.a},2252:function(t,n,i){"use strict";var o={"uni-transition":()=>i.e("components/uni-transition/uni-transition").then(i.bind(null,"bfa4"))},e=function(){var t=this,n=t.$createElement;t._self._c},s=[];i.d(n,"b",function(){return e}),i.d(n,"c",function(){return s}),i.d(n,"a",function(){return o})},afc7:function(t,n,i){"use strict";i.r(n);var o=i("c955"),e=i.n(o);for(var s in o)"default"!==s&&function(t){i.d(n,t,function(){return o[t]})}(s);n["default"]=e.a},c807:function(t,n,i){"use strict";i.r(n);var o=i("2252"),e=i("afc7");for(var s in e)"default"!==s&&function(t){i.d(n,t,function(){return e[t]})}(s);i("122f");var a,r=i("f0c5"),u=Object(r["a"])(e["default"],o["b"],o["c"],!1,null,"417b7cf2",null,!1,o["a"],a);n["default"]=u.exports},c955:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(){return i.e("components/uni-transition/uni-transition").then(i.bind(null,"bfa4"))},e={name:"UniPopup",components:{uniTransition:o},props:{animation:{type:Boolean,default:!0},type:{type:String,default:"bottom"},maskClick:{type:Boolean,default:!0}},data:function(){return{duration:300,ani:[],showPopup:!1,showTrans:!1,maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0}}},watch:{type:{handler:function(t){switch(this.type){case"top":this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0};break;case"bottom":this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0};break;case"center":this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"};break}},immediate:!0}},created:function(){this.animation?this.duration=300:this.duration=0},methods:{clear:function(t){t.stopPropagation()},open:function(){var t=this;this.showPopup=!0,this.$nextTick(function(){clearTimeout(t.timer),t.timer=setTimeout(function(){t.showTrans=!0},50)}),this.$emit("change",{show:!0})},close:function(t){var n=this;this.showTrans=!1,this.$nextTick(function(){clearTimeout(n.timer),n.timer=setTimeout(function(){n.$emit("change",{show:!1}),n.showPopup=!1},300)})},onTap:function(){this.maskClick&&this.close()}}};n.default=e}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/uni-popup/uni-popup-create-component',
    {
        'components/uni-popup/uni-popup-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("c807"))
        })
    },
    [['components/uni-popup/uni-popup-create-component']]
]);