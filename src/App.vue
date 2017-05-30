<template>
  <div id="app">
    <header-comp></header-comp>
    <audio id="myAudio"
            :src = "mp3Url"
           @canPlay = "isPlay($event)"
           @canplaythrough = "getTotalTime($event)"
           @ended = "endPlay($event)"
           @timeupdate="setCurrentTime($event)"
           @error = "displayError">
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
  import { mapGetters, mapActions } from 'vuex'

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
    computed:{
        ...mapGetters(['mp3Url'])
    },
    methods:{
      ...mapActions(['setCurrentTime','getTotalTime','endPlay']),
      isPlay(){
         console.log('看看打印啥'+event.target.duration)
      },
      displayError(err){
        console.log(err)
      }

    },
    components:{
      headerComp,
      homeComp,
      miniAudio
    }
  }
</script>
