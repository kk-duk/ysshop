<template>
  <swiper :options="swiperOptions" ref="category">
    <swiperSlide v-for="item in items" :key="item.id" class="menu">
      <img :src="item.img" :alt="item.des">
      <p>{{item.des}}</p>
    </swiperSlide>
  </swiper>
</template>
<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import store from '../store/index'

  export default{
    name: '',
    data: function () {
      return {
        swiperOptions: {
          scrollbarHide: true,
          slidesPerView: 5,
          centeredSlides: false,
          spaceBetween: 0,
          grabCursor: true
        }
      }
    },
    components: {
      swiper, swiperSlide
    },
    computed:
    {
      swiper () {
        return this.$refs.category.Swiper
      },
      items: function () {
        return store.state.items
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../style/swiper.min.css";
  @import "../style/reset.css";

  .menu{
    box-sizing: border-box;
    padding: 1rem;
  }

  .menu img{
    width: 100%;
  }
  .menu p{
    text-align: center;

    font-size: .8rem;
    color: rgba(0,0,0,0.6);
    width: 200%;
    margin-left: -50%;
    margin-top: .1rem;
  }
</style>
