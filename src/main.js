import Vue from 'vue'
import App from './App.vue'
// import Vuex from 'vuex'
import store from './store'
import './directive'
import VueRouter from 'vue-router'
import router from './router'
var _ = require('lodash')
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.prototype.$hasPermission = (permission) => {
  let isShow = false 
  const permissionList = store.getters.getPermissionList
  if (Array.isArray(permission)) {
    for (const i of permission) {
      if (_.includes(permissionList, i)) {
        isShow = true
        break
      }
    }
  }
  if (!Array.isArray(permission) && _.includes(permissionList, permission)) {
    isShow = true
  }
  return isShow
}

new Vue({
  store: store,
  render: h => h(App),
  router,
}).$mount('#app')


