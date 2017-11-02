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
        name: ''
      }
    },
    methods: {
      back: function () {
        this.$router.back(-1)
      }
    }
  }
</script>

<style scoped>
  @import "../style/reset.scss";

  .back-content{
    width: 100%;
    height: 2rem;
    padding: .25rem 0;

    background: #FFBA08;

    position: fixed;
    top: 0;

    z-index: 100;
  }

  .back-content>img{
    height: 1.6rem;

    position: absolute;
    top: .45rem;
    left: .45rem;
  }

  .back-content>p{
    width: 100%;
    line-height: 2rem;

    font-size: 1rem;
    color: rgba(0,0,0,0.4);

    text-align: center;
  }
</style>
