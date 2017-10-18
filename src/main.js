// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(Vuex) // 状态管理 Vuex
Vue.use(router) // 路由 vue-router
Vue.use(VueAwesomeSwiper) // 轮播图 AwesomeSwiper

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
}).$mount('#app')
