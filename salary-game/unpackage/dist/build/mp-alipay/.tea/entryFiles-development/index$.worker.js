if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


  var AFAppX = self.AFAppX.getAppContext
    ? self.AFAppX.getAppContext().AFAppX
    : self.AFAppX;
  self.getCurrentPages = AFAppX.getCurrentPages;
  self.getApp = AFAppX.getApp;
  self.Page = AFAppX.Page;
  self.App = AFAppX.App;
  self.my = AFAppX.bridge || AFAppX.abridge;
  self.abridge = self.my;
  self.Component = AFAppX.WorkerComponent || function(){};
  self.$global = AFAppX.$global;
  self.requirePlugin = AFAppX.requirePlugin;
          

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/confirm-btn?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/index/chidCom/skill-content?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/advertisement?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/w-picker/w-picker?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/picker/PickerBox?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/index/chidCom/picker-content?hash=d06a48ba8c71733bffb64b6eeeec7948528acc81');
require('../../components/uni-transition/uni-transition?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/uni-popup/uni-popup?hash=63f3d097e78ac04213190ce4a92c81860617f7b4');
require('../../pages/index/chidCom/auth-modal?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/drawToCanvas/DrawToCanvas?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/result/childCom/two-btn?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/sherpa-jiugongge/sherpa-jiugongge?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/modal/Modal?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/lottery/childCom/record-show?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/index/index?hash=ce641cebf2b19aebaa43897db74d9d66a0b2cda4');
require('../../pages/result/result?hash=6a8588cf0a05decfeef86c69ba3781fa9956b973');
require('../../pages/lottery/lottery?hash=c283794b028626b45c03e057d6436eafd5d775e5');
require('../../pages/index/adUrl?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}