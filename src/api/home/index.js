
// import axios from 'axios'

import jsonpAdapter from 'axios-jsonp'

const api = {
    /**
     * 请求轮播图数据
     */
    requireBanner() {
        //返回Promise对象解决异步操作
        return new Promise((resolve, reject) => {
            axios({
                //请求接口
                url: 'https://dms-dataapi.meizu.com/data/jsdata.jsonp?blockIds=311',
                //添加axios-jsonp支持
                adapter: jsonpAdapter
            })
                .then(res => {
                    //请求成功数据放入resolve状态
                    resolve(res.data)
                })
                .catch(err => reject(err))
        })
    },
    /**
     * 请求推荐数据
     */
    requireRecom() {
        //返回Promise对象解决异步操作
        return new Promise((resolve, reject) => {
            axios({
                //请求接口
                url: 'https://dms-dataapi.meizu.com/data/jsdata.jsonp?blockIds=315',
                //添加axios-jsonp支持
                adapter: jsonpAdapter
            })
                .then(res => {
                    //请求成功数据放入resolve状态
                    resolve(res.data)
                })
                .catch(err => reject(err))
        })
    },
    /**
     * 请求商品列表数据
     * 包括手机数据列表和耳机数据列表
     * 317为手机数据
     * 319为耳机数据
     * 321为配件数据
     * 323为生活用品数据
     */
    requireProductList() {
        //返回Promise对象解决异步操作
        return new Promise((resolve, reject) => {
            axios({
                //请求接口
                url: 'https://dms-dataapi.meizu.com/data/jsdata.jsonp?blockIds=317,319,321,323',
                //添加axios-jsonp支持
                adapter: jsonpAdapter
            })
                .then(res => {
                    //请求成功数据放入resolve状态
                    resolve(res.data)
                })
                .catch(err => reject(err))
        })
    },
    /**
     * 分类视频数据请求
     */
    requireKindVideo(){
      //返回Promise对象解决异步操作
      return new Promise((resolve, reject) => {
        axios({
          //请求接口
          url: 'https://dms-dataapi.meizu.com/data/jsdata.jsonp?blockIds=327',
          //添加axios-jsonp支持
          adapter: jsonpAdapter
        })
          .then(res => {
            //请求成功数据放入resolve状态
            resolve(res.data)
          })
          .catch(err => reject(err))
      })
    },
    /**
     * 添加搜索接口
     * params:searchName--搜索关键词
     */
    requireSeacrch (searchName){
        return new Promise((resolve, reject)=>{
            axios({
                url:'https://lists.meizu.com/page/search?keyword=note8', //接口不能用
                // TODO
                params: {
                    keyword: searchName
                }
            })
            .then(res => resolve(res.data))
            .catch(err => reject(err))
        })
    }
};
export default api

