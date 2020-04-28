<template>
    <view class="main">
		<view class="top-tip">
			<view class="left"></view>
			<view class="center">
				有谁在抢
			</view>
			<view class="right"></view>
		</view>
		<view class="record-list">
			<view :animation="animationData" id="record">
				<view class="record-item" v-for="(item, index) in recordList" :key="index" id="record-item">
					<span class="name">{{item.work_user.nickname}}</span>
					<span class="text">刚刚抽到了</span>
					<span class="lottery">{{item.name}}</span>
				</view>
			</view>
			
			<!-- <view class="record-item">
				<span class="name">我们</span>
				<span class="text">刚刚抽到了</span>
				<span class="lottery">1000元设</span>
			</view>
			<view class="record-item">
				<span class="name">我们</span>
				<span class="text">刚刚抽到了</span>
				<span class="lottery">1000元设计代金券</span>
			</view> -->
			
		</view>
		
		
    </view>
</template>

<script>
    export default {
        name: "record",
        data(){
			return {
				animationData: {},
				totalHeight : '',
				itemHeight : '',
			}
        },
		props:{
			recordList:{
				default(){
					return []
				},
				type: Array
			}
		},
        components:{

        },
		mounted() {

			this.$nextTick(()=>{
				setTimeout(()=>{
					this.getAllHeight().then(()=>{
						var animation = uni.createAnimation({
							duration: 1000,
						    timingFunction: 'ease',
						})
						let tranHeight = 0
								
						let timer = setInterval(()=> {
							if(tranHeight< -this.totalHeight+ 3*this.itemHeight){
								tranHeight = 0
							}else{
								tranHeight -= this.itemHeight
							}
							animation.translateY(tranHeight).step()
							this.animationData = animation.export()
							
						}, 3000)
						this.$once('hook:beforeDestroy', ()=>{
							clearInterval(timer)
						})
						
					})	
				},500)
				
			})
			
			
		},
		
		
		methods:{
			
			recodeGo(){
				// // console.log( this.$refs)
				// let recordItem = this.$refs.recordItem.$el.style.transform = 'translateY(100)'
				// console.log(this.$refs.recordItem.$el)
				
			},
			recodeTimeStart(){
				let recodeTime = setInterval(this.recodeGo, 1000)
			},
			// async getItemHeight(){
				
			// 	await this.getHeight('record')
			// 	await this.getHeight('record-item')
			// 	console.log('this.itemHeight', this.itemHeight)
				
			// },
			// getHeight(r){
			// 	return new Promise(resolve=>{
			// 		this.query.select('#'+r).boundingClientRect(data => {
			// 		  console.log(r + "节点高度为" + data.height);
			// 		  if(r ==='record'){
			// 			  this.totalHeight = data.height
			// 		  }else{
			// 			  this.itemHeight = data.height
			// 		  }
					 
			// 		  resolve()
			// 		}).exec();
			// 	})
				
			// },
			getAllHeight(){
				return new Promise(resolve=>{
					let query = uni.createSelectorQuery().in(this);
					query.select('#record').boundingClientRect().select('#record-item').boundingClientRect().exec(ret=>{
						this.totalHeight = ret[0].height
						this.itemHeight = ret[1].height
						resolve()
					});
				})
				
			}
			
		}
    }
</script>

<style scoped>
.main{
	/* width:472rpx;
	height:192rpx; */
	background:rgba(242,85,88,1);
	opacity:0.5;
	border-radius:20rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 24rpx 64rpx 10rpx 64rpx;
	margin-top: 30rpx;
	/* text-align: center; */
}
.top-tip{
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 471rpx;
}
.top-tip .left, .top-tip .right{
	width:165rpx;
	height:1rpx;
	background:rgba(255,255,255,1);
}
.top-tip .center{
	color:rgba(255,255,255,1);
	font-size:24rpx;
	
}
.record-list{
	font-size: 24rpx;
	height: 180rpx;
	/* width: 471rpx; */
	/* margin-top: 24rpx; */
	overflow: hidden;
	/* padding-bottom: 40rpx; */
}
.record-item{
	
	display:flex;
	align-items: center;
	justify-content: space-evenly;
	border-bottom: rgba(255,255,255,1) dashed 1rpx;
	height: 60rpx;
}
/* .record-item:last-child{
	border-bottom: none
} */
.record-item .name{
	color:rgba(255, 255, 255, 1);
	max-width: 150rpx;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.record-item .text{
	color:rgba(255, 199, 199, 1);
	margin-left: 15rpx;

	
}

.record-item .lottery{
	color:rgba(255, 239, 20, 1);
	margin-left: 15rpx;
}



</style>
