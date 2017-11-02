import * as types from './types'

export default {

  // 更新当前客户端环境记录
  [types.FRESHEN_EVN] (state, params) {
    // console.log('setEvn')
    state.EVN = params
  },
  // 更新当前页记录
  [types.FRESHEN_FOCUS] (state, params) {
    // console.log('setFocus')
    state.FOCUS = params
  },
  // 更新当前地理位置记录
  [types.FRESHEN_REGION] (state, params) {
    // console.log('setRegion')
    state.REGION = params
  },
  // 更新当前所处商店记录
  [types.FRESHEN_CURRENT_SHOP] (state, params) {
    // console.log('setCurrentShop')
    state.CurrentShop = params
  }
}
