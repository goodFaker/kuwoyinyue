<template>
    <div class="container main">
     
      <!-- 轮播图位置 -->
      <div class="main-banner">
        <swiper
          :options="{
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          }"
          >
          <swiper-slide v-for="(banner) in bannerList" :key="banner.id">
            <a :href="banner.url" ><img :src="banner.pic" alt="" style="width: 100%" /></a>
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        
      </div>

      <!-- 推荐歌单 -->
      <section class="recommend-song">
        <div class="recommendSong-up">
          <h3>推荐歌单</h3>

          <nav>
            <a href="" class="active" data-v-17ae183a>每日推荐</a>

            <a href="" data-v-17ae183a>翻唱</a>

            <a href="" data-v-17ae183a>网络</a>

            <a href="" data-v-17ae183a>伤感</a>

            <a href="" data-v-17ae183a>欧美</a>

            <a href="" data-v-17ae183a
              >更多<img src="./img/left.png" alt="" class="arrow"
            /></a>
          </nav>
        </div>
        <div class="recommendSong-down">
          <div class="recommendSongDown-box">
            <div>
              <img src="./img/song11.jpg" alt="" style="width: 100%" />
            </div>
            <p class="recommendSongDown-text1">每日最新单曲推荐</p>
            <p class="recommendSongDown-text2">
              <img src="./img/play.png" alt="" class="arrow2" />20034.1万
            </p>
          </div>
          <div class="recommendSongDown-box">
            <div>
              <img src="./img/song11.jpg" alt="" style="width: 100%" />
            </div>
            <p class="recommendSongDown-text1">每日最新单曲推荐</p>
            <p class="recommendSongDown-text2">
              <img src="./img/play.png" alt="" class="arrow2" />20034.1万
            </p>
          </div>
          <div class="recommendSongDown-box">
            <div>
              <img src="./img/song11.jpg" alt="" style="width: 100%" />
            </div>
            <p class="recommendSongDown-text1">每日最新单曲推荐</p>
            <p class="recommendSongDown-text2">
              <img src="./img/play.png" alt="" class="arrow2" />20034.1万
            </p>
          </div>
          <div class="recommendSongDown-box">
            <div>
              <img src="./img/song11.jpg" alt="" style="width: 100%" />
            </div>
            <p class="recommendSongDown-text1">每日最新单曲推荐</p>
            <p class="recommendSongDown-text2">
              <img src="./img/play.png" alt="" class="arrow2" />20034.1万
            </p>
          </div>
          <div class="recommendSongDown-box">
            <div>
              <img src="./img/song11.jpg" alt="" style="width: 100%" />
            </div>
            <p class="recommendSongDown-text1">每日最新单曲推荐</p>
            <p class="recommendSongDown-text2">
              <img src="./img/play.png" alt="" class="arrow2" />20034.1万
            </p>
          </div>
        </div>
      </section>

      <!-- 精选活动 -->
      <section class="activities">
        <h3>精选活动</h3>

        <div class="activities-box">
          <div>
            <img src="./img/activi-1.jpg" alt="" style="width: 100%" />
          </div>
          <div>
            <img src="./img/activi-2.jpg" alt="" style="width: 100%" />
          </div>
        </div>
      </section>

      <!-- 排行榜 -->

      <section class="ranking">
        <div class="ranking-up">
          <h3>排行榜</h3>
          <p href="" data-v-17ae183a>
            更多<img src="./img/left.png" alt="" class="arrow" />
          </p>
        </div>

        <div class="ranking-down">
          <div class="ranking-list">
            <div class="ranking-box1">
              <img src="./img/ph-rg.png" alt="" style="width: 100%" />
              <div class="ranking-img">
                <img src="./img/ph11.jpg" alt="" style="width: 100%" />
              </div>
            </div>
            <ul>
              <li>
                <div class="ranking-box2">
                  <div class="rankingBox2-img">
                    <img src="./img/ph-1.png" alt="" />
                  </div>
                  <div class="rankingBox2-text">
                    <p class="text-1">可可托海的牧羊人</p>
                    <p class="text-2">王琦</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="ranking-box2">
                  <div class="rankingBox2-img">
                    <img src="./img/ph-2.png" alt="" />
                  </div>
                  <div class="rankingBox2-text">
                    <p class="text-1">可可托海的牧羊人</p>
                    <p class="text-2">王琦</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="ranking-box2">
                  <div class="rankingBox2-img">
                    <img src="./img/ph-3.png" alt="" />
                  </div>
                  <div class="rankingBox2-text">
                    <p class="text-1">可可托海的牧羊人</p>
                    <p class="text-2">王琦</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="ranking-box2">
                  <div class="rankingBox2-img">4</div>
                  <div class="rankingBox2-text">
                    <p class="text-1">可可托海的牧羊人</p>
                    <p class="text-2">王琦</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="ranking-box2">
                  <div class="rankingBox2-img">4</div>
                  <div class="rankingBox2-text">
                    <p class="text-1">可可托海的牧羊人</p>
                    <p class="text-2">王琦</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="ranking-list">
            <div class="ranking-box1">
              <img src="./img/ph-om.png" alt="" style="width: 100%" />
              <div class="ranking-img">
                <img src="./img/ph11.jpg" alt="" style="width: 100%" />
              </div>
            </div>
            <ul>
              <li>
                <div class="ranking-box2">
                  <div class="rankingBox2-img">
                    <img src="./img/ph-1.png" alt="" />
                  </div>
                  <div class="rankingBox2-text">
                    <p class="text-1">可可托海的牧羊人</p>
                    <p class="text-2">王琦</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="ranking-box2">
                  <div class="rankingBox2-img">
                    <img src="./img/ph-2.png" alt="" />
                  </div>
                  <div class="rankingBox2-text">
                    <p class="text-1">可可托海的牧羊人</p>
                    <p class="text-2">王琦</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="ranking-box2">
                  <div class="rankingBox2-img">
                    <img src="./img/ph-3.png" alt="" />
                  </div>
                  <div class="rankingBox2-text">
                    <p class="text-1">可可托海的牧羊人</p>
                    <p class="text-2">王琦</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="ranking-box2">
                  <div class="rankingBox2-img">4</div>
                  <div class="rankingBox2-text">
                    <p class="text-1">可可托海的牧羊人</p>
                    <p class="text-2">王琦</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="ranking-box2">
                  <div class="rankingBox2-img">4</div>
                  <div class="rankingBox2-text">
                    <p class="text-1">可可托海的牧羊人</p>
                    <p class="text-2">王琦</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="ranking-list">
            <div class="ranking-box1">
              <img src="./img/ph-bs.png" alt="" style="width: 100%" />
              <div class="ranking-img">
                <img src="./img/ph11.jpg" alt="" style="width: 100%" />
              </div>
            </div>
            <ul>
              <li>
                <div class="ranking-box2">
                  <div class="rankingBox2-img">
                    <img src="./img/ph-1.png" alt="" />
                  </div>
                  <div class="rankingBox2-text">
                    <p class="text-1">可可托海的牧羊人</p>
                    <p class="text-2">王琦</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="ranking-box2">
                  <div class="rankingBox2-img">
                    <img src="./img/ph-2.png" alt="" />
                  </div>
                  <div class="rankingBox2-text">
                    <p class="text-1">可可托海的牧羊人</p>
                    <p class="text-2">王琦</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="ranking-box2">
                  <div class="rankingBox2-img">
                    <img src="./img/ph-3.png" alt="" />
                  </div>
                  <div class="rankingBox2-text">
                    <p class="text-1">可可托海的牧羊人</p>
                    <p class="text-2">王琦</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="ranking-box2">
                  <div class="rankingBox2-img">4</div>
                  <div class="rankingBox2-text">
                    <p class="text-1">可可托海的牧羊人</p>
                    <p class="text-2">王琦</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="ranking-box2">
                  <div class="rankingBox2-img">4</div>
                  <div class="rankingBox2-text">
                    <p class="text-1">可可托海的牧羊人</p>
                    <p class="text-2">王琦</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="ranking-list">
            <div class="ranking-box1">
              <img src="./img/ph-xg.png" alt="" style="width: 100%" />
              <div class="ranking-img">
                <img src="./img/ph11.jpg" alt="" style="width: 100%" />
              </div>
            </div>
            <ul>
              <li>
                <div class="ranking-box2">
                  <div class="rankingBox2-img">
                    <img src="./img/ph-1.png" alt="" />
                  </div>
                  <div class="rankingBox2-text">
                    <p class="text-1">可可托海的牧羊人</p>
                    <p class="text-2">王琦</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="ranking-box2">
                  <div class="rankingBox2-img">
                    <img src="./img/ph-2.png" alt="" />
                  </div>
                  <div class="rankingBox2-text">
                    <p class="text-1">可可托海的牧羊人</p>
                    <p class="text-2">王琦</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="ranking-box2">
                  <div class="rankingBox2-img">
                    <img src="./img/ph-3.png" alt="" />
                  </div>
                  <div class="rankingBox2-text">
                    <p class="text-1">可可托海的牧羊人</p>
                    <p class="text-2">王琦</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="ranking-box2">
                  <div class="rankingBox2-img">4</div>
                  <div class="rankingBox2-text">
                    <p class="text-1">可可托海的牧羊人</p>
                    <p class="text-2">王琦</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="ranking-box2">
                  <div class="rankingBox2-img">4</div>
                  <div class="rankingBox2-text">
                    <p class="text-1">可可托海的牧羊人</p>
                    <p class="text-2">王琦</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="ranking-list">
            <div class="ranking-box1">
              <img src="./img/rh.png" alt="" style="width: 100%" />
              <div class="ranking-img">
                <img src="./img/ph11.jpg" alt="" style="width: 100%" />
              </div>
            </div>
            <ul>
              <li>
                <div class="ranking-box2">
                  <div class="rankingBox2-img">
                    <img src="./img/ph-1.png" alt="" />
                  </div>
                  <div class="rankingBox2-text">
                    <p class="text-1">可可托海的牧羊人</p>
                    <p class="text-2">王琦</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="ranking-box2">
                  <div class="rankingBox2-img">
                    <img src="./img/ph-2.png" alt="" />
                  </div>
                  <div class="rankingBox2-text">
                    <p class="text-1">可可托海的牧羊人</p>
                    <p class="text-2">王琦</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="ranking-box2">
                  <div class="rankingBox2-img">
                    <img src="./img/ph-3.png" alt="" />
                  </div>
                  <div class="rankingBox2-text">
                    <p class="text-1">可可托海的牧羊人</p>
                    <p class="text-2">王琦</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="ranking-box2">
                  <div class="rankingBox2-img">4</div>
                  <div class="rankingBox2-text">
                    <p class="text-1">可可托海的牧羊人</p>
                    <p class="text-2">王琦</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="ranking-box2">
                  <div class="rankingBox2-img">4</div>
                  <div class="rankingBox2-text">
                    <p class="text-1">可可托海的牧羊人</p>
                    <p class="text-2">王琦</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          
        </div>
      </section>

      <!-- 歌手推荐 -->

      <section class="singer-recommend">
        <div class="recommendSong-up">
          <h3>歌手推荐</h3>

          <nav>
            <a href="" class="active" data-v-17ae183a>华语</a>

            <a href="" data-v-17ae183a>欧美</a>

            <a href="" data-v-17ae183a>日韩</a>

            <a href="" data-v-17ae183a>组合</a>

            <a href="" data-v-17ae183a
              >更多<img src="./img/left.png" alt="" class="arrow"
            /></a>
          </nav>
        </div>

        <div class="singer-box">
          <div class="singer-infor">
            <div class="singer-img">
              <img src="./img/gs-1.jpg" alt="" style="width: 100%" />
            </div>
            <p class="singer-text1">周杰伦</p>
            <p class="singer-text2">1416首歌曲</p>
          </div>
          <div class="singer-infor">
            <div class="singer-img">
              <img src="./img/gs-1.jpg" alt="" style="width: 100%" />
            </div>
            <p class="singer-text1">周杰伦</p>
            <p class="singer-text2">1416首歌曲</p>
          </div>
          <div class="singer-infor">
            <div class="singer-img">
              <img src="./img/gs-1.jpg" alt="" style="width: 100%" />
            </div>
            <p class="singer-text1">周杰伦</p>
            <p class="singer-text2">1416首歌曲</p>
          </div>
          <div class="singer-infor">
            <div class="singer-img">
              <img src="./img/gs-1.jpg" alt="" style="width: 100%" />
            </div>
            <p class="singer-text1">周杰伦</p>
            <p class="singer-text2">1416首歌曲</p>
          </div>
          <div class="singer-infor">
            <div class="singer-img">
              <img src="./img/gs-1.jpg" alt="" style="width: 100%" />
            </div>
            <p class="singer-text1">周杰伦</p>
            <p class="singer-text2">1416首歌曲</p>
          </div>
          <div class="singer-infor">
            <div class="singer-img">
              <img src="./img/gs-1.jpg" alt="" style="width: 100%" />
            </div>
            <p class="singer-text1">周杰伦</p>
            <p class="singer-text2">1416首歌曲</p>
          </div>
        </div>
      </section>

      <!-- 主播电台 -->

      <section>
        <div class="recommendSong-up">
          <h3>主播电台</h3>
          <div class="anchor-text">
            <p>畅听更多精品电台</p>
            ↓
          </div>
        </div>

        <div class="anchor-introduce">
          <div class="anchor-list" v-for="radio in radioList" :key="radio.rid">
            <div class="anchor-img">
              <img :src="radio.pic" alt="" />
            </div>
            <div class="anchor-text2">
              <p class="anchor-title">{{radio.album}}</p>
              <p class="anchor-title2">{{radio.artist}}</p>
            </div>
          </div>
        </div>
      </section>

        <!-- 回到顶部 -->
      <div class="platforms">
        <ul>
          <li class="platforms-item">
            <a href="javascript:;" class="platforms-text">
              反馈
            </a>
          </li>
          <li class="platforms-item">
            <a href="javascript:;">
              <img src="./img/win.png" alt="">
            </a>
          </li>
          <li class="platforms-item">
            <a href="javascript:;">
              <img src="./img/anni.png" alt="">
            </a>
          </li>
          <li class="platforms-item">
            <a href="javascript:;">
              <img src="./img/ap.png" alt="">
            </a>
          </li>
          <li class="platforms-item">
            <a href="#">
              <img src="./img/jt-up.png" alt="">
            </a>
          </li>
        </ul>


      </div>
    </div>
</template>

<script>
import {reqbannerList, reqradioList,} from '@/api'
export default { 
name:'Recommend',
data(){
  return{
    bannerList:[],
    radioList:[],
  }
},
mounted() {
		this.getbannerList()
    this.getradioList()
   
	},
	methods: {
		/* 获取搜索结果 */
		async getbannerList() {	
			const request = await reqbannerList()
			this.bannerList = request
		},

    async getradioList() {	
			const request = await reqradioList()
			this.radioList = request.albumList
		},
	},
   
}
</script>

<style  lang="less" rel='stylesheet' scoped >
/* 头部部分 */

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

.active1 {
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

.header-right-text {
  line-height: 67px;
  font-size: 14px;
}

/* 主体导航栏 */
img {
  width: 100%;
}
.main-nav {
  padding-left: 206px;
  height: 54px;
  line-height: 54px;
}

a[data-v-17ae183a] {
  position: relative;
  display: inline-block;
  height: 20px;
  line-height: 20px;
  margin-right: 34px;
  font-weight: 300;
  color: #333;
  font-size: 14px;
}

a.active[data-v-17ae183a]:after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 1px;
  width: 100%;
  height: 6px;
  background: #ffe443;
  z-index: -1;
  font-weight: 600;
}


a.active[data-v-17ae183a] {
  font-weight: 600;
}


/* 推荐歌单 */

.recommendSong-up {
  display: flex;
  margin-top: 60px;
  margin-bottom: 24px;
}

.recommendSong-up nav {
  height: 40px;
  line-height: 55px;

}

.recommendSong-up h3 {
  font-size: 28px;
  margin-right: 40px;
}

.recommendSong-down {
  display: flex;
  justify-content: space-between;
}

.recommendSongDown-box {
  width: 18.85%;

}

.recommendSongDown-text1 {
  margin-top: 16px;
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
}

.recommendSongDown-text2 {
  margin-top: 10px;
  color: #999;
  font-size: 16px;
  line-height: 16px;
}

.arrow2 {
  width: 16px;
  height: 16px;
  margin-right: 10px;
  vertical-align: bottom;
}

/* 精选活动 */

.activities h3 {
  margin-top: 60px;
  margin-bottom: 24px;
  font-size: 28px;
}

.activities-box {
  display: flex;
  justify-content: space-between;
}

.activities-box div {
  width: 49.2%
}


/* 排行榜 */

.ranking-up {
  display: flex;
  margin-top: 60px;
  margin-bottom: 24px;
}

.ranking-up p {
  line-height: 55px;
  padding-left: 40px;
}

.ranking-up h3 {

  font-size: 28px;
}


.ranking-list {
  width: 18.85%;
  box-shadow: 0 0 30px 0 rgba(65, 67, 70, .08);
  position: relative;
}


.ranking-box1 {
  position: relative;
  background: rgba(46, 32, 60, .7);
  overflow: hidden;
  width: 100%;
}

.ranking-img {
  position: absolute;
  top: -10%;
  z-index: -1;
}

.ranking-box2 {
  display: flex;
}

.rankingBox2-img {
  padding-top: 3px;
  padding-right: 5px;
  width: 30px;
  height: 30px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
}

.ranking-box2 img {
  width: 100%;
}

.rankingBox2-text {
  height: 53px;

}

.rankingBox2-text .text-1 {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
  height: 22px;
  line-height: 22px;
  cursor: pointer;
  font-size: 16px;
}


.rankingBox2-text .text-2 {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 300;
  color: #999;
  height: 20px;
  cursor: pointer;
  font-size: 14px;
}

.ranking-list ul {
  padding: 25px 10px 5px;
}

.ranking-list ul li {
  padding: 5px 0px;
}

.ranking-down {
  display: flex;
  justify-content: space-between;

}

/* 歌手推荐 */



.singer-infor {
  width: 13%;
  display: flex;
  flex-direction: column;
  align-items: center
}

.singer-img {
  width: 100%;
  overflow: hidden;
  border-radius: 50%;
  font-size: 0;
  cursor: pointer;
}

.singer-text1 {
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
  padding-top: 20px;
  padding-bottom: 6px;
}

.singer-text2 {
  font-size: 12px;
  color: #999;

}

.singer-box {
  display: flex;
  justify-content: space-between;
}

/* 主播电台 */
.anchor-text {
  width: 170px;
  height: 32px;
  justify-content: center;
  background: #ffdf1f;
  border-radius: 18px;
  color: #333;
  font-size: 16px;
  margin-top: 3px;
}

.anchor-text p {
  display: inline-block;
  height: 18px;
  line-height: 18px;
  padding-right: 9px;
  border-right: 1px solid rgba(0, 0, 0, .05);
  margin-top: 7px;
  margin-left: 14px;
  font-size: 14px;
  margin-right: 8px;
}

.anchor-introduce {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 62px;
}

.anchor-list {
  display: flex;
  width: 32.28%;
  margin-bottom: 24px;
  align-content: stretch;
  justify-content: space-between;
}

.anchor-list {
  display: flex;
}

.anchor-img {
  width: 19.91%;
  overflow: hidden;
  font-size: 0;
  cursor: pointer;
}

.anchor-text2 {
  width: 75.66%;
  border-bottom: 1px solid rgba(0, 0, 0, .04);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.anchor-title {
  height: 22px;
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

}

.anchor-title2 {
  margin-top: 14px;
  color: #999;
  font-size: 14px;
}
  
/* 回到顶部 */

.platforms {
  position: fixed;
  display: flex;
  bottom: 120px;
  right: 46px;
  width: 52px;
  z-index: 100;
  transition: all 1.4s ease-in-out;
}

.platforms-item {
  width: 52px;
  height: 52px;
  text-align: center;
  line-height: 52px;
  background: #f5f5f5;
  margin-bottom: 8px;
  cursor: pointer;

}

.platforms-item img {
  width: 25px;
  height: 25px;
  margin-top: 13.5px;
}

.platforms-text {
  font-size: 18px;
  color: #666;
}
</style>
