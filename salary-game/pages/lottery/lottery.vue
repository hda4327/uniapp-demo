<template>
	<view class="main">
		<Advertisement :bg="advertisementBg" :hasBorder='false' @toAdUrl="toLotAd"></Advertisement>
		<image src="../../static/img/lottery-bg.png" alt="" class="lottery-bg">
		</image>
		<div class="lottery-content">
			<view class="lottery-tip">
				<view>恭喜您获得{{changeNum}}次抽奖机会！</view>
				<!-- <view> 每成功邀请一位好友来测试均可获得一次抽奖机会</view> -->
			</view>
			<lotteryCom :intime="30" ref="lotteryCom" @changeNum="getChangeNum"></lotteryCom>

			<!-- <ConfirmBtn :btnText="btnText" :btnBg1="'../../static/img/lottery-btn1.png'" :btnBg2="'../../static/img/lottery-btn2.png'"></ConfirmBtn> -->
			<view class="confirm-btn">
				<button class="btn-left lot-btn1" open-type="contact" :contact="confirmLeft">
					<view class="contract"></view> <text style="margin-left: 20rpx;">和我经纪人聊聊</text>
				</button>
				<button class="btn-right lot-btn2" open-type="share">{{btnText}}</button>
			</view>


			<RecordShow :recordList="recordList"></RecordShow>
		</div>
		<LotteryModal :modalTip="modalTip" :luckPosition='luckPosition' ref="modal"></LotteryModal>
		
		
	</view>
</template>

<script>
	import "@/static/css/base.css"
	import lotteryCom from '@/components/sherpa-jiugongge/sherpa-jiugongge.vue'
	import Advertisement from '@/components/advertisement.vue'
	import Modal from '@/components/modal/Modal'
	import ConfirmBtn from '@/components/confirm-btn.vue'
	import RecordShow from './childCom/record-show.vue'
	import LotteryModal from '@/components/modal/Modal.vue'
	import {
		reqHaveNum,
		reqGotPrizeList
	} from '@/network/lottery'

	export default {
		name: "lottery",
		data() {
			return {
				btnText: '邀请好友测一测',
				advertisementBg: '',
				openId: uni.getStorageSync('openid'),
				recordList: {},
				changeNum: 0,
				config: '',
				
					
			}
		},
		onLoad() {
			
			reqGotPrizeList(res => {
				this.recordList = res.data
			})
			this.config = uni.getStorageSync('config')
			this.advertisementBg = this.config.banner.page3.src
			
			uni.setNavigationBarTitle({
				title: this.config.title.page3
			})
			

		},
		watch: {
			changeNum() {
				console.log(this.$refs.lotteryCom.initChangeNum)
				return this.$refs.lotteryCom.initChangeNum
			}
		},

		components: {
			lotteryCom,
			Modal,
			ConfirmBtn,
			RecordShow,
			Advertisement,
			LotteryModal
		},
		methods: {

			confirmLeft(e) {
				this.$emit('confirmLeft', e)
			},
			getChangeNum(num) {
				this.changeNum = num
			},
			onShareAppMessage() {
				return {
					title: `口腔机构人员薪资测一测`,
					path: 'pages/index/index',
				}
			},
			
			toLotAd(){
				// 后台传的数据为空，则跳转的是小程序
				if(this.config.banner.page3.link === ""){
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
					uni.setStorageSync('ad_url', this.config.banner.page3.link)
					uni.navigateTo({
						url: '/pages/index/adUrl'
					})
				}
			}
		}
	}
</script>

<style scoped>
	.main{
		/* 不设置高度会产生白边，情况未知 */
		height: 1624rpx;  
		overflow: hidden;
	}
	.lottery-bg {
		width: 100%;
		height: 1499rpx;
	}

	.lottery-content {
		position: absolute;
		top: 449rpx;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}

	.lottery-tip {
		/* background: url(); */
		text-align: center;
		width: 584rpx;
		height: 107rpx;
		font-size: 30rpx;
		/* 	font-size:24rpx; */
		color: rgba(255, 255, 255, 1);
		line-height: 36rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* padding-top: 12rpx; */
		position: relative;

	}

	.lottery-tip cover-image {
		position: absolute;
		z-index: -1;
	}
</style>
