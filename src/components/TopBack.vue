<template>
  <div class="back-content">
    <img src="../static/icon/back.svg" alt="" @click="back()">
    <p>
      <slot name="title"></slot>
    </p>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        name: '',
        title: '无名页面'
      }
    },
    method: {
      back: function () {
        this.$router.back(-1)
      }
    }
  }
</script>

<style>
  @import "../style/mixin.css";

  .back-content{
    height: 2rem;
    padding: .25rem 0;

    background: #FFBA08;

    position: fixed;
    top: 0;
  }

  .back-content>img{
    height: 2rem;

    position: absolute;
    top: .25rem;
    left: .25rem;
  }

  .back-content>p{
    line-height: 2rem;

    font-size: 1.2rem;
    color: rgba(0,0,0,0.6);

    text-align: center;
  }
</style>
