<template>
  <div class="content">
    loading...
  </div>
</template>
<script>
  export default {
    name: '',
    data: function () {
      return {}
    }
  }
</script>
<style lang="scss" scoped>
  @import "../style/reset";
  @import "../style/common";

  .content{
    height: $headHeight;
    background: $mainHue;

    color: $white;
    @include font($headHeight, $lagerFont)
  }
</style>
