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
      <div class="switch-wrapper">
        <switch-button :items="items"
                       v-if="$route.fullPath.indexOf('posts') !== -1"></switch-button>
      </div>
    </div>
    <router-view :user="user"
                 :detail="detail">
    </router-view>
  </div>
</template>

<script type="text/javascript">
import switchButton from '@/components/userpage/smallcomponents/SwitchButton';

export default {
  props: {
    user: {
      type: Object,
    },
    detail: {
      type: Object,
    },
  },
  data() {
    return {
      items: ['按时间排序', '按赞数排序'],
    };
  },
  components: {
    switchButton,
  },
};
</script>

<style lang="scss" scoped>
@import '../../common/scss/mixin';

.main-pins-module {
  padding: 0 20px;
  .header {
    display: flex;
    @include border-bottom;
    .link {
      padding: 6px 0 7px 0;
      margin-right: 36px;
      font-size: 15px;
    }
    .router-link-active {
      @include bold-title;
    }
    .switch-wrapper {
      margin-left: auto;
    }
  }
}
</style>
