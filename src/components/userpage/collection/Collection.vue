<template>
  <div class="collection">
    <div class="max-title">
      {{collection.val}}
    </div>
    <div class="func-desc">
      <span class="item">{{collection.updateTime}}更新</span>
      <span class="item">{{collection.itemNum}}条内容</span>
      <span class="item">{{collection.followingNum}} 人关注</span>
    </div>
  </div>
</template>

<script type="text/javascript">

export default {
  props: {
    data: {
      type: Object,
    },
  },
  computed: {
    collection() {
      return this.data;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../common/scss/userpage";
.func-desc {
  margin-top: 6px;
}
</style>
