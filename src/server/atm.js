/*
* The descriptions of all the backend interface
* */

/* The interfaces of ourselves app */
export const GET_USERINFO = 'userinfo' // 获取用户信息的接口 params: userid(用户ID)
export const GET_SHOPINFO = 'shopinfo' // 获取商店信息的接口 params: shopid(商店ID)

/* The interfaces of wechat */
export const WX_USERINFO = 'wxuserinfo' // 获取微信用户的信息 params: code(oauth2授权code)
