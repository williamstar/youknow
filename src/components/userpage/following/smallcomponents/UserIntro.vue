<template>
  <div v-if="user"
       class="user-intro-module">
    <img :src="user.avatar"
         class="avatar"
         width="60"
         height="60"
         alt="用户头像">
    <div class="user-detail">
      <div class="user-name">
        {{user.userName}}
        <span v-if="isFollower"
              class="focus-status">关注了你</span>
      </div>
      <div class="brief-desc">
        {{user.briefDesc}}
      </div>
      <div>
        <span class="item">{{user.answerNum}}回答</span>
        <span class="item">{{user.articleNum}}文章</span>
        <span class="item">{{user.followerNum}}关注者</span>
      </div>
    </div>
    <div class="button-wrapper">
      <button class="follow-status"
              :class="{ 'following': user.isFollowing, 'not-following': !user.isFollowing}">
        <div v-if="user.isFollowing"
             @mouseover="toggleText($event)"
             @mouseleave="toggleText($event)">已关注</div>
        <div v-else>
          <svg viewBox="0 0 12 12"
               class="icon"
               width="12"
               height="16"
               aria-hidden="true"
               style="height: 16px; width: 12px;">
            <title></title>
            <g>
              <path d="M6.994 4.994s-.008-3.593 0-4C6.97-.33 4.97-.33 4.996.994c-.025 1.275 0 4 0 4H1C-.334 5-.334 7 1 7c1.332 0 3.996-.006 3.996-.006v4c0 1.346 2.004 1.346 1.998 0-.006-1.347 0-4 0-4S9.658 7 10.997 7c1.338 0 1.338-2-.007-2.006H6.994z"></path>
            </g>
          </svg>关注</div>
      </button>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    user: {
      type: Object,
    },
    isFollower: {
      type: Boolean,
    },
  },
  methods: {
    toggleText(event) {
      let obj = event.target.querySelector('.following') || event.target;
      if (obj.textContent === '已关注') {
        obj.textContent = '取消关注';
      } else {
        obj.textContent = '已关注';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../../common/scss/userpage';
@import '../../../../common/scss/mixin';

.user-intro-module {
  display: flex;
  .user-detail {
    flex: 1;
    .user-name {
      line-height: 1.6;
      font-weight: 700;
      font-size: 18px;
      .focus-status {
        padding: 1px 6px;
        margin-left: 8px;
        font-size: 12px;
        color: #8590a6;
        vertical-align: 1px;
        background-color: #f7f8fa;
        border-radius: 3px;
      }
    }
    .brief-desc {
      font-size: 15px;
      color: #555;
    }
  }
  .button-wrapper {
    display: flex;
    align-items: center;
    .follow-status {
      width: 96px;
      line-height: 32px;
      color: #fff;
      border-radius: 3px;
      &.following {
        border: 1px solid #c3ccd9;
        background: #c3ccd9;
        &:hover {
          background: #abb6c5;
          border: 1px solid #abb6c5;
        }
      }
      &.not-following {
        background: #0f88eb;
        &:hover {
          background: #0d79d1;
        }
        svg {
          fill: currentColor;
          margin-right: 8px;
          vertical-align: text-bottom;
        }
      }
    }
  }
}
</style>
