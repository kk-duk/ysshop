<template>
  <div class="search-content">
    <div class="location" @click="toCities()">
      <img v-if="!location" src="../static/icon/location.svg" alt="">
      <p v-if="location">{{location}}</p>
    </div>
    <input type="text" placeholder="点击搜索">
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        name: '',
        placeHolder: {
          '点击搜索': true
        },
        location: ''
      }
    },
    methods: {
      toCities: function () {
        this.$router.push('./cities')
      }
    }
  }
</script>

<style>
@import "../style/mixin.css";

  .search-content{
    width: 100%;
    height: 2rem;

    padding:.25rem 0;

    background: #FFBA08;

    position: fixed;
    top: 0;
  }

.search-content>.location{
  width: 4rem;
  height: 2rem;

  position: absolute;
  top: .25rem;
  left: .25rem;

}

.location>p{
  text-align: center;

  line-height: 2rem;

  color: rgba(0,0,0,0.6);

  font-size:1.2rem;
}
.location>img{
  height: 2rem;
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
