<template>
  <div>
    <LoadFull chroma="5" v-if="load"></LoadFull>
    <TopBack>
      <p slot="title">商家名称</p>
    </TopBack>

    <div class="content">
      <ShopHead :scrollY="scroll"></ShopHead>
    </div>
  </div>
</template>
<script>
  // 组件加载
  import LoadFull from '../../components/LoadFull.vue'
  import TopBack from '../../components/TopBack.vue'
  import ShopHead from './components/ShopHead.vue'

  // 实用方法
  import { toTop } from '../../utils/bom'

  // store 辅助方法
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: '',
    props: ['id'],
    data: function () {
      return {
        load: true,
        scroll: ''
      }
    },
    computed: {
      ...mapGetters(['shopInfo'])
    },
    components: { TopBack, ShopHead, LoadFull },
    methods: {
      ...mapActions(['CurrentShop']),
      init: function () {
        // todo: actions, mutations, states of the shopHome page
      }
    },
    watch: {
      load: function (load) {
      }
    },
    activated: function () {
//      console.log(this.$route.params.id)
      // 回到页面顶部
      toTop()
      // 显示加载
      this.load = true
      // 记录当前所在商店ID
      this.CurrentShop(this.$route.params.id)
      // 超时强制移除加载幕布
      const that = this
      setTimeout(function () {
        that.load = false
      }, 1000)
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../style/reset";
  @import "../../style/common.scss";

  .content{
    @include pd;
  }
</style>
