<template>
   <div class="search">
   		<search-header></search-header>
   		<search-history :historyShow="historyShow"></search-history>
   		<search-list :listShow="!historyShow"></search-list>
   </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    .search{
        position: fixed;
        top:0;
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        z-index: 101;
    }
</style>
<script>
    import searchHeader from './searchPage/search-header'
    import searchList from './searchPage/search-list'
    import searchHistoty from './searchPage/search-history'
    export default{
        data(){
            return{
               historyShow:true
            }
        },
        components:{
            searchHeader,
            searchHistoty,
            searchList
        }
    }
</script>
