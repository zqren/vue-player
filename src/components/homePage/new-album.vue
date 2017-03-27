<template>
    <div class="hot-song">
        <!--歌单标签-->
        <playlist-label label="新碟上架" :isBorder="true"></playlist-label>
        <!--歌单列表-->
        <div class="hot-playlist-detail">
            <div v-for="album in newAlbums" class="item">
                <div class="poster">
                    <img :src="album.blurPicUrl">
                </div>
                <div class="name">{{album.name}}</div>
            </div>
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    .hot-song{
        width: 100%;
        height: auto;
        .hot-playlist-detail{
            width: 100%;
            height: auto;
            display: flex;
            flex-flow: row wrap;
            justify-content: space-around;
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
              newAlbums:[]
            }
        },
        filters:{
           getIntNum(val){
              return parseInt(val/100000)?`${Math.floor(val/10000)}万`:val
           }
        },
        created(){
            this.getNewAlbum()
        },
        methods:{
            getNewAlbum(){
               this.$http.get(`${window.HOST}/newAlbum?limit=9`)
                .then((res)=>{
                    this.$set(this.$data,'newAlbums',JSON.parse(res.data).albums)
                })
                .catch((error)=>{
                  console.log(error)
                })
            }
        },
        components:{
            playlistLabel
        }
    }
</script>
