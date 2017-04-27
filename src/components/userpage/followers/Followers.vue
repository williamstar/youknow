<template>
  <div class="follower-module">
    <div v-if="detail.followingPart"
         class="followers">
      <user-intro v-for="user in detail.followingPart.followers"
                  class="list-item"
                  :user="user"
                  :is-follower="isFollower"
                  :key="user.userName"></user-intro>
    </div>
  </div>
</template>

<script type="text/javascript">
import userIntro from '@/components/userpage/following/smallcomponents/UserIntro';

export default {
  props: {
    detail: {
      type: Object,
    },
  },
  data() {
    return {
      isFollower: true,
    };
  },
  components: {
    userIntro,
  },
};
</script>

<style lang="scss" scoped>

</style>
