<template>
  <!--备忘录，button样式重叠userpage中的edit-profile-->
  <div class="user-slot-module">
    <img :src="userInfo.avatar" width="38" height="38" alt="用户头像">
    <nav-link :user-info="userInfo"></nav-link>
    <div class="button-wrapper">
      <router-link to="/self/edit">
        <button class="edit-profile">编辑用户资料</button>
      </router-link>
    </div>
  </div>
</template>

<script type="text/javascript">
import navLink from '@/components/userpage/smallcomponents/NavLink';

export default {
  props: {
    userInfo: {
      type: Object,
    },
  },
  components: {
    navLink,
  },
};

</script>
<style lang="scss" scoped>
@import '../../common/scss/userpage';

.user-slot-module {
  display: flex;
  align-items: center;
  height: 100%;
  .button-wrapper {
    margin-left: auto;
    .edit-profile {
      padding: 0 16px;
      line-height: 32px;
      font-size: 14px;
      cursor: pointer;
      color: $n-blue;
      border-radius: 3px;
      border: 1px solid $n-blue;
      background: none;
      &:hover {
        background: rgba(13, 121, 209, .06);
      }
    }
  }
}
</style>
