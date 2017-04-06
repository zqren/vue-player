<template>
   <div class="search">
   		<search-header></search-header>
   		<search-list></search-list>
   </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    .search{
        position: fixed;
        top:0;
        background: green;
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        z-index: 101;
    }
</style>
<script>
    import searchHeader from 'search-header'
    import searchList from 'saerch-list'
    export default{
        data(){
            return{
               
            }
        },
        components:{
            
        }
    }
</script>
