<!-- 父可传参数-->
 <!-- 1. intime：抽奖速度，默认50 -->
 <!-- 2.luckyProList: 定义抽奖物及提示
	数据格式示例：
	 prob为概率
	 name为物品名
	 tip为中奖提示后缀
	1  2  3
	8     4
	7  6  5 
	 1:{prob:0.5,name: '50000人冥币', tip:'50000人冥币'},
	 2:{prob:0.08,name: '一个大耳刮子', tip:'一个大耳刮子'},
	 3:{prob:0.08,name: '一阵掌声', tip:'一阵掌声'},
	 4:{prob:0.08,name: '一个巴掌', tip:'一个巴掌'},
	 5:{prob:0.07,name: '一个红buff', tip:'一个红buff'},
	 6:{prob:0.07,name: '掌嘴', tip:'掌嘴'},
	 7:{prob:0.07,name: 'b脸抽肿', tip:'b脸抽肿'},
	 8:{prob:0.05,name: '机会不中用啊', tip:'机会不中用啊'}}
	 
 -->
 <!-- 3. 中奖前缀 -->
<template>
		<!--index.wxml-->
		<view class="container">
			<!-- 停止位置:<input :value='luckPosition' style="width:100%;text-align:center" @input='input' type='number'></input> -->
			<view class='frame_view'>
				<image src="../../static/img/lottery-content.png" alt="">
				</image>	
				<view class="lottery-list">
					<view class='frame_row'>
						<image class='frame_item frame_item0' :src="luckyProList[0].src" :style='{"opacity":color[0]}' >
							
						</image>
						<image class='frame_item frame_item1' :src="luckyProList[1].src" :style='{"opacity":color[1]}'>
							
						</image>
						<image class='frame_item frame_item2' :src="luckyProList[2].src" :style='{"opacity":color[2]}'>
						
						</image>
					</view>
					
					<view class='frame_row' style="margin-top: 8rpx;">
						<image class='frame_item frame_item7' :style='{"opacity":color[7]}' :src="luckyProList[7].src" >
							
						</image>
						<!-- 点击抽奖 -->
						<view class='frame_item click-lucky' @click="clickLucks()">
							<image src="../../static/img/lottery-start.png" mode=""></image>
						</view>
						<image class='frame_item frame_item3' :style='{"opacity":color[3]}' :src="luckyProList[3].src" >
							
						</image>
					</view>
					
					<view class='frame_row' style="margin-top: 8rpx;">
						<image class='frame_item frame_item6' :style='{"opacity":color[6]}' :src="luckyProList[6].src" >
						
						</image>
						<image class='frame_item frame_item5' :style='{"opacity":color[5]}' :src="luckyProList[5].src" >
						</image>
						<image class='frame_item frame_item4' :style='{"opacity":color[4]}' :src="luckyProList[4].src" >
						</image>
						
					<!-- 	<image class='frame_item frame_item6' :style='{"opacity":color[6]}' :src="luckyProList[6].src" >
						
						</image> -->
					</view>
				</view>
				
				
			</view>
			
		</view>

</template>

<script>
	import {reqLotteryList, reqSavePrize, reqBrushNum, reqHaveNum} from '@/network/lottery.js'
	
	
	//计数器
	var interval = null;
	//值越大旋转时间越长  即旋转速度
	// var intime = 50;
	export default {
		data() {
			return {
				color: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
				images: [],
				clickLuck: 'clickLuck',
				luckPosition: 0,
				initChangeNum: 0,
				luckyProList:{},
				tipPrefix:'恭喜您获得“',
				tipPostfix:'”！',
				modalTip: '',
				
				testImg: ''
				
			}
		},
		components:{
			
		},
		created() {
			// uni.hideLoading()
			this.loadAnimation();
			 reqLotteryList(res=>{
				this.luckyProList = res.data
			})
			reqHaveNum(res=>{
				this.initChangeNum = res.data.brush_num
				this.$emit('changeNum', this.initChangeNum)
			}, {open_id:uni.getStorageSync('openid')})
		},
		props:{
			intime:{
				default: 50,
				type: Number
			},
			
			
		},
		methods: {
			input: function(e) {
				var data = Number(e.detail.value);
				this.luckPosition = data;
			},
			//按luckyProList分配的概率生成对应的一个随机luckPosition值（中奖位置索引）
			computeLucyList(){
				let tmpList = []
				let total = 0
				
				for(let i in this.luckyProList){
					total += this.luckyProList[i].prob
					tmpList.unshift(total);
				}
				tmpList.push(-1)
				let ranNum = Math.random() // 0-1的随机数
				console.log(tmpList);
				console.log(ranNum)
				
				tmpList.every((num,i)=>{
					if(ranNum>num){
						this.luckPosition = 8-i
						
						return false
					}else{
						return true
					}
					
					
				})
				
				console.log(this.luckPosition)  //中奖结果已有
			},
			toReqSaveRecord(){
				let param = {
					name:this.luckyProList[this.luckPosition]['tip'],
					open_id: uni.getStorageSync('openid'),
					phone: uni.getStorageSync('phone')
				}
				reqSavePrize((res)=>{console.log(res)}, param)
				reqBrushNum((res)=>{console.log(res)}, {open_id: param.open_id})
			},
			//点击抽奖按钮
			clickLucks() {

				if (this.clickLuck == 'clickLuck') {
					console.log('cishu', this.initChangeNum)
					// 判断抽奖次数是否为0
					if (this.initChangeNum<=0) {
						uni.showModal({
							title: '提示',
							content: '您已抽过奖品了',
							showCancel: false,
							success: res => {},
							fail: () => {},
							complete: () => {}
						});
						return;
					}else{
						this.computeLucyList()
						this.toReqSaveRecord()
						
						this.initChangeNum --
						this.$emit('changeNum', this.initChangeNum)
					}

					//设置按钮不可点击
					// e.btnconfirm = '../../static/sherpa-jiugongge/dianjichoujiangd.png';
					this.clickLuck = '';

					//清空计时器
					clearInterval(interval);
					var index = 0;
					//循环设置每一项的透明度
					interval = setInterval(()=> {
						if (index > 7) {
							index = 0;
							// e.color[7] = 0.5
							this.$set(this.color, 7, 0.5);
						} else if (index != 0) {
							// e.color[index - 1] = 0.5
							this.$set(this.color, index-1, 0.5);
						}
						this.$set(this.color, index, 1);
						index++;
					}, this.intime);
					//模拟网络请求时间  设为两秒
					var stoptime = 2000;
					setTimeout(()=> {
						this.stop(this.luckPosition);
					}, stoptime)
				}
			},
			stop(which) {
				var e = this;
				//清空计数器
				clearInterval(interval);
				//初始化当前位置
				var current = -1;
				var color = e.color;
				for (var i = 0; i < color.length; i++) {
					if (color[i] == 1) {
						current = i;
					}
				}
				//下标从1开始
				var index = current + 1;
				e.stopLuck(which, index, this.intime, 10);
			},
			stopLuck(which, index, time, splittime) {
				var e = this;
				//值越大出现中奖结果后减速时间越长
				setTimeout(()=> {
					//重置前一个位置
					if (index > 7) {
						index = 0;
						// e.color[7] = 0.5
						e.$set(e.color, 7, 0.5)
					} else if (index != 0) {
						// e.color[index - 1] = 0.5
						e.$set(e.color, index - 1, 0.5)
					}
					//当前位置为选中状态
					e.color[index] = 1;
					//如果旋转时间过短或者当前位置不等于中奖位置则递归执行
					//直到旋转至中奖位置
					if (time < 400 || index != which) {
						//越来越慢
						splittime++;
						time += splittime;
						//当前位置+1
						index++;
						e.stopLuck(which, index, time, splittime);
					} else {
						//1秒后显示弹窗
						setTimeout(()=> {
							// if (which == 0) {
								//中奖
								// uni.showModal({
								// 	content: this.tipPrefix + e.luckyProList[which+1].tip,
								// 	showCancel: false,
								// 	confirmColor: "#F8C219",
								// 	success: res => {
								// 		if (res.confirm) {
								// 			//设置按钮可以点击
								// 			// e.btnconfirm = '../../static/sherpa-jiugongge/dianjichoujiang.png';
								// 			e.clickLuck = 'clickLuck';
								// 			e.loadAnimation();
								// 		}
								// 	},
								// 	fail: () => {},
								// 	complete: () => {}
								// });
								// this.$refs.modal.modalShow = true
								this.clickLuck = 'clickLuck';
								this.loadAnimation();
								
								let onload = {
									luckPosition: this.luckPosition,
									tip:  this.tipPrefix + this.luckyProList[which].tip + this.tipPostfix,
									isWin: true,
									// p1 : '扫码关注公众号',
									// p2: '客服联系您领奖'
								}
								if(which===1){
									onload.isWin = false
									onload.tip = '很遗憾您未中奖，谢谢参与！'
									
									// onload.p1 = '更多惊喜'
									// onload.p2 = '关注公众号'
								}
								
								this.$EventBus.$emit('closeModal', onload)
							// } 
							// else {
							// 	//未中奖
							// 	uni.showModal({
							// 		content: '很遗憾未中奖',
							// 		showCancel: false,
							// 		confirmColor: "#F8C219",
							// 		success: res => {
							// 			if (res.confirm) {
							// 				//设置按钮可以点击
							// 				e.btnconfirm = '../../static/sherpa-jiugongge/dianjichoujiang.png';
							// 				e.clickLuck = 'clickLuck';
											
							// 				e.loadAnimation();
							// 			}
							// 		},
							// 		fail: () => {},
							// 		complete: () => {}
							// 	});
							// }
						}, 1000);
					}
				}, time);
			},
			loadAnimation() {
				var e = this;
				var index = 0;
				if (interval == null) {
					interval = setInterval(()=> {
						if (index > 7) {
							index = 0;
							// e.color[7] = 0.5
							e.$set(e.color, 7, 0.5)
						} else if (index != 0) {
							// e.color[index - 1] = 0.5
							e.$set(e.color, index - 1, 0.5)
						}
						e.color[index] = 1;
						e.$set(e.color, index, 1)
						index++;
					}, 1000);
				}
			}
		},
		
	}
</script>

<style>
	
	/**index.wxss**/
	.container {
		/* position: fixed; */
		width: 100%;
		height: 100%;
		
	}

	.frame_view {
		/* position: absolute;
		top: 50%;
		margin-top: -315upx;
		left: 50%;
		margin-left: -315upx; */
		width: 601rpx;
		height: 611rpx;
		padding: 20upx;
		/* background: #792db3; */
		z-index: 3;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/* position: relative; */
		
	}
	.frame_view>image{
		width: 601rpx;
		height: 611rpx;

	}
	.lottery-list{
		position: absolute;
	}

	.frame_row {
		width: 508rpx;
		height: 160rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		
	}

	.frame_item {
		width: 160rpx;
		height: 160rpx;
		z-index: 9;
		background-size: 100% 100%;
		
	}
	.click-lucky image{
		width: 161rpx;
		height: 161rpx;
	}

	.frame_item0 {
		
		
	}

	.frame_item>view {
		display: block;
		width: 100%;
		font-size: 30upx;
		color: #fff;
		z-index: 99;
		text-align: center;
	}

	.frame_item>view.img {
		width: 42upx;
		height: 42upx;
		line-height: 30upx;
		margin: 0 auto;
		margin-top: 20upx;
	}

	.frame_item>view.title {
		line-height: 30upx;
		padding-top: 40upx;
	}
</style>
