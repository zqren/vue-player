<template>
    <div class="hot-song">
        <!--热门歌单-->
        <div class="hot-playlist-label">
            <span class="playlist">{{label}}</span>
            <span class="arrow"></span>
        </div>
        <!--展示热门歌单-->
        <div class="hot-playlist-detail">
            <div class="colum">
                <span class="item"></span>
                <span class="item"></span>
                <span class="item"></span>
            </div>
            <div class="colum">
              <span class="item"></span>
              <span class="item"></span>
              <span class="item"></span>
            </div>
            <div class="colum">
              <span class="item"></span>
              <span class="item"></span>
              <span class="item"></span>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .hot-song{
      width: 100%;
      height: auto;
      .hot-playlist-label{
        width: auto;
        padding: 10px 0;
        box-sizing: border-box;
        color: #666;
        font-size: 14px;
        font-weight: 500;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        span{
          flex-basis: auto;
          flex-grow: 0;
          &.playlist{
            height: 20px;
            line-height: 20px;
            border-left: 2px solid #EE7272;
            padding-left: 10px;
            box-sizing: border-box;
          }
          &.arrow{
            width: 8px;
            height: 8px;
            margin-left: 5px;
            border-top-color: #666;
            border-top-style: solid;
            border-top-width: 1px;
            border-right-color: #666;
            border-right-style: solid;
            border-right-width: 1px;
            transform: rotateZ(45deg);
          }
        }
      }
      .hot-playlist-detail{
        width: 100%;
        height: auto;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        align-items: center;
        .colum{
          flex-basis: 100%;
          display: flex;
          justify-content: space-around;
          margin-bottom: 5px;
          .item{
            width: 33%;
            height: 150px;
            background: red;
          }
        }
      }
    }
</style>
<script>

    export default{
        data(){
            return {
              label:'热门歌单',
              hotPlaylists:[]
            }
        },
        created(){
            this.getPlayList()
        },
        methods:{
            getPlayList(){
                this.$http.get(window.HOST+'/topPlaylists?limit=9')
                  .then((res)=>{
                    console.log(res.data)
                  })
                  .catch((error)=>{
                    console.log(error)
                  })
            }
        }
    }
</script>
