<template>
  <div class="uheader">
    <div class="inner-header" :class="{'lift-up': switchHeader}">
      <router-link to="/" class="logo-wrapper">
        <svg viewBox="0 0 200 91" class="Icon Icon--logo" width="64" height="30" aria-hidden="true" style="fill: rgb(15, 136, 235); height: 30px; width: 64px;">
          <g>
            <path d="M53.29 80.035l7.32.002 2.41 8.24 13.128-8.24h15.477v-67.98H53.29v67.978zm7.79-60.598h22.756v53.22h-8.73l-8.718 5.473-1.587-5.46-3.72-.012v-53.22zM46.818 43.162h-16.35c.545-8.467.687-16.12.687-22.955h15.987s.615-7.05-2.68-6.97H16.807c1.09-4.1 2.46-8.332 4.1-12.708 0 0-7.523 0-10.085 6.74-1.06 2.78-4.128 13.48-9.592 24.41 1.84-.2 7.927-.37 11.512-6.94.66-1.84.785-2.08 1.605-4.54h9.02c0 3.28-.374 20.9-.526 22.95H6.51c-3.67 0-4.863 7.38-4.863 7.38H22.14C20.765 66.11 13.385 79.24 0 89.62c6.403 1.828 12.784-.29 15.937-3.094 0 0 7.182-6.53 11.12-21.64L43.92 85.18s2.473-8.402-.388-12.496c-2.37-2.788-8.768-10.33-11.496-13.064l-4.57 3.627c1.363-4.368 2.183-8.61 2.46-12.71H49.19s-.027-7.38-2.372-7.38zm128.752-.502c6.51-8.013 14.054-18.302 14.054-18.302s-5.827-4.625-8.556-1.27c-1.874 2.548-11.51 15.063-11.51 15.063l6.012 4.51zm-46.903-18.462c-2.814-2.577-8.096.667-8.096.667s12.35 17.2 12.85 17.953l6.08-4.29s-8.02-11.752-10.83-14.33zM199.99 46.5c-6.18 0-40.908.292-40.953.292v-31.56c1.503 0 3.882-.124 7.14-.376 12.773-.753 21.914-1.25 27.427-1.504 0 0 3.817-8.496-.185-10.45-.96-.37-7.24 1.43-7.24 1.43s-51.63 5.153-72.61 5.64c.5 2.756 2.38 5.336 4.93 6.11 4.16 1.087 7.09.53 15.36.277 7.76-.5 13.65-.76 17.66-.76v31.19h-41.71s.88 6.97 7.97 7.14h33.73v22.16c0 4.364-3.498 6.87-7.65 6.6-4.4.034-8.15-.36-13.027-.566.623 1.24 1.977 4.496 6.035 6.824 3.087 1.502 5.054 2.053 8.13 2.053 9.237 0 14.27-5.4 14.027-14.16V53.93h38.235c3.026 0 2.72-7.432 2.72-7.432z" fill-rule="evenodd"></path>
          </g>
        </svg>
      </router-link>
      <nav class="navigation">
        <router-link to="/" class="nav-item">
          首页
        </router-link>
        <router-link to="/discovery" class="nav-item">
          发现
        </router-link>
        <router-link to="/topic" class="nav-item">
          话题
        </router-link>
      </nav>

      <div class="search-box-wrapper">
        <div class="search-bar" :class="{'focus': searchFocus}">
          <input type="text" class="search-box" v-model="search" @focus="toggleFocus" @blur="toggleFocus" placeholder="搜索你感兴趣的内容...">
          <button class="sprite-magnifier" :class="{'has-value': search.length > 0}">
            <svg viewBox="0 0 16 16" class="Icon Icon--search" width="16" height="16" aria-hidden="true" style="height: 16px; width: 16px;">
              <title></title>
              <g>
                <path d="M12.054 10.864c.887-1.14 1.42-2.57 1.42-4.127C13.474 3.017 10.457 0 6.737 0S0 3.016 0 6.737c0 3.72 3.016 6.737 6.737 6.737 1.556 0 2.985-.533 4.127-1.42l3.103 3.104c.765.46 1.705-.37 1.19-1.19l-3.103-3.104zm-5.317.925c-2.786 0-5.053-2.267-5.053-5.053S3.95 1.684 6.737 1.684 11.79 3.95 11.79 6.737 9.522 11.79 6.736 11.79z">
                </path>
              </g>
            </svg>
          </button>
        </div>
        <button class="question" :class="{'zoom': searchFocus}">提问</button>
      </div>
      <div class="personal">
        <button class="notification-button" @click="$emit('toggle:window', 'notification')">
          <svg viewBox="0 0 20 22" class="Icon Icon--news" width="20" height="20" aria-hidden="true" style="height: 20px; width: 20px;">
            <title></title>
            <g>
              <path d="M2.502 14.08C3.1 10.64 2 3 8.202 1.62 8.307.697 9.08 0 10 0s1.694.697 1.797 1.62C18 3 16.903 10.64 17.497 14.076c.106 1.102.736 1.855 1.7 2.108.527.142.868.66.793 1.206-.075.546-.542.95-1.09.943H1.1C.55 18.34.084 17.936.01 17.39c-.075-.547.266-1.064.794-1.206.963-.253 1.698-1.137 1.698-2.104zM10 22c-1.417.003-2.602-1.086-2.73-2.51-.004-.062.02-.124.063-.17.043-.045.104-.07.166-.07h5c.063 0 .124.025.167.07.044.046.067.108.063.17-.128 1.424-1.313 2.513-2.73 2.51z"></path>
            </g>
          </svg>
        </button>
        <button class="message-button" @click="$emit('toggle:window', 'message')">
          <svg viewBox="0 0 20 20" class="Icon Icon--message" width="20" height="20" aria-hidden="true" style="height: 20px; width: 20px;">
            <title></title>
            <g>
              <path d="M9 0C3.394 0 0 4.13 0 8c0 1.654.522 3.763 2.014 5.566.314.292.518.82.454 1.17-.165 1.488-.842 1.905-.842 1.905-.328.332.105.67.588.582 1.112-.2 2.07-.58 3.526-1.122.4-.202.464-.147.78-.078C11.524 17.764 18 14 18 8c0-3.665-3.43-8-9-8z"></path>
              <path d="M19.14 9.628c.758.988.86 2.01.86 3.15 0 1.195-.62 3.11-1.368 3.938-.21.23-.354.467-.308.722.12 1.073.614 1.5.614 1.5.237.24-.188.563-.537.5-.802-.145-1.494-.42-2.545-.81-.29-.146-.336-.106-.563-.057-2.043.712-4.398.476-6.083-.926 5.964-.524 8.726-3.03 9.93-8.016z"></path>
            </g>
          </svg>
        </button>
        <button class="userList-button" @click="$emit('toggle:window', 'userList')"><img :src="user.avatar" width="30" height="30" alt="用户头像"></button>
      </div>
    </div>
    <div class="inner-bottom" :class="{'lift-up': switchHeader}">
      <slot>
      </slot>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    user: {
      type: Object,
    },
    switchHeader: {
      type: Boolean,
    },
  },
  data() {
    return {
      search: '',
      searchFocus: false,
    };
  },
  methods: {
    toggleFocus() {
      this.searchFocus = !this.searchFocus;
    },
    toggleHeader() {
      this.switchHeader = !this.switchHeader;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../common/scss/mixin';
@import '../../common/scss/color';

svg {
  vertical-align: text-bottom;
  fill: currentColor;
}

.uheader {
  position: fixed;
  overflow: hidden;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  height: 52px;
  background: #fff;
  border-bottom: 1px solid rgba(30, 35, 42, .06);
  box-shadow: 0 1px 3px 0 rgba(0, 34, 77, .05);
  background-clip: content-box;
  .inner-header {
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 auto;
    width: 1000px;
    height: 52px;
    transition: transform .3s ease;
    &.lift-up {
      transform: translateY(-100%);
    }
    .logo-wrapper {
      font-size: 0;
    }
    .navigation {
      display: flex;
      margin: 0 18px 0 27px;
      height: 30px;
      a {
        padding: 0 15px;
        &:first-child {
          padding-left: 0;
        }
        font-family: Helvetica Neue,
        Helvetica,
        PingFang SC,
        Hiragino Sans GB,
        Microsoft YaHei,
        Noto Sans CJK SC,
        WenQuanYi Micro Hei,
        Arial,
        sans-serif;
        font-size: 15px;
        line-height: 30px;
        color: $n-gray;
        &:hover {
          color: #175199;
        }
      }
    }
    .search-box-wrapper {
      position: relative;
      width: 400px;
      .search-bar {
        position: relative;
        display: inline-block;
        vertical-align: top;
        padding: 4px 10px;
        width: 326px;
        height: 34px;
        border: 1px solid #e7eaf1;
        border-radius: 3px;
        box-sizing: border-box;
        background: #f7f8fa;
        transition: all .3s ease;
        &.focus {
          width: 400px;
          border: 1px solid $n-lgray;
          background: #fff;
          .sprite-magnifier {
            svg {
              fill: #0f88eb;
            }
          }
        }
        .search-box {
          width: 100%;
          height: 24px;
          background: transparent;
        }
        .sprite-magnifier {
          position: absolute;
          right: -1px;
          top: -1px;
          border-radius: 0 3px 3px 0;
          width: 40px;
          height: 34px;
          padding: 0 12px;
          background-color: transparent;
          transition: background .3s ease;
          &.has-value {
            background: #0f88eb;
            svg {
              fill: #fff;
            }
          }
          svg {
            position: absolute;
            transform: translateY(-50%);
            left: 12px;
            height: 16px;
            width: 16px;
            fill: #afbdcf;
            transition: fill .3s ease;
          }
        }
      }
      .question {
        position: absolute;
        right: 0;
        margin-left: 16px;
        padding: 1px 14px;
        border: 1px solid #0f88eb;
        border-radius: 3px;
        line-height: 30px;
        font-size: 14px;
        color: #fff;
        background: #0f88eb;
        border: 1px solid #0f88eb;
        transition: all .3s ease;
        &.zoom {
          opacity: 0;
          transform: scale(0);
        }
      }
    }
    .personal {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex: 1;
      font-size: 0;
      svg {
        fill: $n-lgray;
      }
      .message-button {
        margin-right: 40px;
      }
      .notification-button {
        margin-right: 40px;
      }
      .userList-button {
        font-size: 0;
      }
    }
  }
  .inner-bottom {
    width: 1000px;
    height: 52px;
    margin: 0 auto;
    transition: transform .3s ease;
    &.lift-up {
      transform: translateY(-100%);
    }
  }
}
</style>
