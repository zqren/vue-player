<template>
    <div class="my-audio">
        <div class="audio-info">
          <div class="song-avar">
            <img src="../../assets/logo.png">
          </div>
          <div class="song-info">
            <span class="song-name">111</span>
            <span class="sopng-author">2222</span>
          </div>
          <div class="iconfont icon-music-list"></div>
          <div @click="playMusic" class="iconfont icon-play"></div>
          <div class="iconfont icon-nextvideo"></div>
        </div>
        <div class="audio-process"></div>
    </div>
</template>
<script>

    export default{
        data(){
            return{

            }
        },
        methods:{
            playMusic(event){
                var audio = document.getElementById('myAudio1')
                if(audio.paused){
                    audio.play()
                    event.target.classList.remove('icon-pause')
                    event.target.classList.add('icon-play')
                }else{
                    audio.pause()
                    event.target.classList.remove('icon-play')
                    event.target.classList.add('icon-pause')
                }
            }
        },
        components:{

        }
    }
</script>
<style lang="less">
  .my-audio{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 46px;
    background: #ee7272;
    .audio-info{
      display: flex;
      flex-flow: row nowrap;
      justify-content:flex-start;
      align-items: center;
      padding: 2px;
      box-sizing: border-box;
      div{
        flex-basis: auto;
        &.song-avar{
          flex-grow: 0;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          img{
            width: 100%;
          }
        }
        &.song-info{
          flex-grow: 1;
          margin-left: 10px;
          span{
            display: block;
            &:first-child{
              font-size: 16px;
              font-weight: bold;
              color: #fff;
            }
            &:last-child{
              font-size: 12px;
              color: rgba(255,255,255,6);
            }
          }
        }
        &.iconfont{
            text-align: center;
            width: 50px;
            flex-grow: 0;
            color: #fff;
            font-size: 28px;
        }
      }
    }
  }
</style>

