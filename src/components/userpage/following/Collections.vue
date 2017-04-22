<template>
  <div class="collections-module">
    <div v-if="detail.followingPart"
         class="collections">
      <div v-for="collection in detail.followingPart.collections"
           class="collection list-item">
        <div class="bold-title">{{collection.title}}</div>
        <div>
          <span class="item">{{collection.updateDate}} 更新</span>
          <span class="item">{{collection.totalNum}} 条内容</span>
          <span class="item">{{collection.followerNum}} 人关注</span>
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
@import '../../../common/scss/userpage';
@import '../../../common/scss/mixin';
</style>
