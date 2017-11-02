<template>
  <div class="content">
    <transition name="fade">
      <LoadFull v-if="showLoad"></LoadFull>
    </transition>

    <iframe src="" title="activeTime" :src="this.src" :width="this.width" :height="this.height">
      <p>Your browser does not support iframes.</p>
    </iframe>
  </div>
</template>
<script>
//  import LoadTop from '../components/LoadTop.vue'
  import LoadFull from '../components/LoadFull.vue'
  export default {
    name: '',
    props: ['url'],
    data: function () {
      return {
        height: '',
        width: '',
        src: '',
        showLoad: true
      }
    },
    components: {LoadFull},
    directives: {},
    created: function () {
      this.height = window.screen.height
      this.width = window.screen.width
    },
    beforeMount: function () {
    },
    mounted: function () {
    },
    activated: function () {
      let website = this.$route.params.url.split(',').join('/') // 真实地址
      let iframe = document.getElementsByTagName('iframe')[0]
      let that = this // 当前vue对象
      iframe.onload = function () {
        that.showLoad = false
        setTimeout(() => { // 如果五秒之后还未加载完也强行关闭模态框
          that.showLoad = false
        }, 5000)
      }
      this.src = website
    },
    watch: {
    }
  }
</script>
<style lang="scss" scoped>
  @import '../style/reset';
  @import '../style/common';
  @import "../style/vue-animate.min.css";

  .content{
    iframe{
      border: none;
    }
  }
</style>
