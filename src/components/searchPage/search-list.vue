<template>
	<div v-show="searchRels.length != 0" class="search-list">
			<ul>
				<li v-for="list in searchRels">
					<span :id="list.id"					 
								class="song-name"
					>{{list.name}}</span>
					<span class="song-play iconfont icon-play"
							   @click="getAlbumPic(list)"></span>
					<span class="song-more iconfont icon-play"></span>
				</li>
			</ul>	
	</div>
</template>
<style lang="less" scoped>
	.search-list{
		width: 100%;
		height: 100%;
		ul {
				list-style: none;
				li {
					height: 2.1rem;
					display:flex;
					line-height: 2.1rem;
					border-bottom: 1px solid gainsboro;
					span{
						flex-grow: 1;
						flex-wrap: nowrap;
						justify-content: space-around;
						align-items: center;
						&.song-name{
							flex-basis: 80%;
							color:#666; 
							font-size: 0.7rem;
							margin-left: 0.5rem;
						}
						&.song-play,
						&.song-more{
							flex-basis: 10%;
							color: #999;
							text-align: center;
						}
					}	
				}
		}
	}
</style>
<script>
	import { mapActions } from 'vuex'

	export default{
		name:'searchList',
		props:{
			listShow:{
				type:Boolean,
				default:false
			},
			searchRels:{
				type:Array,
				default:()=>{
					return []
				}
			}
		},
		methods:{
			...mapActions(['getAlbumPic'])
		}
	}
</script>