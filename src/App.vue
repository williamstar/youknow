<template>
  <div id="app" :class="headerStyle">
    <component :user="user" :switch-header="switchHeader" @toggle:window="toggleWindow" :is="header">
      <user-slot :user-info="userInfo" v-if="which === 'userslot'"></user-slot>
      <answer-slot v-else></answer-slot>
    </component>

    <keep-alive>
      <router-view :user="user" @change-header="toggleHeader"></router-view>
    </keep-alive>
    <div v-if="notification" class="bounce-window-wrapper">
      <notification></notification>
    </div>
    <div v-if="message" class="bounce-window-wrapper">
      <message></message>
    </div>
    <div v-if="userList" class="bounce-window-wrapper">
      <notification></notification>
    </div>
  </div>
</template>

<script type="text/javascript">
import nheader from '@/components/header/Header';
import uheader from '@/components/header/UHeader';
import userslot from '@/components/header/UserSlot';
import answerslot from '@/components/header/AnswerSlot';
import notification from './components/smallcomponents/Notification';
import message from './components/smallcomponents/Message';
import userList from './components/smallcomponents/UserList';

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
      notification: false,
      message: false,
      userList: false,
      cacheNodes: [],
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
    toggleWindow(selector) {
      if (selector === 'notification') {
        this.notification = true;
      } else if (selector === 'message') {
        this.message = true;
      } else {
        this.selfList = true;
      }
      document.querySelector(`.${selector}`);
      this.$nextTick(() => {
        // 下一次更新查能检查元素
        let index = 0;
        this.cacheNodes.push(document.querySelector('.notification'));
        while (index < this.cacheNodes.length) {
          this.cacheNodes.push(...this.cacheNodes[index].children);
          index += 1;
        }
        document.addEventListener('mousedown', this.resolveToggle);
      });
    },
    resolveToggle(e) {
      if (!this.cacheNodes.some(elm => elm === e.target)) {
        this.notification = false;
        this.message = false;
        this.selfList = false;
        document.removeEventListener('mousedown', this.resolveToggle);
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
    notification,
    message,
    userList,
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

.bounce-window-wrapper {
  z-index: 200;
  position: fixed;
  top: 52px;
}
</style>
