<template>
  <div>
    <TopBack>
      <p slot="title">商家名称</p>
    </TopBack>

    <div class="content">
      <ShopHead></ShopHead>
    </div>
  </div>
</template>
<script>
  import TopBack from '../../components/TopBack.vue'
  import ShopHead from './components/ShopHead.vue'
  export default {
    name: '',
    props: ['id'],
    data: function () {
      return {}
    },
    components: { TopBack, ShopHead },
    mounted: function () {
      this.$store.commit('CurrentShop', this.$route.params.id)
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../style/reset.css";
  @import "../../style/common.scss";

  .content{
    @include pd;
  }
</style>
