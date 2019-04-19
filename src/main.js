import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import Calendar from 'vue2-datepick';
import 'element-ui/lib/theme-chalk/index.css'
import './style/base.css'//定义基础的样式表
import './utils/request.js'
Vue.config.productionTip = false
Vue.use(Calendar);
Vue.use(Mint);
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// 跳转路由之前的拦截
router.beforeEach((to,from,next)=>{
	//跳转的时候修改title
	if(to.meta.name){
		let title = to.meta.name ? to.meta.name : 'web';
  	window.document.title = title;
	}
  next()
})
router.afterEach(() => {

})