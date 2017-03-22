<template>
    <header class="header">
        <div class="personal iconfont icon-personal"></div>
        <div class="home iconfont icon-home"></div>
        <div class="music iconfont icon-music"></div>
        <div class="search iconfont icon-search"></div>
    </header>
</template>
<style lang="less">
    .header{
      position: fixed;
      top: 0px;
      width: 100%;
      height: 45px;
      background: #ee7272;
      display: flex;
      justify-content: space-between;
      align-items: center;
      div{
        flex-grow: 1;
        color: #fff;
        &.personal{
          flex-basis: 40%;
          margin-left: 10px;
          font-size: 28px;
        }
        &.home,
        &.music{
          text-align: center;
          flex-basis: 20%;
          font-size: 34px;
        }
        &.search{
          flex-basis: 20%;
          text-align: right;
          margin-right: 10px;
          font-size:28px;
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
