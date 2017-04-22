<template>
  <div class="questions-module">
    <div v-if="detail.followingPart"
         class="questions">
      <div v-for="question in detail.followingPart.questions"
           class="question list-item">
        <div class="bold-title">{{question.title}}</div>
        <div>
          <span class="item">{{question.followerDate}}</span>
          <span class="item">{{question.answerNum}}个回答</span>
          <span class="item">{{question.followerNum}}个关注</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    detail: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../common/scss/userpage';
@import '../../../common/scss/mixin';
</style>
