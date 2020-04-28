<template>
	<view class="main">
		<div class="outer-bg">
			<div class="inner-bg">
				<!-- 职称选择 -->
				<div class="pick-item">
					<picker-box @putRes="getPickVal" :typeId="0" ref="pickText1">
						<div @click="openLevel" class="city-title">{{problemList[0]}}</div>
						
						<img class="pull-down" src="@/static/img/pull-down.png"/>
					</picker-box>
				</div>
				<div class="pick-item">
					<picker-box @putRes="getPickVal" :pickList="workList" :pickTitle="problemList[1]" :typeId="1"></picker-box>
				</div>
				<div class="pick-item">
					<picker-box @putRes="getPickVal" :pickList="postList" :pickTitle="problemList[2]" :typeId="2"></picker-box>
				</div>
				<div class="tip">
					*除医生外可填写无证
				</div>
				<div class="pick-item">
					<picker-box @putRes="getPickVal" :pickList="educationList" :pickTitle="problemList[3]" :typeId="3"></picker-box>
				</div>
				<div class="pick-item">
					<picker-box @putRes="getPickVal" :pickList="experienceList" :pickTitle="problemList[4]" :typeId="4"></picker-box>
				</div>
			</div>

		</div>
		<w-picker mode="linkage" :level="2" :value="['10000','10000']" @confirm="onConfirm" ref="linkage" :linkList="cityList"
		 themeColor="#f00"></w-picker>
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
	import PickerBox from "@/components/picker/PickerBox.vue";

	import {
		getCityList,
		getPostList,
		getEducationList,
		getExperienceList,
		getSkillList,
		getWorkList
	} from '@/network'

	export default {
		name: "picker-content",
		data() {
			return {
				cityList: [],
				workList: [],
				postList: [],
				educationList: [],
				experienceList: [],
				problemList: [
						'工作城市',
						'工作岗位',
						'职称状况',
						'学历情况',
						'工作年限',
					],
				pickParams: {
					location_value: null,
					position_value: null,
					qualification_value: null,
					year_value: null,
					education_value: null,
					// skill_value: null,
				}  ,//val对象
				typeStrList: ['location_value', 'position_value', 'qualification_value', 'education_value', 'year_value'],
				
			}
		},
		props: {
			
			
		},
		components: {
			wPicker,
			PickerBox,
		},
		
		created() {
			getCityList(this.getCity)
			getPostList(this.getPost)
			getEducationList(this.getEducation)
			getExperienceList(this.getExperience)
			getWorkList(this.getWork)
			
		},
		methods: {

			getCity(res) {
				this.cityList = res.data

			},
			getPost(res) {
				this.postList = res.data
				// for(let i in this.postList){
				// 	this.proportionList[i] = this.postList[i].proportion
				// 	this.tipList[i] = this.postList[i].tip
				// }
			},
			getWork(res) {
				this.workList = res.data
			},
			getEducation(res) {
				this.educationList = res.data
			},

			getExperience(res) {
				this.experienceList = res.data
			},

			getPickVal(pickRes) {
				let id = pickRes.pick.value  //选择返回的选项索引值
				let typeId = pickRes.typeId  //各个选项的索引，例如 期望工作是索引0，从事工作为索引1
				let selectList = [this.cityList, this.workList,this.postList, this.educationList, this.experienceList]
				// this.problemList[typeId] = pickRes.pick.
				let selectOption = selectList[typeId][id]
				let selectValue = selectOption.value //此为选项的value值，也是要返回后端的value值
				let selectText = selectOption.name //此为选项的name值，也是要返回后端的name值
				
				// console.log('typeStrList[typeId]',this.typeStrList[typeId])
				// console.log('typeId', typeId)
				
				// 给各参数设置value值
				this.$set(this.pickParams, this.typeStrList[typeId], selectValue)  //给相应参数设置value值
				this.$set(this.problemList, typeId, selectText)
				
				// if(typeId === 2){
				// 	this.proportion = this.proportionList[id]
				// 	this.tip = this.tipList[id]
				// 	uni.setStorageSync('proportion', this.proportion)
				// 	uni.setStorageSync('tip', this.tip)
				// }
				if(typeId === 1){
					uni.setStorageSync('postTip', selectText)
				}
				// console.log(this.pickParams)
			},

			openLevel() {
				this.$refs.linkage.show();
			},
			onConfirm(e) {
				// e 确认后选中的数据
				// this.pickerText = e.checkArr
				e.checkArr.splice(2, 1)
				this.$set(this.problemList, 0, e.checkArr.join('/'))
				this.$set(this.pickParams, this.typeStrList[0], e.checkValue[1])
				uni.setStorageSync('location_id', e.checkCode)
			},
		
		},
		deactivated() {
			console.log(12423)
		},
	}
</script>

<style scoped>
	.main{
		margin-top: 422rpx;
	}
	.outer-bg {
		/* height: 690rpx; */
		height: 573rpx;
		width: 650rpx;
		margin: 0 auto;
		padding: 20rpx;
		background:rgba(255,255,255,0.5);
		border-radius:30rpx;
	}

	.inner-bg {
		background: rgba(255, 255, 255, 1);
		border-radius: 20rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		z-index: 9;
	}

	.tip {
		font-size: 22rpx;
		font-weight: 400;
		color: rgba(255, 0, 0, 1);
	}
	.pick-item{
		margin-top: 20rpx;
	}
	.pick-item:first-child{
		margin-top: 30rpx;
	}
	
	.pull-down{
		width: 26rpx;
		height: 15rpx;
		position: absolute;
		right: 51rpx;
		top:32rpx
	}
	.city-title{
		margin-left: 60rpx;
		font-weight: bold;
		font-size:30rpx;
	}
</style>
