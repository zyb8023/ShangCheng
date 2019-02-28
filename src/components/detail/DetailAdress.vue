<template>
  <div class="detail-adress">
    <div class="detail-adress-content" @click="show=true">
      <span>送至</span>
      <van-icon name="location"/>
      <i v-for="(item,index) of selected" :key="index">{{item.name}}</i>
    </div>
    <van-icon name="arrow" size="0.18rem"/>
    <van-actionsheet v-model="show" title="请选择配送区域">
      <van-area :area-list="areaList" @confirm="confirm"/>
    </van-actionsheet>
  </div>
</template>
<script>
import Vue from "vue";
import { Actionsheet } from "vant";
import { Area } from "vant";
Vue.use(Area);
Vue.use(Actionsheet);
export default {
  data() {
    return {
      show: false,
      areaList: {
        province_list: {
          110000: "北京市",
          120000: "天津市"
        },
        city_list: {
          110100: "北京市",
          110200: "县",
          120100: "天津市",
          120200: "县"
        },
        county_list: {
          110101: "东城区",
          110102: "西城区",
          110105: "朝阳区",
          110106: "丰台区",
          120101: "和平区",
          120102: "河东区",
          120103: "河西区",
          120104: "南开区",
          120105: "河北区"
        }
      },
      selected: [
        {
          name: "上海市"
        },
        {
          name: "上海市"
        }
      ]
    };
  },
  methods: {
    confirm(data) {
      this.selected = data;
      this.show = false;
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/styles/qunar/reset.scss";
.detail-adress {
  @include padding();
  @include rect(100%, 0.5rem);
  @include flexbox();
  border-top: 0.02rem solid #cdcdcd;
  border-bottom: 0.02rem solid #cdcdcd;
  .detail-adress-content {
    @include rect(100%, 100%);
    font: 0.16rem/0.32rem "";
    i {
      padding: 0 5px;
      font-weight: 900;
    }
  }
  .van-icon {
    line-height: 0.36rem;
  }
}
</style>

