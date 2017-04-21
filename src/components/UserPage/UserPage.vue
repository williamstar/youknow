<template>
  <div class="detail-page-module">
    <div class="detail-page">
      <div class="detail-data">
        <div class="cover-wrapper">
          <img :src="detail.cover"
               alt="detail cover"
               class="cover">
          <button class="edit-cover">
            <svg viewBox="0 0 20 16"
                 class="Icon Icon--camera Icon--left"
                 width="14"
                 height="16"
                 aria-hidden="true"
                 style="height: 16px; width: 14px;">
              <title></title>
              <g>
                <path d="M18.094 2H15s-1-2-2-2H7C6 0 5 2 5 2H2C0 2 0 3.967 0 3.967V14c0 2 2.036 2 2.036 2H17c3 0 3-1.983 3-1.983V4c0-2-1.906-2-1.906-2zM10 12c-1.933 0-3.5-1.567-3.5-3.5S8.067 5 10 5s3.5 1.567 3.5 3.5S11.933 12 10 12zm0 1.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm7.5-8c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z"
                      fill-rule="evenodd"></path>
              </g>
            </svg>编辑封面图片
          </button>
        </div>
        <div class="detail-main-wrapper">
          <div class="detail-main">
            <div class="img-wrapper"><img alt="用户照片"
                   width="160"
                   height="160"
                   :src="detail.avatarX"></div>
            <div class="detail">
              <div class="detail-header"><span class="detailname">{{user.userName}}</span><span class="brief-desc">{{detail.briefDesc}}</span></div>
              <div class="detail-content">
                <div class="brief-intro"
                     v-if="isBrief">
                  <div class="item current-job">
                    <svg viewBox="0 0 20 18"
                         width="13"
                         height="16"
                         aria-hidden="true"
                         style="height: 16px; width: 13px;">
                      <title></title>
                      <g>
                        <path d="M15 3.998v-2C14.86.89 13.98 0 13 0H7C5.822 0 5.016.89 5 2v2l-3.02-.002c-1.098 0-1.97.89-1.97 2L0 16c0 1.11.882 2 1.98 2h16.033c1.1 0 1.98-.89 1.987-2V6c-.007-1.113-.884-2.002-1.982-2.002H15zM7 4V2.5s-.004-.5.5-.5h5c.5 0 .5.5.5.5V4H7z"></path>
                      </g>
                    </svg>
                    {{detail.currentJob}}
                  </div>
                  <div class="item sex">
                    <div v-if="detail.gender === 'm'">
                      <svg width="14"
                           height="16"
                           viewBox="0 0 14 14"
                           aria-hidden="true"
                           style="height: 16px; width: 14px;">
                        <title></title>
                        <g>
                          <path d="M3.025 10.64c-1.367-1.366-1.367-3.582 0-4.95 1.367-1.366 3.583-1.366 4.95 0 1.367 1.368 1.367 3.584 0 4.95-1.367 1.368-3.583 1.368-4.95 0zm10.122-9.368c-.002-.414-.34-.75-.753-.753L8.322 0c-.413-.002-.746.33-.744.744.002.413.338.75.75.752l2.128.313c-.95.953-1.832 1.828-1.832 1.828-2.14-1.482-5.104-1.27-7.013.64-2.147 2.147-2.147 5.63 0 7.777 2.15 2.148 5.63 2.148 7.78 0 1.908-1.91 2.12-4.873.636-7.016l1.842-1.82.303 2.116c.003.414.34.75.753.753.413.002.746-.332.744-.745l-.52-4.073z"
                                fill-rule="evenodd"></path>
                        </g>
                      </svg>
                    </div>
                    <div v-else>
                      <svg width="14"
                           height="16"
                           viewBox="0 0 12 16"
                           class="Icon Icon--female"
                           aria-hidden="true"
                           style="height: 16px; width: 14px;">
                        <title></title>
                        <g>
                          <path d="M6 0C2.962 0 .5 2.462.5 5.5c0 2.69 1.932 4.93 4.485 5.407-.003.702.01 1.087.01 1.087H3C1.667 12 1.667 14 3 14s1.996-.006 1.996-.006v1c0 1.346 2.004 1.346 1.998 0-.006-1.346 0-1 0-1S7.658 14 8.997 14c1.34 0 1.34-2-.006-2.006H6.996s-.003-.548-.003-1.083C9.555 10.446 11.5 8.2 11.5 5.5 11.5 2.462 9.038 0 6 0zM2.25 5.55C2.25 3.48 3.93 1.8 6 1.8c2.07 0 3.75 1.68 3.75 3.75C9.75 7.62 8.07 9.3 6 9.3c-2.07 0-3.75-1.68-3.75-3.75z"
                                fill-rule="evenodd"></path>
                        </g>
                      </svg>
                    </div>
                  </div>

                </div>
                <div class="full-intro"
                     v-else>
                  <div class="item address"
                       v-if="detail.address.length > 0">
                    <span class="label">居住地</span><span class="value">{{detail.address | formateAddress}}</span>
                  </div>
                  <div class="item current-job">
                    <span class="label">所在行业</span>
                    <span class="value">{{detail.currentJob}}</span>
                  </div>
                </div>
                <div class="content-footer">
                  <button class="toggle-detail"
                          @click="toggleBrief">
                    <svg viewBox="0 0 10 6"
                         :class="{'rotate': !isBrief}"
                         style="height: 16px; width: 10px;">
                      <title></title>
                      <g>
                        <path d="M8.716.217L5.002 4 1.285.218C.99-.072.514-.072.22.218c-.294.29-.294.76 0 1.052l4.25 4.512c.292.29.77.29 1.063 0L9.78 1.27c.293-.29.293-.76 0-1.052-.295-.29-.77-.29-1.063 0z"></path>
                      </g>
                    </svg>
                    <span v-if="isBrief">查看详细信息</span>
                    <span v-else>收起详细资料</span>
                  </button>
                  <div class="button-wrapper">
                    <button class="edit-profile">
                      编辑个人资料
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="detail-interactive">
        <div class="main-interactive">
          <ul class="interactive-header">
            <li>
              <router-link to="/self/activities">动态</router-link>
            </li>
            <li>
              <router-link to="/self/answers">回答</router-link>
            </li>
            <li>
              <router-link to="/self/pins">分享</router-link>
            </li>
            <li>
              <router-link to="/self/asks">提问</router-link>
            </li>
            <li>
              <router-link to="/self/collections">收藏</router-link>
            </li>
            <li>
              <router-link to="/self/following"
                           :class="{'router-link-active': $route.fullPath.indexOf('followers') !== -1}">关注</router-link>
            </li>
          </ul>
          <router-view :user="user"
                       :detail="detail"></router-view>
        </div>
        <div class="focus-part">
          <div class="self-achievement">
            <div class="title">
              个人成就
            </div>
            <div class="achievements-wrapper">
              <div class="achievement"
                   v-for="achievement in detail.achievements">
                <svg width="16"
                     height="16"
                     viewBox="0 0 16 16"
                     aria-hidden="true"
                     style="height: 16px; width: 16px;">
                  <title></title>
                  <g>
                    <path d="M8 15.5C3.858 15.5.5 12.142.5 8 .5 3.858 3.858.5 8 .5c4.142 0 7.5 3.358 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5zm3.032-11.643c-.22-.214-.574-.208-.79.013L5.1 9.173 6.778 10.8l5.142-5.303c.215-.222.21-.575-.01-.79l-.878-.85zm-6.77 7.107L4 12l1.028-.293.955-.27L4.503 10l-.242.964z"
                          fill-rule="evenodd"></path>
                  </g>
                </svg><a href="#">{{achievement}}</a>
              </div>
            </div>
          </div>
          <div class="focus-status">
            <router-link to="following"
                         class="focus-item">关注了
              <div class="value"
                   v-if="detail.focus">{{detail.focus.people.length}}</div>
            </router-link>
            <router-link to="followers"
                         class="focus-item">关注者
              <div class="value"
                   v-if="detail.focus">{{detail.focus.follower.length}}</div>
            </router-link>
          </div>
          <ul class="other-focus">
            <li><a href="#">关注的话题<span v-if="detail.focus">{{detail.focus.topics.length}}</span></a></li>
            <li><a href="#">关注的专栏<span v-if="detail.focus">{{detail.focus.specColumn.length}}</span></a></li>
            <li><a href="#">关注的问题<span v-if="detail.focus">{{detail.focus.problems.length}}</span></a></li>
            <li><a href="#">关注的收藏夹<span v-if="detail.focus">{{detail.focus.collections.length}}</span></a></li>
          </ul>
          <div class="explored-status">
            个人主页被浏览 {{detail.exploredTimes}}次
          </div>
          <div class="subfix-bar"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
const OK = 'success';

export default {
  props: {
    user: {
      type: Object,
    },
  },
  data() {
    return {
      isBrief: true,
      detail: {

      },
    };
  },
  activated() {
    document.title = this.user.userName;
  },
  created() {
    this.$http.get('/api/userdetail').then((res) => {
      res = res.body;
      if (res.status === OK) {
        this.detail = res.data;
      }
    });
  },
  methods: {
    toggleBrief() {
      this.isBrief = !this.isBrief;
    },
  },
  filters: {
    formateAddress(addressArr) {
      let currentAddr = `现居${addressArr[0]}`;
      let oldAddr = addressArr.slice(1).join('、');
      return `${currentAddr}，曾在${oldAddr}住过`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../common/scss/color';
@import '../../common/scss/mixin';

svg {
  vertical-align: text-bottom;
  fill: currentColor;
}

.detail-page {
  margin: 0 auto;
  padding-top: 10px;
  width: 1000px;
  min-height: 100vh;
  .detail-data {
    background: #fff;
    border: 1px solid #e7eaf1;
    .cover-wrapper {
      position: relative;
      height: 240px;
      .cover {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .edit-cover {
        position: absolute;
        top: 24px;
        right: 24px;
        padding: 0 16px;
        line-height: 32px;
        font-size: 14px;
        color: hsla(0, 0%, 100%, .7);
        cursor: pointer;
        border: 1px solid #ccd8e1;
        border-color: hsla(0, 0%, 100%, .24);
        border-radius: 3px;
        background: none;
        &:hover {
          background: hsla(0, 0%, 100%, .04);
        }
        svg {
          margin-right: 6px;
        }
      }
    }
    .detail-main-wrapper {
      position: relative;
      background: #fff;
      .detail-main {
        position: relative;
        margin: 0 20px 24px;
        .img-wrapper {
          position: absolute;
          top: -25px;
          border-radius: 8px;
          background: #fff;
          img {
            margin: 4px;
            border-radius: 4px;
          }
        }
        .detail {
          padding: 16px 0 0 32px;
          margin-left: 164px;
          line-height: 1;
          svg {
            margin-right: 12px;
          }
          .detail-header {
            margin-bottom: 16px;
            .detailname {
              font-size: 26px;
              font-weight: 500;
              font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans CJK SC, WenQuanYi Micro Hei, Arial sans-serif;
              line-height: 30px;
            }
            .brief-desc {
              margin-left: 12px;
              font-size: 18px;
              font-weight: 400;
              font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans CJK SC, WenQuanYi Micro Hei, Arial sans-serif;
              white-space: nowrap;
            }
          }
          .detail-content {
            position: relative;
            transition: all .3s ease;
            .brief-intro {
              height: 52px;
              .item {
                margin-bottom: 10px;
                &:last-child {
                  margin-bottom: 0;
                }
                font-size: 14px;
                line-height: 20px;
                svg {
                  fill: #9fadc7;
                  margin-right: 10px;
                }
              }
            }
            .full-intro {
              .item {
                margin-bottom: 18px;
                font-size: 14px;
                line-height: 1.8;
                color: #262626;
                .label {
                  margin-right: 37px;
                }
              }
            }
            .content-footer {
              position: relative;
              padding-top: 8px;
              color: #9fadc7;
              svg {
                // 设置svg为当前的颜色继承父亲的颜色
                fill: currentColor;
                &.rotate {
                  // 旋转度数
                  transform: rotate(180deg);
                }
              }
              .toggle-detail {
                font-size: 14px;
                color: #8590a6;
                cursor: pointer;
                background: none;
              }
              .button-wrapper {
                position: absolute;
                bottom: 0;
                right: 0;
                .edit-profile {
                  padding: 0 16px;
                  line-height: 32px;
                  font-size: 14px;
                  cursor: pointer;
                  color: $n-blue;
                  border-radius: 3px;
                  border: 1px solid $n-blue;
                  background: none;
                  &:hover {
                    background: rgba(13, 121, 209, .06);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .detail-interactive {
    margin: 10px 0;
    .main-interactive {
      display: inline-block;
      vertical-align: top;
      margin-right: 4px;
      position: relative;
      width: 692px;
      border: 1px solid #e7eaf1;
      background: #fff;
      .interactive-header {
        @include border-bottom;
        font-size: 0;
        li {
          display: inline-block;
          font-size: 16px;
          padding: 0 20px;
          a {
            display: block;
            padding: 14px 0;
            &.router-link-active {
              font-weight: 700;
              border-bottom: 3px solid $n-blue;
            }
          }
        }
      }
    }
    .focus-part {
      display: inline-block;
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
