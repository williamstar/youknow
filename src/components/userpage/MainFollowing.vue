<template>
  <div class="main-following-module">
    <div class="list-header">
      <router-link class="list-link"
                   to="/self/william/following"
                   exact>我关注的人</router-link>
      <router-link class="list-link"
                   to="/self/william/followers">关注我的人</router-link>
      <div class="list-link"
           :class="{'router-link-active': isLight}">
        <switchButton :items="items"
                      @select-what="changeRoute"></switchButton>
      </div>
    </div>
    <router-view :user-info="userInfo"></router-view>
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
  created() {
    for (let i = 0; i < this.suffixes.length; i += 1) {
      if (this.$route.fullPath.indexOf(this.suffixes[i]) !== -1) {
        this.currentIndex = i;
      }
    }
  },
  data() {
    return {
      items: ['我关注的专栏', '我关注的话题', '我关注的问题', '我关注的收藏'],
      suffixes: ['columns', 'topics', 'questions', 'collections'],
      baseUrl: '/self/william/following/',
      currentIndex: 0,
    };
  },
  components: {
    switchButton,
  },
  methods: {
    changeRoute(index) {
      this.currentIndex = index;
      this.$router.push(this.currentSubURL);
    },
  },
  computed: {
    currentSubURL() {
      return this.baseUrl + this.suffixes[this.currentIndex];
    },
    isLight() {
      return this.$route.fullPath === this.currentSubURL;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../common/scss/mixin';
@import '../../common/scss/userpage';
.main-following-module {
  padding: 0 20px;
}
</style>
