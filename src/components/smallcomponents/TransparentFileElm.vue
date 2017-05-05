<template>
  <div>
    <input type="file" @change="replaceImg($event)" class="transparent-file-elm" :class="selector">
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    selector: String,
  },
  data() {
    return {
      node: null,
    };
  },
  methods: {
    open() {
      if (!this.node) {
        this.node = document.querySelector(`.transparent-file-elm.${this.selector}`);
      }
      this.node.click();
    },
    replaceImg(event) {
      let file = event.target.files[0];
      let fr = new FileReader();
      fr.onload = (rs) => {
        document.querySelector(`.${this.selector}`).src = fr.result;
      };
      fr.readAsDataURL(file);
    },
  },
};
</script>

<style lang="scss" scoped>
.transparent-file-elm {
  display: none;
}
</style>
