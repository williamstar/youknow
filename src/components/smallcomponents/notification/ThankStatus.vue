<template>
  <div>
    <div v-for="answer in data" class="notification-item">
      获得一次感谢 <a href="#" class="question-title link">{{answer.question}}</a> 来自 <a href="#" class="user link">{{answer.userName}}</a>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    data: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../common/scss/notification';

</style>
