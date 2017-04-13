<template>
  <div>
    <div class="header">
      <div class="content-wrapper clearfix">
        <div class="logo"></div>
        <div class="search-wrapper">
          <input class="search"
                 type="text"
                 placeholder="搜索你感兴趣的内容...">
          <button class="search-btn"><i class="sprite-search"></i></button>
        </div>
        <div class="nav">
          <router-link to="/"
                       class="nav-item"
                       active-class="active"
                       exact>首页</router-link>
          <router-link to="topic"
                       class="nav-item"
                       active-class="active">话题</router-link>
          <router-link to="discovery"
                       class="nav-item"
                       active-class="active">发现</router-link>
          <span class="nav-item">消息</span>
        </div>
        <div class="user-wrapper">
          <img :src="user.avatar"
               width="27"
               height="27"
               class="avatar"><span class="username">{{user.user_name}}</span>
        </div>
        <button class="question">提问</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../common/scss/color';
@import '../../common/scss/mixin';

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  height: 46px;
  max-width: 100%;
  background: linear-gradient(to bottom, #086ed5, #055db5);
  border-bottom: 1px solid #044e97;
  box-sizing: content-box;
  .content-wrapper {
    width: 960px;
    @media screen and (max-width: 960px) {
      width: auto;
    }
    height: 100%;
    margin: 0 auto;
    font-size: 0;
    .logo {
      display: inline-block;
      vertical-align: top;
      width: 61px;
      height: 45px;
      margin-left: 4px;
      background: url(logo.png) no-repeat;
      background-position: 0 8px;
    }
    .search-wrapper {
      display: inline-block;
      vertical-align: top;
      height: 31px;
      margin: 7px 0px 0 12px;
      .search {
        display: inline-block;
        vertical-align: top;
        width: 367px;
        @media screen and (max-width: 960px) {
          width: 260px;
        }
        @media screen and (max-width: 840px) {
          width: 180px;
        }
        padding: 7px;
        border: 0px;
        border-radius: 3px 0 0 3px;
        font-size: 14px;
        line-height: 17px;
        color: #49525c;
        background: #e1eaf2;
        &:focus {
          background: #fff;
        }
      }
      .search-btn {
        width: 38px;
        height: 100%;
        padding: 8px 11px;
        font-size: 14px;
        background: linear-gradient(to bottom, #0e7bef, #0d73da);
        .sprite-search {
          display: block;
          width: 15px;
          height: 15px;
          @include icon("/static/images/sprites.auto.2bb79a7e.png", -82px, 0);
        }
      }
    }
    .nav {
      display: inline-block;
      vertical-align: top;
      text-align: center;
      margin-left: 19px;
      font-size: 0;
      height: 100%;
      .nav-item {
        display: inline-block;
        width: 48px;
        padding: 0 10px;
        box-sizing: border-box;
        line-height: 45px;
        font-size: 14px;
        cursor: pointer;
        color: #fff;
        &.active {
          background-color: $df-dblue;
        }
      }
    }
    .question {
      float: right;
      padding: 5px;
      margin-top: 7px;
      height: 32px;
      width: 66px;
      font-size: 14px;
      border: 1px solid $df-dblue;
      border-radius: 3px;
      box-sizing: border-box;
      box-shadow: 0 1px 2px rgba(0, 0, 0, .05), inset 0 1px 1px rgba(255, 255, 255, .15);
      background: $df-lblue;
      cursor: pointer;
      color: #fff;
    }
    .user-wrapper {
      float: right;
      display: flex;
      min-width: 120px;
      margin-left: 15px;
      height: 45px;
      align-items: center;
      cursor: pointer;
      .avatar {
        margin-left: 5px;
      }
      .username {
        margin-left: 7px;
        font-size: 14px;
        color: #fff;
        line-height: 45px;
      }
    }
  }
}
</style>
