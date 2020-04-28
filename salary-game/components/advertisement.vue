<template>
    <view class="main" :style="{border: hasBorder?'6rpx solid rgba(109,196,255,1)': '', width: hasBorder?'738rpx':'100%'}" @click="toOtherPage">
<image :src="bg" alt="" class="advertisement-img">	
			</image>	
    </view>
</template>

<script>
    export default {
        name: "advertisement",
        data(){
			return {}
        },
		props:{
			bg:{
				default(){
					return '../static/img/index-ad.png'
				},
				type: String
			},
			hasBorder:{
				default: true,
				type:Boolean
			},
			adUrl:{
				default(){
					return ''
				},
				type: String
			}
		},
        components:{

        },
		methods:{
			toOtherPage(){
				this.$emit('toAdUrl')
				
			}
		}
		
    }
</script>

<style scoped>
.main{
	width:738rpx;
	height:125rpx;
	top: 0;
	left: 0;
}
.main>image{
	width: 750rpx;
	height: 125rpx;
}
</style>
