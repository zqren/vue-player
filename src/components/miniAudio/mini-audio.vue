<template>
    <div class="my-audio">
      <div class="song-avar">
        <img src="../../assets/logo.png">
      </div>
      <div class="song-box">
        <div class="song-time">
            <span class="process" :style="{width:`${currentTime/totalTime*100}%`}"></span>
        </div>
        <div class="song-info">
            <div class="song-author">
                <span class="song-name">{{totalTime}}</span>
                <span class="song-author">2222</span>
            </div>
            <div class="song-btn">
                <span class="iconfont icon-music-list"></span>
                <span @click="playMusic" class="iconfont" :class="{'icon-play':!icon || endS,'icon-pause':icon && !endS}"></span>
                <span class="iconfont icon-nextvideo"></span>
            </div>
        </div>
      </div>
    </div>
</template>
<style lang="less" scoped>
    .my-audio{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 2.3rem;
        background: rgba(238,114,114,.6);
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        .song-avar{
            flex-basis: 2.3rem;
            height: 100%;
            margin: 0 0.25rem;
            flex-grow: 0;
        }
        .song-box{
            flex-basis: auto;
            flex-grow: 1;
            .song-time{
                width: 100%;
                height: 0.15rem;
                margin: 0.275rem 0;
                position: relative;
                background: rgba(255, 255, 255, .6);
                span.process{
                    position: absolute;
                    left: 0;
                    top:0;
                    height: 0.15rem;
                    background: rgba(238,114,114,1);
                    transition: all 0.3s linear;
                }
            }
            .song-info{
                width: 100%;
                height: 1.6rem;
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-around;
                align-items: center;
                .song-author{
                    flex-basis: 50%;
                    height: inherit;
                    span{
                        display: block;
                        color: #fff;
                        height: 50%;
                        line-height: 0.8rem;
                        &.song-name{
                            font-weight: 500;
                            font-size: 0.7rem;
                        }
                        &.song-author{
                            font-size: 0.6rem;
                        }
                    }
                }
                .song-btn{
                    flex-basis: 50%;
                    color: #fff;
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: space-around;
                    align-items: center;
                    span{
                        flex-basis: 33%;
                        text-align: center;
                        font-size: 1.2rem;
                    }
                }
            }
        }
    }
</style>
<script>
    import {mapGetters} from 'vuex'
    export default{
        data(){
            return{
                process:5,
                icon:false
            }
        },
        computed:{
           ...mapGetters(['currentTime','totalTime','endS'])
        },
        methods:{
            playMusic(event){
                var audio = document.getElementById('myAudio')
                if(audio.paused){
                    audio.play()
                    this.icon = true
                }else{
                    audio.pause()
                    this.icon = false
                }
            }
        }
    }
</script>


