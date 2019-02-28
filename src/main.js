
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
//引入全局scss文件
import './assets/styles/main.scss'
import 'animate.css'
//引入通用组件
import loading from './components/loading';
import axios from './plugins/axios';
Vue.use(loading);
Vue.use(axios);
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
