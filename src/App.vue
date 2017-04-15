<template>
  <div id="app"
       :class="headerStyle">
    <component :user="user"
               :is="header">
      <user-slot v-if="which === 'userslot'"></user-slot>
      <answer-slot v-else></answer-slot>
    </component>

    <keep-alive>
      <router-view :user="user"></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/javascript">
import nheader from '@/components/header/Header';
import uheader from '@/components/header/UHeader';
import userslot from '@/components/header/UserSlot';
import answerslot from '@/components/header/AnswerSlot';

const OK = 'success';

export default {
  name: 'app',
  data() {
    return {
      user: {},
      header: 'uHeader',
      which: 'answerslot',
    };
  },
  created() {
    this.$http.get('/api/user').then((res) => {
      res = res.body;
      if (res.status === OK) {
        this.user = res.data;
      }
    });
  },
  computed: {
    headerStyle() {
      return this.header === 'nHeader' ? 'old-version' : 'new-version';
    },
  },
  components: {
    nHeader: nheader,
    uHeader: uheader,
    userSlot: userslot,
    answerSlot: answerslot,
  },
};
</script>

<style lang="scss">
.old-version {
  padding-top: 46px;
}

.new-version {
  padding-top: 53px;
}
</style>
