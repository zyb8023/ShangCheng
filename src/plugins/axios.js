import axios from 'axios';
import store from '../store';
import * as types from '../store/types'


//设置请求拦截
axios.interceptors.request.use(function (config) {
    store.dispatch(types.VIEW_LOADING, true);
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
//设置相应拦截
axios.interceptors.response.use(function (config) {
    store.dispatch(types.VIEW_LOADING, false);
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export default {
    install(Vue) {
        Vue.prototype.$http = axios; //或者
        window.axios = axios;
    }
}


