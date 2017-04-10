<template>
  <div id="app">
    <my-header :user="user"></my-header>
    <!--<keep-alive>
      <router-view :user="user"></router-view>
    </keep-alive>-->
  </div>
</template>

<script type="text/javascript">
import header from '@/components/header/Header';
import uheader from '@/components/header/UHeader';

const OK = 'success';

export default {
  data() {
    return {
      user: {},
    };
  },
  created() {
    this.$http.get('/api/user').then((res) => {
      res = res.body;
      if (res.status === OK) {
        this.user = res.data;
      }
    });
  },
  name: 'app',
  components: {
    MyHeader: uheader,
  },
};
</script>

<style lang="scss">
  #app {
  }
</style>
