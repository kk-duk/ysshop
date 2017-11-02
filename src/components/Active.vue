<!--
2017-11-02-yeanling
component:
the Active
click to ActivePage
-->
<template>
  <div class="active-content" @click="toActive">
    <img src="../assets/logo.png" alt="">
    <slot name="des"></slot>
  </div>
</template>
<script>
  export default {
    name: '',
    props: ['url'],
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
        let params = this.url.split('/')
        this.$router.push({path: `/active/${params}`})
      }
    },
    activated: function () {
    }
  }
</script>
<style lang="scss" scoped>
  .active-content{
    width: 90px;
    height: 90px;

    position: fixed;
    bottom: 200px;
    left: 30px;

    img{
      height: 90px;
      width: 90px;
    }
  }
</style>
