<template>
  <div class="content" :style="contentStyle" @touchstart="touchStart" @touchend="touchEnd">
    <p>loading</p>
  </div>
</template>
<script>
  export default {
    name: '',
    props: ['chroma'],
    data: function () {
      return {
        contentStyle: {
          width: '',
          height: '',
          background: 'rgba(0,0,0,0.' + this.opcity + ')'
        }
      }
    },
    computed: {
      opcity: function () {
        console.log('opcity')
        if (this.chroma) {
          console.log(this.chroma)
          if (this.chroma.isInteger()) {
            return (this.chroma > 9 || this.chroma) < 0 ? 4 : this.chroma
          } else {
            return 4
          }
        } else {
          console.log(this.chroma)
          return 4
        }
      }
    },
    methods: {
      touchStart: function (ele) {
        ele.preventDefault()
      },
      touchEnd: function (ele) {
        ele.preventDefault()
      }
    },
    created: function () {
      this.contentStyle.width = window.screen.width + 'px'
      this.contentStyle.height = window.screen.height + 'px'
    },
    mounted: function () {
      console.log('LoadFull')
//      console.log(this.chroma ? this.chroma : 4)
    },
    destroyed: function () {
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
  }
  p{
    /*@include font($headHeight, $lagerFont);*/
    line-height: 500px;
    font-size: 2rem;
    color: $mainHue;
  }
</style>
