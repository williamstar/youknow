<template>
  <div v-if="userInfo.activities" class="activities-module">
    <div class="title">
      我的动态
    </div>
    <div>
      <div v-for="item in userInfo.activities" class="list-item">
        <div class="express">
          {{item.behave}}
        </div>
        <component :is="componentName(item)" :data="item[item.type]" :active="true" :author="item[item.type].author" :self="self()"></component>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import Question from '@/components/userpage/question/Question';
import Column from '@/components/userpage/pins/Column';
import Pin from '@/components/userpage/pins/Pin';
import Post from '@/components/userpage/pins/Post';
import fCollection from '@/components/userpage/following/Collection';
import fColumn from '@/components/userpage/following/Column';
import fQuestion from '@/components/userpage/following/Question';
import fTopic from '@/components/userpage/following/Topic';
import Collection from '@/components/userpage/collection/Collection';
import Answer from '@/components/userpage/answer/Answer';

export default {
  props: {
    userInfo: {
      type: Object,
    },
  },
  data() {
    return {
    };
  },
  methods: {
    componentName(obj) {
      // 当类型是关注子组件下的时候，需要修改组件的名字
      if (obj.behave === '关注了') {
        return `f${obj.type.toUpperCase().slice(0, 1) + obj.type.slice(1)}`;
      }
      return obj.type;
    },
    self() {
      return {
        userName: this.userInfo.userName,
        avatar: this.userInfo.avatar,
        briefDesc: this.userInfo.briefDesc,
      };
    },
  },
  components: {
    Question,
    Column,
    Pin,
    Post,
    fColumn,
    fCollection,
    fQuestion,
    fTopic,
    Collection,
    Answer,
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
  .express {
    margin-bottom: 10px;
    font-size: 14px;
    color: #8590a6;
  }
}
</style>

