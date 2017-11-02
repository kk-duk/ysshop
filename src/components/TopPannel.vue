<template>
  <div class="top-pannel">
    <slot name="des"></slot>
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

  .top-pannel{
    width: 100%;
    heihgt: $headHeight;
    background: $mainHue;
    color: $white;
    @include font($headHeight, $lagerFont)
  }
</style>
