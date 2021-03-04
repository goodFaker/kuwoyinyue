<template>
	<div class="outerContainer">
		<HeaderNav></HeaderNav>
		<div class="inner">
			<NavBar></NavBar>
		</div>
	</div>
</template>

<script>
import NavBar from './components/NavBar/NavBar'
export default {
	name: 'App',
	components: {
		NavBar,
	},
}
</script>
<style  lang='less'  rel='stylesheet/less' scoped >
.inner {
	padding: 0 120px;
}
</style>

