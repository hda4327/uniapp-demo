const baseUrl = 'https://ygt.linyakq.com/api/'
export default function request(url, callback, data, method='POST'){
	uni.request({
	    url: baseUrl + url, 
		method,
	    data: data,
	    success: res =>{
			if(callback){
				callback(res.data)
			}
			
		},
		fail(err) {
			console.log(err)
		}
	})
}
