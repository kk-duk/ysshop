<template>
  <div class="main">
    <div class="bz-content" v-for="item in this.source" :key="item.id" @click="routeTo(item.id)">
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
    props: ['source'],
    data: function () {
      return {
      }
    },
    methods: {
      routeTo: function (params) {
        this.$router.push({path: `/shopHome/${params}`})
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../style/reset.scss";
  @import "../style/common.scss";

  .main{
    padding: 10px;
  }
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

    img{
      width: 38%;
      height: 9.5rem;

      float: left;
    }

    div{
      width:60%;

      float: right;

      h5{
        line-height: 1.4rem;
        text-align: center;
        font-size: 1.4rem;
        color: rgba(0,0,0,0.8);

        margin-bottom: .5rem;
      }
      p{
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
    }
  }
</style>
