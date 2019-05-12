<template>
  <div class="home">
    <search-bar></search-bar>
    <silder :homeSilder="homeSilder"></silder>
    <recom :homeRecom="homeRecom"></recom>
    <list :productList="productList.block_317" :titles="'热销机型'"></list>
    <list :productList="productList.block_319" :titles="'精选配件'"></list>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import * as types from "@/store/types.js";
//引入组件
import silder from "@/components/home/Silder";
import recom from "@/components/home/Recom";
import list from "@/components/home/List";
import SearchBar from "@/components/home/SearchBar";  
export default {
  methods: {
    //添加状态
    ...mapActions([
      types.SILDER_DATA,
      types.RECOM_DATA,
      types.PRODUCT_LIST_DATA
    ])
    // ...mapActions([types.RECOM_DATA]),
    // ...mapActions([types.PRODUCT_LIST_DATA])
  },
  computed: {
    //通过mapState状态函数获取store中的数据
    ...mapState({
      //首页的轮播图数据
      homeSilder: state => state.homeStore.homeSilder,
      //推荐数据
      homeRecom: state => state.homeStore.homeRecom,
      //商品列表数据对象，block_317为手机，block_319为耳机
      productList: state => state.homeStore.productList
    })
  },
  mounted() {
    //mapActions中提交的的状态映射为当前函数
    this.SILDER_DATA();
    this.RECOM_DATA();
    this.PRODUCT_LIST_DATA();
    //将得到的状态管理中的数据存储到本地localStorage
    localStorage.setItem("product", JSON.stringify(this.productList));
  },
  components: {
    silder,
    recom,
    list,
    SearchBar
  }
};
</script>
