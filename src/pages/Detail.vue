<template>
  <div class="detail">
    <van-nav-bar title="商品详情" @click-left="onClickLeft">
      <van-icon name="arrow-left" size="26px" slot="left"/>
      <van-icon name="shopping-cart-o" info="0" size="26px" slot="right"/>
      <van-icon name="wap-nav" size="26px" slot="right" @click="onClickRight"/>
    </van-nav-bar>
    <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
      <v-navbar v-show="navshow"></v-navbar>
    </transition>
    <v-detail-silder :productlist="list"></v-detail-silder>
    <v-detail-info :productlist="list"></v-detail-info>
    <v-detail-adress></v-detail-adress>
    <v-detailgoodsaction :productlist="list"></v-detailgoodsaction>
    <v-detailrecom :productlist="list"></v-detailrecom>
  </div>
</template>
<script>
import navbar from "@/components/detail/Navbar";
import detailsilder from "@/components/detail/DetailSilder";
import detailinfo from "@/components/detail/DetailInfo";
import detailadress from "@/components/detail/DetailAdress";
import detailgoodsaction from "@/components/detail/DetailGoodsAction";
import detailrecom from "@/components/detail/DetailRecom";
//导入ui组件
import Vue from "vue";
import { NavBar } from "vant";

import { mapState, mapActions } from "vuex";
Vue.use(NavBar);
export default {
  data() {
    return {
      navshow: false,
      list: [
        {
          img: ""
        }
      ]
    };
  },
  //通过路由传参得到的商品id
  props: {
    id: String
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.navshow = !this.navshow;
    }
  },
  components: {
    "v-navbar": navbar,
    "v-detail-silder": detailsilder,
    "v-detail-info": detailinfo,
    "v-detail-adress": detailadress,
    "v-detailgoodsaction": detailgoodsaction,
    "v-detailrecom": detailrecom
  },
  computed: {
    ...mapState({
      //商品列表数据对象，block_317为手机，block_319为耳机
      productList: state => state.homeStore.productList
    })
  },
  mounted() {
    let arr = [];

    arr = this.productList.block_317.concat(this.productList.block_319, this.productList.block_321,this.productList.block_323);
    this.list = arr.filter(item => {
      return item.skuid === this.id;
    });
  },
  created() {
    window.onstorage=function(ev){
      console.log(ev)
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/styles/qunar/reset.scss";
.detail {
  .van-nav-bar {
    @include rect(100%, 0.5rem);
    .van-nav-bar__title {
      font: 0.2rem/0.5rem "";
    }
    .van-nav-bar__right {
      .van-icon-shopping-cart-o {
        margin-right: 0.1rem;
      }
    }
  }
}
</style>

