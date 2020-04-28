import request from '@/network/request.js'

export function getKey(call, data){
	request('work/index/onLogin', call, data)
}
export function reqPhoneNum(call, data){
	request('work/index/getPhone', call, data)
}
export function saveUserInfo(call, data){
	request('work/index/doUserInfo', call, data)
}