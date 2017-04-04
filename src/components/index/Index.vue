<template>
  <div class="index">
    <div class="content-wrapper clearfix">
      <div class="content">
        <div class="func-bar-wrapper">
          <img :src="user.user_avatar" width="38" height="38" class="avatar" alt="用户头像">
          <div class="func-bar-content">
            <ul class="fun-bar">
              <li class="func-item">
                <a href="#">提问</a>
              </li>
              <li class="func-item">
                <a href="#">回答</a></li>
              <li class="func-item">
                <a href="#">写文章</a>
              </li>
            </ul>
            <span class="draft">草稿</span>
          </div>
        </div>
        <div class="list-title">
          <span class="recent">最近动态</span>
          <a class="config">设置</a>
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
              <a href="#"><span class="text-value">我的收藏</span></a>
            </li>
            <li>
              <a href="#"><span class="text-value">我关注的问题</span></a>
            </li>
            <li>
              <a href="#"><span class="text-value">邀请我回答的问题</span></a>
            </li>
          </ul>
        </div>
        <div class="public-status">
          <ul>
            <li>
              <a href="#"><span class="text-value">公共编辑动态</span></a>
            </li>
            <li>
              <a href="#"><span class="text-value">社区服务中心</span></a>
            </li>
            <li>
              <a href="#"><span class="text-value">版权服务中心</span></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="special-column column">
        <h3 class="column-title">你乎专栏</h3>
        <a href="#">
          <span class="text-value">
                        专栏・发现
                        </span>
        </a>
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
      document.title = '你乎';
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
  .index {
    position: relative;
    width: 960px;
    margin: 25px auto 0;
    @media screen and (max-width: 960px) {
      width: auto;
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
          display: flex;
          margin-bottom: 30px;
          font-size: 0;
          .avatar {
            flex: 0 0 38px;
          }
          .func-bar-content {
            display: inline-block;
            flex: 1;
            height: 48px;
            margin-left: 22px;
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
                  &:hover {
                    color: $df-ddblue;
                  }
                }
              }
            }
            .draft {
              float: right;
              margin-right: 15px;
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
          }
          .config {
            float: right;
            font-size: 13px;
            color: $df-lgray;
            cursor: pointer;
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
        color: $df-lgray;
        &:hover {
          color: $df-ddblue;
          background: $df-llblue;
        }
        .text-value {
          margin-left: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
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
