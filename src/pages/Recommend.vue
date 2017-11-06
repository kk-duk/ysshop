<template>
  <div class="btm-pd">
    <!--top pannel-->
    <TopPannel>
      <p slot="des">推荐</p>
    </TopPannel>

    <!--推荐店铺-->
    <NewBz :source="this.source"></NewBz>

    <!--底部导航-->
    <NavBottom class="nav-bottom"></NavBottom>
  </div>
</template>

<script>
  // 组件
  import TopPannel from '../components/TopPannel.vue'
  import NavBottom from '../components/NavBottom.vue'
  import NewBz from '../components/NewBz.vue'

  // store辅助方法
//  import {mapGetters} from 'vuex'

  // 实用方法

  // 主体程序
  export default {
    name: '',
    data () {
      return {
        name: ''
      }
    },
    components: {
      TopPannel, NewBz, NavBottom
    },
    computed: {
      source: function () {
        return this.$store.state.bzs
      }
    },
    methods: {
      more: function () {
      }
    },
    activated: function () {
    }
  }
</script>

<style lang="scss" scoped>
  @import "../style/reset.scss";
  @import "../style/common.scss";
</style>
