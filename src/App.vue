<template>
  <div id="app">
    <header-comp></header-comp>
    <audio id="myAudio1">
      <source src="http://7xteoi.com1.z0.glb.clouddn.com/%E6%88%90%E9%83%BD-%E8%B5%B5%E9%9B%B7.mp3">
    </audio>
    <router-view class="router-view"></router-view>
  </div>
</template>
<style lang="less">
  .router-view{
    height: 100%;
  }
</style>
<script>
  import headerComp from './components/header-comp'
  import homeComp from './components/home-comp'
  export default {
    name: 'app',
    data(){
      return{
        value:50
      }
    },
    components:{
      headerComp,
      homeComp
    }
  }
</script>
