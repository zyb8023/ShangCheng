<template>
  <div class="silder">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) of homeSilder" :key="index">
        <!-- 配合图片懒加载 -->
        <img v-lazy="item.img" alt="加载失败">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem, Lazyload } from "vant";
Vue.use(Swipe).use(SwipeItem).use(Lazyload);
export default {
  //获取home组件请求的数据
  props: {
    homeSilder: Array
  }
};
</script>
<style lang="scss">
@import "@/assets/styles/qunar/reset.scss";
.silder {
  .van-swipe__track {
    @include rect(100%, 2.25rem);
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


