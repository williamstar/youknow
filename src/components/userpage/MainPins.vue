<template>
  <div class="main-pins-module">
    <div class="header">
      <router-link to="/self/pins/"
                   class="link"
                   exact>我的分享</router-link>
      <router-link to="/self/pins/posts"
                   class="link">我的文章</router-link>
      <router-link to="/self/pins/columns"
                   class="link">我的专栏</router-link>
    </div>
    <router-view :user="user"
                 :detail="detail">
    </router-view>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    user: {
      type: Object,
    },
    detail: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../common/scss/mixin';

.main-pins-module {
  padding: 0 20px;
  .header {
    @include border-bottom;
    .link {
      padding: 6px 0 7px 0;
      margin-right: 36px;
      font-size: 15px;
    }
    .router-link-active {
      @include bold-title(50px);
    }
  }
}
</style>
