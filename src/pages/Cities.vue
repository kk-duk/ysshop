<template>
  <div>
    <TopBack>
      <p slot="title">选择您所在的城市</p>
    </TopBack>
    <p>{{info}}</p>
  </div>
</template>

<script>
  import TopBack from '../components/TopBack.vue'

  export default {
    name: '',
    data () {
      return {
        name: '',
        info: 'there is Cities！'
      }
    },
    components: {
      TopBack
    }
  }
</script>

<style>
  @import "../style/mixin.css";
</style>
