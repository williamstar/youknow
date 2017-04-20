<template>
  <div class="ask-module">
    <div class="title">
      我的提问
    </div>
    <div class="questions">
      <div v-for="question in questions"
           class="question">
        <div class="question-val">
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
.ask-module {
  padding: 0 20px;
  .title {
    height: 50px;
    line-height: 50px;
    font-size: 15px;
    font-weight: 700;
    border: 1px solid #f0f2f7;
    color: #262626;
  }
  .questions {
    .question {
      padding: 16px 0;
      border-bottom: 1px solid #f0f2f7;
      .question-val {
        font-size: 20px;
        font-weight: 400;
        line-height: 1.6;
      }
      .full-desc {
        display: flex;
        .item {
          &:before {
            margin: 0 5px;
            content: "\B7";
          } //对第一个修改样式
          &:first-child {
            &:before {
              display: none;
            }
          }
          margin-top: 5px;
          color: #8590a6;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
