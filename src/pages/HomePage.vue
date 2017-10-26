<template>
  <div class="top-pd btm-pd">
    <p @click.once="showCate()" v-model="text">{{godEye + location + this.ct}}</p>
    <TopSearch></TopSearch>
    <Swiper class="swiper"></Swiper>

    <transition-group name="fade">
      <Category v-if="cate" v-for="item in cates" :key="item"></Category>
    </transition-group>

    <PartingLine><!--分割线-->
      <span slot="description">精品推荐</span>
    </PartingLine>
    <BoutiqueTwo></BoutiqueTwo>
    <BoutiqueBig style="padding-bottom: 0;"></BoutiqueBig>

    <PartingLine><!--分割线-->
      <span slot="description">新品出现</span>
    </PartingLine>
    <NewBz></NewBz>

    <NavBottom class="nav-bottom"></NavBottom>
  </div>
</template>

<script>
  // import store from '../store/index'
  import { mapState } from 'vuex'
  import NavBottom from '../components/NavBottom.vue'
  import TopSearch from '../components/TopSearch.vue'
  import Swiper from '../components/Swiper.vue'
  import PartingLine from '../components/PartingLine.vue'
  import Category from '../components/Category.vue'
  import BoutiqueBig from '../components/BoutiqueBig.vue'
  import BoutiqueTwo from '../components/BoutiqueTwo.vue'
  import NewBz from '../components/NewBz.vue'

  export default {
    name: 'HelloWorld',
    data () {
      return {
        cate: false,
        cates: [1, 2],
        text: 'change'
      }
    },
    components: {
      NavBottom, TopSearch, Swiper, PartingLine, Category, BoutiqueBig, BoutiqueTwo, NewBz
    },
    methods: {
      showCate: function () {
        console.log(1)
        this.cate = !this.cate
        this.text = this.cate ? 'changed' : 'change'
      }
    },
    computed: {
      ...mapState([
        'location',
        'godEye'
      ]),
      ct: function () {
        return this.text
      }
    },
    mounted: function () {
      // console.log(1)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../style/reset.css";
  @import "../style/common.scss";

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
