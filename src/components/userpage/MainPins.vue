<template>
  <div class="pins-module">
    <div class="header">
      <router-link to="/self/pins/"
                   class="link" exact>我的分享</router-link>
      <router-link to="/self/pins/posts"
                   class="link">我的文章</router-link>
      <router-link to="/self/pins/columns"
                   class="link">我的专栏</router-link>
    </div>
    <router-view>

    </router-view>
  </div>
</template>

<script type="text/javascript">
export default {


};
</script>

<style lang="scss" scoped>
@import '../../common/scss/mixin';
  .pins-module {
    padding: 0 16px;
    .header {
      .link {
        padding: 6px 0 7px 0;
        margin-right: 36px;
      }
      .router-link-active {
        @include bold-title(50px);
      }
    }
  }
</style>
