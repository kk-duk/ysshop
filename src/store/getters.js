/*
* getters
* */

export default {
  // 获取客户端信息
  Evn: state => {
    return state.EVN
  },
  // 获取当前地理位置
  Region: state => {
    return state.REGION
  },
  // 获取当前所在Focus
  Focus: state => {
    return state.FOCUS
  },
  // 根据活动类型获取活动地址
  Active: state => {
    return state.ActiveUrl
  },
  // 获取周边商家
  Around: state => {
    return state.around
  }
}
