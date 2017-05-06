<template>
  <div class="user-info-module">
    <div class="user-info-page">
      <user-cover :userInfo="userInfo">
        <div class="detail-content" slot="body">
          <div class="brief-intro" v-if="isBrief">
            <div class="item current-job">
              <svg viewBox="0 0 20 18" width="13" height="16" aria-hidden="true" style="height: 16px; width: 13px;">
                <title></title>
                <g>
                  <path d="M15 3.998v-2C14.86.89 13.98 0 13 0H7C5.822 0 5.016.89 5 2v2l-3.02-.002c-1.098 0-1.97.89-1.97 2L0 16c0 1.11.882 2 1.98 2h16.033c1.1 0 1.98-.89 1.987-2V6c-.007-1.113-.884-2.002-1.982-2.002H15zM7 4V2.5s-.004-.5.5-.5h5c.5 0 .5.5.5.5V4H7z"></path>
                </g>
              </svg>
              {{userInfo.currentJob}}
            </div>
            <div class="item sex">
              <div v-if="userInfo.gender === 'm'">
                <svg width="14" height="16" viewBox="0 0 14 14" aria-hidden="true" style="height: 16px; width: 14px;">
                  <title></title>
                  <g>
                    <path d="M3.025 10.64c-1.367-1.366-1.367-3.582 0-4.95 1.367-1.366 3.583-1.366 4.95 0 1.367 1.368 1.367 3.584 0 4.95-1.367 1.368-3.583 1.368-4.95 0zm10.122-9.368c-.002-.414-.34-.75-.753-.753L8.322 0c-.413-.002-.746.33-.744.744.002.413.338.75.75.752l2.128.313c-.95.953-1.832 1.828-1.832 1.828-2.14-1.482-5.104-1.27-7.013.64-2.147 2.147-2.147 5.63 0 7.777 2.15 2.148 5.63 2.148 7.78 0 1.908-1.91 2.12-4.873.636-7.016l1.842-1.82.303 2.116c.003.414.34.75.753.753.413.002.746-.332.744-.745l-.52-4.073z" fill-rule="evenodd"></path>
                  </g>
                </svg>
              </div>
              <div v-else>
                <svg width="14" height="16" viewBox="0 0 12 16" class="Icon Icon--female" aria-hidden="true" style="height: 16px; width: 14px;">
                  <title></title>
                  <g>
                    <path d="M6 0C2.962 0 .5 2.462.5 5.5c0 2.69 1.932 4.93 4.485 5.407-.003.702.01 1.087.01 1.087H3C1.667 12 1.667 14 3 14s1.996-.006 1.996-.006v1c0 1.346 2.004 1.346 1.998 0-.006-1.346 0-1 0-1S7.658 14 8.997 14c1.34 0 1.34-2-.006-2.006H6.996s-.003-.548-.003-1.083C9.555 10.446 11.5 8.2 11.5 5.5 11.5 2.462 9.038 0 6 0zM2.25 5.55C2.25 3.48 3.93 1.8 6 1.8c2.07 0 3.75 1.68 3.75 3.75C9.75 7.62 8.07 9.3 6 9.3c-2.07 0-3.75-1.68-3.75-3.75z" fill-rule="evenodd"></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div class="full-intro" v-else>
            <div class="item address" v-if="userInfo.address.length > 0">
              <span class="label">居住地</span><span class="value">{{userInfo.address | formateAddress}}</span>
            </div>
            <div class="item current-job">
              <span class="label">所在行业</span>
              <span class="value">{{userInfo.currentJob}}</span>
            </div>
          </div>
          <div class="content-footer">
            <button class="toggle-detail" @click="toggleBrief">
              <svg viewBox="0 0 10 6" :class="{'rotate': !isBrief}" style="height: 16px; width: 10px;">
                <title></title>
                <g>
                  <path d="M8.716.217L5.002 4 1.285.218C.99-.072.514-.072.22.218c-.294.29-.294.76 0 1.052l4.25 4.512c.292.29.77.29 1.063 0L9.78 1.27c.293-.29.293-.76 0-1.052-.295-.29-.77-.29-1.063 0z"></path>
                </g>
              </svg>
              <span v-if="isBrief">查看详细信息</span>
              <span v-else>收起详细资料</span>
            </button>
            <a href="#/self/edit" class="button-wrapper">
              <button class="edit-profile">
                编辑个人资料
              </button>
            </a>
          </div>
        </div>
      </user-cover>
    </div>
    <div class="user-interactive" ref="detailHook">
      <div class="main-interactive-wrapper">
        <div class="main-interactive">
          <nav-link :user-info="userInfo"></nav-link>
          <router-view :user-info="userInfo"></router-view>
        </div>
      </div>
      <div class="focus-part">
        <div class="self-achievement">
          <div class="title">
            个人成就
          </div>
          <div class="achievements-wrapper">
            <div class="achievement" v-for="achievement in userInfo.achievements">
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" style="height: 16px; width: 16px;">
                <title></title>
                <g>
                  <path d="M8 15.5C3.858 15.5.5 12.142.5 8 .5 3.858 3.858.5 8 .5c4.142 0 7.5 3.358 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5zm3.032-11.643c-.22-.214-.574-.208-.79.013L5.1 9.173 6.778 10.8l5.142-5.303c.215-.222.21-.575-.01-.79l-.878-.85zm-6.77 7.107L4 12l1.028-.293.955-.27L4.503 10l-.242.964z" fill-rule="evenodd"></path>
                </g>
              </svg><a href="#">{{achievement}}</a>
            </div>
          </div>
        </div>
        <div class="focus-status">
          <router-link to="/self/william/following" class="focus-item">关注了
            <div class="value" v-if="userInfo.followingPart">{{userInfo.followingPart.followings.length}}</div>
          </router-link>
          <router-link to="/self/william/followers" class="focus-item">关注者
            <div class="value" v-if="userInfo.followingPart">{{userInfo.followingPart.followers.length}}</div>
          </router-link>
        </div>
        <ul class="other-focus">
          <li>
            <router-link to="/self/william/following/topics">关注的话题<span v-if="userInfo.followingPart">{{userInfo.followingPart.topics.length}}</span></router-link>
          </li>
          <li>
            <router-link to="/self/william/following/columns">关注的专栏<span v-if="userInfo.followingPart">{{userInfo.followingPart.columns.length}}</span></router-link>
          </li>
          <li>
            <router-link to="/self/william/following/questions">关注的问题<span v-if="userInfo.followingPart">{{userInfo.followingPart.questions.length}}</span></router-link>
          </li>
          <li>
            <router-link to="/self/william/following/collections">关注的收藏夹<span v-if="userInfo.followingPart">{{userInfo.followingPart.collections.length}}</span></router-link>
          </li>
        </ul>
        <div class="explored-status">
          个人主页被浏览 {{userInfo.exploredTimes}}次
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script type="text/javascript">
import navLink from './smallcomponents/NavLink';
import transparentFileElm from '../smallcomponents/TransparentFileElm';
import userCover from './smallcomponents/UserCover';

const OK = 'success';

export default {
  data() {
    return {
      isBrief: true,
      userInfo: {

      },
      switchHeader: false,
    };
  },
  activated() {
    document.title = `${this.userInfo.userName} - 知乎`;
    // 增加对滚动条的监听
    document.addEventListener('scroll', this.toggleHeaderHandler);
  },
  deactivated() {
    // 解除监听
    document.removeEventListener('scroll', this.toggleHeaderHandler);
  },
  created() {
    this.$http.get('/api/userinfo').then((res) => {
      res = res.body;
      if (res.status === OK) {
        this.userInfo = res.data;
      }
    });
  },
  methods: {
    toggleBrief() {
      this.isBrief = !this.isBrief;
    },
    toggleHeaderHandler() {
      if (window.scrollY > this.$refs.detailHook.offsetTop) {
        if (!this.switchHeader) {
          this.$emit('change-header', 'userslot', this.userInfo);
          this.switchHeader = true;
        }
      } else {
        if (this.switchHeader) {
          this.$emit('change-header', 'userslot', this.userInfo);
          this.switchHeader = false;
        }
      }
    },
  },
  filters: {
    formateAddress(addressArr) {
      let currentAddr = `现居${addressArr[0]}`;
      let oldAddr = addressArr.slice(1).join('、');
      return `${currentAddr}，曾在${oldAddr}住过`;
    },
  },
  components: {
    navLink,
    transparentFileElm,
    userCover,
  },
};
</script>

<style lang="scss" scoped>
@import '../../common/scss/color';
@import '../../common/scss/mixin';

.user-info-module {
  margin: 0 auto;
  padding-top: 10px;
  width: 1000px;
  min-height: 100vh;
  .user-interactive {
    margin: 10px 0;
    display: flex;
    .main-interactive {
      vertical-align: top;
      margin-right: 4px;
      position: relative;
      width: 692px;
      border: 1px solid #e7eaf1;
      background: #fff;
    }
    .focus-part {
      margin-left: auto;
      width: 296px;
      .self-achievement {
        border: 1px solid #e7eaf1;
        background: #fff;
        color: #555;
        .title {
          overflow: hidden;
          padding: 0 14px;
          height: 50px;
          white-space: nowrap;
          text-overflow: ellipsis;
          line-height: 50px;
          font-size: 15px;
          font-weight: 500;
          @include border-bottom(#e7eaf1);
        }
        .achievements-wrapper {
          padding: 12px 0;
          .achievement {
            padding: 6px 16px;
            font-size: 15px;
            svg {
              margin-right: 12px;
              fill: #9fadc7;
            }
            a:hover {
              color: #175199;
            }
          }
        }
      }
      .focus-status {
        display: flex;
        margin-top: 10px;
        padding: 16px 0;
        height: 80px;
        text-align: center;
        box-sizing: border-box;
        border: 1px solid #e7eaf1;
        background: #fff;
        .focus-item {
          flex: 1;
          color: #9fadc7;
          .value {
            color: #555;
          }
          &:hover {
            color: #175199;
            .value {
              color: #175199;
            }
          }
          &:first-child {
            border-right: 1px solid #e7eaf1;
          }
        }
      }
      .other-focus {
        margin-top: 10px;
        @include border-bottom;
        li {
          height: 46px;
          line-height: 46px;
          border-top: 1px solid #f0f2f7;
          a {
            display: block;
            span {
              float: right;
              color: #8590a6;
            }
            &:hover {
              color: #175199;
              span {
                color: inherit;
              }
            }
          }
        }
      }
      .explored-status {
        margin-top: 6px;
        padding: 10px 0;
        font-size: 14px;
        line-height: 1.8;
        @include border-bottom;
        color: #8590a6;
      }
    }
  }
}
</style>
