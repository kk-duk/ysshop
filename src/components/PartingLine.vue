<template>
  <div class="part-line">
    <p class="bg-line">------------------------------------------------------------------------------------------------------------------------------------</p>
    <p class="des">
      <slot name="description"></slot>
    </p>
  </div>
</template>
<script>
  export default {
    name: '',
    props: ['ptlHeight'],
    data: function () {
      return {}
    }
  }
</script>
<style lang="scss" scoped>
  .part-line{
    width: 80%;
    height: 2rem;
    padding:0 10% 0 10%;

    position: relative;

    overflow: hidden;
  }
  .bg-line{
    display: block;
    width: 100%;
    height: 2rem;
    line-height: 2rem;

    color: #ffba08;

    font-size: 1rem;
    letter-spacing: .1rem;
    white-space: nowrap;
    overflow: hidden;
  }

  .des{

    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;

    line-height: 2rem;
    text-align: center;
    font-size: 1rem;
    color: #ffba08;
  }

  .des span{
    padding:0 .5rem 0 .5rem;

    font-size: .8rem;
    line-height: 2rem;
    background: #ffffff;
  }
</style>
