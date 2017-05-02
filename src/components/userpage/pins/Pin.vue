<template>
  <div v-if="pin" class="pin">
    <user-card :user="user"></user-card>
    <div class="content">
      {{pin.comment}}<span v-if="!isExpand" class="read-full" @click="toggleExpand">阅读全文<svg viewBox="0 0 10 6" class="Icon ContentItem-arrowIcon Icon--arrow" width="10" height="16" aria-hidden="true" style="height: 16px; width: 10px;"><title></title><g><path d="M8.716.217L5.002 4 1.285.218C.99-.072.514-.072.22.218c-.294.29-.294.76 0 1.052l4.25 4.512c.292.29.77.29 1.063 0L9.78 1.27c.293-.29.293-.76 0-1.052-.295-.29-.77-.29-1.063 0z"></path></g></svg></span>
    </div>
    <a :href="pin.href">
      <div class="share-thing">
        <img v-if="pin.cover" class="share-cover" :src="pin.cover" height="90" width="90" alt="分享封面">
        <div class="main-content">
          <span class="title">{{pin.title}}</span>
          <div class="other-feature">
            <span>{{pin.href | hostname}}</span>
          </div>
        </div>
      </div>
    </a>
    <div class="func-bar">
      <button href="#" class="button-item primary-button">
        <svg viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg" width="13" height="16" aria-hidden="true" style="height: 16px; width: 13px;">
          <title></title>
          <g>
            <path d="M.718 7.024c-.718 0-.718.63-.718.63l.996 9.693c0 .703.718.65.718.65h1.45c.916 0 .847-.65.847-.65V7.793c-.09-.88-.853-.79-.846-.79l-2.446.02zm11.727-.05S13.2 5.396 13.6 2.89C13.765.03 11.55-.6 10.565.53c-1.014 1.232 0 2.056-4.45 5.83C5.336 6.965 5 8.01 5 8.997v6.998c-.016 1.104.49 2 1.99 2h7.586c2.097 0 2.86-1.416 2.86-1.416s2.178-5.402 2.346-5.91c1.047-3.516-1.95-3.704-1.95-3.704l-5.387.007z"></path>
          </g>
        </svg>
        {{pin.voteNum}}</button>
      <button href="#" class="button-item">
        <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" width="12" height="16" aria-hidden="true" style="height: 16px; width: 12px;">
          <title></title>
          <g>
            <path d="M7.24 16.313c-.272-.047-.553.026-.77.2-1.106.813-2.406 1.324-3.77 1.482-.16.017-.313-.06-.394-.197-.082-.136-.077-.308.012-.44.528-.656.906-1.42 1.11-2.237.04-.222-.046-.45-.226-.588C1.212 13.052.027 10.73 0 8.25 0 3.7 4.03 0 9 0s9 3.7 9 8.25-4.373 9.108-10.76 8.063z"></path>
          </g>
        </svg>添加评论</button>
      <button href="#" class="button-item">
        <svg viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg" width="13" height="16" aria-hidden="true" style="height: 16px; width: 13px;">
          <title></title>
          <g>
            <path d="M.93 3.89C-.135 4.13-.343 5.56.614 6.098L5.89 9.005l8.168-4.776c.25-.128.477.197.273.388L7.05 10.66l.926 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.243c.584-.892-.212-2.03-1.234-1.796L.93 3.89z"></path>
          </g>
        </svg>分享</button>
      <button href="#" class="button-item">
        <svg viewBox="0 0 20 20" width="13" height="16" aria-hidden="true" style="height: 16px; width: 13px;">
          <title></title>
          <g>
            <path d="M3.515 17.64l.918-5.355-3.89-3.792c-.926-.902-.64-1.784.64-1.97L6.56 5.74 8.964.87c.572-1.16 1.5-1.16 2.072 0l2.404 4.87 5.377.783c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.22 1.274-.532 1.82-1.676 1.218L10 16.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"></path>
          </g>
        </svg>收藏</button>
      <button href="#" class="button-item">
        <svg viewBox="0 0 18 20" width="14" height="16" aria-hidden="true" style="height: 16px; width: 14px;">
          <title></title>
          <g>
            <path d="M13.464 2s.05-2-1.48-2H6C4.193 0 4.464 2 4.464 2H1.752c-2.57 0-2.09 3.5 0 3.5l1.213 13.027S2.965 20 4.475 20h8.987c1.502 0 1.502-1.473 1.502-1.473l1.2-13.027c2.34 0 2.563-3.5 0-3.5h-2.7zM5.936 16.5l-.58-9h1.8v9h-1.22zm4.824 0v-9h1.8l-.61 9h-1.19z" fill-rule="evenodd"></path>
          </g>
        </svg>删除</button>
      <button v-if="isExpand" class="button-item last-one" @click="toggleExpand">
        收起
        <svg viewBox="0 0 10 6" width="10" height="16" aria-hidden="true" style="height: 16px; width: 10px;">
          <title></title>
          <g>
            <path d="M8.716.217L5.002 4 1.285.218C.99-.072.514-.072.22.218c-.294.29-.294.76 0 1.052l4.25 4.512c.292.29.77.29 1.063 0L9.78 1.27c.293-.29.293-.76 0-1.052-.295-.29-.77-.29-1.063 0z"></path>
          </g>
        </svg>
      </button>
    </div>
  </div>
</template>

<script type="text/javascript">
import userCard from '@/components/userpage/smallcomponents/UserCard';

export default {
  props: {
    user: {
      type: Object,
    },
    data: {
      type: Object,
    },
  },
  data() {
    return {
      isExpand: false,
    };
  },
  computed: {
    pin() {
      return this.data;
    },
  },
  methods: {
    toggleExpand() {
      this.isExpand = !this.isExpand;
    },
  },
  components: {
    userCard,
  },
  filters: {
    hostname(href) {
      return /\w+:\/\/(\w+.\w+.com)/.exec(href)[1];
    },
  },

};
</script>

<style lang="scss" scoped>
@import '../../../common/scss/color';
@import '../../../common/scss/mixin';
@import '../../../common/scss/userpage';

.pin {
  @include border-bottom;
  .content {
    margin-top: 9px;
    margin-bottom: -5px;
  }
  .share-thing {
    display: flex;
    margin: 16px 0;
    border: 1px solid $n-llgray;
    .share-cover {
      object-fit: cover;
    }
    .main-content {
      padding: 10px 16px;
      display: flex;
      flex-direction: column;
      line-height: 25px;
      .title {
        margin-top: auto;
        font-size: 18px;
        font-weight: 400;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #262626;
      }
      .other-feature {
        margin-top: auto;
        overflow: hidden;
        font-size: 15px;
        color: #8798ae;
        text-overflow: ellipsis;
        word-wrap: normal;
        white-space: nowrap;
      }
    }
  }
}
</style>
