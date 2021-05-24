<template>
  <div class="hello">
    权限：{{permissionList}}
    <div @click="f = !f">切换v-if</div>
    <div @click="nf = !nf">切换v-show</div>
    <div v-permission="1" v-if="f">权限1 v-if</div>
    <div></div>
    <div v-permission="2" v-show="nf">权限2 v-show</div>
    <div v-permission="3" @click="fun">权限3 点击事件</div>
    <div @click="openNewWindow">点击打开新窗口</div>
    <Sub v-permission="3" v-if="f"></Sub>
  </div>
</template>

<script>
import { mapState} from "vuex";
import sub from './sub.vue';
var CryptoJS = require("crypto-js")
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 123,
      a: [1,2],
      b: 4,
      c: '4',
      f: true,
      nf: true
    }
  },
  components:{
    Sub:sub
  },
  methods: {
    fun(){
      alert('点击事件')
    },
    openNewWindow() {
      window.open(`${window.location.href}`,"newWindow", "width=1024, height=700, top=0, left=0, titlebar=no, menubar=no, scrollbars=yes, resizable=yes, status=yes, , toolbar=no, location=yes")
    }
  },
  computed:{
    ...mapState(['permissionList'])
  },
  created(){
    if(this.permissionList.length === 0) {
      // let key = window.atob('permissionList') // 转码为base64
      let key = CryptoJS.SHA256('permissionList') // SHA256加密
      let bytes = localStorage.getItem(key)
      bytes = CryptoJS.AES.decrypt(bytes, 'secret key 123')
      console.log(bytes)
      let permissionList = bytes.toString(CryptoJS.enc.Utf8)
      this.$store.commit('updatePermession', JSON.parse(permissionList))
    }
  },
  mounted(){
    if(this.permissionList && this.permissionList.length !== 0) {
      let str = JSON.stringify(this.permissionList)
      str = CryptoJS.AES.encrypt(str, 'secret key 123').toString()
      // let key = window.atob('permissionList')
      let key = CryptoJS.SHA256('permissionList')
      localStorage.setItem(key, str)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
