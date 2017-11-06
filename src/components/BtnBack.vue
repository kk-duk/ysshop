<template>
  <div class="content" @click="back">
    <img src="../assets/back.png" alt="">
  </div>
</template>
<script>
  export default {
    name: '',
    data: function () {
      return {}
    },
    methods: {
      back: function () {
        this.$router.back(-1)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../style/reset";
  @import "../style/common";

  .content{
    width: 1.5rem;
    height: 1.5rem;
    padding: .5rem;

    border-radius: 50%;
    box-shadow: 0 0 0 1px $mainHue;

    position: fixed;
    top: 1rem;
    left: 1rem;

    img{
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
    }
  }
</style>
