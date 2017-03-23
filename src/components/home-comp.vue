<template>
   <div class="home">
       <banner></banner>
       <per-label></per-label>
   </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    .home{
        margin-top: 45px;
        height:100%;
        overflow-x: hidden;
    }
</style>
<script>
    import banner from './homePage/banner'
    import perLabel from './homePage/per-label'
    export default{
        data(){
            return{
               
            }
        },
        components:{
            banner,
            perLabel
        }
    }
</script>
