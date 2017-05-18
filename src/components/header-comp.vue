<template>
    <header class="header">
        <div class="personal iconfont icon-personal"></div>
        <router-link to="/" class="home iconfont icon-home" tag="div"></router-link>
        <router-link to="/playerList" class="music iconfont icon-music" tag="div"></router-link>
        <router-link to="/search" class="search iconfont icon-search" tag="div"></router-link>
    </header>
</template>
<style lang="less" scoped>
    .header{
      position: fixed;
      top: 0px;
      width: 100%;
      height: 2.25rem;
      background: #ee7272;
      display: flex;
      justify-content: space-around;
      align-items: center;
      z-index: 100;
      div{
        flex-grow: 1;
        color: #fff;
        &.personal{
          flex-basis: 40%;
          margin-left: 1rem;
          font-size: 1.4rem;
        }
        &.home,
        &.music{
           text-align: center;
           flex-basis: 20%;
           font-size: 1.7rem;
        }
        &.search{
          flex-basis: 20%;
          text-align: right;
          margin-right: 0.5rem;
          font-size:1.4rem;
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
