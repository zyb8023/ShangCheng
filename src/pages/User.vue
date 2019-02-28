<template>
  <div class="user">
    <!-- <img class="user-poster" src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png"> -->
    <v-userheader :username="username"></v-userheader>
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment"/>
        待付款
      </van-col>
      <van-col span="6">
        <van-icon name="records"/>
        待接单
      </van-col>
      <van-col span="6">
        <van-icon name="tosend"/>
        待发货
      </van-col>
      <van-col span="6">
        <van-icon name="logistics"/>
        已发货
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="全部订单" is-link/>
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="points" title="我的积分" is-link/>
      <van-cell icon="gold-coin-o" title="我的优惠券" is-link/>
      <van-cell icon="gift-o" title="我收到的礼物" is-link/>
    </van-cell-group>
  </div>
</template>

<script>
  import userheader from '../components/user/UserHeader'
  import store from "@/store";
  import {Row, Col, Icon, Cell, CellGroup} from 'vant';

  export default {
    data() {
      return {
        username: "",
        show:this.isClick
      }
    },
    components: {
      [Row.name]: Row,
      [Col.name]: Col,
      [Icon.name]: Icon,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      'v-userheader': userheader
    },
    beforeRouteEnter(to, from, next) {
      next((_this) => {
        if (store.state.homeStore.isLogin.aust) {
          _this.username = store.state.homeStore.isLogin.username;
        } else {
          _this.username = "登陆/注册";
        }
      });
    }
  };
</script>

<style lang="less">
  .user {

    &-group {
      margin-bottom: 15px;
    }

    &-links {
      padding: 15px 0;
      font-size: 12px;
      text-align: center;
      background-color: #fff;

      .van-icon {
        display: block;
        font-size: 24px;
      }
    }
  }
</style>
