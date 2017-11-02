<template>
  <div class="top-pd btm-pd">
    <!--<p @click="toActive">active</p>-->
    <Active v-if="active" url="http://www.阿里巴巴.com"></Active>

    <!--顶部搜索-->
    <TopSearch :location="Region.name">
      <img src="../assets/logo.png" alt="" slot="more">
    </TopSearch>

    <!--轮播-->
    <Swiper class="swiper" :source="this.swiperSrc" mode="flip"></Swiper>

    <!--分类-->
    <Category></Category>

    <!--精品推荐-->
    <PartingLine>
      <span slot="description">精品推荐</span>
    </PartingLine>

    <div style="padding: 10px;"> <!--主推荐，twoBoutique-->
      <div v-for="item in boutiqueTwo">
        <div class="box" @click="toShop(item.one.shopid)">
          <img :src="item.one.img" :alt="item.one.des">
          <p class="oneline-text__center">{{item.one.des}}</p>
        </div>
        <div class="box" @click="toShop(item.two.shopid)">
          <img :src="item.two.img" :alt="item.two.des">
          <p class="oneline-text__center">{{item.two.des}}</p>
        </div>
        <div style="clear: both;"></div>
      </div>
    </div>

    <div style="padding: 10px;"> <!--大幅推荐 boutiqueBig-->
      <div class="content" v-for="item in boutique" :key="item.shopid" @click="toShop(item.shopid)">
        <img :src="item.img" alt="">
        <p class="oneline-text__center">{{item.des}}</p>
      </div>
    </div>

    <!--新品出现-->
    <PartingLine>
      <span slot="description">新品出现</span>
    </PartingLine>

    <NewBz :source="this.newShopSource"></NewBz>

    <!--底部导航-->
    <NavBottom></NavBottom>
  </div>
</template>

<script>
  // 组件
  import Active from '../components/Active.vue'
  import NavBottom from '../components/NavBottom.vue'
  import TopSearch from '../components/TopSearch.vue'
  import Swiper from '../components/Swiper.vue'
  import PartingLine from '../components/PartingLine.vue'
  import Category from '../components/Category.vue'
  import NewBz from '../components/NewBz.vue'

  // store 辅助方法
  import { mapGetters, mapActions } from 'vuex'

  // 实用方法

  // 主体程序
  export default {
    name: 'HomePage',
    data () {
      return {
        active: false,
        boutiqueTwo: [
          {
            one: {img: 'http://www.bravo-buy.com/upload/img/thumb_1507625120538.jpg', des: '爱生活更爱牛排', shopid: 'sp_07'},
            two: {img: 'http://www.bravo-buy.com/upload/img/thumb_1507625076377.jpg', des: '亲近自然', shopid: 'sp_08'}
          }
        ],
        boutique: [
          {img: 'http://www.bravo-buy.com/upload/img/thumb_1507624398568.jpg', des: '私房菜', shopid: 'sp_01'},
          {img: 'http://www.bravo-buy.com/upload/img/thumb_1507624380671.jpg', des: '每根面都有它的性格', shopid: 'sp_02'},
          {img: 'http://www.bravo-buy.com/upload/img/thumb_1507624360406.jpg', des: '休闲家居', shopid: 'sp_03'},
          {img: 'http://www.bravo-buy.com/upload/img/thumb_1507624338282.jpg', des: '咖啡时光', shopid: 'sp_04'},
          {img: 'http://www.bravo-buy.com/upload/img/thumb_1507624318171.jpg', des: '猴头菇', shopid: 'sp_05'},
          {img: 'http://www.bravo-buy.com/upload/img/thumb_1507624296625.jpg', des: '农家小灶', shopid: 'sp_06'}
        ]
      }
    },
    components: {
      Active, NavBottom, TopSearch, Swiper, PartingLine, Category, NewBz
    },
    methods: {
      ...mapActions(['HomeInit', 'RegionChange']),
      // 路由方法
      toShop: function (params) {
        this.$router.push({path: `/shopHome/${params}`})
      }
    },
    computed: {
      ...mapGetters([
        'Region'
      ]),
      swiperSrc: function () {
        return this.$store.state.swiperImg
      },
      newShopSource: function () {
        return this.$store.state.bzs
      }
    },
    watch: {
      Region: function () {
        this.HomeInit(this.Region.name)
      }
    },
    mounted: function () {
      this.HomeInit()
    },
    activated: function () {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../style/reset";
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

  /*boutiqueTwo*/
  .box{
    width: 46%;
    height:auto;

    padding:2%;

    float: left;

    box-shadow: 0 0 10px #eee;
  }

  .box>img{
    width: 100%;
    height: 8rem;
  }

  .box>p{
    line-height: 1rem;
  }

  /*boutiqueBig*/
  .content:nth-last-child(1){
    margin-bottom: 0;
  }
  .content{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    width: 100%;
    padding: 10px;
    margin-bottom: 10px;

    box-shadow: 0 0px 10px #eee;
  }
  .content>img{
    width: 100%;
    height: 12rem;
  }
  .content>p{
    text-align: center;

    line-height: 1.5rem;

    font-size: 1rem;
    color: rgba(0,0,0,0.6);
  }
</style>
