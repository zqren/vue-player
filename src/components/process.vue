<template>
   <div class="process-box">
        <span class="process" :style="{width:val+'%'}"></span>
        <span class="pro-btn" :style="{left:val +'%'}"></span>
   </div>
</template>
<style rel="stylesheet/less" lang="less">
    .process-box{
      margin-top: 100px;
        width: 100%;
        height: 4px;
        background: transparent;
        position: relative;
        span{
            display: block;
            position: absolute;
            &.process{
               left:0;
               height: 100%;
               background: red;
            }
            &.pro-btn{
              top:-3px;
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background: green;
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
        props:['val'],
        components:{

        }
    }
</script>
