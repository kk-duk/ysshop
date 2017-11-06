/*
* 常用bom操作
* */

// 各个应用浏览器环境标识码
const WX_BROWSER = 'MicroMessenger' // 微信浏览器标识
const ALI_BROWSER = '' // 支付宝浏览器标识
const QQ_BROWSER = '' // QQ浏览器标识
const WB_BROWSER = '' // 微博浏览器标识

// 获取当前应用环境
export default function currentEvn () {
  if (window) {
    let agent = window.navigator.userAgent.toLocaleLowerCase()
    if (agent.match() === WX_BROWSER) {
      return 'wechat'
    } else if (agent.match() === ALI_BROWSER) {
      return 'alipay'
    } else if (agent.match() === QQ_BROWSER) {
      return 'qq'
    } else if (agent.match() === WB_BROWSER) {
      return 'weibo'
    } else {
      return 'default'
    }
  } else {
    return {'evn': 'native'}
  }
}
// 回到页面顶部
export const toTop = function () {
  window.scrollTo(0, 0)
}

// 获取当前url
export const currentUrl = function () {
  return window.location.href
}
