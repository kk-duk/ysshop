<template>
  <div>
      <TopSearch></TopSearch>
      <p>{{info}}</p>
      <NavBottom class="nav-bottom"></NavBottom>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavBottom from '../components/NavBottom.vue'
  import TopSearch from '../components/TopSearch.vue'

  export default {
    name: 'HelloWorld',
    data () {
      return {
        name: '',
        info: 'There is HomePage'
      }
    },
    components: {
      NavBottom, TopSearch
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../style/mixin.css";
</style>
