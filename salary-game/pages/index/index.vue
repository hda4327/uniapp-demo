<template>
	<view class="content">
		<Advertisement :bg="advertisementBg" :hasBorder='false' @toAdUrl="toIndexAd"></Advertisement>
<image src="../../static/img/index-bg.png" alt="" class="content-bg"></image>
		<div class="in-content">

			<PickerContent ref="msgSelect"></PickerContent>

			<SkillContent ref="skillSelect"></SkillContent>

			<ConfirmBtn @confirmLeft="handleContact" @confirmRight="saveMsg" :btnText='btnText' ref="confirmBtn" @clickRight="onlyCheckMsg"></ConfirmBtn>
		</div>
		<UniPopup ref="popup">
			<AuthModal @authForInfo="authForInfo" @closePop="closePop"></AuthModal>

		</UniPopup>
		<!-- 		<Modal></Modal>
 -->
		<!-- <navigator url="/pages/result/result">跳转</navigator>
		<button open-type="getUserInfo" @getuserinfo="authForInfo" withCredentials="true"> 授权</button> -->
		<official-account></official-account>
	</view>

</template>

<script>
	import PickerContent from './chidCom/picker-content.vue'
	import SkillContent from './chidCom/skill-content.vue'
	import AuthModal from './chidCom/auth-modal.vue'
	import ConfirmBtn from '@/components/confirm-btn.vue'
	import UniPopup from '@/components/uni-popup/uni-popup.vue'
	import Advertisement from '@/components/advertisement.vue'

	import {
		getCodeForOauth,
		authForMsg,
		getPhoneNumber
	} from '@/common/authFun.js'
	import {
		getKey,
		saveUserInfo,
	} from '@/network/auth.js'
	import {
		saveWork,getConfig
	} from '@/network/index.js'

	export default {
		data() {
			return {
				btnText: '确认匹配薪资',

				havePickPostId: null,

				test: '',
				poster: '',
				isCreate: false,
				isShow: false,
				totalVal: 0,
				skillVal: 0,
				advertisementBg: '',
				tipTextObj: {
					location_value: '城市',
					position_value: '从事工作',
					qualification_value: '职称状况',
					year_value: '工作经验',
					education_value: '学历',
				},
				config: ''	
			}
		},
		components: {
			ConfirmBtn,
			SkillContent,
			Advertisement,
			PickerContent,
			UniPopup,
			AuthModal
		},
		onLoad() {
			getConfig(res=>{
				this.config =res.data
				uni.setStorageSync('config', this.config)
				this.advertisementBg = this.config.banner.page1.src
				
				uni.setNavigationBarTitle({
					title: this.config.title.page1
				})
			})
			
			this.getLocation()
			
			
		},
		onReady() {
			if (!uni.getStorageSync('userInfo')) {
				getCodeForOauth('oauth').then(res => {
					// console.log('res:', res); // {code:"..."errMsg:"login:ok"}
					// uni.setStorageSync('code', res.code)
					getKey(kRes => {
						uni.setStorageSync('session_key', kRes.data.session_key)
						uni.setStorageSync('openid', kRes.data.openid)
						this.$refs.popup.open()
					}, {
						code: res.code
					})
				})

			}
			
		},
		methods: {
			getLocation(){
				uni.authorize({
				    scope: 'scope.userLocation',
				    success() {
				        uni.getLocation({
							success(res) {
								uni.setStorageSync('location', res)
							}
						})
				    }
				})
			},
			toIndexAd(){
				// 后台传的数据为空，则跳转的是小程序
				if(this.config.banner.page1.link === ""){
					uni.navigateToMiniProgram({
						  appId: 'wx9188524557398958',
						  path: 'pages/home/dashboard/index',
						  success(res) {
							// 打开成功
							// console.log('res', res)
						  },
						  fail(err){
							  // console.log('err', err)
						  }
					})
				}else{
					uni.setStorageSync('ad_url', this.config.banner.page1.link)
					uni.navigateTo({
						url:'/pages/index/adUrl'
					})
				}
				
			},
			handleContact(e) {
				console.log('kefu:', e)
			},
			saveMsg(detail) {
				//如果未授权信息则弹起授权框
				if (!uni.getStorageSync('userInfo')) {
					this.$refs.popup.open()
					return
				}
				//检查信息是否填写完整
				if(detail.errMsg!=='getPhoneNumber:fail user deny'){
					this.toReqGetPhone(detail).then(()=>{
						if (this.checkMsgFill()) {
						if (this.checkSkill()) {
							this.reqSaveWork()
						}
					}
					})
					
				}else{
					uni.showToast({
						title:'获取信息失败'
					})
				}

			},
			onlyCheckMsg() {
				if (this.checkMsgFill()) {
					if (this.checkSkill()) {
						
						this.reqSaveWork()
					}
				}
			},
			navToRes(){
				uni.redirectTo({
					url: '/pages/result/result' //进入结果页
				});
			},

			authForInfo(e) {
				if(e.detail.errMsg !=='getUserInfo:fail auth deny'){
					let openId = uni.getStorageSync('openid')
					let userInfo = e.detail.userInfo
					userInfo['nickname'] = userInfo['nickName']
					userInfo['headimgurl'] = userInfo['avatarUrl']
					uni.setStorageSync('userInfo', JSON.stringify(userInfo))
					
					Object.assign(userInfo, {
						openid: openId
					})
					console.log(userInfo)
					saveUserInfo((res) => {
						console.log('save', res)
					
					}, userInfo)
					this.closePop()
				}
				
			},


			closePop() {
				this.$refs.popup.close()
			},
			checkMsgFill() {
				let pickParams = this.$refs.msgSelect.pickParams
				let checkRes = Object.keys(pickParams).every(item => {
					if (!pickParams[item]) {
						uni.showToast({
							title: this.tipTextObj[item] + '未填',
							icon: 'none'
						})
						this.totalVal = 0 //统计val归零
						return false
					} else {
						this.totalVal += parseInt(pickParams[item])
						return true
					}


				})

				return checkRes
			},
			checkSkill() {
				let skillList = this.$refs.skillSelect.valueList

				// if (skillList.length === 0) {
				// 	uni.showToast({
				// 		title: '擅长至少选一项',
				// 		icon: 'none'
				// 	})
				// 	this.totalVal = 0 //归零
				// 	this.skillVal = 0
				// 	return false
				// } else {
					for (let i of skillList) {
						this.skillVal += parseInt(i)
					}
					this.totalVal += this.skillVal
					return true
				// }
			},
			toReqGetPhone(detail) {
				
				return new Promise(resolve=>{
					// //检查session_key是否过期,过期则从新获取session_key
					getPhoneNumber(detail).then(res => {
						uni.setStorageSync('phone', res.data)
						this.$refs.confirmBtn.btnType2 = ''
						resolve()
						// this.reqSaveWork()
					})
				})
				

			},
			// 在此之前必须全部填值
			reqSaveWork(){
				let params = {
					open_id: uni.getStorageSync('openid'),
					phone: uni.getStorageSync('phone'),
					total: this.totalVal,
					skill_value: JSON.stringify(this.$refs.skillSelect.params),
					location_id: uni.getStorageSync('location_id'),
					location: JSON.stringify(uni.getStorageSync('location')) 
				}
				
				let msgParams = this.$refs.msgSelect.pickParams
				Object.assign(msgParams, params)
				saveWork(res => {
					
					uni.setStorageSync('total', res.data.total)
					uni.setStorageSync('tip', res.data.message)
					uni.setStorageSync('proportion', res.data.proportion)
					this.navToRes()
				
				}, msgParams)
			},
			onShareAppMessage() {
				return {
					title: `口腔机构人员薪资测一测`,
					path: 'pages/index/index',
				}
			}
		},
		
		
		
	}
</script>

<style>
	.content-bg {
		/* position: relative;
		z-index: -1; */
		width: 750rpx;
		height: 1470rpx;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.in-content {
		width: 750rpx;
		padding-bottom: 25rpx;
		background-size: cover;
		position: absolute;
		
	}

	.change-tip {
		position: fixed;
		left: 50%;
		bottom: 20px;
		transform: translate(-50%, 0);
	}
</style>
