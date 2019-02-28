<template>
  <div class="list">
    <div class="home-list-title">
      <p>{{titles}}</p>
      <img src="https://oss.static.nubia.cn/blockimage/155064164197.jpg" alt>
    </div>
    <div class="home-list-content">
      <ul>
        <!-- <li>
          <img src="https://oss.static.nubia.cn/blockimage/154985403618.png" alt>
          <div class="home-list-dir">
            <h3>X海蓝光</h3>
            <h5>双屏黑科技</h5>
            <h6>￥3099</h6>
          </div>
        </li>-->
        <router-link
          tag="li"
          :to="{name:'detail', params:{id:item.skuid }}"
          v-for="(item,index) of productList"
          :key="index"
        >
          <img v-lazy="item.img" alt>
          <div class="home-list-dir">
            <h3>{{item.name}}</h3>
            <h5>{{item.title}}</h5>
            <h6>{{item.skuprice}}</h6>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productList: Array,
    titles: String
  }
};
</script>
<style lang="scss">
@import "@/assets/styles/qunar/reset.scss";
.list {
  .home-list-title {
    @include rect(100%, auto);
    p {
      @include font-size(0.2rem);
      @include line-height(0.6rem);
      @include text-indent(0.25rem);
    }
    img {
      @include rect(100%, auto);
    }
  }
  .home-list-content {
    padding-top: 0.1rem;
    @include rect(100%, auto);
    ul {
      @include flexbox();
      @include flex-flow(wrap);
      @include justify-content(space-between);
      li {
        @include rect(1.8rem, auto);
        img {
          @include rect(100%, 1.8rem);
          @include background-color(#f8f8f8);
        }
        .home-list-dir {
          @include margin(0.1rem);
          h3 {
            font: 900 0.18rem/0.24rem "黑体";
            @include text-color(#000);
          }
          h5 {
            font: 0.14rem/0.2rem "黑体";
            @include text-color(#cbcbcb);
          }
          h6 {
            font: 0.16rem/0.2rem "";
            @include text-color(#f26a52);
          }
        }
      }
    }
  }
}
</style>
