/*
* 常用bom操作
* */
// 禁止页面滚动
export const noScroll = function () {
  window.onscroll = function () {
    window.scrollTo(0, 0)
  }
}

// 允许页面滚动
export const letScroll = function () {
  window.onscroll = function () {
    return 0
  }
}

// 回到页面顶部
export const toTop = function () {
  window.scrollTo(0, 0)
}

// 获取当前url
export const currentUrl = function () {
  return window.location
}
