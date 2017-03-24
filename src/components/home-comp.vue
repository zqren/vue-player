<template>
   <div class="home">
       <banner></banner>
       <per-label></per-label>
       <hot-song></hot-song>
   </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    .home{
        margin-top: 45px;
        height:100%;
    }
</style>
<script>
    import banner from './homePage/banner'
    import perLabel from './homePage/per-label'
    import hotSong from './homePage/hot-song'

    export default{
        data(){
            return{

            }
        },
        components:{
            banner,
            perLabel,
            hotSong
        }
    }
</script>
