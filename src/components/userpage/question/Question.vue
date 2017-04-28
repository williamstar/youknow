<template>
  <div class="question">
    <div class="max-title">
      <a href="#">{{question.title}}</a>
    </div>
    <div class="full-desc">
      <span class="item">{{question.answerDate}}</span>
      <span class="item">{{question.answerNum}}个回答</span>
      <span class="item">{{question.followerNum}}个关注</span>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    question: {
      type: Object,
    },
  },

};
</script>

<style lang="scss" scoped>
@import '../../../common/scss/userpage';
@import '../../../common/scss/mixin';
.question {
  border-bottom: 1px solid #f0f2f7;
  .full-desc {
    display: flex;
  }
}
</style>
