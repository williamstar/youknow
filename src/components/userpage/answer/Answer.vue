<template>
  <div class="answer">
    <h2 class="question-value">{{answer.question}}</h2>
    <div class="answer-wrapper">
      <user-card :user="author || self"></user-card>
      <div class="answer-content">
        <div v-if="!isExpand" class="brief-answer">
          <img v-if="answer.avatar" :src="answer.avatar" width="190" height="105" alt="答案问题" class="avatar">
          <div>{{ answer.value | htmlToText | chop }}
            <button v-if="!isExpand" class="read-full" @click="toggleExpand()">阅读全文
              <svg viewBox="0 0 10 6" class="Icon ContentItem-arrowIcon Icon--arrow" width="10" height="16" aria-hidden="true" style="height: 16px; width: 10px;">
                <title></title>
                <g>
                  <path d="M8.716.217L5.002 4 1.285.218C.99-.072.514-.072.22.218c-.294.29-.294.76 0 1.052l4.25 4.512c.292.29.77.29 1.063 0L9.78 1.27c.293-.29.293-.76 0-1.052-.295-.29-.77-.29-1.063 0z"></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
        <span v-else class="full-answer">{{answer.value}}</span>
      </div>
      <component :is="whichBar()" :is-expand="isExpand" :answer="answer" @lift-up="toggleExpand"></component>
    </div>
  </div>
</template>

<script type="text/javascript">
import userCard from '@/components/userpage/smallcomponents/UserCard';
import selfBar from '@/components/userpage/answer/smallcomponents/SelfBar';
import otherBar from '@/components/userpage/answer/smallcomponents/OtherBar';
import { chop, htmlToText } from 'lib/string';

export default {
  props: {
    data: {
      type: Object,
    },
    author: {
      type: Object,
    },
    self: {
      type: Object,
    },
  },
  data() {
    return {
      isExpand: false,
    };
  },
  computed: {
    answer() {
      return this.data;
    },
  },
  methods: {
    whichBar() {
      if (!this.author || this.self === this.author) {
        return 'selfBar';
      }
      return 'otherBar';
    },
    toggleExpand() {
      this.isExpand = !this.isExpand;
    },
  },
  components: {
    userCard,
    otherBar,
    selfBar,
  },
  filters: {
    chop: chop(80),
    htmlToText,
  },
};
</script>

<style lang="scss" scoped>
@import '../../../common/scss/userpage';
.answer {
  @include border-bottom;
  &:last-child {
    border: none;
  }
  .question-value {
    margin-top: -6px;
    line-height: 1.6;
    font-size: 20px;
    font-weight: 500;
    color: #1e1e1e;
  }
  .answer-wrapper {
    margin-top: 6px;
    .answer-content {
      margin-top: 9px;
      font-size: 15px;
      line-height: 25px;
      word-break: break-all;
      .brief-answer {
        display: flex;
        img {
          flex: 0 0 190px;
          margin-bottom: 4px;
        }
        cursor: pointer;
        &:hover {
          color: #6f6f6f;
        }
      }
    }
  }
}
</style>
