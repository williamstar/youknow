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
    <div v-if="userList" class="bounce-window-wrapper user-list">
      <user-list></user-list>
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
        this.userList = true;
      }
      this.$nextTick(() => {
        // 下一次更新才能检查元素
        let index = 0;
        let wrapper = document.querySelector('.bounce-window-wrapper');
        let buttonPosition = document.querySelector(`.${selector}-button`);
        let buttonCenter = buttonPosition.getBoundingClientRect().left +
          (buttonPosition.clientWidth / 2);
        wrapper.style.left = `${buttonCenter - (wrapper.clientWidth / 2)}px`;
        debugger;
        this.cacheNodes.push(document.querySelector(`.${selector}`));
        while (index < this.cacheNodes.length) {
          this.cacheNodes.push(...this.cacheNodes[index].children);
          index += 1;
        }
        document.addEventListener('mousedown', this.resolveToggle);
      });
    },
    resolveToggle(e) {
      if (!this.cacheNodes.some(elm => elm === e.target)) {
        this.userList = false;
        this.notification = false;
        this.message = false;
        document.removeEventListener('mousedown', this.resolveToggle);
      }
    },
  },
  watch: {
    // 监听路由变化，如果当前的userList打开的话，就关闭它，并移除监听器
    $route() {
      if (this.userList) {
        this.userList = false;
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
  &.user-list {
    top: 57px;
  }
}
</style>
