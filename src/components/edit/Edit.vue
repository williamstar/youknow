<template>
  <div class="edit-module">
    <user-cover :user-info="userInfo">
      <router-link to="/self/william" class="return-link" slot="return-link">返回我的主页
        <svg viewBox="0 0 10 6" width="10" height="16" aria-hidden="true" style="height: 16px; width: 10px;">
          <title></title>
          <g>
            <path d="M8.716.217L5.002 4 1.285.218C.99-.072.514-.072.22.218c-.294.29-.294.76 0 1.052l4.25 4.512c.292.29.77.29 1.063 0L9.78 1.27c.293-.29.293-.76 0-1.052-.295-.29-.77-.29-1.063 0z"></path>
          </g>
        </svg>
      </router-link>
      <user-info-form :user-info="userInfo" slot="body"></user-info-form>
    </user-cover>
  </div>
</template>

<script type="text/javascript">
import userCover from '../userpage/smallcomponents/UserCover';
import userInfoForm from './UserInfoForm';

const OK = 'success';

export default {
  data() {
    return {
      userInfo: {},
    };
  },
  created() {
    this
      .$http
      .get('/api/userinfo')
      .then((res) => {
        res = res.body;
        if (res.status === OK) {
          this.userInfo = res.data;
        }
      });
  },
  components: {
    userCover,
    userInfoForm,
  },
};
</script>

<style lang="scss" scoped>
.return-link {
  float: right;
  line-height: 30px;
  font-size: 14px;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans CJK SC, WenQuanYi Micro Hei, Arial, sans-serif;
  color: #8590a6;
  svg {
    margin: 0 4px 0 8px;
    vertical-align: text-bottom;
    fill: currentColor;
    transform: rotate(-90deg);
  }
}

.edit-module {
  width: 1000px;
  margin: 0 auto;
  padding-top: 10px;
}
</style>
