import Vue from 'vue'
import Router from 'vue-router'
import RouteModel from '../config/env'
import HomePage from '../pages/HomePage.vue'
import Around from '../pages/Around.vue'
import Recommend from '../pages/Recommend.vue'
import UserInfo from '../pages/UserInfo.vue'
import Cities from '../pages/Cities.vue'
import Search from '../pages/Search.vue'
import ShopHome from '../pages/shop/ShopHome.vue'

Vue.use(Router)

export default new Router({
  mode: RouteModel,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/around',
      name: 'Around',
      component: Around
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/userinfo',
      name: 'UserInfo',
      component: UserInfo
    },
    {
      path: '/cities',
      name: 'Cities',
      component: Cities
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/shopHome/:id',
      name: 'Shop',
      components: { default: ShopHome },
      props: { default: true }
    }
  ]
})
