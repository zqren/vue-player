<template>
   <div class="home" @scroll="getScrollHeight">
       <banner></banner>
       <per-recom></per-recom>
       <playlist-song label="热门歌单"
                      :isBorder="false"
                      :playlists="hotPlaylists"
                      :clamp="true"
                      :isFixed="scrollT1"
       ></playlist-song>
       <playlist-song ref="newAlbum" label="新碟上架"
                      :isBorder="true"
                      :playlists="newAlbums"
                      :clamp="false"
                      :isFixed="scrollT2"
       >
       </playlist-song>
   </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    .home{
        position: absolute;
        top: 2.25rem;
        padding-bottom: 2.25rem+2.3rem;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: scroll;
    }
</style>
<script>
    import banner from './homePage/banner'
    import perRecom from './homePage/per-recom'
    import playlistSong from './homePage/playlist-song'

    export default{
        data(){
            return{
                hotPlaylists:[],
                newAlbums:[],
                scrollT1:false,
                scrollT2:false
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
            getNewAlbum(){
               this.$http.get(`${window.HOST}/newAlbum?limit=9`)
                .then((res)=>{
                    this.$set(this.$data,'newAlbums',JSON.parse(res.data).albums)
                })
                .catch((error)=>{
                  console.log(error)
                })
            },
            getScrollHeight(event){
                if(event.target.scrollTop >= 100){
                    this.getNewAlbum()
                }
                this.scrollT1 = event.target.scrollTop>=40 && event.target.scrollTop<80?true:false
                this.scrollT2 = event.target.scrollTop>=80?true:false

            }
        },
        components:{
            banner,
            perRecom,
            playlistSong
        }
    }
</script>
