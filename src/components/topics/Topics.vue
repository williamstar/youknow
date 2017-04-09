<template>
  <div class="topics">
    <div class="main-topic-square">
      <div class="square-header">
        <h2 class="title"><i class="sprite-square"></i>话题广场</h2>
        <a class="focus-num">已关注 {{focus_num}}个话题</a>
      </div>
      <div class="main-types">
        <topic-list :topics="mainTypes"
                    :current-topic="currentTopic"
                    @switch="switchTopic"></topic-list>
      </div>
      <div class="all-topics">
        <div v-for="topic in topics"
             class="topic-wrapper clearfix">
          <div class="topic">
            <div class="img-wrapper">
              <img :src="topic.avatarLocalPath"
                   width="50"
                   height="50"
                   :alt="topic.value">
            </div>
            <div class="topic-content">
              <a class="topic-value"
                 href="#">{{topic.value}}</a>
              <a class="focus"
                 href="#">关注</a>
              <p class="topic-desc">{{topic.desc | chop}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hot-topics">
      <h3 class="title">热门话题</h3>
      <div class="hot-topics-wrapper">
        <div v-for="topic in selectedTopics"
             class="hot-topic">
          <div class="header">
            <img :src="topic.avatarLocalPath"
                 width="40"
                 height="40"
                 :alt="topic.value">
            <a href="#"
               class="topic-intro"> {{topic.value}}</a>
            <div class="focus-num">{{topic.focusNum}} 人关注</div>
          </div>
          <div class="hot-question">
            <a href="#">{{topic.hotQuestion}}</a>
          </div>
        </div>
      </div>
      <div class="footer">
        <span><a href="#">刘看山</a></span>
        <span><a href="#">知乎指南</a></span>
        <span><a href="#">建议反馈</a></span>
        <span><a href="#">移动应用</a></span>
        <span><a href="#">加入知乎</a></span>
        <span><a href="#">知乎协议</a></span>
        <span><a href="#">举报投诉</a></span>
        <span><a href="#">联系我们</a></span>
        <div class="copyright">
          ©2017知乎
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import topiclist from '@/components/topicList/TopicList';
import { chop } from '@/common/js/string';

const OK = 'success';
export default {
  data() {
    return {
      focus_num: 0,
      mainTypes: [],
      topics: [],
      currentTopic: {},
      selectedTopics: [],
    };
  },
  activated() {
    document.title = '话题广场 - 你乎';
  },
  created() {
    this.$http.get('/api/maintypes').then((res) => {
      res = res.body;
      if (res.status === OK) {
        this.mainTypes = res.data.mainTypes;
        this.topics = res.data.topics;
        this.focus_num = res.data.focus_num;
        this.selectedTopics = res.data.selectedTopics;
        this.currentTopic = this.mainTypes[0];
      }
    });
  },
  filters: {
    chop: chop(25),
  },
  computed: {

  },
  methods: {
    switchTopic(index) {
      this.currentTopic = this.mainTypes[index];
      this.$http.get(`/api/maintypes/${this.currentTopic.id}/topics`).then((res) => {
        res = res.body;
        if (res.status === OK) {
          this.topics = res.data.topics;
        }
      });
    },
  },
  components: {
    TopicList: topiclist,
  },
};
</script>

<style lang="scss" scoped>
@import '../../common/scss/color';
@import '../../common/scss/mixin';
.topics {
  display: flex;
  width: 960px;
  margin: 25px auto;
  @media screen and (max-width: 960px) {
    width: auto;
  }
  .main-topic-square {
    flex: 1;
    .square-header {
      padding-bottom: 10px;
      border-bottom: 1px solid #ccc;
      .title {
        .sprite-square {
          display: inline-block;
          margin-right: 7px;
          vertical-align: -3px;
          width: 17px;
          height: 17px;
          @include icon("/static/images/icon_set.png", -50px, -87px);
        }
        display: inline-block;
        font-size: 14px;
        font-weight: 700;
        color: $df-mdark;
      }
      .focus-num {
        float: right;
        margin-right: 10px;
        color: $df-lgray;
        &:hover {
          color: $df-graydblue;
          text-decoration: underline;
        }
      }
    }
    .all-topics {
      .topic-wrapper {
        width: 50%;
        display: inline-block;
        border-bottom: 1px dotted #eee;
        &:nth-child(odd) {
          .topic {
            margin: 18px 15px 18px 0;
          }
        }
        &:nth-child(even) {
          .topic {
            margin: 18px 0 18px 15px;
          }
        }
        .topic {
          position: relative;
          display: flex;
          .img-wrapper {
            flex: 0 0 58px;
            margin: 0px 10px 0 0;
            cursor: pointer;
          }
          .topic-content {
            position: relative;
            flex: 1;
            font-size: 13px;
            a {
              &:hover {
                text-decoration: underline;
              }
            }
            .topic-value {
              font-weight: 700;
              color: $df-ddblue;
            }
            .focus {
              color: $df-graylblue;
              position: absolute;
              right: 0;
            }
            .topic-desc {
              margin-top: 4px;
              height: 40px;
              width: 100%;
              overflow: hidden;
              word-wrap: break-word;
            }
          }
        }
      }
    }
  }
  .hot-topics {
    flex: 0 0 270px;
    margin-left: 58px;
    .title {
      margin-bottom: 10px;
      font-size: 14px;
      font-weight: 700;
      color: $df-mdark;
    }
    .hot-topics-wrapper {
      position: relative;
      .hot-topic {
        padding: 0 0 13px 0;
        border-bottom: 1px solid #eee;
        word-wrap: break-word;
        margin-top: 13px;
        &:first-child {
          margin-top: 0;
        }
        a {
          color: $df-ddblue;
          &:hover {
            text-decoration: underline;
          }
        }
        .header {
          padding-left: 50px;
          min-height: 40px;
          .focus-num {
            color: $df-lgray;
          }
          img {
            position: absolute;
            left: 0;
          }
        }
        .hot-question {
          margin-top: 5px;
        }
      }
    }
    .footer {
      padding: 10px 0;
      color: $df-lgray;
      word-wrap: break-word;
      span {
        a {
          color: inherit;
          &:hover {
            text-decoration: underline;
          }
        }
        &:before {
          padding: 0 3px;
          margin-right: 3px;
          content: '•';
        }
        &:nth-child(1) {
          &:before {
            display: none;
          }
        }
        &:nth-child(5) {
          &:before {
            padding: 0;
            margin-left: 0;
            display: block;
            content: '';
          }
        }
        &:last-child {
          &:after {
            content: '';
            display: none;
          }
        }
      }
    }
  }
}
</style>
