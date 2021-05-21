import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        permissionList: []
    },
    mutations: {
        updatePermession(state, arr) {
            state.permissionList = arr
        }
    },
    getters: {
        getPermissionList: state => {
            return state.permissionList
        }
    }
})
export default store