<template>
  <div id="app">
    <router-view></router-view>
    <!-- <div @click="login">登录</div> -->
    
    <!-- <div >{{msg}}</div> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import { mapGetters } from 'vuex'
export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  components: {
    // HelloWorld
  },
  created(){
    console.log(this.$hasPermission())
    
  },
  methods: {
    login() {
      localStorage.removeItem('permissionList')
      this.$router.push({ path: 'main' })
      this.$store.commit('updatePermession', [1,2,3,4,5])
    },
  },
  computed:{
    // ...mapGetters([
    //   'permissionList'
    // ])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
