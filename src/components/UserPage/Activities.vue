<template>
  <div class="activities-module">
    <div class="title">
      我的动态
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    userInfo: {
      type: Object,
    },
  },
  data() {
    return {
      behave: {
        pin: '分享',
        question: '',
        answer: '回答',
      },
    };
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
@import '../../common/scss/userpage';
.activities-module {
  padding: 0 20px;
  .title {
    @include bold-title(50px);
    @include border-bottom;
  }
}
</style>
