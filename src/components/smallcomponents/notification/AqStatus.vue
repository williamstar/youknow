<template>
  <div role="aq-status-module">
    <div v-for="item in data" class="notification-item">
      <a href="#" v-for="(user, index) in item.userList" class="link">{{user}}<span v-if="index !== item.userList.length - 1">、</span></a> {{item.status}} <a href="#" class="link">{{item.question}}</a>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    data: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../common/scss/notification';
</style>
