<template>
    <div class="home-banner">
        <ul class="swiper-container" :style="{transform:'translateX('+ dis +'%)',transition:speed}">
            <li v-for="(img,index) in imgs"
                class="swiper-item"
                :style="{transform:'translateX('+index+'00%)'}"
                @touchstart="tStart"
                @touchmove = "tMove"
                @touchend = "tEnd"
            >
                <img :src="img.src" />
            </li>
        </ul>
        <div class="contronal-box">
           <span class="item"
                 v-for="i in imgs.length"
                 :class="{active:i==createdIndex}"></span>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .home-banner{
        position: relative;
        width: 100%;
        min-height: 178px;
        overflow-x: hidden;
        overflow-y: auto;
        ul.swiper-container{
            position: relative;
            list-style: none;
            width: 100%;
            height: inherit;
            li.swiper-item{
                position: absolute;
                width: 100%;
                height: inherit;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>
<script>

    export default{
        data(){
            return{
                imgs:[
                    {
                        src:'http://p4.music.126.net/ZWitDwDDHNPOMSLadDgEYg==/3420580711233111.jpg'
                    },{
                        src:'http://p4.music.126.net/95zK2FJUocfIcG5BYEgMiQ==/3300733911198758.jpg'
                    },{
                        src:'http://p3.music.126.net/80905--U1SEboXSL6UgArA==/1421668548695431.jpg'
                    },{
                        src:'http://p4.music.126.net/s86fIMEuVlQa1Iw5o2Jb8w==/3416182637824600.jpg'
                    },{
                        src:'http://p4.music.126.net/Ygu7fqFUDvhvs1LQxYfSfA==/3416182637824593.jpg'
                    },{
                        src:'http://p4.music.126.net/4cp7AOk5WgbV3tNr_rgxdg==/2946691205461038.jpg'
                    }
                ],
                dis:0,
                speed:'0s',
                createdIndex:1,
                drag:{
                    startX:0,
                    deltaX:0,
                    minDelta:150,
                    _scrollWidth:0,
                    _length:0,
                    status:false
                }
            }
        },
        created(){

        },
        methods:{
            tStart(event){
                let e = event || widnow.event
                this.drag.startX = e.touches[0].pageX
                this.drag._scrollWidth = e.target.scrollWidth
                this.drag._length = this.imgs.length
                this.speed = 'all 0s'
            },
            tMove(event){
                let e = event || widnow.event
                this.drag.deltaX = e.touches[0].pageX - this.drag.startX
                let prec = (this.drag.deltaX/this.drag._scrollWidth)*100
                this.dis = prec
            },
            tEnd(event){
                let e = event || window.event

                let endX = e.changedTouches[0].pageX

                if(this.drag.startX == endX) return;

                if(Math.abs(this.drag.deltaX) < this.drag.minDelta){
                    this.speed = "all .5s ease-in-out"
                    this.dis = 0
                }else if(this.drag.deltaX < 0){
                    this.speed = "all .5s ease-in-out"
                    this.dis = -100
                }else{
                  this.speed = "all .5s ease-in-out"
                  this.dis = 100
                }
            },

        },
        components:{

        }
    }
</script>
