<template>
  <div class="ask-module">
    <div class="title">
      我的提问
    </div>
    <div class="questions">
      <div v-for="question in questions"
           class="question list-item">
        <div class="max-title">
          <a href="#">{{question.question}}</a>
        </div>
        <div class="full-desc">
          <span class="item">2017-04-15</span>
          <span class="item">0个回答</span>
          <span class="item">0个关注</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
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

};
</script>

<style lang="scss" scoped>
@import '../../common/scss/userpage';
@import '../../common/scss/mixin';
.ask-module {
  padding: 0 20px;
  .title {
    @include bold-title(50px);
    @include border-bottom;
    color: #262626;
  }
  .questions {
    .question {
      border-bottom: 1px solid #f0f2f7;
      .full-desc {
        display: flex;
      }
    }
  }
}
</style>
