<template>
  <div class="notification">
    <div class="notification-header">
      <button class="button" :class="{'active': currentBody === 'aq-status'}" data-name="aq-status" @click="changeBody($event)">
        <svg viewBox="0 0 20 15" width="20" height="16" aria-hidden="true" style="height: 16px; width: 20px;">
          <title></title>
          <g>
            <path d="M6.493 6C5.668 6 5 6.666 5 7.5 5 8.328 5.664 9 6.493 9h12.014C19.332 9 20 8.334 20 7.5c0-.828-.664-1.5-1.493-1.5H6.493zm0 6C5.668 12 5 12.666 5 13.5c0 .828.664 1.5 1.493 1.5h12.014c.825 0 1.493-.666 1.493-1.5 0-.828-.664-1.5-1.493-1.5H6.493zM1.5 0C.672 0 0 .666 0 1.5 0 2.328.666 3 1.5 3 2.328 3 3 2.334 3 1.5 3 .672 2.334 0 1.5 0zm0 6C.672 6 0 6.666 0 7.5 0 8.328.666 9 1.5 9 2.328 9 3 8.334 3 7.5 3 6.672 2.334 6 1.5 6zm0 6c-.828 0-1.5.666-1.5 1.5 0 .828.666 1.5 1.5 1.5.828 0 1.5-.666 1.5-1.5 0-.828-.666-1.5-1.5-1.5zM6.493 0C5.668 0 5 .666 5 1.5 5 2.328 5.664 3 6.493 3h12.014C19.332 3 20 2.334 20 1.5c0-.828-.664-1.5-1.493-1.5H6.493z"></path>
          </g>
        </svg>
      </button>
      <button class="button" :class="{'active': currentBody === 'follower-status'}" data-name="follower-status" @click="changeBody($event)">
        <svg viewBox="0 0 24 17" width="20" height="16" aria-hidden="true" style="height: 16px; width: 20px;">
          <title></title>
          <g>
            <path d="M9.464 7.705c-.265.46-.59.904-.538 1.315.206 1.603 3.205 1.92 4.087 2.99.643.783.91 1.97.972 3.96.01.32 0 1.03-.946 1.03H1.02c-1 0-1.01-.683-1-.995.068-1.994.318-3.208.976-3.994.886-1.056 4.084-1.345 4.224-3.05.032-.385-.268-.786-.538-1.255C3.182 5.102 2.608 0 7.054 0s3.824 5.25 2.41 7.705zM18.27 8.545c.963.126 2.924-.574 2.924-.574-.664-.68-.815-1.472-1.294-4.586C19.507.27 16.8.3 16.597.3c-.203 0-2.91-.03-3.297 3.084-.485 3.113-.636 3.907-1.3 4.586 0 0 1.96.7 2.923.575l-.003.68c-.494.542-1.79.725-2.376 1.077 2.796.316 2.954 3.696 2.954 6.678 1.475-.002 6.497.02 7.5.02 1.002 0 .996-.674.986-.976-.06-1.8-.28-2.786-.418-3.434-.416-1.976-3.58-1.488-5.292-3.364l-.003-.68z"></path>
          </g>
        </svg>
      </button>
      <button class="button" :class="{'active': currentBody === 'thank-status'}" data-name="thank-status" @click="changeBody($event)">
        <svg viewBox="0 0 20 18" width="20" height="16" aria-hidden="true" style="height: 16px; width: 20px;">
          <title></title>
          <g>
            <path d="M0,5.43706401 C5.73656627e-08,2.50510671 2.2938809,0.094365083 5.20737357,1.60732864e-07 C7.2427157,-0.000505078569 9.0922816,1.19013727 9.9999282,3 C10.8228521,1.24236064 12.6486957,1.60732867e-07 14.6514359,1.60732864e-07 C17.5445125,1.60732867e-07 19.9999282,2.50715387 19.9999282,5.43242499 C19.9999282,13.2399998 11.8420757,18 9.99997552,18 C8.15785253,18 -1.52669543e-07,13.2399998 0,5.43706401 Z"></path>
          </g>
        </svg>
      </button>
    </div>
    <div class="notification-body">
      <component :is="currentBody" :data="dataMap[currentBody]"></component>
    </div>
    <div class="notification-footer">
      <button class="notification-config button">
        <svg viewBox="0 0 20 20" class="Icon Button-icon Icon--setting" width="14" height="16" aria-hidden="true" style="height: 16px; width: 14px;">
          <title></title>
          <g>
            <path d="M18.868 15.185c-.164.096-.315.137-.452.137-.123 0-1.397-.26-1.617-.233-1.355.013-1.782 1.275-1.836 1.74-.055.454 0 .893.19 1.304.138.29.125.577-.067.85-.863.893-2.165 1.016-2.357 1.016-.123 0-.247-.055-.356-.15-.11-.097-.685-1.14-1.07-1.47-1.303-.954-2.246-.328-2.63 0-.397.33-.67.7-.835 1.126-.07.18-.18.302-.33.37-1.354.426-2.918-.92-3.014-1.056-.082-.11-.123-.22-.123-.356-.014-.138.383-1.276.342-1.688-.342-1.9-1.836-1.687-2.096-1.673-.303.014-.604.068-.92.178-.205.056-.396.03-.588-.054-.888-.462-1.137-2.332-1.11-2.51.055-.315.192-.52.438-.604.425-.164.81-.452 1.15-.85.932-1.262.344-2.25 0-2.634-.34-.356-.725-.645-1.15-.81-.137-.04-.233-.15-.328-.315C-.27 6.07.724 4.95.978 4.733c.255-.22.6-.055.723 0 .426.164.878.22 1.344.15C4.7 4.636 4.784 3.14 4.81 2.908c.015-.247-.11-1.29-.136-1.4-.027-.123-.014-.22.027-.315C5.318.178 7.073 0 7.223 0c.178 0 .33.055.44.178.108.124.63 1.11 1 1.4.398.338 1.582.83 2.588.013.398-.273.96-1.288 1.083-1.412.123-.123.26-.178.384-.178 1.56 0 2.33 1.03 2.438 1.22.083.124.096.248.07.37-.03.152-.33 1.153-.262 1.606.366 1.537 1.384 1.742 1.89 1.783.494.027 1.645-.357 1.81-.344.164.014.315.083.424.206.535.31.85 1.715.905 2.14.027.233-.014.44-.11.562-.11.138-1.165.714-1.48 1.112-.855.982-.342 2.25-.068 2.606.26.37 1.22.905 1.288.96.15.137.26.302.315.494.146 1.413-.89 2.387-1.07 2.47zm-8.905-.535c.644 0 1.246-.123 1.822-.356.575-.248 1.082-.59 1.493-1.016.425-.425.754-.92 1-1.495.247-.562.357-1.18.357-1.81 0-.66-.11-1.262-.356-1.825-.248-.562-.577-1.056-1.002-1.48-.41-.427-.918-.756-1.493-1.003-.576-.233-1.178-.357-1.822-.357-.644 0-1.247.124-1.81.357-.56.247-1.067.576-1.478 1.002-.425.425-.768.92-1 1.48-.247.564-.37 1.167-.37 1.826 0 .644.123 1.248.37 1.81.232.563.575 1.07 1 1.495.424.426.917.768 1.48 1.016.56.233 1.164.356 1.808.356z"></path>
          </g>
        </svg>设置</button>
      <button class="notification-check-all button">查看全部提醒</button>
    </div>
  </div>
</template>

<script type="text/javascript">
import aqStatus from './notification/AqStatus';
import followerStatus from './notification/FollowerStatus';
import thankStatus from './notification/ThankStatus';

const OK = 'success';

export default {
  props: {

  },
  created() {
    this.getData();
  },
  data() {
    return {
      dataMap: {},
      currentBody: 'aq-status',
    };
  },
  methods: {
    changeBody(e) {
      this.currentBody = e.currentTarget.dataset.name;
      if (!this.dataMap[this.currentBody]) {
        this.getData();
      }
    },
    getData() {
      this
        .$http
        .get(`/api/${this.currentBody}`)
        .then((res) => {
          res = res.body;
          if (res.status === OK) {
            this.$set(this.dataMap, this.currentBody, res.data);
          }
        });
    },
  },
  components: {
    aqStatus,
    followerStatus,
    thankStatus,
  },
};
</script>

<style lang="scss" scoped>
@import '../../common/scss/mixin';
.button {
  color: #c2cfde;
  &.active {
    color: #0f88eb;
  }
  svg {
    fill: currentColor;
    vertical-align: text-bottom;
  }
}
.notification {
  position: relative;
  width: 362px;
  background: #fff;
  border: 1px solid #e7eaf1;
  border-radius: 4px;
  box-shadow: 0 5px 20px rgba(0, 34, 77, .1);
  .notification-header {
    display: flex;
    border-bottom: 1px solid #ebeef5;
    @include inverted-triangle(8px); // 增加倒三角的样式
    .button {
      flex: 1;
      position: relative;
      height: 48px;
      &:after {
        content: '';
        position: absolute;
        left: 120px;
        width: 1px;
        height: 20px;
        background: #ebeef5;
      } // 最后一个元素不添加竖线
      &:last-child {
        &:after {
          display: none;
        }
      }
    }
  }
  .notification-body {
    height: 350px;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .notification-footer {
    display: flex;
    padding: 0 16px;
    height: 40px;
    line-height: 40px;
    border-top: 1px solid #ebeef5;
    .button {
      color: #8590a6;
      svg {
        margin-right: 6px;
      }
    }
    .notification-check-all {
      margin-left: auto;
    }
  }
}
</style>
