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
  }
}
