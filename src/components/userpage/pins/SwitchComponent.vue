<template>
  <div v-if="userInfo.pinsPart">
    <component v-for="data in userInfo.pinsPart[`${currentComponent}s`]" :is="currentComponent" :data="data" :self="self()" :key="key(data)" class="list-item"></component>
  </div>
</template>

<script type="text/javascript">
import post from '@/components/userpage/pins/Post';
import column from '@/components/userpage/pins/Column';
import pin from '@/components/userpage/pins/Pin';


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
    key(obj) {
      if (this.currentComponent === 'pins') {
        return obj.shareThing.title;
      }
      return obj.title;
    },
    self() {
      return {
        userName: this.userInfo.userName,
        avatar: this.userInfo.avatar,
        briefDesc: this.userInfo.briefDesc,
      };
    },
  },
  computed: {
    currentComponent() {
      let sarr = this.$route.fullPath.split('/');
      return sarr[sarr.length - 1] === '' ? 'pin' : sarr[sarr.length - 1].slice(0, -1);
    },
  },
  components: {
    post,
    column,
    pin,
  },
};
</script>

<style lang="scss" scoped>

</style>
