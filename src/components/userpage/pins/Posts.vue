<template>
  <div class="posts-module">
    <div v-if="detail.pinsPart"
         class="posts">
      <div v-for="post in detail.pinsPart.posts"
           class="post">
        <div class="title">{{post.title}}</div>
        <div class="user-wrapper">
          <user-card :user="user"
                     :brief-desc="detail.briefDesc"></user-card>
        </div>
        <a href="#" class="post-content">
          <img :src="post.cover"
               v-if="post.cover"
               class="cover"
               width="190"
               height="105"
               alt="文章封面">
          <div class="content">{{post.body | htmlToText | chop}}
            <button class="read-full">阅读全文
              <svg viewBox="0 0 10 6"
                   width="10"
                   height="16"
                   aria-hidden="true"
                   style="height: 16px; width: 10px;">
                <title></title>
                <g>
                  <path d="M8.716.217L5.002 4 1.285.218C.99-.072.514-.072.22.218c-.294.29-.294.76 0 1.052l4.25 4.512c.292.29.77.29 1.063 0L9.78 1.27c.293-.29.293-.76 0-1.052-.295-.29-.77-.29-1.063 0z"></path>
                </g>
              </svg>
            </button>
          </div>
        </a>
        <div class="func-bar">
          <button class="button-item primary-button">
            <svg viewBox="0 0 20 18"
                 xmlns="http://www.w3.org/2000/svg"
                 width="13"
                 height="16"
                 aria-hidden="true"
                 style="height: 16px; width: 13px;">
              <title></title>
              <g>
                <path d="M.718 7.024c-.718 0-.718.63-.718.63l.996 9.693c0 .703.718.65.718.65h1.45c.916 0 .847-.65.847-.65V7.793c-.09-.88-.853-.79-.846-.79l-2.446.02zm11.727-.05S13.2 5.396 13.6 2.89C13.765.03 11.55-.6 10.565.53c-1.014 1.232 0 2.056-4.45 5.83C5.336 6.965 5 8.01 5 8.997v6.998c-.016 1.104.49 2 1.99 2h7.586c2.097 0 2.86-1.416 2.86-1.416s2.178-5.402 2.346-5.91c1.047-3.516-1.95-3.704-1.95-3.704l-5.387.007z"></path>
              </g>
            </svg>{{post.voteNum}}
          </button>
          <button class="button-item">
            <svg viewBox="0 0 18 18"
                 xmlns="http://www.w3.org/2000/svg"
                 width="12"
                 height="16"
                 aria-hidden="true"
                 style="height: 16px; width: 12px;">
              <title></title>
              <g>
                <path d="M7.24 16.313c-.272-.047-.553.026-.77.2-1.106.813-2.406 1.324-3.77 1.482-.16.017-.313-.06-.394-.197-.082-.136-.077-.308.012-.44.528-.656.906-1.42 1.11-2.237.04-.222-.046-.45-.226-.588C1.212 13.052.027 10.73 0 8.25 0 3.7 4.03 0 9 0s9 3.7 9 8.25-4.373 9.108-10.76 8.063z"></path>
              </g>
            </svg>添加评论
          </button>
          <button class="button-item">
            <svg viewBox="0 0 20 18"
                 xmlns="http://www.w3.org/2000/svg"
                 class="Icon Icon--share Icon--left"
                 width="13"
                 height="16"
                 aria-hidden="true"
                 style="height: 16px; width: 13px;">
              <title></title>
              <g>
                <path d="M.93 3.89C-.135 4.13-.343 5.56.614 6.098L5.89 9.005l8.168-4.776c.25-.128.477.197.273.388L7.05 10.66l.926 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.243c.584-.892-.212-2.03-1.234-1.796L.93 3.89z"></path>
              </g>
            </svg>分享
          </button>
          <button class="button-item">
            <svg viewBox="0 0 18 20"
                 class="Icon Icon--report Icon--left"
                 width="11"
                 height="16"
                 aria-hidden="true"
                 style="height: 16px; width: 11px;">
              <title></title>
              <g>
                <path d="M16.947 1.13c-.633.135-3.927.638-5.697.384-3.133-.45-4.776-2.54-9.95-.888C.305 1.04.025 1.664.025 2.646L0 18.807c0 .3.1.54.304.718.195.202.438.304.73.304.275 0 .52-.102.73-.304.202-.18.304-.418.304-.718v-6.58c4.533-1.235 8.047.668 8.562.864 2.343.893 5.542.008 6.774-.657.397-.178.596-.474.596-.887V1.964c0-.6-.42-.972-1.053-.835z"></path>
              </g>
            </svg>举报
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import usercard from '@/components/userpage/UserCard';
import { htmlToText, chop } from 'lib/string';

export default {
  props: {
    detail: {
      type: Object,
    },
    user: {
      type: Object,
    },
  },
  components: {
    UserCard: usercard,
  },
  filters: {
    htmlToText,
    chop: chop(100),
  },
};
</script>

<style lang="scss" scoped>
@import '../../../common/scss/userpage';
@import '../../../common/scss/mixin';

.post {
  @include border-bottom;
  .title {
    font-size: 20px;
    font-weight: 400;
    line-height: 1.6;
    color: #1e1e1e;
    margin-top: -6px;
    margin-bottom: -6px;
  }
  .user-wrapper {
    margin-top: 14px;
  }
  .post-content {
    display: flex;
    margin-top: 16px;
    .cover {
      flex: 0 0 190px;
      object-fit: cover;
      border-radius: 3px;
      margin: 0 18px 4px 0;
    }
  }
}
</style>
