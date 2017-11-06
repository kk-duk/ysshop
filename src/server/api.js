/*
* All the backend interfaces had already finished
* */
// todo 所有方法还处于半成品状态
import {obtain} from './axios' // the package of axios
import * as bill from './atm' // the descriptions of all the interface

/*  */

/* 默认接口 */
export default {
  default: function () {
    console.log('there is apis!')
  }
}

/* -----------------------------app接口请求方法----------------------------- */

/* 获取用户信息 */
export const getUserInfo = userId => {
  obtain(bill.GET_USERINFO, userId)
}
/* 获取商店信息 */
export const getShopInfo = shopId => {
  obtain(bill.GET_SHOPINFO, shopId)
}

/* -----------------------------微信接口请求方法----------------------------- */

/* 获取用户信息 */
export const wxUserInfo = code => {
  obtain(bill.WX_USERINFO, code).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
}
