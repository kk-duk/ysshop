<template>
  <div style="padding: 10px;">
    <div class="content" v-for="item in boutique" :key="item.shopid" @click="shopClick(item.shopid)">
      <img :src="item.img" alt="">
      <p class="oneline-text__center">{{item.des}}</p>
    </div>
  </div>

</template>
<script>
  export default {
    name: '',
    data: function () {
      return {
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
    computed: {
    },
    methods: {
      shopClick: function (param) {
        this.$router.push({path: `/shopHome/${param}`})
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../style/reset.css";
  @import "../style/common.scss";

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
