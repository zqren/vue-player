<template>
    <div class="hot-playlist-label" :class="{topBorder:isBorder}">
        <span class="playlist">{{label}}</span>
        <span class="arrow"></span>
    </div>
</template>
<style rel="stylesheet/less" lang="less">
    .hot-playlist-label{
        width: auto;
        padding: 0.5rem 0;
        box-sizing: border-box;
        color: #666;
        font-size: 0.7rem;
        font-weight: 500;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        &.topBorder{
            border-top: 1px solid gainsboro;
        }
        span{
            flex-basis: auto;
            flex-grow: 0;
            &.playlist{
                height: 1rem;
                line-height: 1rem;
                border-left: 0.1rem solid #EE7272;
                padding-left: 0.5rem;
                box-sizing: border-box;
            }
            &.arrow{
                width: 0.4rem;
                height: 0.4rem;
                margin-left: 0.25rem;
                margin-top: -0.05rem;
                border-top-color: #dedede;
                border-top-style: solid;
                border-top-width: 0.05rem;
                border-right-color: #dedede;
                border-right-style: solid;
                border-right-width: 0.05rem;
                transform: rotateZ(45deg);
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
        props:{
            label:{
                type:String,
                default:''
            },
            isBorder:{
                type:Boolean,
                default:false
            }
        }
    }
</script>
