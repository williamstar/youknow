<template>
  <div class="main-pins-module">
    <div class="list-header">
      <router-link to="/self/william/pins/" class="list-link" exact>我的分享</router-link>
      <router-link to="/self/william/pins/posts" class="list-link">我的文章</router-link>
      <router-link to="/self/william/pins/columns" class="list-link">我的专栏</router-link>
      <div class="switch-wrapper">
        <switch-button :items="items" v-if="$route.fullPath.indexOf('posts') !== -1"></switch-button>
      </div>
    </div>
    <router-view :user-info="userInfo">
    </router-view>
  </div>
</template>

<script type="text/javascript">
import switchButton from './smallcomponents/SwitchButton';

export default {
  props: {
    userInfo: {
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
@import '../../common/scss/userpage';
.main-pins-module {
  padding: 0 20px;
  .switch-wrapper {
    margin-left: auto;
  }
}
</style>
