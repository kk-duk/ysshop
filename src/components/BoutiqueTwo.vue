<template>
  <div style="padding: 10px;">
    <div v-for="item in boutique" :key="item.id">
      <div class="box">
        <img :src="item.one.img" :alt="item.one.des">
        <p class="oneline-text__center">{{item.one.des}}</p>
      </div>
      <div class="box">
        <img :src="item.two.img" :alt="item.two.des">
        <p class="oneline-text__center">{{item.two.des}}</p>
      </div>
      <div style="clear: both;"></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: '',
    data: function () {
      return {
        boutique: [
          {
            one: {img: 'http://www.bravo-buy.com/upload/img/thumb_1507625120538.jpg', des: '爱生活更爱牛排'},
            two: {img: 'http://www.bravo-buy.com/upload/img/thumb_1507625076377.jpg', des: '亲近自然'}
          }
        ]
      }
    }
  }
</script>
<style scoped>
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
</style>
