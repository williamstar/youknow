<template>
  <div class="switch-module">
    <button class="current-item"
            @click="expand">
      {{currentItem}}
      <svg viewBox="0 0 8 13"
           class="icon"
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
    <transition name="switch">
      <div class="switch-items"
           v-if="isExpand">
        <button v-for="(item, index) in items"
                class="switch-item"
                @click="selectItem(index)">{{item}}</button>
      </div>
    </transition>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    items: {
      type: Array,
    },
  },
  data() {
    return {
      currentIndex: 0,
      isExpand: false,
    };
  },
  computed: {
    currentItem() {
      return this.items[this.currentIndex];
    },
  },
  methods: {
    selectItem(index) {
      this.currentIndex = index;
      this.$emit('select-what', index);
      this.isExpand = false;
    },
    expand() {
      this.isExpand = true;
      this.$nextTick(() => {
        let items = [];
        let lists = document.querySelector('.switch-items');
        items.push(lists);
        Array.from(lists.children).forEach((elm) => {
          items.push(elm);
        });
        document.addEventListener('mousedown', (e) => {
          if (!items.some(elm => elm === e.target)) {
            this.isExpand = false;
          }
        }, this);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../common/scss/userpage';

.switch-module {
  position: relative;
  text-align: left;
  .current-item {
    z-index: 1;
    height: 40px;
    line-height: 40px;
    border: 1px solid transparent;
    font-size: inherit;
    font-weight: inherit;
    color: #262626;
    text-align: left;
    svg {
      margin-left: 8px;
    }
  }
  .switch-items {
    position: absolute;
    top: -8px;
    right: 0;
    padding: 8px 0;
    max-height: 500px;
    overflow-y: auto;
    border-radius: 4px;
    border: 1px solid #e7eaf1;
    box-shadow: 0 5px 20px rgba(0, 34, 77, .1);
    background: #fff;
    &.switch-enter-active,
    &.switch-leave-active {
      transition: opacity .5s
    }
    &.switch-enter,
    &.switch-leave-active {
      opacity: 0
    }
    .switch-item {
      display: block;
      padding: 0 20px;
      height: 40px;
      line-height: 40px;
      font-size: inherit;
      white-space: nowrap;
      &:hover {
        background: #f4f8fb;
      }
    }
  }
}
</style>
