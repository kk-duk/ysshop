<template>
  <div style="padding: 10px;">
    <div class="bz-content" v-for="item in bzs" :key="item.id">
      <img :src="item.img" alt="图片">
      <div>
        <h5 class="oneline-text__center">{{item.name}}</h5>
        <p>{{item.detail}}</p>
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
        bzs: [
          {img: 'http://www.bravo-buy.com/upload/img/thumb_1508295334930.jpg', name: '大唐渝味老火锅', detail: '重庆九宫格老火锅，中国气质、重庆味道。位于绵阳市涪城区高水南街22号。'},
          {img: 'http://www.bravo-buy.com/upload/img/thumb_1507624935957.jpg', name: '碳烤牛排', detail: '牛排，或称牛扒，是块状的牛肉，是西餐中最常见的食物之一。牛排的烹调方法以煎和烧烤为主。 欧洲中世纪时，猪肉及羊肉是平民百姓的食用肉，牛肉则是王公贵族们的高级肉品，尊贵的牛肉被他们搭配上了当时也是享有尊贵身份的胡椒及香辛料一起烹调，并在特殊场合中供应，以彰显主人的尊贵身份。 清末小说中已出现「牛排」、「猪排」等西菜菜名，可能是因形似上海「大排」（猪丁骨），故名「排」。而在上海话里，「排」发[ba]音，广东又作牛扒。'},
          {img: 'http://www.bravo-buy.com/upload/img/thumb_1507624432175.jpg', name: '重庆小面', detail: '重庆小面是指麻辣素面，分汤面和干溜两种类型，麻辣味型。重庆面还包括重庆小面和有臊子的面食，如牛肉、肥肠、豌豆杂酱面、荣昌铺盖面等。重庆面富于变化，在面店，可以要求店家制作个人定制口味，如要求店家'}
        ]
      }
    }
  }
</script>
<style scoped>
  @import "../style/reset.css";
  @import "../style/common.scss";

  .bz-content:nth-last-child(1){
    margin-bottom: 0;
  }
  .bz-content{
    box-sizing: border-box;
    height: 11rem;
    width: 100%;

    margin-bottom: 1rem;

    box-shadow: 0 0 10px #eee;

    padding: 10px;
  }

  .bz-content>img{
    width: 38%;
    height: 9.5rem;

    float: left;
  }
  .bz-content>div{
    width:60%;

    float: right;
  }
  .bz-content>div>h5{
    line-height: 1.4rem;
    text-align: center;
    font-size: 1.4rem;
    color: rgba(0,0,0,0.8);

    margin-bottom: .5rem;
  }

  .bz-content>div>p{
    line-height: 1.5rem;
    text-indent: 2rem;
    text-align: left;

    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;

    font-size: .8rem;

    color: rgba(0,0,0,0.6);
  }
</style>
