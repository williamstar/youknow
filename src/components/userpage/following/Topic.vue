<template>
  <div class="topic">
    <img alt="话题图片" class="avatar" width="60" height="60" :src="topic.avatar">
    <div class="content">
      <div class="bold-title">{{topic.title}}</div>
      <span v-if="!active" class="answer-num">{{topic.answerNum}} 个回答</span>
      <div v-else class="desc">{{topic.desc}}</div>
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
    topic() {
      return this.data;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../common/scss/userpage';
@import '../../../common/scss/mixin';
.topic {
  display: flex;
  img {
    flex: 0 0 60px;
  }
  .content {
    overflow: hidden;
    &:hover {
      color: inherit;
    }
    .desc {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: #555;
    }
    .answer-num {
      font-size: 14px;
      color: #175199;
      cursor: initial;
    }
  }
}
</style>
