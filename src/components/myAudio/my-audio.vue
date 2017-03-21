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
          <div class="iconfont icon-bofang"></div>
          <div class="iconfont icon-zanting"></div>
        </div>
        <div class="audio-process"></div>
    </div>
</template>
<style lang="less">
  .my-audio{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 46px;
    background: red;
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
              font-size: 14px;
              font-weight: bold;
            }
            &:last-child{
              font-size: 12px;
            }
          }
        }
      }
    }
  }
</style>
<script>

    export default{
        data(){
            return{

            }
        },
        methods:{
        },
        components:{

        }
    }
</script>
