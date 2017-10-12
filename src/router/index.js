import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import Around from '../pages/Around.vue'
import Recommend from '../pages/Recommend.vue'
import UserInfo from '../pages/UserInfo.vue'
import Cities from '../pages/Cities.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
      children: [
        {
          path: 'cities',
          name: 'Cities',
          component: Cities
        }
      ]
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
    }
  ]
})
