<template>
  <div class="user">
    <img :src="user.avatar"
         width="38"
         height="38"
         alt="用户图片">
    <div class="user-intro">
      <div class="username">{{user.userName}}</div>
      <div class="brief-desc">{{briefDesc}}</div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    user: {
      type: Object,
    },
    briefDesc: {
      type: String,
    },
  },

};
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  .user-intro {
    margin-left: 10px;
    .username {
      font-size: 15px;
      line-height: 1.1;
      font-weight: 600;
      color: #555;
    }
    .brief-desc {
      margin-top: 6px;
      font-size: 14px;
      line-height: 1.2;
    }
  }
}
</style>
