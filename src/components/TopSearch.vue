<template>
  <div class="search-content">
    <div class="location" @click="toCities()">
      <img src="../static/icon/location.svg" alt="">
      <p v-if="location">{{location}}</p>
      <p v-if="!location">定位...</p>
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
    data () {
      return {
        name: '',
        placeholder: '请点击搜索',
        location: '黔西南土家族苗族自治县'
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

<style scoped>
@import "../style/reset.css";

  .search-content{
    width: 100%;
    height: 2rem;

    padding:.25rem 0;

    background: #FFBA08;

    position: fixed;
    top: 0;

    z-index: 100;
  }

.search-content>.location{
  width: 20%;
  height: 2rem;

  float: left;
}
.search-content>.search-box{
  width: 60%;
  height: 2rem;

  float: left;
}
.search-content>.more{
  width:20%;
  height: 2rem;

  float: left;
}
.location>p{
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
.location>img{
  width: 30%;
  height: 2rem;

  float: left;
}
  .search-content>input{
    width: 60%;
    height: 2rem;

    border-radius: 1rem;

    border:none;

    text-align: center;
    line-height: 2rem;
  }
</style>
