<template>
  <div class="detail-info">
    <div class="detail-info-title">
      <span>{{productlist[0].name}}</span>
      <i class="iconfont icon-fenxiang"></i>
    </div>
    <p class="detail-info-content">{{productlist[0].title}}</p>
    <i class="detail-info-price">{{productlist[0].skuprice}}</i>
  </div>
</template>
<script>
export default {
    props: ["productlist"]
};
</script>
<style lang="scss">
@import "@/assets/styles/qunar/reset.scss";
.detail-info {
  @include rect(100%, auto);
  @include padding(0.1rem);
  border-top: 2px solid #ccc;
  border-bottom: 1px solid #eee;
  .detail-info-title {
    @include rect(100%, auto);
    @include flexbox();
    @include justify-content(space-between);
    font: 0.18rem/0.4rem "";
    i {
      @include font-size(0.22rem);
      @include text-color(#000);
    }
  }
  .detail-info-content {
    font: 900 0.18rem/0.36rem "";
    @include text-color(#FF5757);
  }
  .detail-info-price{
      @include font-size(0.18rem);
      @include text-color(#FF5757);
  }
}
</style>

