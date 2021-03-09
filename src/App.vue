<template>
	<div class="outerContainer">
		<HeaderNav></HeaderNav>
		<div class="inner">
			<NavBar v-if="showNavBar"></NavBar>
			<router-view></router-view>
		</div>
		<Footer/>
	</div>
</template>

<script>
import NavBar from './components/NavBar/NavBar'

export default {
	name: 'App',
	components: {
		NavBar,
		
	},
	  data() {
		return {
			showNavBar:true
		}
	  },
	mounted(){
		const {path} = this.$route
		
		if(path.startsWith('/search')){

			this.showNavBar=false
		}else{
			this.showNavBar=true
		}
		
	},
}
</script>
<style  lang='less'  rel='stylesheet/less' scoped >
.inner {
	padding: 0 120px;
}
.outerContainer {
	overflow: hidden;
}
</style>

