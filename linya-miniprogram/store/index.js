import Vuex from 'vuex'
import Vue from 'vue'
import {reqCompanyMsg} from '../network/commonReq'



Vue.use(Vuex)


const state = {
    sid: null,
    companyMsg: {},
	appid: uni.getAccountInfoSync().miniProgram.appId,
	videoDetailUrl : 'https://ygt.linyakq.com/mobile/index/advicevideo',
	videoListUrl : 'https://ygt.linyakq.com/mobile/index/videolist'
}

const store = new Vuex.Store({
    state,
    actions:{
        reqCompanyMsg(){
            return reqCompanyMsg().then(res=>{
			   this.commit('getCompanyMsg', res.data)
			  
			})
        }
    },
    mutations:{
      getCompanyMsg(state, data){
		  state.companyMsg = data
      },
      setSid(state, sid){
		  
		state.sid = sid
      }
    },

})
export default store