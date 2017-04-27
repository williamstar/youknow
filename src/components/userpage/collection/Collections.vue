<template>
  <div class="collection-module">
    <div class="title">
      我的收藏
    </div>
    <div>
      <collection v-for="collection in userInfo.collections" :collection="collection" :key="collection.title"
           class="collection list-item">
      </collection>
    </div>
  </div>
</template>

<script type="text/javascript">
import Collection from './Collection';

export default {
  props: {
    userInfo: {
      type: Object,
    },
  },
  components: {
    Collection,
  },
};
</script>

<style lang="scss" scoped>
@import "../../../common/scss/userpage";
.collection-module {
  padding: 0 20px;
  .title {
    @include bold-title(50px);
    @include border-bottom;
  }
}
</style>
