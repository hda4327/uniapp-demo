<template>
	<view class="modal-cover" v-show="modalShow">
		
		<view class="modal-content">
			<image src="../../static/img/close.png" class="close-img" @click="modalShow=false"></image>
			<slot name="prize-img">
				<image class="prize-img" :src="'../../static/img/prize-list/'+ luckPosition +'.png'">
					
				</image>
			</slot>
			<view class="tip" :class="isWin?'green':'red'">
				{{tip}}
			</view>
			
			<slot name="line-img">
				<image class="line-img" src="../../static/img/modal-ico1.png">
					
				</image>
			</slot>
			
			<view class="bottom">
				<image src="../../static/img/code.png" class="code-img"></image>
				<!-- <view class="code-tip"> -->
				<view class="">
					<p>{{p1}}</p> <p>{{p2}}</p>
				</view>
                
                <!-- <text>{{p}}</text> -->
                 <!-- </view> -->
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalShow: false,
				luckPosition: 1,
				isWin: false,
				tip: '很遗憾您未中奖，谢谢参与！',
				p1:'客服将会联系您',
				p2:'领取奖品！',
				p:'客服将会联系您领取奖品！'
			}
		},
		mounted() {
			this.$EventBus.$on('closeModal', (onload)=>{
				
				this.luckPosition = onload.luckPosition+1
				this.tip = onload.tip
				// this.p1 = onload.p1
				// this.p2 = onload.p2
				this.isWin = onload.isWin
				this.modalShow = true
			})
		},
		methods:{
			
		},
		beforeDestroy() {
			this.$EventBus.$off('closeModal')
		}
		
	}
</script>

<style scoped>
.modal-cover{
	background: rgba(1,1,1,0.7);
	z-index: 9;
	position: fixed;
	right: 0;
	top: 0;
	left: 0;
	bottom: 0;
}
.modal-content{
	position: fixed;
	top: 50%;
	left: 50%;
	/* width: 560rpx;
	height: 567rpx; */
	padding: 10rpx 50rpx 60rpx 50rpx;
	transform: translate(-50%, -50%);
	background: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	/* padding: 30px; */
	
}
.modal-content .prize-img{
	width: 227rpx;
	height: 227rpx;

}
.modal-content .tip{
	text-align: center;
	font-size:32rpx;
}
.modal-content .line-img{
	height: 32rpx;
	width: 433rpx;
	margin-top: 40rpx;
}
.red{
	color: #FF4141
}

.green{
	color: #00B62A
}
.close-img{
	position: absolute;
	top: 16rpx;
	right: 16rpx;
	width: 44rpx;
	height: 44rpx;
}
.bottom{
	width: 443rpx;
	height: 150rpx;
	display: flex;
	justify-content: space-around;
	align-items: center;
	/* margin-top: 40rpx; */
	/* line-height: 150rpx; */
	line-height: 40rpx;
	font-size:30rpx;
}
.bottom .code-img{
	width: 134rpx;
	height: 134rpx;
}
/* .bottom .code-tip{
	width: 230rpx;
	height: 80rpx;
	font-size:30rpx;
	text-align: center;
} */
</style>