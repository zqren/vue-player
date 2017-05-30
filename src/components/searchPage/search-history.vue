<template>
	<div v-show="historyShow" class="search-history">
		<div class="history-title">
			<div class="history-text">搜索历史</div>
			<div @click="clearAll" class="history-btn">
				<span>清空全部</span>
				<span class="iconfont icon-home"></span>
			</div>
		</div>
		<div class="history-content">
			<div class="no-history" v-if="historyArr.length == 0">
					<span>暂无历史纪录</span>
					<span class="iconfont icon-home"></span>
			</div>
			<ul v-if="historyArr.length !=0" class="history-ul">
				<li v-for="list in historyArr" class="history-list">
					<span>{{list}}</span>
					<span class="iconfont icon-home"></span>
				</li>
			</ul>
		</div>
	</div>
</template>
<style lang="less" scoped>
	.search-history {
		width: 100%;
		.history-title {
			width: 100%;
			padding: 0.5rem 0;
			box-sizing: border-box;
			border-bottom: 0.05rem solid gainsboro;
			display: flex;
			justify-content: space-between;
			align-items: center;
			div {
				font-size: 0.6rem;
				color: #999999;
				&.history-text {
					flex-basis: auto;
					flex-grow: 1;
					margin-left: 0.5rem;
				}
				&.history-btn {
					flex-basis: auto;
					flex-grow: 0;
					text-align: right;
					margin-right: 0.5rem;
				}
			}
		}
		.history-content {
			width: 100%;
			margin-top: 0.25rem;
			.no-history{
				width: 100%;
				margin:3rem auto;
				color: #999999;
				font-size: .8rem;
				text-align: center;
				span{
					display: block;
					margin-bottom: 0.25rem;
					&.iconfont{
						font-size: 2rem;
					}
				}
			}
			.history-ul {
				width: 100%;
				max-height: 15rem;
				overflow-y: scroll;
				font-size:0.6rem;
				color:#999999;
				padding:0 0.5rem;
				box-sizing:border-box;
				li.history-list {
					padding: 0.25rem 0;
					box-sizing: border-box;
					border-bottom: 0.05rem solid gainsboro;
					display: flex;
					justify-content: space-around;
					align-items: center;
					span{
						flex-basis: 50%;
						&:first-child{
							margin-left: 0.5rem;
						}
						&:last-child{
							text-align: right;
							margin-right: 0.5rem;
						}
					}
				}
			}
		}
	}
</style>
<script>
	export default {
		name: 'searchHistory',
		data() {
			return {
				historyArr: []
			}
		},
		props: {
			historyShow: {
				type: Boolean,
				default: false
			}
		},
		created() {
			this.historyArr =localStorage.getItem('histories')?localStorage.getItem('histories').split(','):[]
		},
		methods: {
			clearAll(){
				localStorage.removeItem('histories')
				this.historyArr = []
			}
		}
	}
</script>