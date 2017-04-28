<template>
  <div class="ask-module">
    <div class="title">
      我的提问
    </div>
    <div class="questions">
      <question v-for="question in userInfo.questions" :question="question" class="list-item" :key="question.title">
      </question>
    </div>
  </div>
</template>

<script type="text/javascript">
import Question from './Question';

const OK = 'success';

export default {
  props: {
    userInfo: {
      type: Object,
    },
  },
  data() {
    return {
      questions: [],
    };
  },
  components: {
    Question,
  },
};
</script>

<style lang="scss" scoped>
@import '../../../common/scss/userpage';
@import '../../../common/scss/mixin';
.ask-module {
  padding: 0 20px;
  .title {
    @include bold-title(50px);
    @include border-bottom;
    color: #262626;
  }
}
</style>
