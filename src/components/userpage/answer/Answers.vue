<template>
  <div class="answer-module">
    <div class="title">
      <div class="main-header">我的回答</div>
      <div class="switch-wrapper">
        <switch-button :items="sorted"></switch-button>
      </div>
    </div>
    <div class="main-content">
      <div class="dynamics">
        <answer v-for="dynamic in dynamics" :dynamic="dynamic" :user="userCard" :key="dynamic.question"class="list-item">
        </answer>
      </div>
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
      dynamics: [],
      sorted: ['按时间排序', '按赞同排序'],
    };
  },
  created() {
    this.$http.get('/api/fake_answers_or_questions').then((res) => {
      res = res.body;
      if (res.status === OK) {
        this.dynamics = res.data;
        this.briefControll = this.dynamics.map(_ => false);
      }
    });
  },
  components: {
    switchButton,
    Answer,
  },
  computed: {
    userCard() {
      let data = {};
      if (this.userInfo) {
        data = {
          userName: this.userInfo.userName,
          avatar: this.userInfo.avatar,
          briefDesc: this.userInfo.briefDesc,
        };
      }
      return data;
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
