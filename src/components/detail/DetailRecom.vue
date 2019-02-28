<template>
  <div class="detail-recom">

    <img :src="productlist[0].img" alt>
  </div>
</template>
<script>
import * as types from "@/store/types.js";
import { mapState, mapActions } from "vuex";
export default {
  props: ["productlist"]

  /**
   * 状态管理异常
   */
  // methods: {
  //   ...mapActions([types.DETAIL_RECOM_DATA])
  // },
  // mounted() {
  //   this.DETAIL_RECOM_DATA(this.id);
  //   console.log(this.detailRecom)
  // },
  // computed: {
  //   ...mapState({
  //     detailRecom:state => state.detailStore.detailRecom
  //   })
  // }
};
</script>
<style lang="scss">
@import "@/assets/styles/qunar/reset.scss";
.detail-recom {
  @include rect(100%, auto);
  img {
    @include rect(100%, auto);
  }
}
</style>
