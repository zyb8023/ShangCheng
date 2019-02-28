<template>
  <div class="recom">
    <!-- 推荐商品 -->
    <van-row>
      <van-col span="12" class="left">
        <img v-lazy="homeRecom[0].img" alt="加载失败">
      </van-col>
      <van-col span="12" class="right">
        <img v-lazy="homeRecom[1].img" alt="加载失败">
        <img v-lazy="homeRecom[2].img" alt="加载失败">
      </van-col>
    </van-row>
  </div>
</template>
<script>
import Vue from "vue";
import { Row, Col } from "vant";
Vue.use(Row).use(Col)
export default {
  props: {
    homeRecom: Array
  }
};
</script>
<style lang="scss">
@import "@/assets/styles/qunar/reset.scss";
.recom {
  @include rect(100%, 2.6rem);
  .left {
    img {
      @include rect(100%, 100%);
    }
  }
  .right {
    img {
      @include rect(100%, 50%);
    }
  }
}
</style>

