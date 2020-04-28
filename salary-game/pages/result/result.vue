<template>
	<view class="result-main">
		<Advertisement :bg="advertisementBg" :hasBorder='false' @toAdUrl="toResAd"></Advertisement>
		<view class="canvas-content">
			<DrawToCanvas ref="drawTo" @showBtn="isShowBtn=true"></DrawToCanvas>
		</view>
		<view class="btn-content" v-show="isShowBtn">
			<TwoBtn @copyBtn="copyImg" @againBtn="navToIndex"> </TwoBtn>
			<view class="btn">
				<ConfirmBtn>
					<button class="nav-btn"  @click="navToLottery">
						{{btnText2}}
					</button>
				</ConfirmBtn>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import DrawToCanvas from '../../components/drawToCanvas/DrawToCanvas.vue'
	import Advertisement from '@/components/advertisement.vue'
	import ConfirmBtn from '@/components/confirm-btn.vue'
	import TwoBtn from './childCom/two-btn.vue'
	export default {
		data(){
			return {
				btnText2: '点击抽取牙医专属奖品',
				isShowBtn: false,
				advertisementBg: '../static/img/result-ad.png',
				adLink:'',
				config:'',
				
			}
		},
		onLoad() {
			this.config = uni.getStorageSync('config')
			this.advertisementBg = this.config.banner.page2.src
			
			uni.setNavigationBarTitle({
				title: this.config.title.page2
			})
			
		},
		
		methods: {
		
			copyImg(){
				
				this.$refs.drawTo.btnCreate()
			},
			navToIndex(){
				uni.reLaunch({
					url:'/pages/index/index'
				})
			},
			navToLottery(){
				uni.navigateTo({
				    url: '/pages/lottery/lottery'
				});
			},
			
			onShareAppMessage() {
				return {
					title: `口腔机构人员薪资测一测`,
					path: 'pages/index/index',
				}
			},
			toResAd(){
				// 后台传的数据为空，则跳转的是小程序
				if(this.config.banner.page2.link === ""){
					uni.navigateToMiniProgram({
						  // appId: 'wx59108e780bac5b1d',
						  // path: 'pages/form/info/info.html?scene=5e71777775a03c71e48475ec&appid=wx22c4fb115e6f4776',
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
					uni.setStorageSync('ad_url', this.config.banner.page2.link)
					uni.navigateTo({
						url: '/pages/index/adUrl'
					})
				}
			}
			
		},
		components:{
			DrawToCanvas,
			ConfirmBtn,
			TwoBtn,
			Advertisement
		}
		
	}
</script>

<style scoped>
.result-main{
	padding-bottom: 60rpx;
}
.canvas-content{
	
}
.btn{
	margin-top: 40rpx;
}
.nav-btn{
	background:none;
	background-image: url(../../static/img/res-btn2.png);
	background-size:cover;
	font-weight: 600;
	margin-left: -12rpx;
	line-height: 121rpx;
	width: 372rpx;
	height: 121rpx;
	color: rgba(255, 255, 255, 1);
	text-align: center;
	font-size: 30rpx;
}
</style>
