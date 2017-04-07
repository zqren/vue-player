<template>
	<div v-show="historyShow" class="search-history">
		22222
	</div>
</template>
<style lang="less" scoped>
	.search-history{
		width: 100%;
	}
</style>
<script>
	export default{
		name:'searchHistory',
		data(){
			return{
				
			}
		},
		props:{
			historyShow:{
				type:Boolean,
				default:false
			}
		},
		methods:{
			
		}
	}
</script>