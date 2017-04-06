<template>
  <div class="topic">
    <div class="topic-content">
      <div class="topic-header">
        <div class="topic-list-header">
          <span class="title"><i class="sprite-recent"></i>已关注的话题动态</span>
          <span class="current-topic-num">共关注{{focus_topics.length}}主题</span>
        </div>
        <topic-list :topics="focus_topics" :current-topic="currentTopic" @switch="switchTopic"></topic-list>
      </div>
      <div class="topic-dynamic">
        <div class="dynamic-header">
          <span class="current-topic"><img :src="currentTopic.avatar" class="current-avatar" width="40" height="40" :alt="currentTopic.value"><a href="#" class="current-topic-value">{{currentTopic.value}}</a></span>
          <span class="sort"><a class="hot-sort" :class="{'selected-sort': 'hot-sort' !== current_sort }" href="#" data-sort="hot-sort" @click.stop.prevent="switchSort($event)">热度排序</a> | <a class="time-sort" :class="{'selected-sort': 'time-sort' !== current_sort }" href="#" data-sort="time-sort" @click.stop.prevent="switchSort($event)">时间排序</a></span>
        </div>
        <div class="dynamics">
          <div v-for="dynamic in selectedDynamics" class="dynamic">
            <h2><a href="#" class="question">{{dynamic.question}}</a></h2>
            <div class="answer-wrapper">
              <answer :answer="dynamic.answer"></answer>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="extra-bar">
      <div class="topic-square-wrapper">
        <a href="#" class="topic-square-entry">进入话题广场</a>
        <a href="#" class="message">来这里发现更多有趣话题</a>
      </div>
      <div class="recommend-topics">
        <div class="recommend-title">
          其他人关注的话题<a href="#" class="switch-topics">换一换</a>
        </div>
        <div class="recommend-topics-content">
          <div v-for="topic in recommend_topics" class="recommend-topic">
            <img :src="topic.avatar" width="40" height="40" class="topic-avatar" alt="topic.value">
            <a href="#" class="topic-value">{{topic.value}}</a>
            <a href="#" class="focus">关注</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import answer from '@/components/answer/Answer';
  import topiclist from '@/components/topicList/TopicList';

  const OK = 'success';

  export default {
    data() {
      return {
        recommend_topics: [],
        focus_topics: [],
        currentTopic: {},
        current_sort: 'hot-sort',
        all_dynamics: [],
      };
    },
    created() {
      this.$http.get('/api/focus_topics').then((res) => {
        res = res.body;
        if (res.status === OK) {
          this.recommend_topics = res.data.recommend_topics;
          this.focus_topics = res.data.focus_list;
          this.all_dynamics = res.data.recent_dynamics;
          this.currentTopic = this.focus_topics[0];
        }
      });
    },
    activated() {
      document.title = '话题动态 - 你乎';
    },
    computed: {
      selectedDynamics() {
        let seletedDynamics = this.all_dynamics.filter(dynamic =>
          dynamic.topic === this.currentTopic.value, this);
        if (this.current_sort === 'hot-sort') {
          seletedDynamics.sort((a, b) =>
            b.answer.vote_num - a.answer.vote_num);
        } else {
          seletedDynamics.sort((a, b) =>
            new Date(a.answer.date).getTime() - new Date(b.answer.date).getTime());
        }
        return seletedDynamics;
      },
    },
    methods: {
      switchSort(e) {
        this.current_sort = e.currentTarget.dataset.sort;
      },
      switchTopic(index) {
        this.currentTopic = this.focus_topics[index];
      },
    },
    components: {
      Answer: answer,
      TopicList: topiclist,
    },
  };
</script>

<style lang="scss" scoped>
  @import '../../common/scss/mixin';
  @import '../../common/scss/color';
  .topic {
    width: 960px;
    margin: 25px auto;
    @media screen and (max-width: 960px) {
      width: auto;
    }
    .topic-content {
      float: left;
      margin-right: 328px;
      margin-left: 4px;
      .topic-header {
        .topic-list-header {
          padding-bottom: 9px;
          border-bottom: 1px solid #ccc;
          .title {
            font-size: 13px;
            font-weight: 700;
            color: $df-mdrak;
            .sprite-recent {
              display: inline-block;
              vertical-align: -2px;
              margin-right: 7px;
              width: 16px;
              height: 16px;
              @include icon("/static/images/icon_set.png", -71px, -86px);
            }
          }
          .current-topic-num {
            float: right;
            color: $df-lgray;
          }
        }

      }
      .topic-dynamic {
        margin-top: 16px;
        padding-bottom: 15px;
        .dynamic-header {
          line-height: 40px;
          .current-topic {
            display: inline-block;
            font-weight: 700;
            line-height: 40px;
            .current-avatar {
              margin-right: 16px;
            }
            .current-topic-value {
              vertical-align: top;
            }
          }
          .sort {
            float: right;
            font-size: 12px;
            color: #999;
            .hot-sort {
              color: inherit;
            }
            .time-sort {
              color: inherit;
            }
            .selected-sort {
              color: $df-ddblue;
              &:hover {
                text-decoration: underline;
              }
            }
            a:not(.selected-sort) {
              cursor: text;
            }
          }
        }
        .dynamics {
          .question {
            font-size: 14px;
            color: $df-ddblue;
            &:hover {
              text-decoration: underline;
            }
          }
          .answer-wrapper {
            margin-left: 24px;
          }
        }
      }
    }
    .extra-bar {
      display: inline-block;
      margin-left: -270px;
      width: 270px;
      .topic-square-wrapper {
        margin-bottom: 25px;
        padding: 34px 0;
        border: 1px solid #eff6fa;
        background: #eff6fa;
        text-align: center;
        .topic-square-entry {
          display: inline-block;
          margin-bottom: 20px;
          padding: 4px 10px;
          font-size: 14px;
          text-shadow: 0 -1px 0 rgba(0, 0, 0, .5);
          color: #fff;
          border: 1px solid #0D6EB8;
          border-radius: 3px;
          background: linear-gradient(to bottom, #1d7fe2, #0865c2);
        }
        .message {
          display: block;
          color: #5488b4;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .recommend-topics {
        border-top: 1px solid #ddd;
        padding-top: 15px;
        .recommend-title {
          color: $df-mdrak;
          font-weight: 700;
          font-size: 14px;
          .switch-topics {
            float: right;
            font-weight: 400;
            color: #698ebf;
            &:hover {
              text-decoration: underline;
            }
          }
        }
        .recommend-topics-content {
          .recommend-topic {
            margin-top: 10px;
            line-height: 40px;
            .topic-avatar {
              cursor: pointer;
            }
            a {
              &:hover {
                text-decoration: underline;
              }
            }
            .topic-value {
              vertical-align: top;
              margin-left: 4px;
              font-size: 14px;
              font-weight: 700;
              color: $df-ddblue;
            }
            .focus {
              float: right;
              color: $df-graydblue;
            }
          }
        }
      }
    }
  }
</style>
