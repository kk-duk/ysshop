/*
* 本地存储
* */

// 存储值
export const setStore = (name, value) => {
  if (!name) return 0
  localStorage.setItem(name, value)
}

// 获取值
export const getStore = name => {
  if (!name) return 0
  return localStorage.getItem(name)
}

// 清空本地存储
export const clearStore = () => {
  localStorage.clear()
}
