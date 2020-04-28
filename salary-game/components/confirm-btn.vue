<template>
	<view class="confirm-btn">
		<button  class="btn-left index-btn1"
		 open-type="contact" :contact="confirmLeft">
			<image src="../static/img/person.png" class='person-img'></image><span class="left-text">{{btnText1}}</span>
		</button>
		<slot>
			<button class="btn-right index-btn2" :open-type="btnType2" @getphonenumber="confirmRight" @click="clickRight">
			 {{btnText2}}
			 
			 </button>
			
		</slot>
		

	</view>
</template>

<script>
	import "@/static/css/base.css"
	export default {
		name: "confirm-btn",
		data(){
			return {
				btnType2: 'getPhoneNumber'
			}
		},
			
		methods: {
			confirmLeft(e) {
				this.$emit('confirmLeft', e)
			},

			/**
			 * 获取手机号
			 * encryptedData	String	包括敏感数据在内的完整用户信息的加密数据，详细见加密数据解密算法	
				iv				String	加密算法的初始向量，详细见加密数据解密算法	
				cloudID			string	敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据，详细见云调用直接获取开放数据
			 */
			confirmRight(e) {
				
				this.$emit('confirmRight', e.detail)
			},
			clickRight(e){
				// console.log('clickRight:', e)
				//click事件立即触发
				if(this.btnType2!=='getPhoneNumber'){
					this.$emit('clickRight', e.detail)
				}
				
			}

		},
		props: {
			btnText1: {
				default () {
					return '和我经纪人聊聊'
				},
				type: String
			},
			btnText2: {
				default () {
					return '确认匹配薪资'
				},
				type: String
			}

			// hasBorder:{
			// 	default: true,
			// 	type: Boolean
			// }
		},
		mounted() {
			if(uni.getStorageSync('phone')){
				this.btnType2 = ''
			}
		}
	}
</script>

<style scoped>
	
</style>
