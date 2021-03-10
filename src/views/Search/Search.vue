<template>
	<div class="searchOuter">
		<div class="searchContainer">
			<!-- 头部搜索部分 -->
			<div class="search_header">
				<div class="bgImg"></div>
				<div class="innerSearch">
					<input type="text" placeholder="搜索音乐/MV/歌单/歌手" />
					<i class="sui-icon icon-tb-search"></i>
				</div>
			</div>
			<!-- 内容部分 -->
			<div class="search_content">
				<!-- 搜索的种类切换部分 -->
				<div class="tab">
					<span class="searchResult">搜索结果</span>
					<nav>
						<ul class="categoryList">
							<li class="active">单曲</li>
							<li>专辑</li>
							<li>MV</li>
							<li>歌单</li>
							<li>歌手</li>
						</ul>
					</nav>
				</div>
				<!-- 按钮部分 -->
				<div class="btns">
					<el-button round>
						<i class="sui-icon icon-touch-play"></i>
						<span>播放全部</span>
					</el-button>
					<el-button round>
						<i class="sui-icon icon-tb-we"></i>
						<span>收藏</span>
					</el-button>
					<el-button round>
						<i class="sui-icon icon-pc-chevron-down-circle"></i>
						<span>下载</span>
					</el-button>
				</div>

				<!-- 表格展示部分 -->
				<el-table stripe style="width: 100%" :data="searchList">
					<el-table-column type="index" width="130" label="序号">
						<template slot-scope="scope">
							<div class="songName">
								<span>{{ scope.$index + startIndex }}</span>
								<img :src="scope.row.pic" alt="" />
							</div>
						</template>
					</el-table-column>
					<el-table-column label="歌曲" width="220" prop="name">
						<template slot-scope="scope">
							<div
								class="songName"
								@click="handlePlay(scope.$index)"
							>
								<span>{{ scope.row.name }}</span>
							</div>
						</template>
					</el-table-column>
					<el-table-column prop="artist" label="歌手" width="220">
					</el-table-column>
					<el-table-column prop="album" label="专辑" widt="220">
					</el-table-column>
					<el-table-column
						label="时长"
						width="80"
						prop="songTimeMinutes"
					>
					</el-table-column>
				</el-table>

				<!-- 分页器组件 -->
				<el-pagination
					layout="prev, pager, next"
					:total="total"
					:current-page="page"
					:page-sizes="[3, 6, 9, 12]"
					:page-size="limit"
					@current-change="handleCurrentChange"
				>
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
// import { reqSearchData } from '@/api/index'
import { mapState } from 'vuex'
export default {
	name: 'Search',

	data() {
		return {
			keyWord: '',
			total: null,
			page: 1,
			limit: 30,
		}
	},
	mounted() {
		this.getSearchResult(this.page)
	},
	methods: {
		/* 获取搜索结果 */
		async getSearchResult(page, limit = 30) {
			const { keyWord } = this.$route.query
			this.keyWord = keyWord
			this.$store.dispatch('getSearchList', { keyWord, page, limit })
			this.total = 100
		},
		/* 当页面改变的时候触发的函数 */
		handleCurrentChange(page) {
			this.page = page
			this.getSearchResult(page)
			window.scrollTo(0, 0)
		},
		handlePlay(index) {
			const { artist, rid, pic ,album, name} = this.searchList[index]
			const palyDetail = {
				artist,
				rid,
				pic,
				album,
				name
			}
			sessionStorage.setItem('music',JSON.stringify(palyDetail))
			this.$router.push('/playdetail')
		},
	},
	computed: {
		startIndex() {
			return (this.page - 1) * this.limit + 1
		},
		...mapState({
			searchList: (state) => state.search.searchList,
		}),
	},
	watch: {
		$route() {
			this.getSearchResult()
		},
	},
}
</script>

<style  lang='less'  rel='stylesheet/less' scoped >
.searchContainer {
	min-width: 1180px;
	max-width: 1640px;
	padding: 0 120px;
	box-sizing: border-box;

	.search_header {
		position: relative;
		height: 246px;
		.bgImg {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 1920px;
			height: 100%;
			background: url(https://h5static.kuwo.cn/www/kw-www/img/searchBg.07b12b9.png);
			z-index: -1;
		}
		.innerSearch {
			width: 720px;
			z-index: 20;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			padding-left: 8px;
			background: #f5f5f5;
			display: flex;
			align-items: center;
			justify-content: space-between;
			input {
				width: 100%;
				height: 54px;
				line-height: 54px;
				display: inline-block;
				flex: 1;
				border: none;
				margin-right: 24px;
				padding-left: 10px;
				font-size: 14px;
				background: #f5f5f5;
				outline: none;
			}
			.sui-icon {
				font-size: 20px;
				padding: 16px;
				cursor: pointer;
			}
		}
	}
}
.search_content {
	.tab {
		display: flex;
		align-items: baseline;
		margin-top: 43px;
		margin-bottom: 42px;
		.searchResult {
			font-size: 22px;
			font-weight: 600;
			line-height: 30px;
			margin-right: 40px;
		}
		.categoryList {
			display: flex;
			li {
				position: relative;
				display: inline-block;
				height: 20px;
				line-height: 20px;
				margin-right: 34px;
				font-weight: 300;
				color: #333;
				font-size: 14px;
				&.active::after {
					position: absolute;
					content: '';
					left: 0;
					height: 3px;
					background: #ffe443;
					width: 100%;
					bottom: 1px;
					z-index: -1;
				}
				&.active {
					font-weight: 600;
				}
			}
		}
	}
	.btns {
		.el-button {
			&:first-child {
				background-color: #ffe443;
			}
		}
		.sui-icon {
			margin-right: 8px;
		}
	}
	.el-pagination {
		text-align: center;
		padding-top: 30px;
	}
}
.songName {
	display: flex;
	justify-content: space-between;
	align-items: center;
	img {
		width: 54px;
		height: 54px;
	}
	span {
		display: inline-block;
		margin-left: 10px;
	}
}
</style>
