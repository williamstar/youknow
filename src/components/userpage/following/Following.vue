<template>
  <div class="following-module">
    <div v-if="detail.followingPart" class="followings">
      <userIntro v-for="user in detail.followingPart.following" class="list-item" :user="user" :key="user.userName"></userIntro>
    </div>
  </div>
</template>

<script type="text/javascript">
import userIntro from '@/components/userpage/smallcomponents/UserIntro';

export default {
  props: {
    detail: {
      type: Object,
    },
  },
  components: {
    userIntro,
  },
};
</script>

<style lang="scss" scoped>

</style>
