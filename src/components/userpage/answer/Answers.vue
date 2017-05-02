<template>
  <div class="answer-module">
    <div class="title">
      <div class="main-header">我的回答</div>
      <div class="switch-wrapper">
        <switch-button :items="sorted"></switch-button>
      </div>
    </div>
    <div v-if="userInfo.answers">
      <answer v-for="answer in userInfo.answers" :data="answer" :self="self()" :key="answer.question" class="list-item">
      </answer>
    </div>
  </div>
</template>

<script type="text/javascript">
import switchButton from '@/components/userpage/smallcomponents/SwitchButton';
import Answer from './Answer';

const OK = 'success';

export default {
  props: {
    userInfo: {
      type: Object,
    },
  },
  data() {
    return {
      sorted: ['按时间排序', '按赞同排序'],
    };
  },
  components: {
    switchButton,
    Answer,
  },
  methods: {
    self() {
      return {
        userName: this.userInfo.userName,
        avatar: this.userInfo.avatar,
        briefDesc: this.userInfo.briefDesc,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../common/scss/mixin';
@import '../../../common/scss/userpage';
.answer-module {
  margin: 0 20px;
  .title {
    display: flex;
    align-items: center;
    height: 50px;
    @include border-bottom;
    .main-header {
      font-weight: 700;
      font-size: 15px;
    }
    .switch-wrapper {
      margin-left: auto;
    }
  }
}
</style>
