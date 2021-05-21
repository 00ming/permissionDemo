<template>
  <div class="hello">
    权限：{{permissionList}}
    <div @click="f = !f">切换v-if</div>
    <div @click="nf = !nf">切换v-show</div>
    <div v-permission="1" v-if="f">权限1 v-if</div>
    <div></div>
    <div v-permission="2" v-show="nf">权限2 v-show</div>
    <div v-permission="3" @click="fun">权限3 点击事件</div>
    <Sub v-permission="3" v-if="f"></Sub>
  </div>
</template>

<script>
import { mapState} from "vuex";
import sub from './sub.vue';
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 123,
      a: [1,2],
      b: 4,
      c: '4',
      // d,
      // msg:21,
      f:true,
      nf:true
    }
  },
  components:{
    Sub:sub
  },
  methods: {
    fun(){
      alert('点击事件')
    }
  },
  computed:{
    ...mapState(['permissionList'])
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
