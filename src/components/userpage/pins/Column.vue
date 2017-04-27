<template>
  <div class="column list-item">
    <img :src="data.avatar" class="avatar" width="60" height="60" alt="专栏图片">
    <div class="content">
      <div class="title">{{data.title}}</div>
      <div class="column-meta">
        <div class="brief-desc">{{data.briefDesc}}</div>
        <div class="status">
          <span class="item">发表{{data.publishNum}}篇文章</span>
          <span class="item">共篇{{data.totalNum}}文章</span>
          <span class="item">{{data.followingNum}}人关注</span>
        </div>
      </div>
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
};
</script>

<style lang="scss" scoped>
@import '../../../common/scss/userpage';
@import '../../../common/scss/mixin';

.column {
  display: flex;
  @include border-bottom;
  .avatar {
    cursor: pointer;
    border-radius: 4px;
    margin-right: 20px;
  }
  .content {
    cursor: auto;
    .title {
      margin-top: -5px;
      margin-bottom: -5px;
      line-height: 1.6;
      font-weight: 700;
      font-size: 18px;
      color: #1e1e1e;
      cursor: pointer;
    }
    .column-meta {
      .item:first-child {
        cursor: pointer;
      }
      margin-top: 6px;
    }
  }
}
</style>
