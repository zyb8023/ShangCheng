<template>
  <div class="detail-navbar">
    <ul>
      <router-link to="/home" tag="li">
        <van-icon name="wap-home"/>
        <span>首页</span>
      </router-link>
      <router-link to="/user" tag="li">
        <van-icon name="user-o"/>
        <span>个人中心</span>
      </router-link>
      <router-link to="/collect" tag="li">
        <van-icon name="star-o"/>
        <span>收藏</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
@import "@/assets/styles/qunar/reset.scss";
.detail-navbar {
  @include rect(100%, 0.5rem);
  @include border(0 0 0.02rem 0, #ccc, solid);
  ul {
    @include rect(100%, 100%);
    @include flexbox();
    li {
      @include flex();
      @include rect(auto, 100%);
      @include flexbox();
      @include flex-direction(column);
      @include justify-content(); // justify-content: center
      @include align-items(); // align-items: center
      .van-icon {
        @include font-size(0.18rem);
      }
    }
  }
}
</style>

