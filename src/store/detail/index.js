
import * as types from '../types';
import api from '@/api/detail'
const store = {
    state: {
        detailRecom: []
    },
    actions: {   //actions默认参数context对象 //在actions中处理异步操作
        [types.DETAIL_RECOM_DATA]: ({ commit }, payload) => {
            api.requireDetailRecom(payload).then(data => {
                commit(types.DETAIL_RECOM_DATA, data.data)
                console.log(payload)
            })
        }
    },
    mutations: {
        [types.DETAIL_RECOM_DATA]: (store, data) => {
            store.detailRecom = data
        }
    },
    getters: {
        
    }
}
export default store;
