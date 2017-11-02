<template>
  <div style="box-shadow:0 0 9px #ccc;">
    <!--图片展示-->
    <div class="pic-content" ref="img">
      <img src="http://www.bravo-buy.com/upload/img/thumb_1507618369099.jpg" alt="大图">
    </div>
    <!--状态-->
    <div class="status">
      <div class="shop-name">
        <p>互粉私房菜</p>
      </div>
      <div class="collection">
        <p>收藏</p>
      </div>
      <div class="clear"></div>
    </div>
    <!--详细信息-->
    <div class="detail">
      <div class="address">
        <p>
          地址：四川省绵阳市梓潼县宾晖大道龙瑶大酒店东侧90米
        </p>
      </div>
      <div class="phone">
        <p>电话:&nbsp;
          <a href="tel:18281519623">18281519623</a>
        </p>
      </div>
      <div class="clear"></div>
    </div>

    <div style="height:1000px;"></div>
  </div>
</template>
<script>
  export default {
    name: '',
    props: ['scrollY'],
    data: function () {
      return {}
    },
    computed: {
    },
    watch: {
      scrollY: function () {
//        console.log(scrollY)
        if (scrollY < 100) {
          this.$refs.img.style.height = (200 - scrollY) + 'px'
          this.$refs.img.style.width = (200 - scrollY) + 'px'
        }
      }
    },
    mounted: function () {
    },
    activated: function () {
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../../style/reset";
  @import "../../../style/common.scss";

  .pic-content{
    max-height: 12rem;
  }
  .pic-content>img{
    width: 100%;
    max-height: 12rem;
  }

  .status{
    border-bottom: 1px solid #eee;
  }
  .status,.detail{
    padding:.5rem 0 .5rem 0;
  }
  .status>.shop-name,.status>.collection{
    width: 50%;
    float: left;
    color: $normalColor;
    font-size: $lagerFont;

    text-align: center;
    line-height: 1.5rem;
  }
  .detail>.address{
    box-sizing: border-box;
    padding: 0 1rem 0 1rem;
    width: 50%;
    float: left;
  }
  .detail>.address>p{
    line-height: 1rem;
    color: $normalColor;
    font-size: $normalFont;

    text-align: left;
  }
  .detail>.phone{
    width: 50%;
    float: left;
  }
  .detail>.phone>p{
    line-height: 1rem;
    color: $normalColor;
    font-size: $normalFont;
  }
</style>
