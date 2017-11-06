import Vue from 'vue'
import Vuex from 'vuex'

/* 主进程各类状态 */
import state from './states'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

/* 子模块 */
import shop from './modules/shop' // 商店状态管理模块
import cart from './modules/cart' // 购物车状态管理模块

Vue.use(Vuex)

/* 暴露接口 */
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    shop: shop,
    cart: cart
  }
})
