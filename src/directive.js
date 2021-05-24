import Vue from 'vue'
var _ = require('lodash')
import store from './store'
Vue.directive('permission', {
    inserted(el, binding, vnode) {
        checkPermission(el, binding, vnode)
    }
})
function checkPermission(el, binding) {
    let newPermissionList = []
    newPermissionList = store.state.permissionList
    const {value} = binding
    const comment = document.createComment(' ');
    let isShow = false
    if (Array.isArray(value)) {
        for (const i of value) {
            if (_.includes(newPermissionList, i)) {
                isShow = true
                break
            }
        }
    }
    if (!Array.isArray(value) && _.includes(newPermissionList, value)) {
        isShow = true
    }
    if (!isShow) {
        el.parentNode.replaceChild(comment, el)
    }
}