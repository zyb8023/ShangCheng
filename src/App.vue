<template>
  <div id="app">
    <div class="container">
      <loading v-show="bLoading"></loading>
      <div class="content">
          <router-view></router-view>
      </div>
    </div>
    <!-- 使用命名视图 -->
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
export default {
  name: "App",
  mounted () {
    //将本地存储中的数据更新到状态管管理中
    this.$store.state.homeStore.productList=JSON.parse(localStorage.getItem("product"));
  },
  computed:{
    ...mapState({
      bLoading:state => state.homeStore.bLoading
    })
  }

};
</script>

