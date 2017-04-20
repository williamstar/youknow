<template>
  <div class="collection-module">
    <div class="title">
      我的收藏
    </div>
    <div class="collected-wrapper">
      div.collection
    </div>
  </div>
</template>

<script type="text/javascript">
export default {

};
</script>

<style lang="scss" scoped>
  @import "../../common/scss/mixin";
  @import "../../common/scss/color";
  .collection-module {
    padding: 0 16px;
    .title {
      @include bold-title(50px);
      border: 1px solid $n-llgray;
    }
  }
</style>
