<template>
    <div class="home-banner">
        <ul class="swiper-container">
            <li class="swiper-item"
                :style="{transform:`translateX(${(-defaultIndex-1)*100}%)`,transition:speed}"
            >
                <img :src="imgs[imgs.length-1].src">
            </li>
            <li v-for="(img,index) in imgs"
                :key="index"
                class="swiper-item"
                :style="{transform:`translateX(${(index-defaultIndex)*100}%)`,transition:speed}"
            >
                <img :src="img.src" />
            </li>
            <li class="swiper-item"
                :style="{transform:`translateX(${(imgs.length-defaultIndex)*100}%)`,transition:speed}"
            >
                <img :src="imgs[0].src">
            </li>
        </ul>
        <div class="contronal-box">
           <span class="item"
                 v-for="i in imgs.length"
                 :class="{active:i==currentIndex}"
                 :key="i"></span>
        </div>
    </div>
</template>
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
                defaultIndex:0,
                speed:'all 0s',
                currentIndex:1,
                autoPlayTimer:null,
                time:3000,
                drag:{
                    startX:0,
                    deltaX:0,
                    minDelta:50,
                    _scrollWidth:0,
                    _moveDis:0
                }
            }
        },
        beforeCreate(){
            this.$store.dispatch('getLoadState',false)
        },
        created(){
          this.autoPlay()
        },
        mounted(){
            this.bindEvent()
        },
        methods:{
            bindEvent(){
                this.$el.addEventListener('touchstart',this.tStart,false);
                this.$el.addEventListener('touchmove',this.tMove,false);
                this.$el.addEventListener('touchend',this.tEnd,false);
            },
            tStart(event){
                let e = event || window.event
                this.drag.startX = e.touches[0].pageX
                this.drag._scrollWidth = e.target.scrollWidth
                this.speed = 'all 0s'
                clearInterval(this.autoPlayTimer)
                console.log(this.drag._moveDis)
            },
            tMove(event){
                let e = event || window.event
                this.drag.deltaX = e.touches[0].pageX - this.drag.startX
                let prec = (this.drag.deltaX/this.drag._scrollWidth)
                this.defaultIndex = this.drag._moveDis - prec
            },
            tEnd(event){
                let e = event || window.event
                let endX = e.changedTouches[0].pageX
                if(this.drag.startX == endX || Math.abs(this.drag.deltaX) < this.drag.minDelta){
                    this.speed = "all .5s ease-in-out"
                    this.defaultIndex = this.drag._moveDis
                    this.drag.status = true
                    return;
                }
                if(this.drag.deltaX < 0 ){
                    this.speed = "all .5s ease-in-out"
                    if(this.drag._moveDis == (this.imgs.length-1)){
                       this.defaultIndex = this.imgs.length
                       this.drag._moveDis = 0
                       this.currentIndex = 1
                    }else{
                       this.drag._moveDis += 1
                       this.defaultIndex = this.drag._moveDis
                       this.currentIndex += 1
                    }
                }else if(this.drag.deltaX > 0){
                   this.speed = "all .5s ease-in-out"
                   if(this.drag._moveDis == 0){
                      this.defaultIndex = -1
                      this.drag._moveDis = this.imgs.length-1
                      this.currentIndex = this.imgs.length
                   }else{
                      this.drag._moveDis -= 1
                      this.defaultIndex = this.drag._moveDis
                      this.currentIndex -= 1
                   }
                }
                this.autoPlay()
            },
            autoPlay(){
                this.autoPlayTimer = setInterval(this.turnNext,this.time)
            },
            turnNext(){
                console.log(this.drag._moveDis)
                if(this.drag._moveDis == this.imgs.length-1){
                    this.drag._moveDis += 1
                    this.defaultIndex = this.drag._moveDis
                    this.currentIndex = 1
                    this.speed = 'all .5s ease-in-out'
                    setTimeout(()=>{
                        this.defaultIndex = 0
                        this.drag._moveDis = 0
                        this.speed = 'all 0s ease-in-out'
                    },1500)
                } else {
                 this.drag._moveDis += 1
                 this.defaultIndex = this.drag._moveDis
                 this.currentIndex += 1
                 this.speed = 'all .5s ease-in-out'
              }
            }
           
        },
        destroyed(){
            clearInterval(this.autoPlayTimer)
        }
    }
</script>
<style lang="less" scoped>
    .home-banner{
        position: relative;
        width: 100%;
        min-height: 8.9rem;
        overflow: hidden;
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
            height: 1rem;
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-items: center;
            span{
                width: 0.4rem;
                height: 0.4rem;
                border-radius: 50%;
                background: rgba(255,255,255,.4);
                margin:0px 0.25rem;
                &.active{
                    background: rgba(238, 114, 114, 1);
                }
            }
        }
    }
</style>
