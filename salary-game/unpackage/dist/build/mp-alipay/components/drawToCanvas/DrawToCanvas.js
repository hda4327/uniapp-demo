;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/drawToCanvas/DrawToCanvas"],{"05cd":function(t,e,a){"use strict";var n=a("6331"),i=a.n(n);i.a},"2a7e":function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"b",function(){return i}),a.d(e,"c",function(){return o}),a.d(e,"a",function(){return n})},"5a78":function(t,e,a){"use strict";a.r(e);var n=a("5d4b"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=i.a},"5d4b":function(t,e,a){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"DrawToCanvas",data:function(){return{poster:"",isCreate:!1,isShow:!1,bgWidth:670,bgHeight:990,userInfo:{},tip:"",proportion:"",salary:"",showCanvas:!0,code:"https://ygt.linyakq.com/public/xcx_work/code.png",avatarUrl:"",postTip:""}},created:function(){var e=this;t.showLoading({title:"薪资生成中。。",mask:!0}),this.userInfo=JSON.parse(t.getStorageSync("userInfo")),this.tip=t.getStorageSync("tip"),this.proportion=t.getStorageSync("proportion"),this.salary=t.getStorageSync("total"),this.postTip=t.getStorageSync("postTip"),this.downloadFile(this.userInfo.avatarUrl).then(function(t){e.avatarUrl=t.tempFilePath,e.downloadFile(e.code).then(function(t){e.code=t.tempFilePath,e.createPoster()})})},components:{},onReady:function(){},computed:{ratepx:function(){return 750/t.getSystemInfoSync().windowWidth}},methods:{downloadFile:function(e){return new Promise(function(a){t.downloadFile({url:e,success:function(t){200===t.statusCode&&a(t)},fail:function(t){console.log(t)}})})},checkImage:function(e){console.log("1221"),t.previewImage({urls:[this.poster],longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(t){console.log("选中了第"+(t.tapIndex+1)+"个按钮,第"+(t.index+1)+"张图片")},fail:function(t){console.log(t.errMsg)}},fail:function(t){console.log("yulanshibai")}})},rate:function(t){return t/this.ratepx},createPoster:function(){var e=this,a={bigImage:"../../static/img/res-bg.png",contentBg:"../../static/img/res-line.png",avatar:this.avatarUrl,code:this.code,t1:"我最匹配的年薪是",t2:"已超过了"+this.proportion+"的口腔从业者",t3:"长按测一测我的匹配薪资",t4:this.salary,postTip:this.postTip,content:this.tip,name:this.userInfo.nickName};this.draw("poster",this.bgWidth,this.bgHeight,a).then(function(a){setTimeout(function(){t.hideLoading(),e.$emit("showBtn"),e.showCanvas=!1,e.isCreate=!0,e.isShow=!0},300)},function(e){setTimeout(function(){t.hideLoading(),console.log("生成海报失败")},300)})},catchtap:function(t){var e=this;this.isShow=!1,setTimeout(function(){e.isCreate=!1,t&&"function"==typeof t&&t()},400)},drawText:function(t){var e=Math.ceil(t.ctx.measureText(t.str).width/t.maxWidth),a=e>=t.maxLine?t.maxLine:e,n=0;t.ctx.setFillStyle(t.style?t.style:"#fff"),t.ctx.setFontSize(t.fontSize?t.fontSize:this.rate(24));for(var i=0;i<=a;i++){var o=t.str.slice(n),r=0,s=t.y+(1==a?0:i*t.height),c=o.length;if(!(t.ctx.measureText(o).width>t.maxWidth)){t.ctx.fillText(o.slice(0),t.x,s);break}for(var l=0;l<c;l++)if(r+=t.ctx.measureText(o[l]).width,r>t.maxWidth){i===t.maxLine-1?t.ctx.fillText(o.slice(0,l-1)+"...",t.x,s):t.ctx.fillText(o.slice(0,l),t.x,s),n+=l;break}}},draw:function(e,a,n,i){var o=this;return new Promise(function(r,s){var c=t.createCanvasContext(e,o);c.clearRect(0,0,o.rate(a),o.rate(n)),c.setFillStyle("white"),c.fillRect(0,0,o.rate(a),o.rate(n)),c.drawImage(i.bigImage,0,0,o.rate(a),o.rate(n)),c.drawImage(i.contentBg,o.rate(40),o.rate(180),o.rate(590),o.rate(321)),o.drawText({ctx:c,str:i.content,maxLine:4,maxWidth:o.rate(500),x:o.rate(95),y:o.rate(578),height:o.rate(50),fontSize:o.rate(24)}),c.save(),c.setFillStyle("#000000"),c.setFontSize(o.rate(28)),c.fillText(i.t3,o.rate(182),o.rate(925)),c.save(),c.setFillStyle("#fff"),c.setFontSize(o.rate(24)),c.fillText(i.postTip,o.rate(174),o.rate(140)),c.save(),c.setFillStyle("#fff"),c.setFontSize(o.rate(36)),c.fillText(i.name,o.rate(174),o.rate(100)),c.save(),c.setFillStyle("#0071BC"),c.setFontSize(o.rate(48)),c.font="700",c.fillText(i.t1,o.rate(145),o.rate(259)),c.save(),c.setFillStyle("#BC30FF"),c.setFontSize(o.rate(80)),c.font="700";var l=200;4===i.t4.length&&(l=230),3===i.t4.length&&(l=260),c.fillText(i.t4,o.rate(l),o.rate(370)),o.boldText(c,{text:i.t4,x:o.rate(l),y:o.rate(370)}),c.save(),c.setFillStyle("#0071BC"),c.setFontSize(o.rate(26)),c.fillText(i.t2,o.rate(170),o.rate(465)),c.save(),c.drawImage(i.avatar,o.rate(50),o.rate(40),o.rate(100),o.rate(100)),c.drawImage(i.code,o.rate(255),o.rate(725),o.rate(160),o.rate(160)),c.draw(!1,function(e){setTimeout(function(){t.canvasToTempFilePath({canvasId:"poster",fileType:"png",success:function(t){o.poster=t.tempFilePath,r()},fail:function(t){console.log(t),s()}},o)},200)})})},boldText:function(t,e){t.fillText(e.text,e.x,e.y-.8),t.fillText(e.text,e.x-.8,e.y)},btnCreate:function(){a.saveImageToPhotosAlbum({filePath:this.poster,success:function(e){t.showToast({title:"图片已存至相册->微信"})},fail:function(e){t.showToast({title:"保存失败",icon:"none"})}},this)},roundRect:function(t,e,a,n,i,o){var r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"#fff";n<2*o&&(o=n/2),i<2*o&&(o=i/2),t.beginPath(),t.fillStyle=r,t.arc(e+o,a+o,o,Math.PI,1.5*Math.PI),t.moveTo(e+o,a),t.lineTo(e+n-o,a),t.lineTo(e+n,a+o),t.arc(e+n-o,a+o,o,1.5*Math.PI,2*Math.PI),t.lineTo(e+n,a+i-o),t.lineTo(e+n-o,a+i),t.arc(e+n-o,a+i-o,o,0,.5*Math.PI),t.lineTo(e+o,a+i),t.lineTo(e,a+i-o),t.arc(e+o,a+i-o,o,.5*Math.PI,Math.PI),t.lineTo(e,a+o),t.lineTo(e+o,a),t.fill(),t.closePath()},drawRound:function(t){}}};e.default=n}).call(this,a("c11b")["default"],a("c11b")["default"])},6331:function(t,e,a){},"9a78":function(t,e,a){"use strict";a.r(e);var n=a("2a7e"),i=a("5a78");for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);a("05cd");var r,s=a("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"0da12c84",null,!1,n["a"],r);e["default"]=c.exports}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/drawToCanvas/DrawToCanvas-create-component',
    {
        'components/drawToCanvas/DrawToCanvas-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("9a78"))
        })
    },
    [['components/drawToCanvas/DrawToCanvas-create-component']]
]);