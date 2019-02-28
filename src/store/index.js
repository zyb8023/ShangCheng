import Vue from 'vue'
import Vuex from 'vuex'
import homeStore from './Home'
import detailStore from './detail'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        homeStore, detailStore
    }
})
