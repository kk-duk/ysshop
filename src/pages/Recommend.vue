<template>
  <div>
    <p>{{info}}</p>
    <NavBottom class="nav-bottom"></NavBottom>
  </div>
</template>

<script>
  import NavBottom from '../components/NavBottom.vue'

  export default {
    name: '',
    data () {
      return {
        name: '',
        info: 'There is Recommend'
      }
    },
    components: {
      NavBottom
    }
  }
</script>

<style scoped>
  @import "../style/mixin.css";
</style>
