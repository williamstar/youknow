<template>
  <div>
    <ul class="interactive-header" v-if="userInfo.followingPart">
      <li>
        <router-link to="/self/activities">动态</router-link>
      </li>
      <li>
        <router-link to="/self/answers">回答<span class="sub-text">{{userInfo.answers.length}}</span></router-link>
      </li>
      <li>
        <router-link to="/self/pins">分享<span class="sub-text">{{ userInfo.pinsPart.pins.length + userInfo.pinsPart.posts.length}}</span></router-link>
      </li>
      <li>
        <router-link to="/self/asks">提问<span class="sub-text">{{userInfo.questions.length}}</span></router-link>
      </li>
      <li>
        <router-link to="/self/collections">收藏<span class="sub-text">{{userInfo.collections.length}}</span></router-link>
      </li>
      <li>
        <router-link to="/self/following" :class="{'router-link-active': $route.fullPath.indexOf('followers') !== -1}">关注</router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    userInfo: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../common/scss/userpage';

.interactive-header {
  @include border-bottom($is-list: no);
  font-size: 0;
  line-height: 1;
  li {
    display: inline-block;
    font-size: 16px;
    padding: 0 20px;
    a {
      display: block;
      padding: 14px 0;
      &.router-link-active {
        font-weight: 700;
        border-bottom: 3px solid $n-blue;
      }
      .sub-text {
        margin-left: 6px;
        font-size: 14px;
        font-weight: 300;
        line-height: 20px;
        color: #a1aebf;
      }
    }
  }
}
</style>
