<template>
  <div class="answer-wrapper">
    <div class="author">
      <span class="username"
            :class="{'light':answer.user.username === '匿名用户' }"><a href="#">{{answer.user.username}}&nbsp;</a></span>
      <span class="brief-desc"
            v-if="answer.user.brief_desc">{{answer.user.brief_desc}}</span>
    </div>
    <div class="answer">
      {{answer.value | chop }}
    </div>
    <div class="footer-panel">
      <a href="#">关注问题</a>
      <a href="#">{{answer.comment_num}}条评论</a>
      <a href="#">分享</a>
      <a href="#">感谢</a>
      <a href="#">收藏</a>
      <a href="#">没有帮助</a>
      <a href="#">举报</a>
      <a href="#">作者保留权利</a>
    </div>
    <a class="votes">{{answer.vote_num}}</a>
  </div>
</template>

<script type="text/javascript">
import { chop, make } from '@/common/js/string';

export default {
  props: {
    answer: {
      type: Object,
    },
  },
  created() {

  },
  filters: {
    chop: chop(100),
  },
};
</script>

<style lang="scss" scoped>
@import '../../common/scss/color';
.answer-wrapper {
  margin-bottom: 2px;
  position: relative;
  a {
    color: inherit;
    &:hover {
      text-decoration: underline;
      color: $df-ddblue;
    }
  }
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
  .footer-panel {
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: 13px;
    color: $df-lgray;
  }
  .votes {
    position: absolute;
    top: 0;
    left: -48px;
    display: inline-block;
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
      text-decoration: none;
      color: #fff;
    }
  }
}
</style>
