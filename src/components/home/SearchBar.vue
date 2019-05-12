<template>
    <van-search placeholder="请输入搜索关键词" v-model="searchName" @search="onSearch" />
</template>

<script>
import Vue from "vue";
import { Search } from 'vant';

Vue.use(Search);
export default {
    data () {
        return {
            searchName: ''
        }
    },
    methods: {
        onSearch (){
            console.log(this.searchName)
        }
    }
}
</script>

<style>

</style>
