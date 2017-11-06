<template>
  <div class="btm-pd">
    <!--顶部描述-->
    <TopPannel class="">
      <p slot="des">附近商家</p>
    </TopPannel>

    <!--主体内容-->
    <ul class="choice">
      <li @click="choice">美食</li>
      <li @click="choice">休闲娱乐</li>
      <li @click="choice">酒店</li>
      <li @click="choice">家居</li>
    </ul>
    <ul class="shop">
      <li v-for="item in this.Around" :key="item.id" @click="toShop(item.id)">
        <div class="pic">
          <img :src="item.img" alt="">
        </div>
        <div class="detail">
          <h5>{{item.name}}</h5>
          <p>联系电话: {{item.phone}}</p>
          <p>地址: {{item.address}}</p>
          <p>距离: {{item.distance + item.distance > 1 ? item.distance + 'km' : item.distance * 1000 + 'm'}}</p>
        </div>
        <div class="clear"></div>
      </li>
    </ul>
    <!--底部导航-->
    <NavBottom class="nav-bottom"></NavBottom>
  </div>
</template>

<script>
  // 组件
  import TopPannel from '../components/TopPannel.vue'
  import NavBottom from '../components/NavBottom.vue'

  // store 辅助方法
  import { mapGetters } from 'vuex'

  // 主体程序
  export default {
    name: '',
    data () {
      return {
        name: ''
      }
    },
    components: {
      NavBottom, TopPannel
    },
    computed: {
      ...mapGetters(['Around'])
    },
    methods: {
      choice: function (ele) {
        let lis = ele.toElement.parentElement.getElementsByTagName('li')
        for (let i = 0; i < lis.length; i++) {
          lis[i].className = ''
        }
        ele.toElement.className = 'on'
      },
      toShop: function (params) {
        this.$router.push({path: `/shopHome/${params}`})
      }
    },
    activated: function () {
    }
  }
</script>

<style lang="scss" scoped>
  @import "../style/reset";
  @import "../style/common";

  .top-pannel{
    position: fixed;
    top: 0;
    left: 0;
  }
  .choice{
    width: 100%;
    position: fixed;
    top: 2.5rem;
    left: 0;
    line-height: 1.5rem;
    background: $white;
    li{
      display: block;
      width: 25%;
      float: left;

      color: $normalColor;
    }
    li.on{
      border-bottom: 1px solid $mainHue;
      color: $mainHue;
    }

  }

  .shop{
    display: block;
    width: 100%;
    margin-top: 4rem;
    li{
      width: 96%;
      height: auto;
      padding: 2%;
      border-bottom:1px solid #eee;

      .pic{
        width:25%;
        float: left;
        img{
          width: 100%;
        }
      }

      .detail{
        box-sizing: border-box;
        width: 75%;
        padding-left: 10px;
        float: left;

        text-align: left;
        h5{
          line-height: 1.5rem;
          font-size: $lagerFont;
        }

        p{
          line-height: 1.5rem;
          font-size: $normalFont;
          color: $normalColor;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;

          text-overflow: ellipsis;
        }
      }
    }
  }
</style>
