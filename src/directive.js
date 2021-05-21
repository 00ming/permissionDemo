import Vue from 'vue'
var _ = require('lodash')
let elMap = new Map()
// let permissionList = []
import store from './store'
Vue.directive('permission', {
    inserted(el, binding, vnode) {
        checkPermission(el, binding, vnode)
    },
    // update(el, binding, vnode) {
    //     updatePermission(el, binding,vnode)
    // },
    // update(el, binding) {
    //     updatePermission(el, binding)
    // }
})
function checkPermission(el, binding) {
    let newPermissionList = []
    // console.log(store.getters.getPermissionList)
    console.log('inserted')
    console.log(el)
    console.log(binding)
    newPermissionList = store.state.permissionList
    const value = binding.value
    const comment = document.createComment(' ');
    let isShow = false
    // console.dir(el)
    if (Array.isArray(value)) {
        for (const i of value) {
            if (_.includes(newPermissionList, i)) {
                isShow = true
                break
            }
        }
    }
    console.log(isShow)
    if (!Array.isArray(value) && _.includes(newPermissionList, value)) {
        isShow = true
    }
    console.log(el.parentNode)
    if (!isShow) {
        elMap.set(el, comment)
        // el.parentNode.removeChild(el);
        el.parentNode.replaceChild(comment, el)
        // console.dir(comment.parentNode)
    }
}
// function updatePermission(el, binding) {
//     console.log('update')
//     console.log(el)
//     console.log(binding)
//     console.log('parentNode', el.parentNode)
//     console.dir(elMap.get(el))
//     // console.log(binding)
//     let newPermissionList = []
//     // console.log(store.getters.getPermissionList)
//     newPermissionList = store.state.permissionList
//     if (newPermissionList === permissionList) {
//         return
//     } else {
//         permissionList = newPermissionList
//     }
//     const value = binding.value
//     // let value
//     // if (typeof values === 'object') {
//     //     value = values
//     // } else {
//     //     value = values.permission
//     // }
//     let isShow = false
//     // console.log(_.includes(permissionList, value))
//     if (Array.isArray(value)) {
//         for (const i of value) {
//             if (_.includes(newPermissionList, i)) {
//                 isShow = true
//                 console.log(i)
//                 break
//             }
//         }
//     }
//     if (!Array.isArray(value) && _.includes(newPermissionList, value)) {
//         isShow = true
//     }
//     if (isShow) {
//         let comment = elMap.get(el)
//         console.log('comment', comment)
//         console.log('parentNode', comment.parentNode)
//         comment.parentNode.replaceChild(el, comment)
//         // let elParent = elMap.get(el)
//         // elParent.appendChild(el)
//     } else {
//         const comment = document.createComment(' ')
//         elMap.set(el, comment)
//         el.parentNode.replaceChild(comment, el)
//     }
// }

// function a(el, binding, vnode) {
//     // replace HTMLElement with comment node
//     const comment = document.createComment(' ');
//     let value = binding.value
//     if (!value) {
//         Object.defineProperty(comment, 'setAttribute', {
//             value: () => undefined,
//         });
//         vnode.el = comment;
//         vnode.text = ' ';
//         vnode.isComment = true;
//         vnode.context = undefined;
//         vnode.tag = undefined;
//         vnode.data.directives = undefined;
    
//         if (vnode.componentInstance) {
//             vnode.componentInstance.$el = comment;
//         }
//         if (el.parentNode) {
//             el.parentNode.replaceChild(comment, el);
//             elMap.set(el, comment)
//         }
//     } else {
//         console.dir(elMap.get(el))
        
//     }
// }