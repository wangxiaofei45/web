import Vue from 'vue'
import axios from 'axios'
import Util from './utils.js'

// 用户注册
Vue.prototype.$userRegister = Util.apiUrl+"user/register"//用户注册
Vue.prototype.$userLogin = Util.apiUrl+"user/login"//用户登录

// 我的
Vue.prototype.$userGetUser = Util.apiUrl+"user/getUser"//获取用户的信息
Vue.prototype.$userGetLiveCard = Util.apiUrl+"user/getLiveCard"//我拍的会员卡会员卡列表
Vue.prototype.$userGetUserGoods = Util.apiUrl+"user/getUserGoods"//我拍 关注的商品
Vue.prototype.$userGetUserStore = Util.apiUrl+"user/getUserStore"//我拍 关注的店铺
Vue.prototype.$userCancelGoods = Util.apiUrl+"user/cancelGoods"//关注的商品取消关注
Vue.prototype.$userCancelStore = Util.apiUrl+"user/cancelStore"//关注的店铺取消关注
Vue.prototype.$userEditUser = Util.apiUrl+"user/editUser"//我的个人中心修改个人资料
Vue.prototype.$userMyBank = Util.apiUrl+"user/myBank"//我的 银行卡列表
Vue.prototype.$userAddBankCard = Util.apiUrl+"user/addBankCard"//我的 银行卡添加银行卡
Vue.prototype.$userHelpCenter = Util.apiUrl+"user/helpCenter"//我的 帮助中心
Vue.prototype.$userGetAddress = Util.apiUrl+"user/getAddress"//我的 地址列表
Vue.prototype.$userEditAddress = Util.apiUrl+"user/editAddress"//我的 编辑地址
Vue.prototype.$userDelAddress = Util.apiUrl+"user/delAddress"//我的 删除地址
Vue.prototype.$userAddAddress = Util.apiUrl+"user/addAddress"//我的 添加地址


Vue.prototype.$getData = getData;
export function getData() {
	let date = new Date();
	let Y = date.getFullYear() + '-';
	let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
	let H = date.getHours() + ":";
	let m = date.getMinutes() + ':';
	var s = date.getSeconds();
	return Y + M + D + H + m + s;
};
//格式化时间戳
Vue.prototype.$formatTimestamp = formatTimestamp;
export function formatTimestamp(sj) {
	var now = new Date(sj * 1000);
	var year = now.getFullYear();
	var month = now.getMonth() + 1;
	var date = now.getDate();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	return year + "-" + month + "-" + date + "   " + hour + ":" + minute + ":" + second;
}
Vue.prototype.$formatTimes = formatTimes;
export function formatTimes(sj) {
	var now = new Date(sj * 1000);
	var year = now.getFullYear();
	var month = now.getMonth() + 1;
	var date = now.getDate();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	return year + "-" + month + "-" + date;
}
// 深copy
Vue.prototype.$coppyArray = coppyArray;
export function coppyArray(arr) {
	return arr.map((e) => {
		if(typeof e === 'object') {
			return Object.assign({}, e);
		} else {
			return e;
		}
	})
};
Vue.prototype.$objDeepCopy = objDeepCopy;
export function objDeepCopy(source) {
	var sourceCopy = {};
	for(var item in source) sourceCopy[item] = typeof source[item] === 'object' ? objDeepCopy(source[item]) : source[item];
	return sourceCopy;
}
// 封装全局的post
Vue.prototype.$post = post;
export function post(url, data = {}) {
	let postData = data;
	return new Promise((resolve, reject) => {
		axios({
			method: 'post',
			url: url,
			data: postData,
		}).then(response => {
			resolve(response.data);
		}), err => {
			reject(err);
		};
	})
}
// 封装全局的get
Vue.prototype.$get = get;
export function get(url, data = {}) {
	return new Promise((resolve, reject) => {
		axios.get(url, {
			params: data
		}).then(function(response) {
			resolve(response.data);
		}).catch(function(response) {
			console.log(response); //发生错误时执行的代码
		})
	})
}
//全局的删除的方法
Vue.prototype.$delete = deletes;
export function deletes(url, data = {}) {
	this.$confirm('确定删除?', '提示', {
		confirmButtonText: '确定',
		cancelButtonText: '取消',
		type: 'warning'
	}).then(() => {
		//render
		this.$post(url, data).then((res) => {
			let data = res;
			if(data.status_code == 0) {
				this.$message({
					type: 'success',
					message: data.message,
				});
				this.ajaxjson();
			} else {
				this.$message({
					type: 'error',
					message: data.message,
				});
			}
		});
	}).catch(() => {
		this.$message({
			type: 'info',
			message: '已取消删除'
		});
	});
}

axios.interceptors.request.use(
	config => {
// 		var token = getToken();
// 		if(token) { // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
// 			config.headers.Authorization = "Bearer " + token;
// 		} else if(config.url === 'http://api_dev.yilianerptest.com/api/common/resetPassword') {
// 			console.log("不添加token");
// 		} else if(config.url === 'http://api_dev.yilianerptest.com/api/common/send') {
// 			console.log("不添加token");
// 		} else {
// 			//判断token不存在跳转到登录页面
// 			router.replace({
// 				path: "/login",
// 			});
// 		}
		// 模拟的数据
		config.headers = {'Content-Type': 'application/x-www-form-urlencoded'}
		return config;
	},
	err => {
		return Promise.reject(err);
	});
//添加响应拦截器
axios.interceptors.response.use((response) => {
	return response;
}, function(error) {
	if(error.response.status == 401) {
		let a = confirm('您的登录已过期,请重新登录!');
		if(a){
			store.dispatch('LogOut').then(() => {
				location.reload();
			})
		}else{
//			console.log("取消!")
		}
	}
	return Promise.reject(error);
})