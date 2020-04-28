<template>
    <view class="main">
		<view class="copy-btn btn" @click="copyBtn">保存到手机</view>
		<view class="again-btn btn" @click="againBtn">再测一次</view>
    </view>
</template>

<script>
    export default {
        name: "two-btn",
        data(){
			return {
				
			}
        },
        components:{

        },
		methods:{
			copyBtn(){
				this.$emit('copyBtn')
			},
			againBtn(){
				this.$emit('againBtn')
			},
			
		}
    }
</script>

<style scoped>
.main{
	display: flex;
	justify-content: space-between;
	padding: 0 40rpx;
}
.btn{
	width:300rpx;
	height:70rpx;
	border-radius:35px;
	text-align: center;
	font-size:32rpx;
	font-weight:400;
	color:rgba(255,255,255,1);
	line-height: 70rpx;
}
.copy-btn{
	background:rgba(9,187,7,1);
}
.again-btn{
	background:rgba(50,169,255,1);
	
}
</style>
