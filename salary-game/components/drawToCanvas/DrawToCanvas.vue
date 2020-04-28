<template>
	<view class="main">
		<!-- <button type='primary' style='font-size: 28rpx; line-height: 96rpx; margin: 200rpx 46rpx;' @click='createPoster'>生成海报</button> -->
		<view :style='{ animation: isShow ? "show" : "dismis Mask 0.3s forwards ease", top: 0, left: isCreate ? 0 : "750rpx"}'
		 @click="catchtap" class="cover">

			<canvas canvas-id='poster' class="canvas-main" v-show="showCanvas"></canvas>
			<image style='' :src='poster' class="poster"  @click="checkImage"></image>
			<!-- <image style='' :src='poster' class="poster" ></image> -->
		</view>
		
		
	</view>
</template>
<script>
	// import ConfirmBtn from '@/components/confirm-btn.vue'
	export default {
		name: "DrawToCanvas",
		data() {
			return {
				poster: '',
				isCreate: false,
				isShow: false,
				bgWidth: 670,
				bgHeight: 990,
				userInfo: {},
				tip: '',  //提示
				proportion: '',  //占比全国
				salary: ''  ,//100万
				showCanvas: true,
				code: 'https://ygt.linyakq.com/public/xcx_work/code.png',
				avatarUrl: '',
				postTip:''
			}
		},
		//userInfo: {avatarUrl:"https://wx.qlo....",city:"金华",country:"中国",gender:1,language:"zh_CN",nickName:"Master Yi",province:浙江"}
		created() {
			uni.showLoading({
				title: '薪资生成中。。',
				mask: true
			})
			
			this.userInfo = JSON.parse(uni.getStorageSync('userInfo'))
			this.tip = uni.getStorageSync('tip') 
			this.proportion = uni.getStorageSync('proportion') 
			this.salary = uni.getStorageSync('total') 
			// this.avatarUrl = this.userInfo.avatarUrl
			this.postTip = uni.getStorageSync('postTip')
			
			this.downloadFile(this.userInfo.avatarUrl).then((res)=>{
				this.avatarUrl = res.tempFilePath
				this.downloadFile(this.code).then((res)=>{
					this.code = res.tempFilePath
					this.createPoster()  //开始绘图
				})
			})
			
			
			
		},
		components: {
			// ConfirmBtn
		},
		onReady() {
			
		},
		computed: {
			ratepx() {
				return 750.0 / uni.getSystemInfoSync().windowWidth;
			}
		},
		methods: {
			downloadFile(file){
				return new Promise(resolve=>{
					uni.downloadFile({
						  url:file,
						  success: res => {
							// 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
							if (res.statusCode === 200) {
								
								resolve(res)
								
							}
						  }, fail: res => {
							console.log(res);
					  }
					})
				})
			},
			checkImage(e){
				console.log('1221')
				// 预览图片
					uni.previewImage({
						urls: [this.poster],
						longPressActions: {
							itemList: ['发送给朋友', '保存图片', '收藏'],
							success: function(data) {
								console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
							},
							fail: function(err) {
								console.log(err.errMsg);
							}
						},
						fail(err) {
							console.log('yulanshibai')
						}
					});
			  },
			
			/// 获取canvas转化后的rpx
			rate: function(rpx) {
				return rpx / this.ratepx
			},

			/// 创建海报
			createPoster: function() {
				// auth.writePhotosAlbum(() => {
				//app.showLoading('正在生成...')
				/// 绘制的内容
				const writing = {
					//测试用cdn防跨域
					bigImage: '../../static/img/res-bg.png',
					contentBg: '../../static/img/res-line.png',
					avatar: this.avatarUrl,
					code: this.code,
					t1: '我最匹配的年薪是',
					t2: '已超过了'+ this.proportion + '的口腔从业者',
					t3: '长按测一测我的匹配薪资',
					t4: this.salary ,
					postTip: this.postTip,
					content: this.tip,
					name: this.userInfo.nickName,
					
				};
				/// 绘制
				this.draw('poster', this.bgWidth, this.bgHeight, writing).then(res => {
					setTimeout(() => {
						uni.hideLoading();
						this.$emit('showBtn') 
						this.showCanvas = false
						this.isCreate = true
						this.isShow = true
					}, 300)
				}, err => {
					setTimeout(() => {
						uni.hideLoading();
						// app.showToast('生成海报失败');
						console.log('生成海报失败')
					}, 300)
				})
				// });
			},

			/// 隐藏
			catchtap: function(callback) {
				this.isShow = false
				setTimeout(() => {
					this.isCreate = false
					if (callback && typeof callback == "function") {
						callback();
					}
				}, 400)
			},

			/// 绘制文本
			drawText: function(options) {
				/// 获取总行数
				var allRow = Math.ceil(options.ctx.measureText(options.str).width / options.maxWidth);
				/// 限制行数
				var count = allRow >= options.maxLine ? options.maxLine : allRow;
					/// 当前字符串的截断点
				let endPos = 0;
				/// 设置文字颜色
				options.ctx.setFillStyle(options.style ? options.style : '#fff');
				/// 设置字体大小
				options.ctx.setFontSize(options.fontSize ? options.fontSize : this.rate(24));
				/// 循环截断
				for (var j = 0; j <= count; j++) {  // 加了个 = 号解决最后行不输出的bug
					/// 当前剩余的字符串
					var nowStr = options.str.slice(endPos),
						/// 每一行当前宽度
						rowWid = 0,
						/// 每一行顶部距离
						y = options.y + (count == 1 ? 0 : j * options.height);
					let strLen = nowStr.length
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
					} else { /// 如果当前的字符串宽度小于最大宽度就直接输出并退出循环
					
						options.ctx.fillText(nowStr.slice(0), options.x, y);
						break;
					}
				}
			},

			/// 绘制海报 1、canvas对象 2、canvas宽 3、canvas高 4、绘制的内容
			draw: function(canvas, cavW, cavH, writing) {

				return new Promise((resolve, reject) => {

					/// 创建context
					var ctx = uni.createCanvasContext(canvas, this);
					
					
					ctx.clearRect(0, 0, this.rate(cavW), this.rate(cavH));

					/// 绘制底色
					ctx.setFillStyle('white');
					ctx.fillRect(0, 0, this.rate(cavW), this.rate(cavH));
					
					
					/// 绘制背景图
					ctx.drawImage(writing.bigImage, 0, 0, this.rate(cavW), this.rate(cavH));
					// this.drawRound(ctx)
					//内容背景
					ctx.drawImage(writing.contentBg, this.rate(40), this.rate(180), this.rate(590), this.rate(321));

					// // 直径
					// const diameter = this.rate(101);
					// // 圆参数 
					// const arc = {
					// 	radii: diameter / 2,
					// 	x: this.rate(40),
					// 	y: this.rate(800)
					// };

					/// 绘制文案内容   
					this.drawText({
						ctx: ctx,
						str: writing.content,
						maxLine: 4,
						maxWidth: this.rate(500),
						x: this.rate(95),
						y: this.rate(578),
						height: this.rate(50),
						fontSize: this.rate(24)
					})

					ctx.save();

					// 长按测一测您的匹配薪资
					// ctx.setFillStyle('#BC30FF');
					ctx.setFillStyle('#000000');
					ctx.setFontSize(this.rate(28));
					ctx.fillText(writing.t3, this.rate(182), this.rate(925))
					ctx.save();
					
					// 职位显示
					ctx.setFillStyle('#fff');
					ctx.setFontSize(this.rate(24));
					ctx.fillText(writing.postTip, this.rate(174), this.rate(140))
					ctx.save();
					
					// 微信名
					ctx.setFillStyle('#fff');
					ctx.setFontSize(this.rate(36));
					ctx.fillText(writing.name, this.rate(174), this.rate(100))

					ctx.save();

					// 您最匹配的年薪是
					ctx.setFillStyle('#0071BC');
					ctx.setFontSize(this.rate(48));
					ctx.font = '700'
					ctx.fillText(writing.t1, this.rate(145), this.rate(259))
					// this.boldText(ctx, {text:writing.t1,x:this.rate(145),y:this.rate(259)})
					ctx.save();
					
					// 100万！
					ctx.setFillStyle('#BC30FF');
					ctx.setFontSize(this.rate(80));
					ctx.font = '700'
					
					let rowTextX = 200
					if (writing.t4.length===4){
						rowTextX = 230
					}
					if (writing.t4.length===3){
						rowTextX = 260
					}
					
					ctx.fillText(writing.t4, this.rate(rowTextX), this.rate(370))  // x:200,y:370是3位薪资时显示在中间位  
					this.boldText(ctx, {text:writing.t4,x:this.rate(rowTextX),y:this.rate(370)})
					ctx.save();
					
					// 已超过了98%的口腔从业者
					ctx.setFillStyle('#0071BC');
					ctx.setFontSize(this.rate(26));
					ctx.fillText(writing.t2, this.rate(170), this.rate(465))
					ctx.save();

					/// 绘制头像
					ctx.drawImage(writing.avatar, this.rate(50), this.rate(40), this.rate(100), this.rate(100));
					ctx.drawImage(writing.code, this.rate(255), this.rate(725), this.rate(160), this.rate(160));
					
					/// 开始绘制  
					ctx.draw(false, (res) => {
						setTimeout(()=>{
							uni.canvasToTempFilePath({
								canvasId: 'poster',
								fileType: 'png',
								success: res => {
									// this.setData({
									// 	poster: res.tempFilePath
									// })
									this.poster = res.tempFilePath
									resolve();
								},
								fail: err => {
									console.log(err)
									reject();
								}
							}, this)
						},200)
						
					});

				})
			},
			boldText(ctx, obj) {
				ctx.fillText(obj.text, obj.x, obj.y - 0.8);
				ctx.fillText(obj.text, obj.x - 0.8, obj.y);
			},
			/// 保存图片
			btnCreate() {
				// app.showLoading('正在保存...')
				wx.saveImageToPhotosAlbum({
					filePath: this.poster,
					success: res => {
						// app.hideLoading();
						// this.catchtap(() => {
						// 	wx.showToast({
						// 		title: '保存成功'
						// 	})
						// });
						uni.showToast({
							title: '图片已存至相册->微信'
						})
					},
					fail: err => {
						// app.hideLoading();
						// this.catchtap(() => {
						// 	wx.showToast({
						// 		title: '保存失败',
						// 		icon: 'none'
						// 	})
						// });
						uni.showToast({
							title: '保存失败',
							icon: 'none'
						})
					}
				}, this);
			},
			//绘制圆角矩形
			roundRect(ctx, x, y, w, h, r, c = '#fff') {

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
			drawRound(ctx){
				
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
			}
		}
	}
</script>

<style scoped>
	.cover {
		width: 100%;
		height: 100%;
		z-index: 999;
		display: flex;
		align-items: center;
		/* justify-content: center; */
		flex-direction: column;
		/* position: fixed; */
		padding: 40rpx 0;
		overflow-x: hidden;
	}

	.canvas-main {
		width: 670rpx;
		height: 990rpx;
		position: fixed;
		left: 750rpx;
	}

	.poster {
		width: 670rpx;
		height: 990rpx;
		border-radius: 10rpx;

	}

	.maskButton {
		color: white;
		font-size: 34rpx;
		line-height: 96rpx;
		width: 100%;
		height: 96rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: #13c46f;
		border-radius: 0;
		border: none;
	}

	.maskButton::after {
		border: none
	}

	.maskButton-hover {
		background-color: #0c8f49;
	}

	@keyframes showMask {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@keyframes dismissMask {
		0% {
			opacity: 1;
		}

		100% {
			opacity: 0;
		}
	}
</style>
