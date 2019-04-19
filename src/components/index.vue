<template>
	<div class="hello">
		<keep-alive>
			<router-view />
		</keep-alive>
		<!-- <router-view v-if="!$router.meta.keepAlive"/> -->
		<!-- 底部的导航栏 -->
		<div class="bottomBar flex_around">
			<router-link :to="{name:'home'}">
				<div class="list">
					<img src="../../static/icon/barIcon/icon_syxz@2x.png" alt="">
					<div class="barName">
						首页
					</div>
				</div>
			</router-link>
			<router-link :to="{name:'find'}">
				<div class="list">
					<img src="../../static/icon/barIcon/icon_fx@2x.png" alt="">
					<div class="barName">
						发现
					</div>
				</div>
			</router-link>
			<router-link to="/shoppingCart">
				<div class="list">
					<img src="../../static/icon/barIcon/icon_gwc@2x.png" alt="">
					<div class="barName">
						购物车
					</div>
				</div>
			</router-link>
			<router-link to="/personalCenter">
				<div class="list">
					<img src="../../static/icon/barIcon/icon_wd@2x.png" alt="">
					<div class="barName">
						我的
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>
<style scoped="scoped" lang="less">
	.bottomBar {
		width: 7.5rem;
		height: 1rem;
		border-top: 0.01rem solid #d6d6d6;
		background-color: #FFFFFF;
		position: fixed;
		left: 0;
		bottom: 0;
		.list {
			font-size: 0.20rem;
			font-family: PingFang SC;
			color: rgba(28, 28, 28, 1);
			img {
				width: 0.36rem;
				height: 0.36rem;
			}
		}
	}
</style>