<template>
  <div class="collection">
    <div class="bold-title">{{collection.title}}</div>
    <div v-if="!active">
      <span class="item">{{collection.updateDate}} 更新</span>
      <span class="item">{{collection.totalNum}} 条内容</span>
      <span class="item">{{collection.followerNum}} 人关注</span>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    data: {
      type: Object,
    },
    active: {
      type: Boolean,
      default() {
        return false;
      },
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
@import '../../../common/scss/userpage';
</style>
