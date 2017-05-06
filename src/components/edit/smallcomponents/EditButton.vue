
<template>
  <div v-if="!allAttr[attr]" class="edit-button-module" :class="{'appear': appear}">
    <button class="modify" :data-attr="attr" @click="editAttr($event)">
      <svg viewBox="0 0 12 12" width="12" height="16" aria-hidden="true" style="height: 16px; width: 12px;">
        <title></title>
        <g>
          <path d="M.423 10.32L0 12l1.667-.474 1.55-.44-2.4-2.33-.394 1.564zM10.153.233c-.327-.318-.85-.31-1.17.018l-.793.817 2.49 2.414.792-.814c.318-.328.312-.852-.017-1.17l-1.3-1.263zM3.84 10.536L1.35 8.122l6.265-6.46 2.49 2.414-6.265 6.46z" fill-rule="evenodd"></path>
        </g>
      </svg>修改</button>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    allAttr: {
      type: Object,
    },
    attr: {
      type: String,
    },
  },
  data() {
    return {
      appear: false,
    };
  },
  methods: {
    editAttr(event) {
      this.$emit('edit-attr', this.attr);
    },
    toggleAppear() {
      this.appear = !this.appear;
    },
  },
};
</script>

<style lang="scss" scoped>
.edit-button-module {
  display: inline-block;
  opacity: 0;
  transition: opacity .3s ease;
  &.appear {
    opacity: 1;
  }
  .modify {
    line-height: inherit;
    margin-left: 16px;
    color: #175199;
    svg {
      margin-right: 4px;
      fill: currentColor;
      vertical-align: text-bottom;
    }
  }
}
</style>
