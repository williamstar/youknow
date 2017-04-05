<template>
  <div class="index">
    <div class="content-wrapper clearfix">
      <div class="content">
        <div class="func-bar-wrapper">
          <img :src="user.user_avatar" width="38" height="38" class="avatar" alt="用户头像">
          <div class="func-bar-content">
            <ul class="fun-bar">
              <li class="func-item">
                <a href="#"><i class="sprite sprite-question"></i>提问</a>
              </li>
              <li class="func-item">
                <a href="#"><i class="sprite sprite-answer"></i>回答</a></li>
              <li class="func-item">
                <a href="#"><i class="sprite sprite-edit"></i>写文章</a>
              </li>
            </ul>
            <span class="draft">草稿</span>
          </div>
        </div>
        <div class="list-title">
          <span class="recent"><i class="sprite-recent"></i><span class="value">最近动态</span></span>
          <a class="config"><i class="sprite-config"></i><span class="value">设置</span></a>
        </div>
        <div class="dynamics">
          <div v-for="dynamic in dynamics" class="dynamic-wrapper">
            <div class="sidebar">
              <img :src="dynamic.topic_avatar" class="dynamic-avatar" width="38" height="38" :alt="dynamic.topic">
              <a class="votes">{{dynamic.answer.vote_num}}</a>
            </div>
            <div class="dynamic-content">
              <div class="topic">
                来自话题: <a href="#">{{dynamic.topic}}</a>
              </div>
              <div class="question">
                {{dynamic.question}}
              </div>
              <div class="answer-wrapper">
                <div class="author">
                  <span class="username" :class="{'light':dynamic.answer.user.username === '匿名用户' }"><a href="#">{{dynamic.answer.user.username}}&nbsp;</a></span>
                  <span class="brief-desc" v-if="dynamic.answer.user.brief_desc">{{dynamic.answer.user.brief_desc}}</span>
                </div>
                <div class="answer">
                  {{dynamic.answer.value | chop }}
                </div>
              </div>
              <div class="footer-panel">
                <a href="#">关注问题</a>
                <a href="#">{{dynamic.answer.comment_num}}条评论</a>
                <a href="#">分享</a>
                <a href="#">感谢</a>
                <a href="#">收藏</a>
                <a href="#">没有帮助</a>
                <a href="#">举报</a>
                <a href="#">作者保留权利</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="extra-bar">
      <div class="top-wrapper">
        <div class="self-dynamic">
          <ul>
            <li>
              <a href="#"><i class="sprite sprite-favorite"></i>我的收藏</a>
            </li>
            <li>
              <a href="#"><i class="sprite sprite-focus-question"></i>我关注的问题</a>
            </li>
            <li>
              <a href="#"><i class="sprite sprite-invite-question"></i>邀请我回答的问题</a>
            </li>
          </ul>
        </div>
        <div class="public-status">
          <ul>
            <li>
              <a href="#"><i class="sprite sprite-public-status"></i>公共编辑动态</a>
            </li>
            <li>
              <a href="#"><i class="sprite sprite-community"></i>社区服务中心</a>
            </li>
            <li>
              <a href="#"><i class="sprite sprite-copyright"></i>版权服务中心</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="special-column column">
        <h3 class="column-title">你乎专栏</h3>
        <a href="#"><i class="sprite-discovery"></i>专栏・发现</a>
      </div>
      <div class="youknow-live column">
        <h3 class="column-title">
          你乎 Live ⚡️
        </h3>
        <ul>
          <li v-for="live in youknow_live">
            <a href="#"><img :src="live.avatar" alt="live.value"><span class="text-value">{{live.value}}</span></a>
          </li>
        </ul>
      </div>
      <div class="youknow-circledesk column">
        <h3 class="column-title">知乎圆桌</h3>
        <ul>
          <li v-for="circle in youknow_circledesk">
            <a href="#"><img :src="circle.avatar" alt="circle.value"><span class="text-value">{{circle.value}}</span>
              <span v-if="circle.end" class="final-time">还有{{circle.end}}天结束</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="youknow-bookstore column">
        <h3 class="column-title">
          知乎书店
        </h3>
        <ul>
          <li v-for="book in youknow_bookstore">
            <a href="#"><img :src="book.avatar" alt=""><span class="text-value">{{book.value}}</span></a>
          </li>
        </ul>
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
        dynamics: [],
        youknow_live: [],
        youknow_circledesk: [],
        youknow_bookstore: [],
      };
    },
    activated() {
      document.title = '你乎';
    },
    filters: {
      chop(string) {
        let nstr = '';
        let maxLength = 100 + Math.floor(Math.random() * 20);
        for (let i = 0; i < maxLength; i += 1) {
          nstr += string[i];
        }
        return `${nstr}...`;
      },
    },
    created() {
      this.$http.get('/api/recentdynamic').then((res) => {
        res = res.body;
        if (res.status === OK) {
          this.dynamics = res.data.recent_dynamic;
          this.youknow_live = res.data.youknow_live;
          this.youknow_circledesk = res.data.youknow_circledesk;
          this.youknow_bookstore = res.data.youknow_bookstore;
        }
      });
    },
  };
</script>

<style lang="scss" scoped>
  @import '../../common/scss/color';
  @import '../../common/scss/mixin';
  .index {
    position: relative;
    width: 960px;
    margin: 25px auto 0;
    @media screen and (max-width: 960px) {
      width: auto;
      margin: 25px 4px;
    }
    .content-wrapper {
      float: left;
      width: 100%;
      .content {
        display: inline-block;
        margin-right: 320px;
        margin-left: 2px;
        @media screen and (max-width: 960px) {
          margin-right: 280px;
        }
        .func-bar-wrapper {
          position: relative;
          margin-bottom: 30px;
          font-size: 0;
          .avatar {
            float: left;
          }
          .func-bar-content {
            height: 48px;
            margin-left: 58px;
            border: 1px solid #f0f0f0;
            border-radius: 3px;
            background: #fafafa;
            .fun-bar {
              display: inline-block;
              font-size: 0;
              .func-item {
                display: inline-block;
                padding: 0 27px;
                line-height: 48px;
                font-size: 14px;
                color: #6c829f;
                a {
                  color: $df-graylblue;
                  .sprite {
                    display: inline-block;
                    vertical-align: middle;
                    width: 24px;
                    height: 24px;
                    &.sprite-question {
                      @include icon("/static/images/sprites.auto.fb3fda39.png", -150px, -30px);
                    }
                    &.sprite-answer {
                      @include icon("/static/images/sprites.auto.fb3fda39.png", -100px, -30px);
                    }
                    &.sprite-edit {
                      @include icon("/static/images/sprites.auto.fb3fda39.png", -123px, -56px);
                    }
                  }
                  &:hover {
                    color: $df-ddblue;
                    .sprite-question {
                      @include icon("/static/images/sprites.auto.fb3fda39.png", -124px, -30px);
                    }
                    .sprite-answer {
                      @include icon("/static/images/sprites.auto.fb3fda39.png", -100px, -56px);
                    }
                    .sprite-edit {
                      @include icon("/static/images/sprites.auto.fb3fda39.png", -175px, -30px);
                    }
                  }
                }
              }
            }
            .draft {
              float: right;
              margin-right: 20px;
              font-size: 14px;
              cursor: pointer;
              line-height: 48px;
              color: #999;
              &:hover {
                text-decoration: underline;
                color: $df-graydblue;
              }
            }
          }
        }
        .list-title {
          height: 23px;
          margin-bottom: 10px;
          .recent {
            font-size: 14px;
            font-weight: 700;
            color: $df-mdrak;
            .value {
              display: inline-block;
              vertical-align: top;
            }
            .sprite-recent {
              display: inline-block;
              vertical-align: -2px;
              margin-right: 7px;
              width: 16px;
              height: 16px;
              @include icon("/static/images/icon_set.png", -71px, -86px);
            }
          }
          .config {
            float: right;
            font-size: 13px;
            color: $df-lgray;
            cursor: pointer;
            .value {
              vertical-align: top;
            }
            .sprite-config {
              display: inline-block;
              vertical-align: -3px;
              margin-right: 2px;
              width: 16px;
              height: 16px;
              @include icon("/static/images/icon_set.png", -86px, -146px);
            }
            &:hover {
              color: $df-graydblue;
              text-decoration: underline;
            }
          }
        }
        .dynamics {
          border-top: 1px solid #ccc;
          .dynamic-wrapper {
            margin-top: 10px;
            border-bottom: 1px solid #eee;
            .sidebar {
              position: absolute;
              width: 38px;
              font-size: 0;
              .dynamic-avatar {
                cursor: pointer;
              }
              .votes {
                display: inline-block;
                margin-top: 4px;
                height: 24px;
                width: 38px;
                border-radius: 3px;
                line-height: 24px;
                text-align: center;
                font-size: 13px;
                font-weight: 500;
                color: $df-graydblue;
                cursor: pointer;
                background: #eff6fa;
                &:hover {
                  background: $df-graydblue;
                  color: #fff;
                }
              }
            }
            .dynamic-content {
              display: inline-block;
              margin-left: 48px;
              font-size: 0;
              a {
                color: inherit;
                &:hover {
                  text-decoration: underline;
                  color: $df-ddblue;
                }
              }
              .topic {
                font-size: 13px;
                color: #999;
              }
              .question {
                font-weight: 700;
                font-size: 14px;
                color: $df-ddblue;
              }
              .answer-wrapper {
                margin-bottom: 2px;
                .author {
                  font-size: 0;
                  color: $df-dark;
                  .username {
                    font-size: 13px;
                    font-weight: 700;
                    a {
                      &:hover {
                        color: inherit;
                      }
                    }
                    &.light {
                      font-weight: 400;
                    }
                  }
                  .brief-desc {
                    font-size: 13px;
                    color: $df-lgray;
                    &:before {
                      content: " , ";
                      color: $df-dark;
                      font-size: 13px;
                    }
                  }
                }
                .answer {
                  font-size: 13px;
                  cursor: pointer;
                }
              }
              .footer-panel {
                margin-bottom: 10px;
                font-size: 13px;
                color: $df-lgray;
                span {
                  margin-left: 4px;
                }
              }
            }
          }
        }
      }
    }
    .extra-bar {
      display: inline-block;
      width: 270px;
      margin-left: -270px;
      vertical-align: top;
      box-sizing: content-box;
      a {
        display: block;
        height: 28px;
        line-height: 28px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: $df-lgray;
        .sprite-discovery {
          display: inline-block;
          vertical-align: top;
          margin-right: 10px;
          width: 25px;
          height: 25px;
          @include icon("/static/images/sprites.auto.a740548f.png", -26px, 0);
        }
        .sprite {
          display: inline-block;
          width: 14px;
          height: 14px;
          margin-right: 4px;
          &.sprite-favorite {
            vertical-align: -2px;
            @include icon("/static/images/icon_set.png", -167px, -4px);
          }
          &.sprite-focus-question {
            vertical-align: -2px;
            @include icon("/static/images/icon_set.png", -183px, -4px);
          }
          &.sprite-invite-question {
            vertical-align: -2px;
            @include icon("/static/images/icon_set.png", -198px, -4px);
          }
          &.sprite-public-status {
            vertical-align: -2px;
            @include icon("/static/images/icon_set.png", -265px, -4px);
          }
          &.sprite-community {
            vertical-align: -2px;
            @include icon("/static/images/icons_a9b07ecead.261e7c3b.png", -23px, -41px);
          }
          &.sprite-copyright {
            vertical-align: -2px;
            @include icon("/static/images/copyright.f77ea167.svg", 0, 0);
          }
        }
        &:hover {
          color: $df-ddblue;
          background: $df-llblue;
          .sprite-favorite {
            vertical-align: -2px;
            @include icon("/static/images/icon_set.png", -167px, -24px);
          }
          .sprite-focus-question {
            vertical-align: -2px;
            @include icon("/static/images/icon_set.png", -183px, -24px);
          }
          .sprite-invite-question {
            vertical-align: -2px;
            @include icon("/static/images/icon_set.png", -198px, -24px);
          }
          .sprite-public-status {
            vertical-align: -2px;
            @include icon("/static/images/icon_set.png", -265px, -24px);
          }
          .sprite-community {
            vertical-align: -2px;
            @include icon("/static/images/icons_a9b07ecead.261e7c3b.png", -67px, -39px);
          }
          .sprite-copyright {
            vertical-align: -2px;
            @include icon("/static/images/copyright__hover.07ae8f44.svg", 0, 0);
          }
          .sprite-copyright {
            vertical-align: -2px;
            @include icon("/static/images/copyright__hover.07ae8f44.svg", 0, 0);
          }
        }
      }
      li {
        margin-bottom: 3px;
      }
      .top-wrapper {
        .self-dynamic {
          margin-bottom: 10px;
        }
        .public-status {
          padding-top: 10px;
          margin-bottom: 10px;
          border-top: 1px solid #eee;
        }
      }
      .column {
        padding-top: 15px;
        margin-bottom: 10px;
        border-top: 1px solid #eee;
        .column-title {
          font-size: 14px;
          margin-bottom: 10px;
        }
        a {
          height: 25px;
          line-height: 25px;
          padding: 5px;
          .text-value {
            display: inline-block;
          }
          .final-time {
            display: inline-block;
            vertical-align: top;
          }
        }
      }
    }
  }
</style>
