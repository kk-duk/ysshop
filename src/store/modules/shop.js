/*
* shopHome store
* */
import {FRESHEN_SHOP} from '../types' // mutation-type
import {getShopInfo} from '../../server/api' // 店家信息请求方法--server

// state
let state = {
  shopInfo: {}
}
// getters
const getters = {

}
// mutations
const mutations = {
  [FRESHEN_SHOP] (state, params) {
    state.shopInfo = params
  }
}
// actions
const actions = {
  initShop: async function () {
    await getShopInfo().then(function ({commit}, response) {
      console.log('success')
      commit('FRESHEN_SHOP', response)
    }).catch(function (e) {
      console.log(e)
    })
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
