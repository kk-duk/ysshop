<template>
  <div class="top-pd btm-pd">
    <TopSearch></TopSearch>
    <Swiper class="swiper"></Swiper>

    <Category></Category>

    <PartingLine><!--分割线-->
      <span slot="description">精品推荐</span>
    </PartingLine>


    <PartingLine><!--分割线-->
      <span slot="description">新品出现</span>
    </PartingLine>
    <NavBottom class="nav-bottom"></NavBottom>
  </div>
</template>

<script>
  import NavBottom from '../components/NavBottom.vue'
  import TopSearch from '../components/TopSearch.vue'
  import Swiper from '../components/Swiper.vue'
  import PartingLine from '../components/PartingLine.vue'
  import Category from '../components/Category.vue'

  export default {
    name: 'HelloWorld',
    data () {
      return {
      }
    },
    components: {
      NavBottom, TopSearch, Swiper, PartingLine, Category
    },
    methods: {
    },
    computed: {
    },
    watch: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../style/reset.css";
  @import "../style/common.css";

  .swiper{
    width: 100%;
    height: 15rem;
    overflow: hidden;
  }
  .active{
    line-height: 2rem;
    color: rgba(0,0,0,0.6);

    font-size: 1rem;
  }
</style>
