<template>
	<div>
		<div class="main">
			<div class="con_l">
				<div class="con">
					<div class="tab">
						<div
							@click="handleRankName(index)"
							v-for="(rank1, index) in rankList"
							:key="index"
						>
							<span class="active">{{ rank1.name }}</span>
						</div>
					</div>
					<ul class="tabcon">
						<li
							@click="handleRankMusice(rank2.sourceid)"
							class="active1"
							v-show="isShow"
							v-for="(rank2, index) in rankList2"
							:key="index"
						>
							<img class="image" :src="rank2.pic" alt="" />
							<div class="item_info">
								<p class="name">{{ rank2.name }}</p>
								<p class="time">{{ rank2.pub }}</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="con_r">
				<div>
					<div>
						<span class="title">{{
							rankList2 == [1] ? '酷我飙升榜' : rankList2[0].name
						}}</span>
						<span class="update_time">{{ musicList.pub }}</span>
					</div>
					<div class="btns">
						<button class="btn1">
							<span
								><i
									><img
										class="icon_1"
										src="../../icon/bofang.svg"
										alt="" /></i
							></span>
							播放全部
						</button>
						<button>
							<img
								class="icon"
								src="../../icon/icon-test.svg"
								alt=""
							/>添加
						</button>
						<button>
							<img
								class="icon"
								src="../../icon/aixin.svg"
								alt=""
							/>
							收藏
						</button>
						<button>
							<img
								class="icon"
								src="../../icon/xiaoxi.svg"
								alt=""
							/>
							评论
						</button>
					</div>
					<el-table
						:header-cell-style="{
							background: '#FAFAFA',
							color: '#999',
						}"
						:data="musicList.musicList"
						stripe
						style="width: 100%"
					>
						<el-table-column
							type="index"
							label="序号"
							width="204.547"
							style="color: red"
						>
						</el-table-column>
						<el-table-column
							prop="name"
							label="歌曲"
							width="296.641"
						>
							<template slot-scope="scope">
								<div class="scope">
									<img
										class="scopeImg"
										:src="scope.row.albumpic"
										alt=""
									/>
									<span class="scopeName">{{
										scope.row.name
									}}</span>
								</div>
							</template>
						</el-table-column>
						<el-table-column
							prop="artist"
							label="歌手"
							width="189.938"
						>
						</el-table-column>
						<el-table-column
							prop="album"
							label="专辑"
							width="274.953"
						>
						</el-table-column>
						<el-table-column
							prop="time"
							label="时长"
							width="69.922"
						>
						</el-table-column>
					</el-table>
					<div class="fyq">
						<el-pagination
							background
							:total="musicListNum"
							layout="prev, pager, next"
							@current-change="handleMusicChange"
							:page-size="30"
						>
						</el-pagination>
					</div>
				</div>
				<!-- 评论区 -->
				<div class="comment">
					<div class="recent">
						热门评论
						<span class="comment-num">{{ comments.total }}条</span>
					</div>
					<div
						class="each"
						v-for="(item, index) in comments.rows"
						:key="index"
					>
						<div class="commentImg">
							<img :src="item.u_pic" alt="" />
						</div>
						<div class="plq">
							<div class="nickName">
								<span>{{
									decodeURIComponent(item.u_name)
								}}</span>
								<i></i>
							</div>
							<div class="selection">{{ item.msg }}</div>
							<div class="commentTime">{{ item.time }}</div>
						</div>
					</div>
				</div>
				<div class="fyq">
					<el-pagination
						background
						layout="prev, pager, next"
						:total="comments.total"
						@current-change="handleSizeChange"
						:page-size="20"
					>
					</el-pagination>
				</div>
				<div class="comment">
					<div class="recent">
						最新评论
						<span class="comment-num">{{ comments1.total }}条</span>
					</div>
					<div
						class="each"
						v-for="(item, index) in comments1.rows"
						:key="index"
					>
						<div class="commentImg">
							<img :src="item.u_pic" alt="" />
						</div>
						<div class="plq">
							<div class="nickName">
								<span>{{
									decodeURIComponent(item.u_name)
								}}</span>
								<i></i>
							</div>
							<div class="selection">{{ item.msg }}</div>
							<div class="commentTime">{{ item.time }}</div>
						</div>
					</div>
				</div>
				<div class="fyq">
					<el-pagination
						background
						layout="prev, pager, next"
						:total="comments1.total"
						@current-change="handleSizeChange1"
						:page-size="20"
					>
					</el-pagination>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { reqRank, reqMusic, reqComment, reqComment1 } from '../../api'
export default {
	name: 'Rank',
	data() {
		return {
			page: '1',
			rankList: [],
			isShow: true,
			/*  RankMusic: "", */
			currentIndex: 0,
			currentMusicIndex: 0,
			musicList: [],
			sourceid: '93',
			comments: [],
			comments1: [],
			rankList2: [1],

			musicListNum: 0,
		}
	},

	async mounted() {
		const result = await reqRank()
		const result1 = await reqMusic(93, 1)
		const resultComment = await reqComment(1, 93)
		const resultComment1 = await reqComment1(1, 93)
		this.comments = resultComment
		this.comments1 = resultComment1
		// console.log(result)
		this.rankList = result.slice(0, 3)
		this.musicList = result1
		this.musicListNum = this.musicList.num * 1
		this.rankList2 = this.rankList[0].list
	},
	watch: {},
	methods: {
		async handleRankName(index) {
			this.currentIndex = index
			const result = await reqMusic(
				this.rankList[index].list[0].sourceid,
				this.page
			)
			this.musicList = result
			this.rankList2 = this.rankList[this.currentIndex].list
			window.scrollTo(0, 0)
		},
		async handleRankMusice(id) {
			this.sourceid = id
			const result1 = await reqMusic(this.sourceid, this.page)
			this.musicList = result1
			this.musicListNum = this.musicList.num * 1
			const { page, sourceid } = this
			const resultComment = await reqComment(page, sourceid)
			const resultComment1 = await reqComment1(page, sourceid)
			this.comments = resultComment
			this.comments1 = resultComment1
		},
		async handleMusicChange(page) {
			const result = await reqMusic(this.sourceid, page)
			
			this.musicList = result
			this.musicListNum = this.musicList.num * 1
			window.scrollTo(0, 200)
		},

		async handleSizeChange(page) {
			/*  this.queryInfo.pagenum = val; */
			/*  this.reqComment(val,sourceid) */
			/*       console.log(page);
      console.log(this.sourceid);
      console.log(reqComment(page, this.sourceid)); */
			const result = await reqComment(page, this.sourceid)

      console.log(result)
			this.comments = result
			// console.log(page);
			/* console.log(result.rows); */
			// window.scrollTo(0, 2900)
		},
		async handleSizeChange1(page) {
			/*  this.queryInfo.pagenum = val; */
			/*  this.reqComment(val,sourceid) */
			/*       console.log(page);
      console.log(this.sourceid);
      console.log(reqComment(page, this.sourceid)); */
			const result = await reqComment1(page, this.sourceid)

      console.log(result)
			this.comments1 = result
			// console.log(page);
		
		},
	},
  
}
</script>

<style  lang='less'  rel='stylesheet/less' scoped >
.main {
	width: 1400px;
	margin: 38px auto;
	display: flex;
	justify-content: space-between;
}

.con_l {
	overflow: hidden;
	width: 18.85%;
	min-width: 210px;
	background: #fff;
	box-shadow: 0 0 20px 0 rgb(65 67 70 / 5%);
}

.con_r {
	width: 1065px;
	height: 100%;
}

.tab {
	margin: 20px 9.09% 14px;
	display: flex;
	justify-content: space-between;
	font-size: 16px;
	padding-bottom: 13px;
	border-bottom: 1px solid #f2f2f2;
	span {
		position: absolute;
		bottom: -5px;
	}
}

.tabcon {
	height: 100%;
}

.active {
	color: black;
	font-size: 16px;
	font-weight: bold;
	border-bottom: 6px solid #ffe443;
	position: relative;
}
.tab span {
	position: relative;
}
.image {
	width: 60px;
	height: 60px;
	margin-right: 12px;
}

.tabcon li {
	height: 80px;
	padding: 0 9.09%;
	display: flex;
	align-items: center;
}

.tabcon .active1 {
	background: #f2f2f2;
}

.item_info {
	width: 144px;
}

.tabcon li .item_info .name {
	height: 20px;
	line-height: 20px;
	font-weight: 600;
	margin-bottom: 6px;
	cursor: pointer;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	padding-right: 5%;
}

.tabcon li .item_info .time {
	height: 20px;
	line-height: 20px;
	color: #999;
}

.title {
	display: inline-block;
	margin-top: 14px;
	height: 53px;
	line-height: 53px;
	font-size: 38px;
	font-weight: 600;
}

.update_time {
	height: 20px;
	line-height: 20px;
	margin-left: 10px;
	color: #999;
}

.btns {
	display: flex;
	width: 100%;
	height: 40px;
	margin-top: 23px;
	margin-bottom: 40px;
}

.btns button {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 30px;
	height: 40px;
	margin-right: 10px;
	text-align: center;
	border-radius: 22px;
	border: none;
	font-size: 16px;
	cursor: pointer;
	color: #333;
}

.btn1 {
	width: 150px;
	background: #ffe12c;
}

.btn1 span {
	height: 40px;
	line-height: 44px;
}

.icon_1 {
	width: 15px;
	height: 15px;
	margin-right: 5px;
}

.icon {
	width: 20px;
	height: 20px;
	margin-right: 5px;
}

.fyq {
	margin-top: 48px;
}

.comment {
	margin-top: 48px;
}

.recent {
	font-size: 22px;
	line-height: 30px;
	font-weight: 600;
	margin-bottom: 22px;
}

.recent .comment-num {
	margin-left: 8px;
	font-weight: 300;
	font-size: 14px;
}

.commentImg {
	width: 42px;
	height: 80px;
	margin-right: 14px;
}

.commentImg img {
	width: 42px;
	height: 42px;
	border-radius: 50%;
}
.plq {
	width: 100%;
	padding-bottom: 20px;
	border-bottom: 1px solid #f2f2f2;
}
.each {
	margin-top: 16px;
	margin-bottom: 20px;
	display: flex;
	.nickName {
		height: 22px;
		line-height: 22px;
		font-size: 14px;
		font-family: 'Microsoft YaHei', 'Helvetica Neue', Helvetica, STHeiTi,
			sans-serif;
		font-weight: 600;
	}
	.selection {
		height: 26px;
		line-height: 26px;
		font-size: 14px;
		word-break: break-all;
	}
	.commentTime {
		font-size: 14px;
		opacity: 0.5;
	}
}
</style>
<style>
.el-table__empty-text {
	display: block;
	width: 500px;
	height: 385px;
	padding-top: 300px;

	color: #909399;
	box-sizing: border-box;
}

.el-pagination.is-background .el-pager li:not(.disabled).active {
	background-color: #ffdf1f;
	color: #333;
	font-weight: 300px;
}

.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev {
	margin: 0 5px;
	background-color: #fff;
	color: #333;
	min-width: 30px;
	border-radius: 2px;
}

.el-pagination.is-background .el-pager li {
	margin: 0 5px;
	background-color: #fff;
	color: #999;
	min-width: 30px;
	border-radius: 2px;
	font-size: 14px;
}

.el-pagination.is-background .btn-next.disabled,
.el-pagination.is-background .btn-next:disabled,
.el-pagination.is-background .btn-prev.disabled,
.el-pagination.is-background .btn-prev:disabled,
.el-pagination.is-background .el-pager li.disabled {
	color: #333;
}

.el-pagination .btn-next .el-icon,
.el-pagination .btn-prev .el-icon {
	display: block;
	font-size: 16px;
	font-weight: 300;
}

.el-pagination {
	width: 500px;
	font-size: 14px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
}
.scope {
	display: flex;
}
.scopeImg {
	width: 54px;
	height: 54px;
	padding-right: 30px;
}
.scopeName {
	height: 54px;
	line-height: 54px;
}
</style>
