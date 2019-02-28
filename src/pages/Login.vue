<template>
  <div class="login">
    <img src="http://static.nubia.cn/mobile/images/m_logo.png" @click="$router.push('/home')" alt>
    <van-cell-group>
      <van-field
        v-model="username"
        clearable
        left-icon="manager-o"
        right-icon="question-o"
        placeholder="请输入用户名"
      @click-right-icon="$toast('使用手机号码登录')"
      />
      <van-field v-model="password" :type=" passIcon?'password':'text'"  placeholder="请输入密码" left-icon="bag-o" @click-right-icon="passIcon=!passIcon" :right-icon="passIcon?'closed-eye':'eye-o'"/>
      <van-field type="button" :disabled="username=='' || password==''?true:false" value="立即登录" class="login-button" @click.native="login"/>
    </van-cell-group>
    <div class="login-msg-toast">
      <span @click="$router.push('reg')">立即注册</span>
      <i>|</i>
      <span>忘记密码？</span>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Field, Cell, CellGroup, Toast  } from "vant";
// import axios from 'axios';
import * as types from '@/store/types.js'
Vue.use(Field)
  .use(Cell)
  .use(CellGroup).use(Toast);
export default {
  data() {
    return {
      username: "",
      password: "",
      passIcon:true,
    };
  },
  methods: {
    login(){
      axios({
        method:"post",
        url:"https://www.daxunxun.com/users/login",
        data:{
          username:this.username,
          password:this.password
        }
      }).then(res=>{
        if(res.data===1){
          // console.log(res.data)
          Toast.success("登录成功");
          // localStorage.setItem("isLogin","ok")
          this.$store.dispatch(types.IS_LOGIN, {aust:true,username:this.username});
          this.$router.push("/user");
        }else if(res.data===2){
          Toast("请先注册")
        }else{
          Toast("帐户名或密码错误")
        }
      })
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/styles/qunar/reset.scss";
.login {
  @include rect(100%, 100%);
  @include background-color(#f5f5f5);
  position: relative;
  img{
    display: block;
    margin: 0 auto;
    padding: 1rem 0 0.3rem;
    @include rect(50%,auto);
      }
  .van-hairline--top-bottom{
      @include rect(70%,auto);
      @include background-color(#f5f5f5);
      margin: 0 auto;
      .van-field{
        border:1px solid #99f;
        border-radius: 0.15rem;
        margin: 0.1rem 0;
      }
      .login-button{
        background: #E8380D;
        margin-top: 0.3rem;
        @include font-size(0.2rem); 
        input{
        @include text-color(#fff);

        }
      }
  }
  .login-msg-toast{
    @include rect(100%,auto);
    position: absolute;
    bottom: 0.3rem;
    text-align: center;
    span{
      @include text-color(#333);
    }
    i{
      @include text-color(#ddd);
      margin: 0 0.2rem;
    }
  }
}
</style>

