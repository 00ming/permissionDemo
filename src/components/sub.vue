<template>
  <div class="hello">
    <div @click="c">我是子组件 我外面控制权限</div>
  </div>
</template>
<script>
export default {
    methods:{
        c(){
            alert('点击子组件')
        }
    }
}
</script>