<template>
	<web-view :src="src"></web-view>
</template>

<script>
	export default{
		data(){
			return{
				src:''
			}
		},
		onLoad() {
			this.src = uni.getStorageSync('ad_url')
		}
	}
</script>

<style>
</style>
