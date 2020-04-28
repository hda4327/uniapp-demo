<template>
	<div class="picker-item">
		<slot>
			<picker mode="selector" :range="pickList" :range-key="pickKey" @change="handlerChange">
				<view>
					<span class="title">{{pickTitle}}</span>
					<img class="pull-down" src="@/static/img/pull-down.png" />
				</view>
			</picker>
		</slot>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:{
			pickList:{
				default:()=>{
					return [{name:'0'}]
				},
				type: Array,
				// 验证数组里每个值都是object类型
				// validator:function (value) {
				// 	return value.length>0 && value.every((val)=>{return typeof val =='object'})
				// }
			},
			pickTitle:{
				default: '期望工作城市?',
				type: String
			},
			typeId:{
				default:()=>{
					return 0
				},
				type: Number
			}
			
		},
		computed:{
			pickKey(){
				if(this.pickList.length>0){
					return 'name'
				}
				return null
			}
		},
		methods:{
			handlerChange(res){
				this.$emit('putRes', {pick:res.detail, typeId:this.typeId})
			}
		}
		}
		
</script>

<style>
.picker-item{
	width:566rpx;
	height:80rpx;
	background:rgba(109,196,255,1);
	border-radius:40rpx;
	line-height: 80rpx;
	
	font-weight:400;
	color:rgba(255,255,255,1);
	position:relative
}
.pull-down{
	width: 26rpx;
	height: 15rpx;
	position: absolute;
	right: 51rpx;
	top:32rpx;
}
.title{
	font-weight: bold;
	font-size:30rpx;
	margin-left: 60rpx;
}

</style>
