<template>
    <div class="hot-song">
        <!--歌单标签-->
        <div class="hot-playlist-label" :class="{topBorder:isBorder}">
            <span class="playlist">{{label}}</span>
            <span class="arrow"></span>
        </div>
        <!--歌单列表-->
        <div class="hot-playlist-detail">
            <div v-for="list in playlists" class="item">
                <div class="poster">
                    <div v-if="list.playCount" class="listenCount">
                        <span class="iconfont icon-tools-erji-copy"></span>
                        <span>{{list.playCount | getIntNum}}</span>
                    </div>
                    <img :src="list.coverImgUrl || list.blurPicUrl">
                </div>
                <div class="name" :class="{'one-line':!clamp,'two-line':clamp}">{{list.name}}</div>
                <div class="author" v-if="list.artist">{{list.artist.name}}</div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .hot-song{
        width: 100%;
        height: auto;
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
        .hot-playlist-detail{
            font-family: "微软雅黑",Arial;
            width: 100%;
            height: auto;
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            align-items: center;
            .item{
                margin-bottom: 0.25rem;
                width: 32%;
                min-height: 8.1rem;
                div.poster{
                    width: 100%;
                    position: relative;
                    img{
                        width: 100%;
                    }
                    div.listenCount{
                        position: absolute;
                        width: auto;
                        height: auto;
                        right:0.25rem;
                        top:0rem;
                        z-index: 10;
                        span{
                            padding: 0;
                            margin: 0;
                            font-size: 0.6rem;
                            color: #fff;
                        }
                    }
                }
                div.name{
                    margin-top: -0.25rem;
                    font-size: 0.6rem;
                    margin-left: 0.25rem;
                    color: #666;
                    overflow : hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    &.two-line{
                        -webkit-line-clamp: 2;
                    }
                    &.one-line{
                        -webkit-line-clamp: 1;
                    }
                }
                div.author{
                    margin-left: 0.25rem;
                    font-size: 0.6rem;
                    color: #999;
                }
            }
        }
    }
</style>
<script>
    export default{
        props:{
            label:{
                type:String,
                default:''
            },
            isBorder:{
                type:Boolean,
                default:false
            },
            playlists:{
                type:Array,
                default:function(){
                    return []
                }
            },
            clamp:{
               type:Boolean,
                default:false
            }
        },
        filters:{
           getIntNum(val){
              return parseInt(val/100000)?`${Math.floor(val/10000)}万`:val
           }
        }
    }
</script>
