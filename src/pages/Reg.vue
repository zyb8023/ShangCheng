<template>
  <div class="reg">
    <p class="reg-title" @click="$router.go(-1)">
      <van-icon name="arrow-left" />
      请使用手机号注册
    </p>
    <van-cell-group>
      <van-field
        v-model="username"
        clearable
        placeholder="请输入您的手机号"
        :error="checkName"
        @blur="checkNameMsg"
      />
      <van-field v-model="password" :type=" passIcon?'password':'text'" placeholder="请输入密码" @click-right-icon="passIcon=!passIcon" :right-icon="passIcon?'closed-eye':'eye-o'" @blur="checkPwdMsg" :error="checkPwd"/>
      <van-field v-model="sms"   placeholder="请输入短信验证码" :error="checkCode" class="reg-code" @blur="checkSms"/>
        <!-- .native修饰符---在组件根元素上监听一个原生事件 -->
      <van-button round  type="primary" :disabled="flag" class="reg-send-code" @click.native="sendCode">{{codeMsg}}</van-button>
      <van-field type="button" value="注册" class="reg-button" @click.native="register" />
    </van-cell-group>
  </div>
</template>
<script>
import Vue from "vue";
import { Field, Cell, CellGroup ,Button, Toast, Icon  } from "vant";
// import axios from 'axios';

Vue.use(Field)
  .use(Cell)
  .use(CellGroup).use(Button).use(Toast).use(Icon);
export default {
     data() {
    return {
        //用户名
      username: "",
      //密码
      password: "",
      //验证码
      sms:"",
      //收到的验证码
      sendSms:"",
      //密码输入框右侧图标检测
      passIcon:true,
      //用户名输入框正则验证
      checkName:false,
      //密码输入框正则验证
      checkPwd:false,
      //验证码输入框正则验证
      checkCode:false,
      codeMsg:"发送验证码",
      flag:false
    };
  },
  methods: {
      checkNameMsg(){
          if(/^1(3|4|5|7|8)\d{9}$/.test(this.username)){
              this.checkName=false
          }else{
              this.checkName=true
                Toast.setDefaultOptions({
                    duration:1000
                });
                Toast.fail('手机号码格式不正确');
          }
      },
      checkPwdMsg(){
          if(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/.test(this.password)){
              this.checkPwd=false
          }else{
              this.checkPwd=true;
                Toast.setDefaultOptions({
                    duration:1000
                });
                Toast.fail('密码长度要大于6位，由数字和字母组成');
          }
      },
      checkSms(){
          if(this.sms===this.sendSms){
              this.checkCode=false
          }else{
              this.checkCode=true;
                Toast.setDefaultOptions({
                    duration:1000
                });
                Toast.fail('验证码输入有误');
          }
      },
      sendCode(){
          axios({
              url:"https://www.daxunxun.com/users/sendCode",
              params:{tel:this.username}
          }).then(res=>{
              if(res.data === 1){
                  Toast('该用户已注册');
                  return ;
              }else {
                 let time=60;
                 let timer=setInterval(()=>{
                     this.codeMsg=--time+"后重新发送"
                        this.flag=true
                    if(time===0){
                        this.flag=false
                        clearInterval(timer);
                        this.codeMsg="发送验证码"
                          }
                     },1000)
                  if(res.data===0){
                  Toast('发送失败');
                }else{
                     this.sendSms=res.data.code
                }
              }
          });
        // this.sendSms="123456";
      },
      register(){
         if(this.checkName || this.checkPwd || this.checkCode){
             return;
         }else{
              axios({
              method:"post",
              url:"https://www.daxunxun.com/users/register",
              data:{
                  username:this.username,
                  password:this.password
              }
          }).then(res=>{
              if(res.data===2){
                  Toast("该用户已注册");
                  this.$router.push("/login");
              }else if(res.data===0){
                  Toast.fail("注册失败");
              }else{
                  Toast.success("注册成功!");
                  this.$router.push("/home");
              }
          })
         }
      }
  },
};
</script>
<style lang="scss">
@import "@/assets/styles/qunar/reset.scss";
.reg {
  @include rect(100%, 100%);
  @include background-color(#f5f5f5);
  position: relative;
  .reg-title{
      @include rect(90%,auto);
      font: 900 0.16rem/0.38rem "";
      margin: 0 auto;
      border-bottom: 0.02rem solid #d6d6d6;
      }
  .van-hairline--top-bottom{
      @include rect(90%,auto);
      @include background-color(#f5f5f5);
      margin: 0 auto;
      padding-top: 0.3rem;
      .van-field{
        // @include background-color(#f5f5f5);
        border:1px solid #99f;  
        border-radius: 0.15rem;
        margin: 0.1rem 0;
        &.reg-code{
            @include rect(2rem, auto);
            float: left;
        }
      }
      .reg-send-code{
          margin: 0.12rem 0 0 0.15rem;
          width: 1.2rem;
      }
      
      .reg-button{
        background: #E8380D;
        margin-top: 0.3rem;
        @include font-size(0.2rem); 
        input{
        @include text-color(#fff);

        }
      }
  }
}
</style>
