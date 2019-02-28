<template>
  <div class="detail-goods-action">
    <van-goods-action>
      <van-goods-action-mini-btn icon="chat-o" text="客服"/>
      <van-goods-action-mini-btn icon="cart-o" text="购物车" @click="onClickMiniBtn"/>
      <van-goods-action-big-btn text="加入购物车" @click="onClickBigBtn"/>
      <van-goods-action-big-btn primary text="立即购买"/>
    </van-goods-action>
  </div>
</template>
<script>
import Vue from "vue";
import { GoodsAction, GoodsActionBigBtn, GoodsActionMiniBtn, Toast } from "vant";

Vue.use(GoodsAction)
  .use(GoodsActionBigBtn)
  .use(GoodsActionMiniBtn).use(Toast);
export default {
  props: ["productlist"],
  methods: {
    onClickMiniBtn() {
      this.$router.push("/cart");
    },
    onClickBigBtn() {
      let goods = JSON.parse(localStorage.getItem("goods")) || [];
      if (goods.length === 0) {
        goods.push({
          id: this.productlist[0].skuid,
          img: this.productlist[0].img,
          title: this.productlist[0].title,
          name: this.productlist[0].name,
          price: this.productlist[0].skuprice,
          num: 1
        });
      } else {
        let arr = [];
        arr = goods.filter(item => {
          return item.id === this.productlist[0].skuid;
        });
        if (arr.length === 0) {
          goods.push({
            id: this.productlist[0].skuid,
            img: this.productlist[0].img,
            title: this.productlist[0].title,
            name: this.productlist[0].name,
            price: this.productlist[0].skuprice,
            num: 1
          });
        } else {
          goods.map(item => {
            if (item.id === this.productlist[0].skuid) {
              item.num++;
            }
          });
        }
      }
      localStorage.setItem("goods", JSON.stringify(goods));
      Toast.setDefaultOptions({
        duration:800
      });
      Toast.success("添加成功")
    }
  }
};
</script>
