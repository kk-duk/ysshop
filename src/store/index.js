import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  godEye: '首页',
  swiper: [
    'http://www.bravo-buy.com/upload/img/thumb_1507629400001.jpg',
    'http://www.bravo-buy.com/upload/img/thumb_1507629504331.jpg',
    'http://www.bravo-buy.com/upload/img/thumb_1507629452746.jpg',
    'http://www.bravo-buy.com/upload/img/thumb_1508291497747.jpg'
  ],
  items: [
    {img: 'http://www.bravo-buy.com/static/image/homePage/meun1.png', des: '美食'},
    {img: 'http://www.bravo-buy.com/static/image/homePage/meun2.png', des: '休闲娱乐'},
    {img: 'http://www.bravo-buy.com/static/image/homePage/meun3.png', des: '酒店'},
    {img: 'http://www.bravo-buy.com/static/image/homePage/meun5.png', des: '家居'},
    {img: 'http://www.bravo-buy.com/static/image/homePage/meun2.png', des: '休闲娱乐'},
    {img: 'http://www.bravo-buy.com/static/image/homePage/meun3.png', des: '酒店'},
    {img: 'http://www.bravo-buy.com/static/image/homePage/meun5.png', des: '家居'},
    {img: 'http://www.bravo-buy.com/static/image/homePage/meun6.png', des: '外卖'}
  ]
}
export default new Vuex.Store({
  state: state,
  actions: {},
  mutations: {
    RefreshGodEye: (state, newEye) => {
      state.godEye = newEye
    }
  }
})
