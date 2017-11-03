import wx from 'jweixin' // 微信 js-sdk
import {setStore} from './store' // 本地数据服务
import {currentUrl} from './bom' // 获取当前 url
import {} from '../server/api' // 网络服务

// 获取oauth2 授权code
let code = ''
try {
  console.log(currentUrl())
  code = currentUrl().split('?')[1].split('=')[1]
} catch (e) {
  code = ''
}

// 获取用户的微信身份信息
export const getWxInfo = () => {
  if (!code) {
    console.log('expect "code"')
  } else {
    setStore('user', 'userinfo')
  }
}

// 配置微信
export const wxConfig = () => {
  console.log(wx)
}
