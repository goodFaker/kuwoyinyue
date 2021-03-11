<template>
    <div class="outer">
    <div class="leftList">
      <img class="cover" :src="playListInfo.img700" alt="" />
      <span class="intr">歌单简介</span>
      <span class="intr-text">{{playListInfo.info}}</span>
      <a class="download" href="javascript:;">下载该歌单</a>
      <div class="qrcode-container">
        <img class="qrcode-img" src="https://h5static.kuwo.cn/www/kw-www/img/qrcode.d53daff.png" alt="" />
        <span class="qrcode-desc">手机扫描二维码</span>
      </div>
    </div>
    <div class="rightList">
      <p class="song-name">{{playListInfo.name}}</p>
      <div class="userContainer">
        <img class="userImg" :src="playListInfo.uPic" alt="" />
        <span class="userName">{{playListInfo.userName}}</span>
      </div>
      <p class="type">
        {{playListInfo.tag}}
      </p>
      <div class="btns">
        <div class="playAll">
          <i>图标</i>
          <span class="content">播放全部</span>
        </div>
        <span class="grayBtn">添加</span>
        <span class="grayBtn">收藏</span>
        <span class="grayBtn">分享</span>
        <span class="grayBtn">评论</span>
      </div>
      <el-table :data="playListInfo.musicList" stripe style="width: 100%">
        <el-table-column prop="hasmv" label="序号" width="60"  type="index">
        </el-table-column>
        <el-table-column prop="name" label="歌曲" width="300"  >
        </el-table-column>
        <el-table-column prop="artist" label="歌手" width="300" >
        </el-table-column>
        <el-table-column prop="songTimeMinutes" label="时长" width="300" >
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "SongDetail",
  data() {
    return {
      playListInfo: {},
    };
  },
  async mounted() {
    const result = await this.$API.reqPlayListInfo()
    // console.log(result)
    this.playListInfo = result.data.data[0]
  },
  methods: {
    indexMethod(index) {
      return index++;
    },
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.outer {
  /* position:relative; */
  margin: 0 auto;
  padding: 0px 120px;
  // border: 1px solid red;
  display: flex;
  justify-content: space-between;
  .leftList {
    width: 322px;
    height: 100%;
    // border: 1px solid green;
    display: flex;
    flex-direction: column;
    .cover {
      width: 322px;
      height: 322px;
    }
    .intr {
      font-size: 22px;
      font-weight: bold;
      color: #333333;
      margin: 40px 0 10px;
    }
    .intr-text {
      font-size: 14px;
      color: #666666;
    }
    .download {
      width: 200px;
      margin: 30px 60px 0;
      background-color: #ffe12c;
      border-radius: 20px;
      line-height: 40px;
      text-align: center;
    }
    .qrcode-container {
      height: 284px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      margin: 36px 0;
      border-top: 1px solid #dddddd;
      .qrcode-img {
        width: 168px;
        height: 168px;
        margin: 36px 0 18px;
      }
      .qrcode-desc {
        font-size: 16px;
        color: #666666;
      }
    }
  }
  .rightList {
    width: 980px;
    height: 100%;
    // border: 1px solid green;
    .song-name {
      font-size: 30px;
      font-weight: bold;
      color: #333333;
    }
    .userContainer {
      margin: 14px 0 0;
      line-height: 32px;
      display: flex;
      align-items: center;
      .userImg {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin-right: 10px;
      }
      .userName {
        font-size: 18px;
        color: #666666;
      }
    }
    .type {
      font-size: 14px;
      color: #296294;
      margin: 12px 0 0;
    }
    .btns {
      display: flex;
      line-height: 40px;
      margin: 32px 0 40px;
      justify-content: flex-start;
      align-items: center;
      .playAll {
        width: 150px;
        background-color: #ffe12c;
        border-radius: 25px;
        text-align: center;
        font-size: 16px;
        margin: 32px 0 40px;
        margin: 0 10px 0 0;
        cursor: pointer;
        .content {
          color: #333333;
        }
      }
      .grayBtn {
        background-color: #f2f2f2;
        width: 65px;
        height: 40px;
        border-radius: 25px;
        font-size: 16px;
        text-align: center;
        margin: 0 10px 0 0;
        padding: 0 28px;
        cursor: pointer;
      }
    }
  }
}
</style>
