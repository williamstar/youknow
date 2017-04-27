<template>
  <div v-if="userInfo.followingPart">
    <component v-for="data in userInfo.followingPart[dataKey]" :data="data" :is="currentComponent" :key="key(data)" class="list-item">
    </component>
  </div>
</template>

<script type="text/javascript">
import userIntro from '@/components/userpage/following/smallcomponents/UserIntro';
import Collection from '@/components/userpage/following/Collection';
import Question from '@/components/userpage/following/Question';
import Topic from '@/components/userpage/following/Topic';
import Column from '@/components/userpage/following/Column';

export default {
  props: {
    userInfo: {
      type: Object,
    },
  },
  methods: {
    key(data) {

    },
  },
  computed: {
    dataKey() {
      let sarr = this.$route.fullPath.split('/');
      return sarr[sarr.length - 1] === 'following' ? 'followings' : sarr[sarr.length - 1];
    },
    currentComponent() {
      let sarr = this.$route.fullPath.split('/');
      let currentComponent = sarr[sarr.length - 1] === '' ? 'following' : sarr[sarr.length - 1].slice(0, -1);
      if (currentComponent === 'followin' || currentComponent === 'follower') {
        currentComponent = 'userIntro';
      }
      return currentComponent;
    },
  },
  components: {
    Collection,
    Question,
    Topic,
    Column,
    userIntro,
  },
};
</script>
