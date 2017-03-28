<template>
  <div id="app">
    <header-comp></header-comp>
    <audio id="myAudio"
           @canPlay = "isPlay($event)"
           @canplaythrough = "getTotalTime($event)"
           @ended = "endPlay($event)"
           @timeupdate="setCurrentTime($event)"
           @error = "displayError">
      <source src="http://7xteoi.com1.z0.glb.clouddn.com/%E6%88%90%E9%83%BD-%E8%B5%B5%E9%9B%B7.mp3">
    </audio>
    <router-view class="router-view"></router-view>
    <mini-audio></mini-audio>
  </div>
</template>
<style lang="less" scoped>
  #app{
    width: 100%;
    height: 100%;
  }
  .router-view{
    height: 100%;
  }
</style>
<script>
  import { mapActions } from 'vuex'

  import headerComp from './components/header-comp'
  import homeComp from './components/home-comp'
  import miniAudio from './components/miniAudio/mini-audio'

  export default {
    name: 'app',
    data(){
      return{
        value:50
      }
    },
    methods:{
      ...mapActions(['setCurrentTime','getTotalTime','endPlay']),
      isPlay(){
         console.log('看看打印啥'+event.target.duration)
      },
      displayError(err){
        console.log(error)
      }

    },
    components:{
      headerComp,
      homeComp,
      miniAudio
    }
  }
</script>
