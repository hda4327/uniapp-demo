import request from '@/network/request.js'

export function reqLotteryList(call){
	request('work/index/prize', call)
}

export function reqHaveNum(call, data){
	request('work/index/userInfo', call, data)
}


export function reqBrushNum(call, data){
	request('work/index/setBrushNum', call, data)
}


export function reqSavePrize(call, data){
	request('work/index/doSavePrize', call, data)
}


export function reqGotPrizeList(call){
	request('work/index/prizeList', call)
}

