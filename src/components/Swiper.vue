<template>
  <swiper :options="swiperOption" ref="mySwiperA">
    <!-- 幻灯内容 -->
    <swiperSlide v-for="img in swipers" :key="img.id">
      <img class="sPhoto" :src="img" alt="">
    </swiperSlide>
    <!-- 以下控件元素均为可选 -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import store from '../store/index'

  export default{
    components: {
      swiper, swiperSlide
    },
    data () {
      return {
        name: '',
        swiperOption: {
          loop: true,
          effect: 'flip',
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
      swiper () {
        return this.$refs.mySwiperA.Swiper
      },
      swipers: function () {
        return store.state.swiper
      }
    },
    mounted () {
    }
  }
</script>

<style scoped>
  @import "../style/reset.css";
  @import "../style/swiper.min.css";

  .sPhoto{
    width: 100%;
  }
</style>
