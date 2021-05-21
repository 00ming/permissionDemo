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
  methods: {
    login() {
      this.$store.commit('updatePermession', [1,2,3,4,5])
      this.$router.push({ path: 'main' })
    },
    ff(){
      console.log(1)
    },
    clear(){
      this.$store.commit('updatePermession', [4])
    },
    updatePermission() {
      this.$store.commit('updatePermession', [1,2,3,4,5])
      this.msg = 44
    }
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
