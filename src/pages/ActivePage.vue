<template>
  <div class="content">
    <BtnBack></BtnBack>
    <LoadFull v-if="showLoad"></LoadFull>

    <iframe src="" title="activeTime" :src="this.src" :width="this.width" :height="this.height">
      <p>Your browser does not support iframes.</p>
    </iframe>
  </div>
</template>
<script>
  // 组件
//  import LoadTop from '../components/LoadTop.vue'
  import LoadFull from '../components/LoadFull.vue'
  import BtnBack from '../components/BtnBack.vue'

  // store 辅助方法
  import { mapGetters } from 'vuex'

  // 主体程序
  export default {
    name: '',
    props: [],
    data: function () {
      return {
        height: '',
        width: '',
        src: '',
        showLoad: true
      }
    },
    components: {BtnBack, LoadFull},
    directives: {},
    computed: {
      ...mapGetters(['Active'])
    },
    created: function () {
      this.height = window.screen.height
      this.width = window.screen.width
    },
    beforeMount: function () {
    },
    mounted: function () {
    },
    activated: function () {
      // 设置 iframe
      let website = this.Active[this.$route.params.type]
      console.log(website)
      let iframe = document.getElementsByTagName('iframe')[0]
      let that = this // 当前vue对象
      iframe.onload = function () {
        that.showLoad = false
        setTimeout(() => { // 如果五秒之后还未加载完也强行关闭模态框
          that.showLoad = false
        }, 6000)
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
