<template>
    <div class="search-header">
    	<router-link to="/" class="back-home iconfont icon-back-home" tag="div"></router-link>
    	<input type="text" v-model="searchContent" 
					@keydown.enter="getSearch"
					placeholder="输入歌曲名或歌手名" 
		/>
    </div>
</template>
<style lang="less" scoped>
    .search-header{
    	width: 100%;
    	height: 45px;
    	background: rgba(238,114,114,1);
    	display: flex;
    	justify-content: space-around;
    	align-items: center;
    	.back-home{
    		flex-basis: 2.5rem;
    		color: #fff;
    		font-size: 1.4rem;
    		margin-left: 10px;
    	}
    	input{
    		flex-basis: 100%;
    		height: 90%;
    		flex-grow: 1;
    		border: none;
    		outline: none;
    		color: #fff;
    		padding:0 0.25rem;
    		box-sizing: border-box;
    		background: transparent;
    		border-bottom: 1px solid #fff;
    	}
    	::-webkit-input-placeholder { /* WebKit browsers */
			color: rgba(255,255,255,.6);
		}
    }
</style>
<script>

    export default{
        data(){
            return{
				searchContent:'',
				arr:[],
				searchResults:[]
            }
        },
        methods:{
        	getSearch(){
        		if(localStorage.getItem('histories')){
        			this.arr = localStorage.getItem('histories').split(',')
        		}
        		this.arr.push(this.searchContent)
        		localStorage.setItem('histories',this.arr)
				this.searchContent = ''

				this.$http.get(`${window.HOST}/search?name=周杰伦&limit=10`)
				.then((res)=>{
					this.$set(this.$data,'searchResults',JSON.parse(res.data).result.songs)
					this.$emit('getSearch',this.searchResults)
				})
				.catch((error)=>{
					console.log(error)
				})
        	}
        }
    }
</script>
