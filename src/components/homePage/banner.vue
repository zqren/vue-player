<template>
    <div class="home-banner">
        <ul class="swiper-container" :style="{transform:'translateX('+n+'%)',transition:speed}">
            <li  v-for="(img,index) in imgs"
                class="swiper-item"
                :style="{transform:'translateX('+index+'00%)'}">
                <img :src="img.src" />
            </li>
        </ul>
    </div>
</template>
<style lang="less" scoped>
    .home-banner{
        position: relative;
        width: 100%;
        ul.swiper-container{
            position: relative;
            list-style: none;
            width: 100%;
            height: auto;
            li.swiper-item{
                position: absolute;
                width: 100%;
                height: auto;
                img{
                    width: 100%;
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
                n:0,
                speed:'all 0.2s ease-in-out'
            }
        },
        methods:{
        },
        components:{

        }
    }
</script>
