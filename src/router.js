import Vue from 'vue'
import Router from 'vue-router'
// import app from './App.vue'
import HelloWorld from './components/HelloWorld'
import login from './components/login'
Vue.use(Router)
const router = new Router({
    routes: [{
        path: '/',
        component: login
    }, {
        path: '/main',
        component: HelloWorld

    }]
})
export default router