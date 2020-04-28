;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"] = my["webpackJsonp"] || []).push([["components/drawToCanvas/DrawToCanvas"],{

/***/ 93:
/*!*************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uiapp/salary-game/components/drawToCanvas/DrawToCanvas.vue ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DrawToCanvas_vue_vue_type_template_id_16070c1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DrawToCanvas.vue?vue&type=template&id=16070c1a&scoped=true& */ 94);
/* harmony import */ var _DrawToCanvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DrawToCanvas.vue?vue&type=script&lang=js& */ 96);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _DrawToCanvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _DrawToCanvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _DrawToCanvas_vue_vue_type_style_index_0_id_16070c1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DrawToCanvas.vue?vue&type=style&index=0&id=16070c1a&scoped=true&lang=css& */ 98);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs





/* normalize component */

var component = Object(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DrawToCanvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DrawToCanvas_vue_vue_type_template_id_16070c1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DrawToCanvas_vue_vue_type_template_id_16070c1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "16070c1a",
  null,
  false,
  _DrawToCanvas_vue_vue_type_template_id_16070c1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Desktop/uiapp/salary-game/components/drawToCanvas/DrawToCanvas.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 94:
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uiapp/salary-game/components/drawToCanvas/DrawToCanvas.vue?vue&type=template&id=16070c1a&scoped=true& ***!
  \********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_DrawToCanvas_vue_vue_type_template_id_16070c1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./DrawToCanvas.vue?vue&type=template&id=16070c1a&scoped=true& */ 95);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_DrawToCanvas_vue_vue_type_template_id_16070c1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_DrawToCanvas_vue_vue_type_template_id_16070c1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_DrawToCanvas_vue_vue_type_template_id_16070c1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_DrawToCanvas_vue_vue_type_template_id_16070c1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 95:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/uiapp/salary-game/components/drawToCanvas/DrawToCanvas.vue?vue&type=template&id=16070c1a&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 96:
/*!**************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uiapp/salary-game/components/drawToCanvas/DrawToCanvas.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_DrawToCanvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./DrawToCanvas.vue?vue&type=script&lang=js& */ 97);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_DrawToCanvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_DrawToCanvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_DrawToCanvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_DrawToCanvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_DrawToCanvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 97:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/uiapp/salary-game/components/drawToCanvas/DrawToCanvas.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//

// import ConfirmBtn from '@/components/confirm-btn.vue'
var _default = {
  name: "DrawToCanvas",
  data: function data() {
    return {
      poster: '',
      isCreate: false,
      isShow: false,
      bgWidth: 670,
      bgHeight: 990,
      userInfo: {},
      tip: '', //提示
      proportion: '', //占比全国
      salary: '', //100万
      showCanvas: true,
      code: 'https://ygt.linyakq.com/public/xcx_work/code.png',
      avatarUrl: '' };

  },
  //userInfo: {avatarUrl:"https://wx.qlo....",city:"金华",country:"中国",gender:1,language:"zh_CN",nickName:"Master Yi",province:浙江"}
  created: function created() {var _this = this;
    uni.showLoading({
      title: '薪资生成中。。',
      mask: true });


    this.userInfo = JSON.parse(uni.getStorageSync('userInfo'));
    this.tip = uni.getStorageSync('tip');
    this.proportion = uni.getStorageSync('proportion');
    this.salary = uni.getStorageSync('total');
    // this.avatarUrl = this.userInfo.avatarUrl


    this.downloadFile(this.userInfo.avatarUrl).then(function (res) {
      _this.avatarUrl = res.tempFilePath;
      _this.downloadFile(_this.code).then(function (res) {
        _this.code = res.tempFilePath;
        _this.createPoster(); //开始绘图
      });
    });



  },
  components: {
    // ConfirmBtn
  },
  onReady: function onReady() {

  },
  computed: {
    ratepx: function ratepx() {
      return 750.0 / uni.getSystemInfoSync().windowWidth;
    } },

  methods: {
    downloadFile: function downloadFile(file) {
      return new Promise(function (resolve) {
        uni.downloadFile({
          url: file,
          success: function success(res) {
            // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
            if (res.statusCode === 200) {

              resolve(res);

            }
          }, fail: function fail(res) {
            console.log(res);
          } });

      });
    },
    checkImage: function checkImage(e) {
      console.log('1221');
      // 预览图片
      uni.previewImage({
        urls: [this.poster],
        longPressActions: {
          itemList: ['发送给朋友', '保存图片', '收藏'],
          success: function success(data) {
            console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
          },
          fail: function fail(err) {
            console.log(err.errMsg);
          } },

        fail: function fail(err) {
          console.log('yulanshibai');
        } });

    },

    /// 获取canvas转化后的rpx
    rate: function rate(rpx) {
      return rpx / this.ratepx;
    },

    /// 创建海报
    createPoster: function createPoster() {var _this2 = this;
      // auth.writePhotosAlbum(() => {
      //app.showLoading('正在生成...')
      /// 绘制的内容
      var writing = {
        //测试用cdn防跨域
        bigImage: '../../static/img/res-bg.png',
        contentBg: '../../static/img/res-line.png',
        avatar: this.avatarUrl,
        code: this.code,
        t1: '我最匹配的年薪是',
        t2: '已超过了' + this.proportion + '的口腔从业者',
        t3: '长按测一测我的匹配薪资',
        t4: this.salary,
        content: this.tip,
        name: this.userInfo.nickName };


      /// 绘制
      this.draw('poster', this.bgWidth, this.bgHeight, writing).then(function (res) {
        setTimeout(function () {
          uni.hideLoading();
          _this2.$emit('showBtn');
          _this2.showCanvas = false;
          _this2.isCreate = true;
          _this2.isShow = true;
        }, 300);
      }, function (err) {
        setTimeout(function () {
          uni.hideLoading();
          // app.showToast('生成海报失败');
          console.log('生成海报失败');
        }, 300);
      });
      // });
    },

    /// 隐藏
    catchtap: function catchtap(callback) {var _this3 = this;
      this.isShow = false;
      setTimeout(function () {
        _this3.isCreate = false;
        if (callback && typeof callback == "function") {
          callback();
        }
      }, 400);
    },

    /// 绘制文本
    drawText: function drawText(options) {
      /// 获取总行数
      var allRow = Math.ceil(options.ctx.measureText(options.str).width / options.maxWidth);
      /// 限制行数
      var count = allRow >= options.maxLine ? options.maxLine : allRow;
      /// 当前字符串的截断点
      var endPos = 0;
      /// 设置文字颜色
      options.ctx.setFillStyle(options.style ? options.style : '#fff');
      /// 设置字体大小
      options.ctx.setFontSize(options.fontSize ? options.fontSize : this.rate(24));
      /// 循环截断
      for (var j = 0; j <= count; j++) {// 加了个 = 号解决最后行不输出的bug
        /// 当前剩余的字符串
        var nowStr = options.str.slice(endPos),
        /// 每一行当前宽度
        rowWid = 0,
        /// 每一行顶部距离
        y = options.y + (count == 1 ? 0 : j * options.height);
        var strLen = nowStr.length;
        /// 如果当前的字符串宽度大于最大宽度，然后开始截取
        if (options.ctx.measureText(nowStr).width > options.maxWidth) {

          for (var m = 0; m < strLen; m++) {
            /// 计算当前字符串总宽度
            rowWid += options.ctx.measureText(nowStr[m]).width;
            if (rowWid > options.maxWidth) {
              /// 如果是最后一行

              if (j === options.maxLine - 1) {
                options.ctx.fillText(nowStr.slice(0, m - 1) + '...', options.x, y);
              } else {
                options.ctx.fillText(nowStr.slice(0, m), options.x, y);
              }
              /// 保留下次截断点
              endPos += m;
              break;
            }
          }
        } else {/// 如果当前的字符串宽度小于最大宽度就直接输出并退出循环

          options.ctx.fillText(nowStr.slice(0), options.x, y);
          break;
        }
      }
    },

    /// 绘制海报 1、canvas对象 2、canvas宽 3、canvas高 4、绘制的内容
    draw: function draw(canvas, cavW, cavH, writing) {var _this4 = this;

      return new Promise(function (resolve, reject) {

        /// 创建context
        var ctx = uni.createCanvasContext(canvas, _this4);


        ctx.clearRect(0, 0, _this4.rate(cavW), _this4.rate(cavH));

        /// 绘制底色
        ctx.setFillStyle('white');
        ctx.fillRect(0, 0, _this4.rate(cavW), _this4.rate(cavH));


        /// 绘制背景图
        ctx.drawImage(writing.bigImage, 0, 0, _this4.rate(cavW), _this4.rate(cavH));
        // this.drawRound(ctx)
        //内容背景
        ctx.drawImage(writing.contentBg, _this4.rate(40), _this4.rate(180), _this4.rate(590), _this4.rate(321));

        // // 直径
        // const diameter = this.rate(101);
        // // 圆参数 
        // const arc = {
        // 	radii: diameter / 2,
        // 	x: this.rate(40),
        // 	y: this.rate(800)
        // };

        /// 绘制文案内容   
        _this4.drawText({
          ctx: ctx,
          str: writing.content,
          maxLine: 4,
          maxWidth: _this4.rate(500),
          x: _this4.rate(95),
          y: _this4.rate(578),
          height: _this4.rate(50),
          fontSize: _this4.rate(24) });


        ctx.save();

        // 长按测一测您的匹配薪资
        // ctx.setFillStyle('#BC30FF');
        ctx.setFillStyle('#000000');
        ctx.setFontSize(_this4.rate(28));
        ctx.fillText(writing.t3, _this4.rate(182), _this4.rate(925));
        ctx.save();

        // 微信名
        ctx.setFillStyle('#fff');
        ctx.setFontSize(_this4.rate(36));
        ctx.fillText(writing.name, _this4.rate(174), _this4.rate(100));

        ctx.save();

        // 您最匹配的年薪是
        ctx.setFillStyle('#0071BC');
        ctx.setFontSize(_this4.rate(48));
        ctx.font = '700';
        ctx.fillText(writing.t1, _this4.rate(145), _this4.rate(259));
        // this.boldText(ctx, {text:writing.t1,x:this.rate(145),y:this.rate(259)})
        ctx.save();

        // 100万！
        ctx.setFillStyle('#BC30FF');
        ctx.setFontSize(_this4.rate(80));
        ctx.font = '700';

        var rowTextX = 200;
        if (writing.t4.length === 4) {
          rowTextX = 230;
        }
        if (writing.t4.length === 3) {
          rowTextX = 260;
        }

        ctx.fillText(writing.t4, _this4.rate(rowTextX), _this4.rate(370)); // x:200,y:370是3位薪资时显示在中间位  
        _this4.boldText(ctx, { text: writing.t4, x: _this4.rate(rowTextX), y: _this4.rate(370) });
        ctx.save();

        // 已超过了98%的口腔从业者
        ctx.setFillStyle('#0071BC');
        ctx.setFontSize(_this4.rate(26));
        ctx.fillText(writing.t2, _this4.rate(170), _this4.rate(465));
        ctx.save();

        /// 绘制头像
        ctx.drawImage(writing.avatar, _this4.rate(50), _this4.rate(40), _this4.rate(100), _this4.rate(100));
        ctx.drawImage(writing.code, _this4.rate(255), _this4.rate(725), _this4.rate(160), _this4.rate(160));

        /// 开始绘制  
        ctx.draw(false, function (res) {
          setTimeout(function () {
            uni.canvasToTempFilePath({
              canvasId: 'poster',
              fileType: 'png',
              success: function success(res) {
                // this.setData({
                // 	poster: res.tempFilePath
                // })
                _this4.poster = res.tempFilePath;
                resolve();
              },
              fail: function fail(err) {
                console.log(err);
                reject();
              } },
            _this4);
          }, 200);

        });

      });
    },
    boldText: function boldText(ctx, obj) {
      ctx.fillText(obj.text, obj.x, obj.y - 0.8);
      ctx.fillText(obj.text, obj.x - 0.8, obj.y);
    },
    /// 保存图片
    btnCreate: function btnCreate() {
      // app.showLoading('正在保存...')
      wx.saveImageToPhotosAlbum({
        filePath: this.poster,
        success: function success(res) {
          // app.hideLoading();
          // this.catchtap(() => {
          // 	wx.showToast({
          // 		title: '保存成功'
          // 	})
          // });
          uni.showToast({
            title: '图片已存至相册->微信' });

        },
        fail: function fail(err) {
          // app.hideLoading();
          // this.catchtap(() => {
          // 	wx.showToast({
          // 		title: '保存失败',
          // 		icon: 'none'
          // 	})
          // });
          uni.showToast({
            title: '保存失败',
            icon: 'none' });

        } },
      this);
    },
    //绘制圆角矩形
    roundRect: function roundRect(ctx, x, y, w, h, r) {var c = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '#fff';

      if (w < 2 * r) {
        r = w / 2;
      }
      if (h < 2 * r) {
        r = h / 2;
      }

      ctx.beginPath();
      ctx.fillStyle = c;

      ctx.arc(x + r, y + r, r, Math.PI, Math.PI * 1.5);
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.lineTo(x + w, y + r);

      ctx.arc(x + w - r, y + r, r, Math.PI * 1.5, Math.PI * 2);
      ctx.lineTo(x + w, y + h - r);
      ctx.lineTo(x + w - r, y + h);

      ctx.arc(x + w - r, y + h - r, r, 0, Math.PI * 0.5);
      ctx.lineTo(x + r, y + h);
      ctx.lineTo(x, y + h - r);

      ctx.arc(x + r, y + h - r, r, Math.PI * 0.5, Math.PI);
      ctx.lineTo(x, y + r);
      ctx.lineTo(x + r, y);

      ctx.fill();
      ctx.closePath();


    },
    drawRound: function drawRound(ctx) {

      // Draw coordinates
      // ctx.arc(100, 75, 50, 0, 2 * Math.PI)
      // ctx.setFillStyle('#EEEEEE')
      // ctx.fill()

      // ctx.beginPath()
      // ctx.moveTo(40, 75)
      // ctx.lineTo(160, 75)
      // ctx.moveTo(100, 15)
      // ctx.lineTo(100, 135)
      // ctx.setStrokeStyle('#AAAAAA')
      // ctx.stroke()

      // ctx.setFontSize(12)
      // ctx.setFillStyle('black')
      // ctx.fillText('0', 165, 78)
      // ctx.fillText('0.5*PI', 83, 145)
      // ctx.fillText('1*PI', 15, 78)
      // ctx.fillText('1.5*PI', 83, 10)

      // // Draw points
      // ctx.beginPath()
      // ctx.arc(100, 75, 2, 0, 2 * Math.PI)
      // ctx.setFillStyle('lightgreen')
      // ctx.fill()

      // ctx.beginPath()
      // ctx.arc(100, 25, 2, 0, 2 * Math.PI)
      // ctx.setFillStyle('blue')
      // ctx.fill()

      // ctx.beginPath()
      // ctx.arc(150, 75, 2, 0, 2 * Math.PI)
      // ctx.setFillStyle('red')
      // ctx.fill()

      // // Draw arc
      // ctx.beginPath()
      // ctx.arc(100, 75, 50, 0, 1.5 * Math.PI)
      // ctx.setStrokeStyle('#333333')
      // ctx.stroke()

      // ctx.draw()
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-alipay/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-alipay/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 98:
/*!**********************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/uiapp/salary-game/components/drawToCanvas/DrawToCanvas.vue?vue&type=style&index=0&id=16070c1a&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_DrawToCanvas_vue_vue_type_style_index_0_id_16070c1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./DrawToCanvas.vue?vue&type=style&index=0&id=16070c1a&scoped=true&lang=css& */ 99);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_DrawToCanvas_vue_vue_type_style_index_0_id_16070c1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_DrawToCanvas_vue_vue_type_style_index_0_id_16070c1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_DrawToCanvas_vue_vue_type_style_index_0_id_16070c1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_DrawToCanvas_vue_vue_type_style_index_0_id_16070c1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_DrawToCanvas_vue_vue_type_style_index_0_id_16070c1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 99:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/uiapp/salary-game/components/drawToCanvas/DrawToCanvas.vue?vue&type=style&index=0&id=16070c1a&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-alipay/components/drawToCanvas/DrawToCanvas.js.map
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/drawToCanvas/DrawToCanvas-create-component',
    {
        'components/drawToCanvas/DrawToCanvas-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(93))
        })
    },
    [['components/drawToCanvas/DrawToCanvas-create-component']]
]);
