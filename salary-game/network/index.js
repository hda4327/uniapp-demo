import request from '@/network/request.js'

export function getCityList(call){
	request('work/index/Location', call)
}


export function getWorkList(call){
	request('work/index/Position', call)
}


export function getPostList(call){
	request('work/index/Qualification', call)
}


export function getEducationList(call){
	request('work/index/Education', call)
}


export function getExperienceList(call){
	request('work/index/Year', call)
}


export function getSkillList(call){
	request('work/index/Skill', call)
}


export function saveWork(call, data){
	request('work/index/saveWork', call, data)
}

export function getConfig(call){
	request('work/index/getConfig', call)
}

