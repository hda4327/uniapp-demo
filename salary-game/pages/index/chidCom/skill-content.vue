<template>
    <view class="skill-content">
		<view class="tip">擅长（多选）：</view>
		
		<!-- <template v-if="skillList"> -->
		<view class="item" v-for="(item, index) in skillList" :style="{marginLeft: index===0?'-12rpx':''}" :key="index" @click="selectSkill(index, item)"
		:class="{'active': activeIndexList.indexOf(index)>-1}"
		>{{item.name}} <img src="~@/static/img/selected.png" alt="" class="selected-item" v-show="activeIndexList.indexOf(index)>-1"></view>
		<!-- </template> -->
		

    </view>
</template>

<script>
	import {getSkillList} from '@/network'
    export default {
        name: "skill-content",
        data(){
			return{
				skillList: [],
				idList:[],
				valueList:[],
				activeIndexList:[],
				params:{
					skill_list:[
						
					],
					total:0
				}
			}
        },
		created() {
			getSkillList(this.getSkill)
		},
        components:{

        },
		methods:{
			getSkill(res) {
				this.skillList = res.data
			},
			selectSkill(i, item){
				
				if(this.idList.indexOf(item.id)===-1){
					this.idList.push(item.id)
					this.valueList.push(item.value)
					this.activeIndexList.push(i)
					this.addParam(item)
				}else{
					this.listDeleteVal(this.idList, item.id)
					this.listDeleteVal(this.valueList, item.value)
					this.listDeleteVal(this.activeIndexList, i)
					this.removeParam(item)
				}
				console.log(this.params)
			},
			listDeleteVal(list, val){
				let index = list.indexOf(val)
				list.splice(index, 1)
			},
			addParam(item){
				this.params['skill_list'].push({id:item.id, val:item.value})
				this.params['total'] = this.params['total'] + parseInt(item.value) 
			},
			removeParam(item){
				const skillList = this.params['skill_list']
				for(let i in skillList){
					if(skillList[i]['id'] === item.id){
						delete skillList[i]
						
					}
				}
				this.params['total'] = this.params['total'] - parseInt(item.value) 
			},
			
		}
    }
</script>

<style scoped>
.skill-content{
	display: flex;
	flex-wrap: wrap;
	padding: 30rpx 40rpx;
	justify-content: space-between;
	align-items: center;
	height: 160rpx;
	/* height: 250rpx; */
	
}
.tip{
	font-size:32rpx;
	font-weight:500;
	color:rgba(255,255,255,1);
}
.item{
	width:200rpx;
	height:65rpx;
	background:rgba(255,255,255,1);
	border-radius:33rpx;
	
	font-size:26rpx;
	font-weight:400;
	color:rgba(0,113,188,1);
	line-height: 65rpx;
	text-align: center;
	position: relative;
}
.active{
	background: rgba(109,196,255,1);
	color: rgba(255,255,255,1);
}
.selected-item{
	width: 31rpx;
	height: 31rpx;
	position: absolute;
	right: -12rpx;
	top: 17rpx;
}

</style>
