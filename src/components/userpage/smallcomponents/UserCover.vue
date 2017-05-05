<template>
  <!--用户的主页的上部分个人信息可重复利用的头部-->
  <div class="user-info">
    <div class="cover-wrapper">
      <img :src="userInfo.cover" alt="detail cover" class="cover">
      <button class="edit-cover" @click="changeImg('cover')">
        <svg viewBox="0 0 20 16" class="Icon Icon--camera Icon--left" width="14" height="16" aria-hidden="true" style="height: 16px; width: 14px;">
          <title></title>
          <g>
            <path d="M18.094 2H15s-1-2-2-2H7C6 0 5 2 5 2H2C0 2 0 3.967 0 3.967V14c0 2 2.036 2 2.036 2H17c3 0 3-1.983 3-1.983V4c0-2-1.906-2-1.906-2zM10 12c-1.933 0-3.5-1.567-3.5-3.5S8.067 5 10 5s3.5 1.567 3.5 3.5S11.933 12 10 12zm0 1.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm7.5-8c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z" fill-rule="evenodd"></path>
          </g>
        </svg>编辑封面图片
        <transparent-file-elm :selector="'cover'" ref="cover"></transparent-file-elm>
      </button>
    </div>

    <div class="info-content">
      <div class="info-content-prover">
        <div class="img-wrapper">
          <img alt="用户照片" width="160" height="160" :src="userInfo.avatarX" class="xavatar">
          <button class="mask" @click="changeImg('xavatar')">
            <div class="simulation-img">
              <div class="inner-box">
                <svg viewBox="0 0 20 16" class="Icon UserAvatarEditor-cameraIcon Icon--camera" width="30" height="27" aria-hidden="true" style="height: 27px; width: 30px;">
                  <title></title>
                  <g>
                    <path d="M18.094 2H15s-1-2-2-2H7C6 0 5 2 5 2H2C0 2 0 3.967 0 3.967V14c0 2 2.036 2 2.036 2H17c3 0 3-1.983 3-1.983V4c0-2-1.906-2-1.906-2zM10 12c-1.933 0-3.5-1.567-3.5-3.5S8.067 5 10 5s3.5 1.567 3.5 3.5S11.933 12 10 12zm0 1.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm7.5-8c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z" fill-rule="evenodd"></path>
                  </g>
                </svg>
                <div class="text">
                  修改我的头像
                </div>
              </div>
            </div>
            <transparent-file-elm :selector="'xavatar'" ref="xavatar"></transparent-file-elm>
          </button>
        </div>
        <div class="detail">
          <div class="user-info-header"><span class="user-name">{{userInfo.userName}}</span>
            <slot name=""><span class="brief-desc">{{userInfo.briefDesc}}</span></slot>
          </div>
          <slot name="body"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import transparentFileElm from '../../smallcomponents/TransparentFileElm';

export default {
  props: {
    userInfo: {
      type: Object,
    },
  },
  methods: {
    changeImg(ref) {
      this.$refs[ref].open();
    },
  },
  components: {
    transparentFileElm,
  },
};
</script>

<style lang="scss" scoped>
@import '../../../common/scss/color';

svg {
  vertical-align: text-bottom;
  fill: currentColor;
}

.user-info {
  background: #fff;
  border: 1px solid #e7eaf1;
  .cover-wrapper {
    position: relative;
    height: 240px;
    .cover {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .edit-cover {
      position: absolute;
      top: 24px;
      right: 24px;
      padding: 0 16px;
      line-height: 32px;
      font-size: 14px;
      color: hsla(0, 0%, 100%, .7);
      cursor: pointer;
      border: 1px solid #ccd8e1;
      border-color: hsla(0, 0%, 100%, .24);
      border-radius: 3px;
      background: none;
      &:hover {
        background: hsla(0, 0%, 100%, .04);
      }
      svg {
        margin-right: 6px;
      }
    }
  }
  .info-content {
    background: #fff;
    .info-content-prover {
      position: relative;
      margin: 0 20px 24px;
      .img-wrapper {
        position: absolute;
        top: -25px;
        border-radius: 8px;
        background: #fff;
        img {
          margin: 4px;
          border-radius: 4px;
        }
        .mask {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 99;
          margin: 4px;
          border-radius: 4px;
          opacity: 0;
          width: 160px;
          height: 160px;
          background: rgba(0, 0, 0, .4);
          transition: opacity .3s ease;
          &:hover {
            opacity: 1;
          }
          .simulation-img {
            display: table;
            width: 100%;
            height: 100%;
            color: #fff;
            .inner-box {
              display: table-cell;
              vertical-align: middle;
              text-align: center;
              svg {
                margin-bottom: 14px;
              }
            }
          }
        }
      }
      .detail {
        padding: 16px 0 0 32px;
        margin-left: 164px;
        line-height: 1;
        svg {
          margin-right: 12px;
        }
        .user-info-header {
          margin-bottom: 16px;
          .user-name {
            font-size: 26px;
            font-weight: 500;
            font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans CJK SC, WenQuanYi Micro Hei, Arial sans-serif;
            line-height: 30px;
          } // 原始应用的slot
          .brief-desc {
            margin-left: 12px;
            font-size: 18px;
            font-weight: 400;
            font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans CJK SC, WenQuanYi Micro Hei, Arial sans-serif;
            white-space: nowrap;
          }
        } //第一个嵌入样式的slot
        .detail-content {
          .brief-intro {
            height: 52px;
            .item {
              margin-bottom: 10px;
              &:last-child {
                margin-bottom: 0;
              }
              font-size: 14px;
              line-height: 20px;
              svg {
                fill: #9fadc7;
                margin-right: 10px;
              }
            }
          }
          .full-intro {
            .item {
              margin-bottom: 18px;
              font-size: 14px;
              line-height: 1.8;
              color: #262626;
              .label {
                margin-right: 37px;
              }
            }
          }
          .content-footer {
            position: relative;
            padding-top: 8px;
            color: #9fadc7;
            svg {
              // 设置svg为当前的颜色继承父亲的颜色
              fill: currentColor;
              &.rotate {
                // 旋转度数
                transform: rotate(180deg);
              }
            }
            .toggle-detail {
              font-size: 14px;
              color: #8590a6;
              cursor: pointer;
              background: none;
            }
            .button-wrapper {
              position: absolute;
              bottom: 0;
              right: 0;
              .edit-profile {
                padding: 0 16px;
                line-height: 32px;
                font-size: 14px;
                cursor: pointer;
                color: $n-blue;
                border-radius: 3px;
                border: 1px solid $n-blue;
                background: none;
                a {
                  color: inherit;
                }
                &:hover {
                  background: rgba(13, 121, 209, .06);
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
