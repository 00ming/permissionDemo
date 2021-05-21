<template>
  <div >
    <div @click="login">登录</div>
  </div>
</template>
<script>
export default {
    methods:{
         login() {
            this.$store.commit('updatePermession', [1,2,3,4,5])
            this.$router.push({ path: 'main' })
            },
    }
}
</script>