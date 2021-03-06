import {
	vuelifeHooks,
} from './base.js'

import {
	afterHooks,
	beforeHooks,
	registerRouter,
} from './concat.js'

import {
	fromatRoutes
} from './util.js'

import {
	err,
	warn
} from '../helpers/warn.js'

/**
 * 在uni-app没有注入生命周期时先直接代理相关生命周期数组
 * @param {Object} Router
 * @param {Object} key
 */
const defineProperty = function(Router, key, hookFun) {
	const vueOldHooks = vuelifeHooks[key];
	return new Proxy([], {
		get: (target, prop) => {
			return prop in target ? target[prop] : undefined
		},
		set: (target, prop, value) => {
			if (typeof value == 'function') {
				vueOldHooks.splice(0, 1, value);
				target[prop] = (to, from, next) => {
					hookFun(to, from, next, Router)
				};
			} else {
				target[prop] = value;
			}
			return true
		}
	})
}
/**
 * 重写掉H5端 uni-app原始存在的bug
 * 
 * @param {Object} Router
 */
const rewriteUniFun = function(Router) {
	if(Router.CONFIG.h5.rewriteFun===false){	//不需要重写
		return false
	}
	uni.reLaunch = function({
		url
	}) {
		if(url==='/'){
			 warn(`H5端 uni.reLaunch('/')时 默认被重写了! 你可以使用 this.$Router.replaceAll() 或者 uni.reLaunch('/'?xxx)`);
			 if(history.length>1){		//只有在有历史记录的时候才返回  不然直接返回首页
				 return Router.back();
			 }
			 return Router.replaceAll('/');
		}
		const path=url.match(/^[^?]+|(\/)/)[0];
		try{
			const query = {};
			url.replace(/([^?&]+)=([^?&]+)/g, function(s, v, k) {
				query[v] = decodeURIComponent(k);
				return k + '=' + v;
			});
			Router.replaceAll({
				path,
				query
			})
		}catch(e){
			err(`${url}解析失败了....  试试 this.$Router.replaceAll() 吧`);
		}
	}
	uni.navigateBack = function(delta) {
		let backLayer=delta;
		if (delta.constructor === Object) { //这种可能就只是uni-app自带的返回按钮,还有种可能就是开发者另类传递的
			backLayer = 1;
		}
		Router.back(backLayer,delta)
	}
}
/**
 * 拦截并注册vueRouter中的生命钩子，路由表解析
 * @param {Object} Router 
 * @param {vueRouter} vueRouter 
 * @param {VueComponent} vueVim
 */
export const init = function(Router, vueRouter, vueVim) {
	const CONFIG = Router.CONFIG.h5;
	vueRouter.afterHooks = defineProperty(Router, 'afterHooks', afterHooks);
	vueRouter.beforeHooks = defineProperty(Router, 'beforeHooks', beforeHooks);
	const objVueRoutes = fromatRoutes(vueRouter.options.routes, false, {}); //返回一个格式化好的routes 键值对的形式
	const objSelfRoutes = fromatRoutes(Router.CONFIG.routes, true, CONFIG);
	Router.vueRoutes = objVueRoutes; //挂载vue-routes到当前的路由下
	Router.selfRoutes = { ...Router.selfRoutes || {},
		...objSelfRoutes
	}; //挂载self-routes到当前路由下
	Router.$route = vueRouter; //挂载vue-router到$route
	rewriteUniFun(Router); //重新掉uniapp上的一些有异常的方法
	registerRouter(Router, vueRouter, CONFIG.vueRouterDev);
}
