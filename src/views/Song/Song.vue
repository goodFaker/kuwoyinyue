<template>
  <div class="outer">
    <!-- 精选歌单 -->
    <div class="well-chosen">
      <div class="song-list">
        <span @click="showChosenList"
          >精选歌单
          <i class="iconfont icon-bar_icon_arrow_"></i>
        </span>
      </div>
      <div class="newest">
        <a
          href="javascript:;"
          :class="orderColor == '0' ? 'active' : ''"
          @click="receiveNew"
          >最新</a
        >
        <a
          href="javascript:;"
          :class="orderColor == '1' ? 'active' : ''"
          @click="receiveHot"
          >最热</a
        >
      </div>
    </div>
    <!-- 精选详情 -->
    <div :class="isShow ? 'well-chosen-detail' : 'well-chosen-detail-hide'">
      <ul class="detail-list">
        <li class="default">
          <div class="well-chosen-default">
            <i></i>
            <span>默认</span>
          </div>
          <div class="well-chosen-list">
            <span>精选歌单</span>
          </div>
        </li>
        <li class="theme-list" v-for="theme in wellMusicList" :key="theme.id">
          <span class="theme">{{ theme.name }}</span>
          <ul class="musicItem">
            <li v-for="musicItem in theme.data" :key="musicItem.id">
              <span>{{ musicItem.name }}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- 歌曲详细列表 -->
    <div class="musicDetail-list">
      <ul>
        <li v-for="song in defaultList" :key="song.id" @click="toSongDetail">
          <div class="imgContainer">
            <div class="mask"></div>
            <img class="musicImg" :src="song.img" alt="" />
          </div>
          <span class="descContent">{{ song.name }}</span>
          <span class="playNum">{{ song.listencnt }}</span>
        </li>
      </ul>
    </div>
    <!-- 底部分页 -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Song",
  data() {
    return {
      order: "new", //歌单页面数据参数，new-->最新   hot--->最热
      orderColor: "0", // 0 --> 最新  1--> 最热
      wellMusicList: [], //精选歌单展示列表
      isShow: false, //点击控制精选歌单显示隐藏
    };
  },
  computed: {
    ...mapState({ defaultList: (state) => state.song.defaultList }),
  },
  async mounted() {
    //页面挂载完毕调数据
    this.reqDefaultList();
  },
  methods: {
    //进入歌单页面默认获取数据
    async reqDefaultList() {
      await this.$store.dispatch("reqDefaultList", this.order);
    },
    //获取最新数据
    receiveNew() {
      this.order = "new";
      this.orderColor = "0";
      this.reqDefaultList();
    },
    //    获取最热数据
    receiveHot() {
      this.order = "hot";
      this.orderColor = "1";
      this.reqDefaultList();
    },
    toSongDetail() {
      this.$router.push("/songdetail");
    },
    //精选歌单展示
    async showChosenList() {
      //展示
      this.isShow = !this.isShow;
      const result = await this.$API.wellMusicList();
      console.log(result)
      this.wellMusicList = result;
    },
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
* {
  margin: 0;
  text-decoration: none;
  list-style: none;
  font-size: 14px;
  color: #333333;
}
.outer {
  position: relative;
  width: 1400px;
  margin: 0 auto;
  // border: 1px solid red;
}
/* 精选歌单 */
.well-chosen {
  width: 100%;
  display: flex;
  /* border: 1px solid red; */
  height: 31px;
  line-height: 31px;
  margin: 38px 0 28px;
  .song-list span {
    cursor: pointer;
    font-size: 22px;
    font-weight: bold;
    color: #333333;
    margin-right: 36px;
  }
  .newest a {
    margin-right: 34px;
    position: relative;
    &.active::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 5px;
      background-color: #ffe443;
      bottom: 1px;
      left: 0px;
      z-index: -1;
    }
  }
}
/* 精选详情 */
.well-chosen-detail-hide {
  display: none;
}
.well-chosen-detail {
  position: absolute;
  height: 500px;
  overflow: scroll;
  display: block;
  width: 920px;
  background-color: white;
  // border: 1px solid red;
  box-shadow: -4px -4px 15px #eee;
  padding: 30px 10px 0px 36px;
  left: 120px;
  top: 40px;
  z-index: 999;
  /* 主题部分 */
  .detail-list {
    /* position: absolute; */
    display: flex;
    flex-direction: column;
    /* top: 200px;
        left: 150px; */
    .default {
      // border: 1px solid green;
      height: 76px;
      font-weight: bold;
      .well-chosen-default {
        color: #000000;
        font-size: 14px;
        margin-bottom: 16px;
      }
      .well-chosen-list {
        width: 60px;
        color: #000000;
        padding: 6px 18px;
        border-radius: 16px;
        background-color: #ffc12c;
        span {
          font-size: 14px;

          cursor: pointer;
        }
      }
    }
    .theme-list {
      // border: 1px solid green;
      display: flex;
      flex-direction: column;
      color: #000000;
      .theme {
        font-weight: bold;
        font-size: 14px;
        margin: 20px 0 16px 0;
      }
      .musicItem {
        display: flex;

        flex-wrap: wrap;

        li {
          width: 64px;
          height: 32px;
          background-color: #f7f7f7;
          margin: 0px 10px 6px 0px;
          border-radius: 20px;
          text-align: center;
          line-height: 32px;
        }
      }
    }
  }
}
.well-chosen-detail::-webkit-scrollbar {
  /*滚动条整体样式*/

  width: 10px; /*高宽分别对应横竖滚动条的尺寸*/

  height: 1px;
}

.well-chosen-detail::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/

  border-radius: 10px;

  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);

  background: #ddd;
}

.well-chosen-detail::-webkit-scrollbar-track {
  /*滚动条里面轨道*/

  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);

  border-radius: 10px;

  background: #ededed;
}
.musicDetail-list {
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      // border: 1px solid ;
      width: 263px;
      display: flex;
      flex-direction: column;
      margin: 0 13px 26px 0;
      cursor: pointer;

      .imgContainer {
        width: 100%;
        height: 263px;
        overflow: hidden;
        position: relative;
        .mask {
          position: absolute;
          left: 0px;
          top: 0px;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.3);
          display: none;
          z-index: 100;
        }
        .musicImg {
          width: 100%;
        }
        &:hover {
          .musicImg {
            transform: scale(1.1);
            transition: all 0.5s ease-in-out;
          }
          .mask {
            display: block;
          }
        }
      }

      .descContent {
        font-size: 16px;
        margin: 16px 0 0;
        align-self: flex-start;
        &:hover {
          font-weight: bold;
        }
      }
      .playNum {
        margin: 10px 0 0;
        color: #999999;
        align-self: flex-start;
      }
    }
  }
}
</style>
