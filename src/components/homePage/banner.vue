<template>
    <div class="home-banner">
        <ul class="swiper-container" :style="{transform:`translateX(${dis}%)`,transition:speed}">
            <li class="swiper-item"
                :style="{transform:'translateX(-100%)'}"
                @touchstart="tStart"
                @touchmove = "tMove"
                @touchend = "tEnd"
            >
                <img :src="imgs[imgs.length-1].src">
            </li>
            <li v-for="(img,index) in imgs"
                class="swiper-item"
                :style="{transform:`translateX(${index}00%)`}"
                @touchstart="tStart"
                @touchmove = "tMove"
                @touchend = "tEnd"
            >
                <img :src="img.src" />
            </li>
            <li class="swiper-item"
                :style="{transform:`translateX(${imgs.length}00%)`}"
                @touchstart="tStart"
                @touchmove = "tMove"
                @touchend = "tEnd"
            >
                <img :src="imgs[0].src">
            </li>
        </ul>
        <div class="contronal-box">
           <span class="item"
                 v-for="i in imgs.length"
                 :class="{active:i==currentIndex}"></span>
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
        .contronal-box{
            position: absolute;
            right:0;
            left: 0;
            bottom:0;
            margin: 10px auto;
            width: 50%;
            height: 20px;
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-items: center;
            span{
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: rgba(255,255,255,.4);
                margin:0px 5px;
                &.active{
                    background: rgba(238, 114, 114, 1);
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
                speed:'all 0s',
                currentIndex:1,
                autoPlayTimer:'',
                drag:{
                    startX:0,
                    deltaX:0,
                    minDelta:50,
                    _scrollWidth:0,
                    _length:0,
                    _num:0,
                    _moveDis:0,
                    _newDis:0,
                    status:true
                }
            }
        },
        created(){
           this.autoPlayTimer = setInterval(this.autoPlay,3000)
        },
        methods:{
            tStart(event){
                let e = event || window.event
                this.drag.startX = e.touches[0].pageX
                this.drag._scrollWidth = e.target.scrollWidth
                this.speed = 'all 0s'
                this.drag.status = false
            },
            tMove(event){
                let e = event || window.event
                this.drag.deltaX = e.touches[0].pageX - this.drag.startX
                let prec = (this.drag.deltaX/this.drag._scrollWidth)*100
                this.dis = this.drag._moveDis + prec
            },
            tEnd(event){
                let e = event || window.event

                let endX = e.changedTouches[0].pageX
                if(this.drag.startX == endX || Math.abs(this.drag.deltaX) < this.drag.minDelta){
                    this.speed = "all .5s ease-in-out"
                    this.dis = this.drag._moveDis
                    this.drag.status = true
                    return;
                }
                if(this.drag.deltaX < 0 ){
                    this.speed = "all .5s ease-in-out"
                    if(this.drag._moveDis == -(this.imgs.length-1)*100){
                       this.dis = -(this.imgs.length)*100
                       this.drag._moveDis = 0
                       this.currentIndex = 1
                    }else{
                       this.drag._moveDis += -100
                       this.dis = this.drag._moveDis
                       this.currentIndex += 1
                    }
                }else if(this.drag.deltaX > 0){
                   this.speed = "all .5s ease-in-out"
                   if(this.drag._moveDis == 0){
                      this.dis = 100
                      this.drag._moveDis = -(this.imgs.length-1)*100
                      this.currentIndex = this.imgs.length
                   }else{
                      this.drag._moveDis += 100
                      this.dis = this.drag._moveDis
                      this.currentIndex -= 1
                   }
                }
            },
            turnNext(){
                this.speed = "all .5s ease-in-out"
                if(this.drag._moveDis == -(this.imgs.length-1)*100){
                    this.dis = -this.imgs.length*100
                    this.drag._moveDis = 0
                    this.currentIndex = 1
                }else{
                   this.drag._moveDis += -100
                   this.dis = this.drag._moveDis
                   this.currentIndex += 1
                }
            },

            autoPlay(){
                if(this.drag.status){
                   this.turnNext()
                }
            }
        },
        components:{

        }
    }
</script>
