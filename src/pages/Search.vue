<template>
  <div class="search-content">
    <TopBack>
      <p slot="title">搜索商品</p>
    </TopBack>
    <p v-for="info in infos">{{info}}</p>
  </div>
</template>
<script>
  import TopBack from '../components/TopBack.vue'
  import NavBottom from '../components/NavBottom.vue'

  export default {
    name: '',
    data: function () {
      return {
        name: '',
        infos: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10'
        ]
      }
    },
    components: { TopBack, NavBottom }
  }
</script>
<style scoped>
  @import "../style/reset.css";
  @import "../style/common.css";

  .search-content{
    width: 100%;
    padding: 2.5rem 0;
  }
  .search-content>p:nth-child(odd){
    line-height: 2rem;
    text-align: center;
    background: rgba(0,0,0,0.4);
  }
  .search-content>p:nth-child(even){
    line-height: 8rem;
     text-align: center;
     background: rgba(255,255,255,1);
   }
</style>
