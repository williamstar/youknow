<template>
  <div class="question">
    <div class="bold-title">{{question.title}}</div>
    <div>
      <span class="item">{{question.followerDate}}</span>
      <span class="item">{{question.answerNum}}个回答</span>
      <span class="item">{{question.followerNum}}个关注</span>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    data: {
      type: Object,
    },
  },
  computed: {
    question() {
      return this.data;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../common/scss/userpage';
@import '../../../common/scss/mixin';
</style>
