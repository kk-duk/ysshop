<template>
  <div>
    <TopPannel>
      <p slot="des">附近商家</p>
    </TopPannel>
    <NavBottom class="nav-bottom"></NavBottom>
  </div>
</template>

<script>
  // 组件
  import TopPannel from '../components/TopPannel.vue'
  import NavBottom from '../components/NavBottom.vue'

  // 主体程序
  export default {
    name: '',
    data () {
      return {
        name: ''
      }
    },
    components: {
      NavBottom, TopPannel
    }
  }
</script>

<style scoped>
  @import "../style/reset.scss";
</style>
