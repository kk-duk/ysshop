/*
* 常用dom操作
* */
let DOC = window.document

// 禁止网页声音
export const noAudio = () => {
  for (let obj in DOC.getElementsByName('audio')) {
    if (obj) obj.pause()
    else return 0
  }
}

// 播放指定音频
export const vHorn = src => function () {
  if (DOC.getElementsByName('audio')) {
    for (let obj in DOC.getElementsByName('audio')) {
      obj.pause()
    }
    let ele = DOC.createElement('audio')
    ele.autoplay = true
    ele.src = src
    DOC.appendChild(ele)
  } else {
    let ele = DOC.createElement('audio')
    ele.autoplay = true
    ele.src = src
    DOC.appendChild(ele)
  }
}
