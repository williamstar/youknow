<template>
  <div class="topics-module">
    <div v-if="detail.followingPart"
         class="topics">
      <div v-for="topic in detail.followingPart.topics"
           class="topic list-item">
        <img alt="话题图片"
             class="avatar"
             :src="topic.avatar">
        <div class="content">
          <div class="bold-title">{{topic.title}}</div>
          <span class="answer-num">{{topic.answerNum}} 个回答</span>
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
.topic {
  display: flex;
  .content {
    &:hover {
      color: inherit;
    }
  }
  .answer-num {
    font-size: 14px;
    color: #175199;
    cursor: initial;
  }
}
</style>
