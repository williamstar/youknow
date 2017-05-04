<template>
  <div id="app" :class="headerStyle">
    <component :user="user" :switch-header="switchHeader" @toggle:notification="toggleNotification" :is="header">
      <user-slot :user-info="userInfo" v-if="which === 'userslot'"></user-slot>
      <answer-slot v-else></answer-slot>
    </component>

    <keep-alive>
      <router-view :user="user" @change-header="toggleHeader"></router-view>
    </keep-alive>
    <div v-show="notification" class="notification-wrapper">
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
      selfList: false,
      notificationCacheNodes: [],
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
    toggleNotification() {
      this.notification = true;
      document.querySelector('.notification-button');
      this.$nextTick(() => {
        // 下一次更新查能检查元素
        if (this.notificationCacheNodes.length === 0) {
          let index = 0;
          this.notificationCacheNodes.push(document.querySelector('.notification'));
          while (index < this.notificationCacheNodes.length) {
            this.notificationCacheNodes.push(...this.notificationCacheNodes[index].children);
            index += 1;
          }
        }
        document.addEventListener('mousedown', this.resolveNotification);
      });
    },
    resolveNotification(e) {
      if (!this.notificationCacheNodes.some(elm => elm === e.target)) {
        this.notification = false;
        document.removeEventListener('mousedown', this.resolveNotification);
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

.notification-wrapper {
  z-index: 200;
  position: fixed;
  top: 52px;
}
</style>
