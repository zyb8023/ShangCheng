<template>
  <div class="detail-silder">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <!-- 配合图片懒加载 -->
        <img :src="productlist[0].img" alt="加载失败">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem, Lazyload } from "vant";
Vue.use(Swipe)
  .use(SwipeItem)
  .use(Lazyload);
export default {
  props: ["productlist"]
};
</script>
<style lang="scss">
@import "@/assets/styles/qunar/reset.scss";
.detail-silder {
  .van-swipe__track {
    @include rect(100%, 3.4rem);
    .van-swipe-item {
      img {
        @include rect(100%, 100%);
      }
    }
  }
  .van-swipe__indicators {
    i {
      @include rect(0.25rem, 0.05rem);
      @include border-radius(0);
    }
  }
}
</style>
