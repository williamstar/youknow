<template>
  <div class="topic-list">
    <a v-for="(topic, index) in topics" :class="{'dark': topic.id === currentTopic.id}" href="#" @click.prevent="$emit('switch', index)" class="topic-block">{{topic.value}}</a>
  </div>
</template>

<script>
  export default {
    props: {
      topics: {
        type: Array,
      },
      currentTopic: {
        type: Object,
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '../../common/scss/color';
  .topic-list {
    width: 100%;
    padding: 18px 0 9px 8px;
    border-bottom: 1px solid #eee;
    .topic-block {
      display: inline-block;
      padding: 0 10px;
      margin: 0 10px 10px 0;
      &:last-child {
        margin:0 0 10px 0;
      }
      &:first-chlid {
        margin-left: 0;
      }
      color: $df-dblue;
      border: 1px solid #daecf5;
      border-radius: 30px;
      &:hover,
      &.dark {
        color: #fff;
        background: $df-ddblue;
      }
    }
  }
</style>
