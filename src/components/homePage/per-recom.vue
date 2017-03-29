<template>
   <div class="per-label">
       <div class="fm">
           <span class="icon iconfont icon-shouyinji01"></span>
           <span class="text">私人fm</span>
       </div>
       <div class="fm">
           <span class="icon iconfont icon-riqi"></span>
           <span class="text">每日歌曲推荐</span>
       </div>
       <div class="fm">
           <span class="icon iconfont icon-yinfu"></span>
           <span class="text">云音乐热歌榜</span>
       </div>
   </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    .per-label{
        width: 100%;
        height: auto;
        padding: 10px 0;
        box-sizing: border-box;
        border-bottom: 1px solid gainsboro;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;
        div.fm{
            flex-basis: auto;
            flex-grow: 0;
            text-align: center;
            span{
                margin: 0 auto;
                text-align: center;
                display: block;
                &.icon{
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    border: 2px solid #EE5648;
                    text-align: center;
                    line-height: 45px;
                    font-size: 28px;
                    color: #ee5648;
                }
                &.text{
                    margin-top: 5px;
                    color: #666;
                    font-size: 12px;
                }
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
        components:{
            
        }
    }
</script>
