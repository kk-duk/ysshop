<!--
2017-11-02-yeanling
component:
the Active
click to ActivePage
-->
<template>
  <div class="active-content" @click="toActive">
    <img src="../assets/redpack.png" alt="">
    <slot name="des"></slot>
  </div>
</template>
<script>
  export default {
    name: '',
    props: ['type'],
    data: function () {
      return {}
    },
    computed: {
      activePath: function () {
        console.log(this.url)
        return this.url
      }
    },
    methods: {
      toActive: function () {
        this.$router.push({path: `/active/${this.type}`})
      }
    },
    activated: function () {
    }
  }
</script>
<style lang="scss" scoped>
  @import "../style/common";

  .active-content{
    width: 3rem;
    height: 3rem;

    position: fixed;
    bottom: 5rem;
    left: 1rem;
    z-index: $level3;

    img{
      height: 3rem;
      width: 3rem;

      animation: swing 1.5s linear infinite;
      transform-origin: 50% 100%;
    }
  }

  @keyframes swing {
    20%{
      transform: rotate(10deg);
    }
    40%{
      transform: rotate(-10deg)
    }
    60%{
      transform: rotate(10deg);
    }
    80%{
      transform: rotate(-10deg)
    }
  }
</style>
