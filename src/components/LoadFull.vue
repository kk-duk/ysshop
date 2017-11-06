<template>
  <div class="content" :style="contentStyle" @touchstart="touchStart" @touchend="touchEnd">
    <div>
      <img src="../assets/load.png" alt="">
    </div>
  </div>
</template>
<script>
  // 主体程序
  export default {
    name: '',
    props: ['chroma'],
    data: function () {
      return {
        contentStyle: {
          width: '',
          height: '',
          background: 'rgba(0,0,0,0.5)'
        }
      }
    },
    computed: {
    },
    methods: {
      touchStart: function (ele) {
        ele.preventDefault()
      },
      touchEnd: function (ele) {
      }
    },
    created: function () {
      this.contentStyle.width = window.screen.width + 'px'
      this.contentStyle.height = window.screen.height + 'px'
    },
    mounted: function () {
//      console.log('LoadFull')
    },
    activated: function () {
//      this.contentStyle.background = 'rgba(0,0,0,0.' + this.chroma + ')' // 激活组件将再次计算背景透明度
      // todo 父子组件之间 activated 似乎不具有传递性
    },
    destroyed: function () {
//      console.log('destroyed')
    }
  }
</script>
<style lang="scss" scoped>
  @import "../style/reset";
  @import "../style/common";

  .content{
    position: fixed;
    top: 0;
    left: 0;
    z-index: $level3;
    div{
      img{
        width: 10%;
        position: fixed;
        top: 50%;
        left: 50%;
        z-index: $level3;
        margin: -5% 0 0 -5%;
        /*height: 100%;*/
        animation: rotate 2s linear infinite;
        transform-origin: 50% 50%;
      }
    }
  }

  @keyframes rotate {
    0%{
      transform: rotate(0deg)
    }
    25%{
      transform: rotate(90deg);
    }
    50%{
      transform: rotate(180deg);
    }
    75%{
      transform: rotate(270deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
</style>
