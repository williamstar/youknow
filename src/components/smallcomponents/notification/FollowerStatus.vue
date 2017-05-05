<template>
  <div role="follower-status-module">
    <div class="follower-status-header">
      这些人最近关注了你
    </div>
    <div v-for="follower in data" class="notification-item follower-status">
      <a href="#" class="follower-status-item">
        <img :src="follower.avatar" width="40" height="40" alt="用户图片">
        <div class="intro">
          <div class="user-name">{{follower.userName}}</div>
          <div class="brief-desc">{{follower.briefDesc}}</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    data: {
      type: Array,
    },
  },

};
</script>

<style lang="scss" scoped>
@import '../../../common/scss/notification';

.follower-status-header {
  margin: 0 15px;
  height: 54px;
  font-size: 14px;
  line-height: 54px;
  color: #9aaabf;
  text-align: center;
  border-bottom: 1px solid #ebeef5;
}

.follower-status.notification-item {
  &:hover {
    background: #f7f8fa;
  }
  .follower-status-item {
    display: flex;
    img {
      flex: 0 0 40px;
    }
    .intro {
      margin-left: 15px;
      font-size: 0px;
      line-height: 1.2;
      .user-name {
        font-weight: 600;
        font-size: 14px;
      }
      .brief-desc {
        margin-top: 6px;
        font-size: 14px;
        color: #8590a6;
      }
    }
  }
}
</style>
