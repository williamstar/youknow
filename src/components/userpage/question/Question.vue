<template>
  <div class="question">
    <div class="max-title">
      <a href="#">{{question.question}}</a>
    </div>
    <div class="full-desc">
      <span class="item">2017-04-15</span>
      <span class="item">0个回答</span>
      <span class="item">0个关注</span>
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
