<template>
  <div class="my-select" :data-id="marked">
    <div v-if="!open" class="current-val button" @click="openSelection">
      {{currentOption}}
      <svg viewBox="0 0 8 13" width="8" height="16" style="height: 16px; width: 8px;">
        <title></title>
        <g>
          <path d="M4 11.183L1.284 8.218c-.293-.29-.77-.29-1.064 0-.293.29-.293.76 0 1.052l3.25 3.512c.292.29.768.29 1.062 0L7.78 9.27c.293-.29.293-.76 0-1.052-.295-.29-.77-.29-1.064 0L4 11.182zM4 1.818L1.284 4.782c-.293.29-.77.29-1.064 0-.293-.29-.293-.76 0-1.052L3.47.218c.292-.29.768-.29 1.062 0L7.78 3.73c.293.29.293.76 0 1.052-.295.29-.77.29-1.064 0L4 1.82z"></path>
        </g>
      </svg>
    </div>
    <div v-show="open" class="option-list">
      <div v-for="(option, index) in optionList" class="option button" :data-val="valueList[index]" @click.stop="selectOption($event)">
        {{option}}
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    optionList: {
      type: Array,
    },
    valueList: {
      type: Array,
    },
    currentVal: {
      type: String,
    },
    marked: {
      type: String,
    },
  },
  data() {
    return {
      open: false,
      nodeList: [],
    };
  },
  computed: {
    currentIndex() {
      if (this.optionList.length > 0) {
        for (let i = 0; i < this.optionList.length; i += 1) {
          if (this.valueList[i] === this.currentVal) {
            return i;
          }
        }
      }
      return 0;
    },
    currentOption() {
      return this.optionList[this.currentIndex];
    },
  },
  methods: {
    openSelection() {
      this.open = !this.open;
      if (this.open) {
        // 添加监听器
        this.$nextTick(() => {
          // 调整高度
          let optionList = document.querySelector('.option-list');
          // 获得子元素的高度
          let optionHeight = optionList.children.item(0).clientHeight;
          let allScrollHeight = optionList.scrollHeight;
          let scrollHeight = optionHeight * (this.currentIndex);
          let top = 230;
          if (scrollHeight < 230) {
            top = scrollHeight;
            optionList.style.top = `${-top}px`;
          } else if (allScrollHeight - scrollHeight < 230) {
            top += (230 - (allScrollHeight - scrollHeight)) + 40;
            optionList.style.top = `${-top}px`;
            optionList.scrollTop = scrollHeight;
          } else {
            optionList.style.top = `${-top}px`;
            optionList.scrollTop = scrollHeight - 230;
          }
          let rootNode = document.querySelector(`.my-select[data-id='${this.marked}']`);
          let index = 0;
          this.nodeList.push(rootNode);
          while (index < this.nodeList.length) {
            this.nodeList.push(...this.nodeList[index].children);
            index += 1;
          }
          document.addEventListener('mousedown', this.blurHandler);
        });
      }
    },
    blurHandler(e) {
      if (!this.nodeList.some(elm => elm === e.target)) {
        this.open = false;
        document.removeEventListener('mousedown', this.blurHanlder);
      }
    },
    selectOption(e) {
      let val = e.currentTarget.dataset.val;
      this.open = false;
      // 这边可以emit事件告知父元素变动的option
      this.$emit('select:option', val);
      document.removeEventListener('mousedown', this.blurHanlder);
    },
  },
};
</script>

<style lang="scss" scoped>
svg {
  margin-left: 8px;
  vertical-align: text-bottom;
  fill: #9fadc7;
}

.button {
  height: 40px;
  padding: 0 20px;
  line-height: 38px;
}

.my-select {
  height: 40px;
  position: relative;
  .current-val {
    display: inline-block;
    color: #262626;
    text-align: left;
    box-sizing: border-box;
    border: 1px solid #ccd8e1;
    border-radius: 3px;
  }

  .option-list {
    position: absolute;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 500px;
    background: #fff;
    border: 1px solid #e7eaf1;
    border-radius: 4px;
    box-shadow: 0 5px 20px rgba(0, 34, 77, .1);
    transition: opacity .3s ease;
    .option {
      cursor: pointer;
      background: #fff;
    }
  }
}
</style>
