<template>
  <div class="columns-module">
    <div v-if="detail.followingPart"
         class="columns list-item">
      <div v-for="column in detail.followingPart.columns"
           class="column">
        <img :src="column.avatar"
             class="avatar"
             alt="专栏图片">
        <div class="content">
          <div class="bold-title">
            {{column.title}}
          </div>
          <div>
            <span class="item">共{{column.totalNum}}篇文章</span>
            <span class="item">{{column.followerNum}}人关注</span>
          </div>
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

.column {
  display: flex;
  .content {
    &:hover {
      color: inherit;
    }
  }
}
</style>
