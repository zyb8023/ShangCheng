<template>
  <div class="kind-list">
    <video class="kind-list-v" :src="kindVedio.video" controls></video>
    <ul>
      <router-link tag="li" v-for="(item,index) of productList" :key="index" :to="{name:'detail', params:{id:item.skuid }}">
        <img v-lazy="item.img" alt>
        <div class="kind-list-content">
          <h3>{{item.name}}</h3>
          <p>{{item.title}}</p>
          <h4>{{item.skuprice}}</h4>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";
import { Lazyload } from 'vant';
Vue.use(Lazyload);
export default {
  props: ["productList","kindVedio"],
  data() {
    return {};
  },
  methods: {
    
  }
};
</script>
<style lang="scss">
@import "@/assets/styles/qunar/reset.scss";
.kind-list {
  @include rect(100%, auto);
  .kind-list-v{
    @include rect(100%, 2.5rem);
    /*margin-top: 0.1rem;*/
  }
  ul {
    @include rect(100%, auto);
    li {
      @include flexbox();
      /*margin: 0.1rem;*/
      img {
        @include rect(1.5rem, 1.5rem);
        margin-left: 0.1rem;
      }
      .kind-list-content {
        margin: 0.35rem 0 0 0.7rem;
        h3 {
          font: 0.2rem/2 "";
        }
        p {
          font: 0.14rem/0.24rem "";
        }
        h4 {
          font: 0.18rem/2 "";
          color: #f2bcbc;
        }
      }
    }
  }
}
</style>

