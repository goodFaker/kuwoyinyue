<template>
	<header class="container index-header">
		<div class="header-bg">
			<div class="header-left">
				<img class="headerimg" src="./img/lg.png" />
				<ul>
					<li class="active"><a>发现音乐</a></li>
					<li><a>下载客户端</a></li>
					<li><a>音乐现场</a></li>
					<li><a>VIP会员</a></li>
					<li><a>酷我畅听</a></li>
					<li><a>酷我耳机</a></li>
					<li>
						<a
							>更多<img src="./img/jt.png" alt="" class="arrow"
						/></a>
					</li>
				</ul>
			</div>
			<div class="header-right">
				<div class="header-right-input"><input type="text" /></div>
				<div class="header-right-text">
					<span>登录</span>
					<span>/</span>
					<span>注册</span>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'Header',
}
</script>

<style  rel='stylesheet' scoped >
/* 头部部分 */
.container {
	box-sizing: border-box;
	margin: 0 auto;
  padding: 0 120px;
}

.index-header {
	border-bottom: 1px solid #666;
}

.header-bg {
	height: 67px;
	overflow: hidden;
}

.headerimg {
	width: 130px;
	height: 40px;
	padding-top: 11px;
	padding-right: 20px;
}

.arrow {
	width: 10px;
	height: 10px;
}

.header-left {
	display: flex;
	align-content: center;
	float: left;
}

.header-left ul {
	line-height: 67px;
	font-size: 16px;
}

.header-left ul li {
	display: inline-block;
	padding: 0 10px;
	color: #333;
	font-weight: 300;
}

.active {
	background: #ffe443;
	font-weight: 600 !important;
}

.header-right {
	display: flex;
	align-content: center;
	float: right;
}

.header-right-input {
	line-height: 67px;
	padding-right: 20px;
}

.header-right-input input {
	width: 220px;
	height: 36px;
	background-color: #f5f5f5;
	border: none;
	background-image: url(./img/ss.png);
	background-size: 20px;
	background-repeat: no-repeat;
	background-position: 7px;
	padding-left: 34px;
}

.header-right-text {
	line-height: 67px;
	font-size: 14px;
}

/* 主体部分 */

/* 主体导航栏 */

.main nav {
	padding-left: 206px;
	height: 54px;
	line-height: 54px;
}

.main nav ul li {
	display: inline-block;
}

/* .main nav ul li a.active2:after{
  position: absolute;
  content: "";
  left: 0;
  bottom: 1px;
  width: 100%;
  height: 6px;
  background: #ffe443;
  z-index: -1;
} */
</style>
