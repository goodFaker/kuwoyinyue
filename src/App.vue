<template>
	<div id="app">
		<h1>酷我音乐</h1>
		<ul class="nav">
			<li>
				<router-link to="/">推荐</router-link>
			</li>
			<li>
				<router-link to="/rank">排行榜</router-link>
			</li>
			<li>
				<router-link to="/singer">歌手</router-link>
			</li>
			<li>
				<router-link to="song">歌单</router-link>
			</li>
		</ul>
		<el-button type="text" @click="dialogVisible = true"
			>登录</el-button
		>

		<el-dialog
			title="提示"
			:visible.sync="dialogVisible"
			width="30%"
			:before-close="handleClose"
		>
			<span>这是一段信息</span>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogVisible = false"
					>确 定</el-button
				>
			</span>
		</el-dialog>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(()=> {
            done();
          })
          .catch(() => {});
      }
    }
}
</script>
<style  lang='less'  rel='stylesheet/less' scoped >
#app {
	height: 100%;
	padding: 0 120px;
	display: flex;
	text-align: center;
	min-width: 1010px;
	flex-direction: column;
	.nav {
		display: flex;
		justify-content: center;
		font-size: 30px;
		li {
			margin: 0 20px;
		}
	}
}
</style>

