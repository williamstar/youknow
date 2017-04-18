<template>
  <div class="answer">
    <div class="title">
      <div class="main-header">我的回答</div>
      <button class="sort-by-time">
        按时间排序
        <svg viewBox="0 0 8 13"
             width="8"
             height="16"
             aria-hidden="true"
             style="height: 16px; width: 8px;">
          <title></title>
          <g>
            <path d="M4 11.183L1.284 8.218c-.293-.29-.77-.29-1.064 0-.293.29-.293.76 0 1.052l3.25 3.512c.292.29.768.29 1.062 0L7.78 9.27c.293-.29.293-.76 0-1.052-.295-.29-.77-.29-1.064 0L4 11.182zM4 1.818L1.284 4.782c-.293.29-.77.29-1.064 0-.293-.29-.293-.76 0-1.052L3.47.218c.292-.29.768-.29 1.062 0L7.78 3.73c.293.29.293.76 0 1.052-.295.29-.77.29-1.064 0L4 1.82z"></path>
          </g>
        </svg>
      </button>
    </div>
    <div class="main-content">
      <div class="dynamics">
        <div v-for="dynamic in dynamics"
             class="dynamic">
          <h2 class="question-value">
                            {{dynamic.question}}
                          </h2>
          <div class="answer-wrapper">
            <div class="author-intro">
              <img :src="user.avatar"
                   width="38"
                   height="38"
                   alt="用户头像">
              <div class="text-intro">
                <div class="username">{{user.userName}}</div>
                <div class="brief-desc">{{detail.briefDesc}}</div>
              </div>
            </div>
            <div class="answer-content">
              {{dynamic.answer.value | chop}}
            </div>
            <div class="func-bar">
              <button href="#"
                      class="func-item">
                <svg viewBox="0 0 20 18"
                     width="9"
                     height="16"
                     aria-hidden="true"
                     style="height: 16px; width: 9px;">
                  <title></title>
                  <g>
                    <path d="M0 15.243c0-.326.088-.533.236-.896l7.98-13.204C8.57.57 9.086 0 10 0s1.43.57 1.784 1.143l7.98 13.204c.15.363.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H1.955c-1.08 0-1.955-.517-1.955-1.9z"></path>
                  </g>
                </svg>
                {{dynamic.answer.voteNum}}</button>
              <button href="#"
                      class="func-item">
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
                </svg>添加评论</button>
              <button href="#"
                      class="func-item">
                <svg viewBox="0 0 20 18"
                     xmlns="http://www.w3.org/2000/svg"
                     width="13"
                     height="16"
                     aria-hidden="true"
                     style="height: 16px; width: 13px;">
                  <title></title>
                  <g>
                    <path d="M.93 3.89C-.135 4.13-.343 5.56.614 6.098L5.89 9.005l8.168-4.776c.25-.128.477.197.273.388L7.05 10.66l.926 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.243c.584-.892-.212-2.03-1.234-1.796L.93 3.89z"></path>
                  </g>
                </svg>分享</button>
              <button href="#"
                      class="func-item">
                <svg viewBox="0 0 20 20"
                     width="13"
                     height="16"
                     aria-hidden="true"
                     style="height: 16px; width: 13px;">
                  <title></title>
                  <g>
                    <path d="M3.515 17.64l.918-5.355-3.89-3.792c-.926-.902-.64-1.784.64-1.97L6.56 5.74 8.964.87c.572-1.16 1.5-1.16 2.072 0l2.404 4.87 5.377.783c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.22 1.274-.532 1.82-1.676 1.218L10 16.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"></path>
                  </g>
                </svg>收藏</button>
              <button href="#"
                      class="func-item">
                <svg viewBox="0 0 20 20"
                     width="14"
                     height="16"
                     aria-hidden="true"
                     style="height: 16px; width: 14px;">
                  <title></title>
                  <g>
                    <path d="M18.868 15.185c-.164.096-.315.137-.452.137-.123 0-1.397-.26-1.617-.233-1.355.013-1.782 1.275-1.836 1.74-.055.454 0 .893.19 1.304.138.29.125.577-.067.85-.863.893-2.165 1.016-2.357 1.016-.123 0-.247-.055-.356-.15-.11-.097-.685-1.14-1.07-1.47-1.303-.954-2.246-.328-2.63 0-.397.33-.67.7-.835 1.126-.07.18-.18.302-.33.37-1.354.426-2.918-.92-3.014-1.056-.082-.11-.123-.22-.123-.356-.014-.138.383-1.276.342-1.688-.342-1.9-1.836-1.687-2.096-1.673-.303.014-.604.068-.92.178-.205.056-.396.03-.588-.054-.888-.462-1.137-2.332-1.11-2.51.055-.315.192-.52.438-.604.425-.164.81-.452 1.15-.85.932-1.262.344-2.25 0-2.634-.34-.356-.725-.645-1.15-.81-.137-.04-.233-.15-.328-.315C-.27 6.07.724 4.95.978 4.733c.255-.22.6-.055.723 0 .426.164.878.22 1.344.15C4.7 4.636 4.784 3.14 4.81 2.908c.015-.247-.11-1.29-.136-1.4-.027-.123-.014-.22.027-.315C5.318.178 7.073 0 7.223 0c.178 0 .33.055.44.178.108.124.63 1.11 1 1.4.398.338 1.582.83 2.588.013.398-.273.96-1.288 1.083-1.412.123-.123.26-.178.384-.178 1.56 0 2.33 1.03 2.438 1.22.083.124.096.248.07.37-.03.152-.33 1.153-.262 1.606.366 1.537 1.384 1.742 1.89 1.783.494.027 1.645-.357 1.81-.344.164.014.315.083.424.206.535.31.85 1.715.905 2.14.027.233-.014.44-.11.562-.11.138-1.165.714-1.48 1.112-.855.982-.342 2.25-.068 2.606.26.37 1.22.905 1.288.96.15.137.26.302.315.494.146 1.413-.89 2.387-1.07 2.47zm-8.905-.535c.644 0 1.246-.123 1.822-.356.575-.248 1.082-.59 1.493-1.016.425-.425.754-.92 1-1.495.247-.562.357-1.18.357-1.81 0-.66-.11-1.262-.356-1.825-.248-.562-.577-1.056-1.002-1.48-.41-.427-.918-.756-1.493-1.003-.576-.233-1.178-.357-1.822-.357-.644 0-1.247.124-1.81.357-.56.247-1.067.576-1.478 1.002-.425.425-.768.92-1 1.48-.247.564-.37 1.167-.37 1.826 0 .644.123 1.248.37 1.81.232.563.575 1.07 1 1.495.424.426.917.768 1.48 1.016.56.233 1.164.356 1.808.356z"></path>
                  </g>
                </svg>设置</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import { chop } from 'lib/string';

const OK = 'success';

export default {
  props: {
    user: {
      type: Object,
    },
    detail: {
      type: Object,
    },
  },
  data() {
    return {
      dynamics: [],
    };
  },
  created() {
    this.$http.get('/api/fake_answers_or_questions').then((res) => {
      res = res.body;
      if (res.status === OK) {
        this.dynamics = res.data;
      }
    });
  },
  filters: {
    chop: chop(100),
  },
};
</script>

<style lang="scss" scoped>
.answer {
  margin: 0 20px;
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    border-bottom: 1px solid #f0f2f7;
    .main-header {
      font-weight: 700;
      font-size: 15px;
    }
    .sort-by-time {
      height: 40px;
      background: none;
      cursor: pointer;
      svg {
        vertical-align: text-bottom;
        margin-left: 8px;
        fill: #9fadc7;
      }
    }
  }
  .dynamics {
    padding: 16px 0;
    .dynamic {
      .question-value {
        margin-top: -6px;
        line-height: 1.6;
        font-size: 20px;
        font-weight: 500;
        color: #1e1e1e;
      }
      .answer-wrapper {
        margin-top: 6px;
        .author-intro {
          display: flex;
          .text-intro {
            margin-left: 14px;
            .username {
              font-weight: 600;
              font-size: 15px;
              line-height: 1.1;
            }
            .brief-desc {
              margin-top: 6px;
              font-size: 14px;
              line-height: 1.2;
            }
          }
        }
        .answer-content {
          margin-top: 9px;
          font-size: 15px;
          line-height: 25px;
          word-break: break-word;
        }
      }
      .func-bar {
        display: flex;
        align-items: center;
        margin-top: 4px;
        height: 52px;
        .func-item {
          margin-left: 24px;
          cursor: pointer;
          color: #8590a6;
          background: none;
          &:hover {
            color: #7a8599;
          }
          &:first-child {
            margin-left: 0;
            padding: 0 10px;
            border: 1px solid #ebf3fb;
            line-height: 32px;
            opacity: .5;
            color: #2d84cc;
            background: #ebf3fb;
            &:hover {
              background: initial;
            }
          }
          svg {
            margin-right: 6px;
            fill: currentColor;
            vertical-align: text-bottom;
          }
        }
      }
    }
  }
}
</style>
