/*
* The cart module
* */

/* state */
let state = {
  date: '',
  orders: []
}

/* getters */
const getters = {
  orders: function (state) {
    return state.orders
  }
}

/* mutations */
const mutations = {}

/* actions */
const actions = {}

/* 暴露接口 */
export default {
  state,
  getters,
  mutations,
  actions
}
