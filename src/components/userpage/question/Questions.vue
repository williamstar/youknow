<template>
  <div class="ask-module">
    <div class="title">
      我的提问
    </div>
    <div class="questions">
      <question v-for="question in questions" :question="question" class="list-item" :key="question.title">
      </question>
    </div>
  </div>
</template>

<script type="text/javascript">
import Question from './Question';

const OK = 'success';

export default {
  data() {
    return {
      questions: [],
    };
  },
  created() {
    this.$http.get('/api/fake_answers_or_questions').then((res) => {
      res = res.body;
      if (res.status === OK) {
        this.questions = res.data;
      }
    });
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
