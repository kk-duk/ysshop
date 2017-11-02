<!--
2017-10-31
yeanling
二次封装 vue-awesome-swiper
-->
<template>
  <swiper :options="swiperOption" ref="customSwiper">
    <!-- 幻灯内容 -->
    <swiperSlide v-for="item in this.source" :key="item.id">
      <img class="sPhoto" :src="item.img" alt="" @click="route(item.id)">
    </swiperSlide>
    <!-- 以下控件元素均为可选 -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default{
    props: ['source', 'mode'],
    components: {
      swiper, swiperSlide
    },
    data () {
      return {
        name: '',
        swiperOption: {
          loop: true,
          effect: this.mode,
          autoplay: 3000,
          autoHeight: true,
          grabCursor: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          paginationType: 'bullets'
        }
      }
    },
    computed: {
    },
    methods: {
      route: function (params) {
        this.$router.push({path: `/shopHome/${params}`})
      }
    },
    mounted () {
    }
  }
</script>

<style scoped>
  @import "../style/reset.scss";
  @import "../style/swiper.min.css";

  .sPhoto{
    width: 100%;
  }
</style>
