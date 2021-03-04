<template>
	<div class="navContainer">
		<ul class="navList">
			<li class="navItem active">
				<router-link to="/recommend">推荐</router-link>
			</li>
			<li class="navItem">
				<router-link to="/rank">排行榜</router-link>
			</li>
			<li class="navItem">
				<router-link to="singer">歌手</router-link>
			</li>
			<li class="navItem">
				<router-link to="song">歌单</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'NavBar',
}
</script>

<style  lang='less'  rel='stylesheet/less' scoped >
.navContainer {
	height: 54px;
	width: 1080px;
	padding-left: 206px;
	display: flex;
	align-items: center;
	.navList {
		display: flex;
		font-size: 14px;
		.navItem {
			margin-right: 34px;
		}
	}
}
</style>
