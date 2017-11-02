import {obtain} from './axios' // the package of axios
import * as bill from './atm' // the descriptions of all the interface

export default {
  default: function () {
    console.log('there is apis!')
  }
}

/* 获取用户信息 */
export const getUserInfo = userId => {
  obtain(bill.GET_USERINFO, userId)
}
/* 获取商店信息 */
export const getShopInfo = shopId => {
  obtain(bill.GET_SHOPINFO, shopId)
}
