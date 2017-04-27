<template>
  <div id="app" :class="headerStyle">
    <component :user="user" :switch-header="switchHeader" :is="header">
      <user-slot :user-info="userInfo" v-if="which === 'userslot'"></user-slot>
      <answer-slot v-else></answer-slot>
    </component>

    <keep-alive>
      <router-view :user="user" @change-header="toggleHeader"></router-view>
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
      switchHeader: false,
      which: 'userslot',
      userInfo: {},
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
  methods: {
    toggleHeader(header, data) {
      this.switchHeader = !this.switchHeader;
      if (header === 'userslot') {
        this.userInfo = data;
      } else if (header === 'answerslot') {
        this.question = data;
      }
    },
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
