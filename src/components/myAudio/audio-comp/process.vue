<template>
   <div class="process-box">
        <span class="process" :style="{width:'value'}"></span>
        <span class="pro-btn"></span>
   </div>
</template>
<style rel="stylesheet/less" lang="less">
    .process-box{
        width: 100%;
        height: 4px;
        background: transparent;
        position: relative;
        span{
            display: block;
            position: absolute;
            &.process{
               left:0;
               height: 0;
               height: 100%;
               background: red;
            }
            &.pro-btn{

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
