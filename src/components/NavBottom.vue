<!--yeanling
2017-10-12
ysshop-component-NavBottom
-->
<template>
  <div class="nav-bottom">
    <div v-for="nav in navs" class="nav" @click="clicked(nav.to,nav.name)">
      <div class="nav-content">
        <img v-if="godEye != nav.name" :src="nav.img" alt="">
        <img v-if="godEye === nav.name" :src="nav.imgOn" alt="">
        <p>{{nav.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '../store/index'

  export default {
    name: '',
    data () {
      return {
        name: '',
        navs: {
          home: {
            to: '/',
            img: 'http://owvtmdw1k.bkt.clouddn.com/nav/nav1.png',
            imgOn: 'http://owvtmdw1k.bkt.clouddn.com/nav/nav1-1.png',
            name: '首页'
          },
          around: {
            to: './around',
            img: 'http://owvtmdw1k.bkt.clouddn.com/nav/nav2.png',
            imgOn: 'http://owvtmdw1k.bkt.clouddn.com/nav/nav2-1.png',
            name: '附近'
          },
          recommend: {
            to: './recommend',
            img: 'http://owvtmdw1k.bkt.clouddn.com/nav/nav3.png',
            imgOn: 'http://owvtmdw1k.bkt.clouddn.com/nav/nav3-1.png',
            name: '推荐'
          },
          self: {
            to: './userinfo',
            img: 'http://owvtmdw1k.bkt.clouddn.com/nav/nav4.png',
            imgOn: 'http://owvtmdw1k.bkt.clouddn.com/nav/nav4-1.png',
            name: '我'
          }
        }
      }
    },
    methods: {
      clicked: function (to, newEye) {
        this.$emit('clicked')
        this.$router.push(to)
        store.commit('RefreshGodEye', newEye)
      }
    },
    computed: {
      godEye: function () {
        return store.state.godEye
      }
    }
  }
</script>

<style scoped>
  @import "../style/reset.css";

  .nav-bottom{
    width: 100%;
    height: 2.5rem;
    position: fixed;
    bottom: 0;

    z-index: 100;
  }
  .nav{
    width: 25%;
    height: 100%;

    float: left;

    background: #FFF;

    border-bottom: 1px solid #eee;

    overflow: hidden;
  }

  .nav-content{
    width: 100%;
    height: 100%;

    border-top:1px solid #eee;
  }

  .nav-content>img{
    height: 50%;

    margin:0 auto;
  }
  .nav-content>p{
    display: block;

    height: 50%;
    width: 100%;
    text-align: center;

    font-size: 30%;

    line-height: 100%;

    color: rgba(0,0,0,0.5);
  }
</style>
