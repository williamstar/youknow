<template>
  <div class="question">
    <div class="title">
      <a href="#">{{question.title}}</a>
    </div>
    <div v-if="!active" class="full-desc">
      <span class="item">{{question.answerDate}}</span>
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
    active: {
      default() {
        return false;
      },
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
.title {
  @include bold-title(28px, 18px);
}
.full-desc {
  display: flex;
}
</style>
