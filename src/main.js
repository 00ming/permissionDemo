import Vue from 'vue'
import App from './App.vue'
// import Vuex from 'vuex'
import store from './store'
import './directive'
import VueRouter from 'vue-router'
import router from './router'
Vue.use(VueRouter)
Vue.config.productionTip = false


new Vue({
  store: store,
  render: h => h(App),
  router,
}).$mount('#app')


