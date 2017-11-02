<template>
  <div class="search-content">
    <div class="location" @click="toCities()">
      <img src="../static/icon/location.svg" alt="">
      <p v-if="this.location">{{this.location}}</p>
      <p v-if="!this.location">定位...</p>
    </div>
    <input class="search-box" type="text" v-bind:placeholder="placeholder" @click="toSearch()">
    <div class="more">
      <slot name="more"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    props: ['location'],
    data () {
      return {
        name: '',
        placeholder: '请点击搜索'
      }
    },
    methods: {
      toCities: function () {
        this.$router.push('/cities')
      },
      toSearch: function () {
        this.$router.push('/search')
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../style/reset";

  .search-content{
    width: 100%;
    height: 2rem;

    padding:.25rem 0;

    background: #FFBA08;

    position: fixed;
    top: 0;

    z-index: 100;
    .location{
      width: 20%;
      height: 2rem;

      float: left;
      p{
        display: block;
        width: 70%;
        text-align: center;

        line-height: 2rem;

        color: rgba(0,0,0,0.6);

        font-size: .7rem;

        float: left;

        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
      img{
        width: 30%;
        height: 2rem;

        float: left;
      }
    }
    .search-box{
      width: 60%;
      height: 2rem;

      float: left;
    }
    .more{
      width:20%;
      height: 2rem;

      padding:.2rem 0;

      float: left;
      img{
        height: 1.6rem;
        border-radius: 50%;
        box-shadow: 0 0 0px 3px #eee;
      }
    }
    input{
      width: 60%;
      height: 2rem;

      border-radius: 1rem;

      border:none;

      text-align: center;
      line-height: 2rem;
    }
  }
</style>
