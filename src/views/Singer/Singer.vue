<template>
    <div class="outer">
        <!-- 热门 -->
        <ul class="hot">
            <li class="active">热门</li>
            <li class="bigLetter">A</li>
            <li class="bigLetter">B</li>
            <li class="bigLetter">C</li>
            <li class="bigLetter">D</li>
            <li class="bigLetter">E</li>
            <li class="bigLetter">F</li>
            <li class="bigLetter">G</li>
            <li class="bigLetter">H</li>
            <li class="bigLetter">I</li>
            <li class="bigLetter">J</li>
            <li class="bigLetter">K</li>
            <li class="bigLetter">L</li>
            <li class="bigLetter">M</li>
            <li class="bigLetter">N</li>
            <li class="bigLetter">O</li>
            <li class="bigLetter">P</li>
            <li class="bigLetter">Q</li>
            <li class="bigLetter">R</li>
            <li class="bigLetter">S</li>
            <li class="bigLetter">T</li>
            <li class="bigLetter">U</li>
            <li class="bigLetter">V</li>
            <li class="bigLetter">W</li>
            <li class="bigLetter">X</li>
            <li class="bigLetter">Y</li>
            <li class="bigLetter">Z</li>
            <li class="bigLetter">#</li>
        </ul>
        <!-- 全部 -->
        <ul class="all">
            <li 
            :class="currentId == index?'active':'singList'"
            v-for="(item,index) in allSingerList" 
            :key="item.id"
            @click="handleSinger(item.id)"
            >{{item.name}}</li>
        </ul>
        <!-- 照片歌手 -->
            <ul class="singerList">
                <li v-for="singer in mainSingerList" :key="singer.id">
                    <div class="listItem">
                    <img class="itemImg" v-lazy="singer.pic" alt="">
                    <span class="itemText">{{singer.name}}</span>
                    <span class="itemNum">{{singer.musicNum}}首歌曲</span>
                    </div>
                </li>
            </ul>
        <!-- 其他歌手 -->
        <ul class="otherList">
            <li class="otherListItem"
            v-for="otherSinger in otherSingerList" :key="otherSinger.id"
            >
                <img class="img" v-lazy="otherSinger.pic" alt="">
                <span class="singer">{{otherSinger.name}}</span>
            </li>
        </ul>
                <el-pagination
						background
						layout="prev, pager, next"
						:total="artistList.length"
						@current-change="handleSizeChange"
						:page-size="20"
					>
					</el-pagination>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default { 
name:'Singer',
  data() {
    return {
        currentId:'0',//当前点击的歌手分类id
        artistList:[],//全部歌手信息列表
        mainSingerList:[],//上面展示的十条数据
        otherSingerList:[],//下面展示的剩余数据
        category:'0',//歌手分类列表id
        pageNo: '1', // 默认第一页的数据,页码是1
        pageSize: '100', // 默认每页显示的条数
    }
  },
computed:{
    ...mapState({
        allSingerList:state=>state.singer.allSingerList
    })
},
   mounted(){
       //获取歌手分类列表
    this.$store.dispatch('reqAllSingerList')
    //挂载完毕获取歌手列表
    this.reqSingerList(this.category,this.pageSize, this.pageNo)
   },
    methods:{
        //获取歌手列表
      async reqSingerList(category,pageSize, pageNo){
          //保存每次传进来的参数
          this.category = category
          this.pageSize = pageSize
          this.pageNo = pageNo
       const result = await this.$API.reqArtistList(category,pageSize,pageNo)
       //请求回来的列表
        this.artistList = result.artistList
        //上面的大图十条数据
        this.mainSingerList = this.artistList.slice(0,10)
        //下面的小图数据
       this.otherSingerList = this.artistList.slice(10)
       },
       //点击分页器发送请求刷新页面
       handleSizeChange(val){
           this.reqSingerList(this.category,this.pageSize,val)
       },
       //点击歌手分类刷新页面
       handleSinger(id){
           this.currentId = id
           this.reqSingerList(id,this.pageSize,this.pageNo)
       }
   },
}
</script>

<style  lang='less'  rel='stylesheet/less' scoped >
    .outer{
        height: 100%;
        // border: 1px solid green;
        padding: 0px 120px;
        display: flex;
        flex-direction: column;
        .hot{
            display: flex;
            line-height: 28px;
            text-align: center;
            margin: 30px 0 0;
            .active{
                width: 56px;
                height: 28px;
                font-weight: bold;
                background-color:#ffe443;
                border-radius:14px;
                 margin-right:14px;
            }
            .bigLetter{
                margin-right:14px;
                width: 28px;
                cursor: pointer;
            }
        }
        .all{
            display: flex;
           
            line-height: 28px;
            text-align: center;
            margin: 32px 0 29px;
            align-items: center;
            .active{
                width: 56px;
                height: 28px;
                font-weight: bold;
                background-color:#ffe443;
                border-radius:14px;
            }
            .singList{
                 flex-wrap: nowrap;
                margin:0 6px 0 0;
                padding: 7px 14px;
                cursor: pointer;
            }
        }
        .singerList{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            .listItem{
                width: 189px;
                height: 246px;
                margin: 40px 25px 0 0;
                padding: 0 28px 0 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                // border: 1px solid red;
                .itemImg{
                    width: 189px;
                    height: 189px;
                    border-radius: 50%;
                }
                .itemText{
                    line-height: 22px;
                    margin: 17px 0 0;
                    font-size: 16px;
                }
                .itemNum{
                    margin: 6px 0 0;
                    color: #999999;
                }
            }
        }
        .otherList{
            display: flex;
            width: 100%;
            flex-wrap:wrap;
            // border: 1px solid red;
            .otherListItem{
                display: flex;
                align-items: center;
                width: 182px;
                height: 38px;
                line-height: 38px;
                // border: 1px solid green;
                margin: 40px 61px 0 0;
                .img{
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                }
                .singer{
                    font-size: 14px;
                    color: #333333;
                    margin-left: 7px;
                }
            }
        }
    }
</style>

<style>
/* 分页器样式 */
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
</style>
