import {DefaultCity} from '../config/env'

export default {
  // 确定当前客户端环境
  EvnInit: function ({commit}, params) {
    // console.log('EvnInit' + params)
    commit('FRESHEN_EVN', params)
  },
  // 主页初始化
  HomeInit: function ({commit}, params = DefaultCity.name) {
    // console.log('HomeInit,params:' + params)
  },
  // 所在页焦点更改
  FocusChange: function ({commit}, params) {
    // console.log('action: FocusChange,params:' + params)
    commit('FRESHEN_FOCUS', params)
  },
  // 更改地理位置
  RegionChange: function ({commit}, params) {
    // console.log('action: LocationChange,params:' + params)
    commit('FRESHEN_REGION', params)
  },
  // 更改当前所处商店记录
  CurrentShop: function ({commit}, params) {
    commit('FRESHEN_CURRENT_SHOP', params)
  }
}
