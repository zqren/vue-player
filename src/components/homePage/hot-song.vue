<template>
    <div class="hot-song">
        <!--歌单标签-->
        <playlist-label label="热门歌单" :isBorder="false"></playlist-label>
        <!--歌单列表-->
        <div class="hot-playlist-detail">
            <div v-for="hotPlaylist in hotPlaylists" class="item">
              <div class="poster">
                  <div class="listenCount">
                      <span class="iconfont icon-tools-erji-copy"></span>
                      <span>{{hotPlaylist.playCount | getIntNum}}</span>
                  </div>
                  <img :src="hotPlaylist.coverImgUrl">
              </div>
              <div class="name">{{hotPlaylist.name}}</div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .hot-song{
      width: 100%;
      height: auto;
      .hot-playlist-detail{
        width: 100%;
        height: auto;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        .item{
            margin-bottom: 0.25rem;
            width: 32%;
            min-height: 8.1rem;
            div.poster{
                width: 100%;
                position: relative;
                img{
                    width: 100%;
                }
                div.listenCount{
                    position: absolute;
                    width: auto;
                    height: auto;
                    right:0.25rem;
                    top:-0.5rem;
                    z-index: 10;
                    span{
                        padding: 0;
                        margin: 0;
                        font-size: 0.6rem;
                        color: #fff;
                    }
                }
            }
            div.name{
                margin-top: -0.25rem;
                font-size: 0.6rem;
                margin-left: 0.25rem;
                color: #666;
                overflow : hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }
      }
    }
</style>
<script>
    import playlistLabel from './playlist-label'
    export default{
        data(){
            return {
              hotPlaylists:[]
            }
        },
        filters:{
           getIntNum(val){
              return parseInt(val/100000)?`${Math.floor(val/10000)}万`:val
           }
        },
        created(){
            this.getHotPlayList()
        },
        methods:{
            getHotPlayList(){
                this.$http.get(`${window.HOST}/topPlaylists?limit=9`)
                .then((res)=>{
                    this.$set(this.$data,'hotPlaylists',JSON.parse(res.data).playlists)
                })
                .catch((error)=>{
                  console.log(error)
                })
            },
        },
        components:{
            playlistLabel
        }
    }
</script>
