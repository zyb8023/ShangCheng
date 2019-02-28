import * as types from '../types'
import api from '@/api/home'
//vuex模块
const store = {
  state: {
    homeSilder: ['a', 'b'],
    homeRecom: [{
      img: ''
    },
      {
        img: ''
      },
      {
        img: ''
      }],
    //其中包括手机数据和耳机数据
    productList: {
      img: ''
    },
    isLogin: {
      aust: false, username: ""
    },
    kindVedio: [{img: ""}],
    bLoading: false
  },
  actions: {   //actions默认参数context对象 //在actions中处理异步操作
    [types.SILDER_DATA]: ({commit}) => {
      api.requireBanner().then(data => {
        commit(types.SILDER_DATA, data.block_311)
      })
    },
    [types.RECOM_DATA]: ({commit}) => {
      api.requireRecom().then(data => {
        commit(types.RECOM_DATA, data.block_315)
      })
    },
    [types.PRODUCT_LIST_DATA]: ({commit}) => {
      api.requireProductList().then(data => {
        commit(types.PRODUCT_LIST_DATA, data)
        // console.log(data)
      })
    },
    [types.IS_LOGIN]: ({commit}, payload) => {
      commit(types.IS_LOGIN, payload);
    },
    [types.KIND_VEDIO_DATA]: ({commit}) => {
      api.requireKindVideo().then(data => {
        commit(types.KIND_VEDIO_DATA, data.block_327)
      })
    },
    [types.VIEW_LOADING]: ({commit}, payload) => {
      commit(types.VIEW_LOADING, payload);
    }
  },
  mutations: {
    [types.SILDER_DATA]: (store, payload) => {
      store.homeSilder = payload    //对store中的数据进行突变
    },
    [types.RECOM_DATA]: (store, payload) => {
      store.homeRecom = payload
    },
    [types.PRODUCT_LIST_DATA]: (store, payload) => {
      store.productList = payload
    },
    [types.IS_LOGIN]: (store, payload) => {
      store.isLogin = payload;
    },
    [types.KIND_VEDIO_DATA]: (store, payload) => {
      store.kindVedio = payload
    },
    [types.VIEW_LOADING]: (store, payload) => {
      store.bLoading = payload
    }
  },
  getters: {}
}

export default store
