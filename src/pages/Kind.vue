<template>
  <div class="kind">
    <van-tabs v-model="active" sticky>
      <van-tab title="手机">
        <kindlist :productList="productList.block_317" :kindVedio="kindVedio[0]"></kindlist>
      </van-tab>
      <van-tab title="声学">
        <kindlist :productList="productList.block_319" :kindVedio="kindVedio[4]"></kindlist>
      </van-tab>
      <van-tab title="配件">
        <kindlist :productList="productList.block_321" :kindVedio="kindVedio[2]"></kindlist>
      </van-tab>
      <van-tab title="生活">
        <kindlist :productList="productList.block_323" :kindVedio="kindVedio[3]"></kindlist>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
  import Vue from 'vue';
  import {Tab, Tabs} from 'vant';

  Vue.use(Tab).use(Tabs);
  import {mapState ,mapActions} from "vuex";
  import kindlist from '../components/kind/KindList';
  import * as types from "@/store/types.js";

  export default {
    data() {
      return {
        active: 0
      }
    },
    computed: {
      ...mapState({
        productList: state => state.homeStore.productList,
        kindVedio: state => state.homeStore.kindVedio,
      })
    },
    methods:{
      ...mapActions([types.KIND_VEDIO_DATA])
    },
    components: {
      kindlist
    },
    mounted() {
      this.KIND_VEDIO_DATA();
      // console.log(this.kindVedio)
    }
  };
</script>
<style lang="scss">
  @import "@/assets/styles/qunar/reset.scss";

  .kind {
    .kind-title {
      @include flexbox();
      @include justify-content(space-around);

      li {
        font: 0.2rem/2 "";
      }

      &.kind-active-class {
        border-bottom: 2px solid #9999ff;
      }
    }
  }
</style>

