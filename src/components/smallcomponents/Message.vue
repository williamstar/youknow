<template>
  <div class="message">
    <button class="message-header button">
      我的私信
    </button>
    <div class="message-body">

    </div>
    <div class="message-footer">
      <button class="write-personal-note button">
        <svg viewBox="0 0 12 12" class="Icon Button-icon Icon--modify" width="14" height="16" aria-hidden="true" style="height: 16px; width: 14px;">
          <title></title>
          <g>
            <path d="M.423 10.32L0 12l1.667-.474 1.55-.44-2.4-2.33-.394 1.564zM10.153.233c-.327-.318-.85-.31-1.17.018l-.793.817 2.49 2.414.792-.814c.318-.328.312-.852-.017-1.17l-1.3-1.263zM3.84 10.536L1.35 8.122l6.265-6.46 2.49 2.414-6.265 6.46z" fill-rule="evenodd"></path>
          </g>
        </svg>写私信</button>
      <button class="personal-note-check-all button">查看全部私信</button>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {


};
</script>

<style lang="scss" scoped>
@import '../../common/scss/mixin';
.message {
  width: 360px;
  background: #fff;
  border: 1px solid #e7eaf1;
  border-radius: 4px;
  box-shadow: 0 5px 20px rgba(0, 34, 77, .1);
  @include inverted-triangle(8px);
  .button {
    color: #8590a6;
  }
  .message-header {
    width: 100%;
    height: 48px;
    font-size: 14px;
    color: #262626;
    @include border-bottom(#ebeef5);
  }
  .message-body {
    height: 350px;
  }
  .message-footer {
    display: flex;
    height: 40px;
    padding: 0 16px;
    align-items: center;
    svg {
      margin-right: 6px;
      vertical-align: text-bottom;
      fill: currentColor;
    }
    @include border-top(#ebeef5);
    .personal-note-check-all {
      margin-left: auto;
    }
  }
}
</style>
