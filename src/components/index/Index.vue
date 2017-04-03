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
              <a class="votes">
                      {{dynamic.answer.vote_num}}
                    </a>
            </div>
            <div class="dynamic-content">
              <div class="topic">
                来自话题: {{dynamic.topic}}
              </div>
              <div class="question">
                {{dynamic.question}}
              </div>
              <div class="answer-wrapper">
                <div class="author">
                  <span class="username" :class="{'light':dynamic.answer.user.username === '匿名用户' }">
                          {{dynamic.answer.user.username}}
                        </span>
                  <span class="brief-desc" v-if="dynamic.answer.user.brief_desc">
                        {{dynamic.answer.user.brief_desc}}
                        </span>
                </div>
                <div class="answer">
                  {{dynamic.answer.value | chop }}
                </div>
              </div>
              <div class="footer-panel">
                <span>关注问题</span>
                <span>{{dynamic.answer.comment_num}}条评论</span>
                <span>感谢</span>
                <span>分享</span>
                <span>收藏</span>
                <span>没有帮助</span>
                <span>举报</span>
                <span>作者保留权利</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="extra-bar">
      <div class="self-dynamic">
        <ul>
          <li>我的收藏</li>
          <li>我关注的问题</li>
          <li>邀请我回答的问题</li>
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
      this.$http.get('/api/recentdynamic').then((res) => {
        res = res.body;
        if (res.status === OK) {
          this.dynamics = res.data;
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
              .topic {
                font-size: 13px;
                color: #999;
              }
              .question {
                font-weight: 700;
                font-size: 13px;
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
                    &.light {
                      font-weight: 400;
                    }
                  }
                  .brief-desc {
                    font-size: 13px;
                    color: $df-lgray;
                    &:before {
                      content: ",";
                      color: $df-dark;
                      font-size: 13px;
                    }
                  }
                }
                .answer {
                  font-size: 13px;
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
    }
  }
</style>
