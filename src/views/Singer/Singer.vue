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
                    <img class="itemImg" :src="singer.pic" alt="">
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
                <img class="img" :src="otherSinger.pic" alt="">
                <span class="singer">{{otherSinger.name}}</span>
            </li>
        </ul>
        <el-pagination
  :page-size="20"
  :pager-count="11"
  layout="prev, pager, next"
  :total="1000">
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
        mainSingerList:[],//上面展示的十条数据
        otherSingerList:[],//下面展示的剩余数据
        pageNo: 1, // 默认第一页的数据,页码是1
        pageSize: 100, // 默认每页显示的条数
    }
  },
computed:{
    ...mapState({
        artistList:(state)=>state.singer.artistList,
        allSingerList:state=>state.singer.allSingerList
    })
},
   mounted(){
       this.$store.dispatch('reqAllSingerList')
      this.mainSingerList = this.artistList.slice(0,10)
      this.otherSingerList = this.artistList.slice(10)
      
   },
    methods:{
      async handleSinger(category){
        this.currentId = category
        await this.$store.dispatch('reqArtistList',{category})

       },
       getArtistList(){

       }
   },
   watch:{
          currentId:{
         async handler(currentId){  
             let {category} = this.$route.query
             if(currentId!=category){
            this.$router.replace(`/singer?category=${currentId}`)
            await this.$store.dispatch('reqArtistList',{category:currentId})
              this.mainSingerList = this.artistList.slice(0,10)
             this.otherSingerList = this.artistList.slice(10)
            }else{
               await this.$store.dispatch('reqArtistList',{category})
             this.mainSingerList = this.artistList.slice(0,10)
             this.otherSingerList = this.artistList.slice(10)
            }

           },
           immediate:true,
       }
   }
}
</script>

<style  lang='less'  rel='stylesheet/less' scoped >
    .outer{
        width: 1400px;
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
