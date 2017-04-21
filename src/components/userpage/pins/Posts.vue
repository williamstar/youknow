<template>
  <div class="posts-module">
    <div class="posts">
      <div v-for="posts in detail.pinsPart.posts" class="post">
        <div class="title">{{posts.title}}</div>
        <user-card :user="user" :brief-desc="detail.briefDesc"></user-card>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import usercard from '@/components/userpage/UserCard';

export default {
  props: {
    detail: {
      type: Object,
    },
    user: {
      type: Object,
    },
  },
  components: {
    UserCard: usercard,
  },
};
</script>

<style lang="scss" scoped>

</style>
