import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
	routes: [
		//路由列表
		{
			path: '/',
			component: () =>
				import('@/components/index'),
			meta: {
				name: "index"
			},
			// 个人中心
			children: [
				// 默认进来执行的是首页
				{
					path: '/',
					name: 'home',
					component: () =>
						import('@/components/index/index'),
					meta: {
						name: "首页",
						keepAlive:true,
					},
				},
				//发现
				{
					path: '/find',
					name: 'find',
					component: () =>
						import('@/components/find/index'),
					meta: {
						name: "发现",
						keepAlive:true,
					},
				},
				//购物车
				{
					path: '/shoppingCart',
					name: 'shoppingCart',
					component: () =>
						import('@/components/shoppingCart/index'),
					meta: {
						name: "购物车",
						keepAlive:true,
					},
				},
				//个人中心
				{
					path: '/personalCenter',
					name: 'personalCenter',
					component: () =>
						import('@/components/personalCenter/index'),
					meta: {
						name: "个人中心",
						keepAlive:true,//
					},
				},
			]
		},
		{
			path: '/personalCenter/personalData',
			name: 'personalData',
			component: () =>
				import('@/components/personalCenter/personalData'),
			meta: {
				name: "个人资料"
			},
		},
		//个人资料里面的修改昵称
		{
			path: '/personalCenter/modifyTheNickname',
			name: 'modifyTheNickname',
			component: () =>
				import('@/components/personalCenter/modifyTheNickname'),
			meta: {
				name: "修改昵称"
			},
		},
		//个人简介
		{
			path: '/personalCenter/personalProfile',
			name: 'personalProfile',
			component: () =>
				import('@/components/personalCenter/personalProfile'),
			meta: {
				name: "个人简介"
			},
		},
		//地址管理
		{
			path: '/personalCenter/addressManagement',
			name: 'addressManagement',
			component: () =>
				import('@/components/personalCenter/addressManagement'),
			meta: {
				name: "地址管理"
			},
		},
		//新增地址
		{
			path: '/personalCenter/theNewAddress',
			name: 'theNewAddress',
			component: () =>
				import('@/components/personalCenter/theNewAddress'),
			meta: {
				name: "新增地址"
			},
		},
		//修改地址
		{
			path: '/personalCenter/modificationAddress',
			name: 'modificationAddress',
			component: () =>
				import('@/components/personalCenter/modificationAddress'),
			meta: {
				name: "修改地址"
			},
		},
		// 会员卡
		{
			path: '/personalCenter/clubCart',
			name: 'clubCart',
			component: () =>
				import('@/components/personalCenter/clubCart'),
			meta: {
				name: "会员卡"
			},
		},
		//银行卡
		{
			path: '/personalCenter/bankCard',
			name: 'bankCard',
			component: () =>
				import('@/components/personalCenter/bankCard'),
			meta: {
				name: "银行卡"
			},
		},
		{
			path: '/personalCenter/addBandCart',
			name: 'addBandCart',
			component: () =>
				import('@/components/personalCenter/addBandCart'),
			meta: {
				name: "添加银行卡"
			},
		},

	]
})
