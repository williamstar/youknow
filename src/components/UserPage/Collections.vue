<template>
  <div class="collection-module">
    <div class="title">
      我的收藏
    </div>
    <div class="collections">
      <div v-for="collection in detail.collections"
           class="collection">
        <div class="max-title">
          {{collection.val}}
        </div>
        <div class="func-desc">
          <span class="item">{{collection.updateTime}}更新</span>
          <span class="item">{{collection.itemNum}}条内容</span>
          <span class="item">{{collection.followingNum}} 人关注</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    detail: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../common/scss/mixin";
@import "../../common/scss/color";
@import "../../common/scss/userpage";
.collection-module {
  padding: 0 16px;
  .title {
    @include bold-title(50px);
    @include border-bottom;
  }
  .collections {
    .collection {
      @include border-bottom;
      padding: 16px 0;
      font-size: 14px;
    }
    .func-desc {
      margin-top: 6px;
    }
  }
}
</style>
