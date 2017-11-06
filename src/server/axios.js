/*
* The package of network servers
* */
import vue from 'vue'
import axios from 'axios'
import vueAxios from 'vue-axios'
import {AppApi, AssetsApi} from '../config/env'

vue.use(vueAxios, axios)

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.app = AppApi
axios.defaults.assets = AssetsApi

export function obtain (url, params, type) {
  // 检查参数
  if (!url || !params || !type) return {err: 'the wrong params of obtain!'}
  // 确定请求地址
  let server = AppApi
  if (type === 'app') server = AppApi + url
  else if (type === 'asset') server = AssetsApi + url
  else return {err: 'the wrong type of obtain!'}
  // 发起请求
  return new Promise((resolve, reject) => {
    axios.post(server, params)
      .then(response => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

/* 默认接口，说明 */
export default {
  info: 'there is axios.js'
}
