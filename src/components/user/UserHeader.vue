<template>
  <div class="user-header">
    <img src="https://oss.static.nubia.cn/upload/59c0c0948d26a56.png" class="user-header-auso" alt>
    <div class="user-header-content">
      <div class="user-header-login-reg" @click="toLogin">{{username}}</div>
      <div class="user-header-vip">
        <van-icon name="star"/>
        <span>普通会员</span>
      </div>
    </div>
    <van-actionsheet v-model="show">
      <p @click="logout">注销</p>
    </van-actionsheet>
  </div>
</template>
<script>
  import Vue from "vue";
  import {Icon, Row, Col, Actionsheet} from "vant";
  import * as types from "@/store/types";
  Vue.use(Row)
    .use(Col)
    .use(Icon).use(Actionsheet);
  export default {
    props: ['username'],
    data() {
      return {
        show:false
      }
    },
    methods: {
      toLogin() {
        if (this.username === "登陆/注册") {
          this.$router.push("/login");
        } else {
          this.show=true;
        }
      },
      logout(){
        this.$store.state.homeStore.isLogin.aust=false;
        this.$store.state.homeStore.isLogin.username="登录/注册";
        this.username="登录/注册"


      }
    }
  };
</script>

<style lang="scss">
  @import "@/assets/styles/qunar/reset.scss";

  .user-header {
    @include rect(100%, 1.5rem);
    @include background-color(#3d3d3d);
    @include flexbox();
    @include align-items();
    padding-left: 0.4rem;

    .user-header-auso {
      @include rect(0.8rem, 0.8rem);
      @include border-radius(50%);
    }

    .user-header-content {
      padding-left: 0.15rem;

      .user-header-login-reg {
        @include text-color(#fff);
        font: 0.2rem/0.3rem "";
      }

      .user-header-vip {
        padding: 0 0.08rem;
        @include text-color(#ddd);
        border: 1px #ddd solid;
        font: 0.14rem/0.24rem "";
        border-radius: 0.26rem;
      }
    }
    .van-actionsheet__content{
      p{
        text-align: center;
        font: 0.2rem/0.6rem "";
      }
    }
  }
</style>
