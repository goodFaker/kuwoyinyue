<template>
  <footer>
      <!-- 第一部分 -->
      <div class="footer-first container">
        <div class="foot_info">
          <p>下载酷我音乐客户端</p>
          <p>协议声明</p>
          <p>其他</p>
        </div>
        <div class="foot_tit">
          <div class="item">
            <ul class="item-device">
              <li>
                <img src="./img/win.png" alt="" />
                <span>PC版</span>
              </li>
              <li>
                <img src="./img/anni.png" alt="" />
                <span>Pndroid</span>
              </li>
              <li>
                <img src="./img/ap.png" alt="" />
                <span>iPhone版</span>
              </li>
            </ul>
          </div>
          <div class="item">
            <p class="item-text1">
              <a href="">用户服务协议</a>
              <a href="">隐私政策</a>
            </p>
            <p class="item-text1">
              <a href="">免责声明</a>
              <a href="">权利声明</a>
            </p>
          </div>
          <div class="item">
            <p class="item-text1">
              <a href="">联系我们</a>
              <a href="">广告服务</a>
            </p>
            <p class="item-text1">
              <span>
                <a href="" class="item-text1-a">腾讯音乐</a>
                <a href="">诚聘英才</a>
              </span>
              <span>
                <a href="">网上有害信息举报专区</a>
              </span>
            </p>
            
          </div>
        </div>
      </div>
      <!-- 第二部分 -->
      <div class="footer-last container">
        <div class="footer-text" >
          <p >
            北京酷我科技有限公司版权所有 丨 网络文化经营许可证：
            <a
              target="_blank"
              href="http://image.kuwo.cn/www/wenwangwen.pdf"
              
              >京网文[2015]0525-205号</a
            >
            丨
            <a
              target="_blank"
              href="http://image.kuwo.cn/www/shiting1.pdf"
              
              >信息网络传播视听节目许可证0109362号</a
            >
            丨 增值电信业务经营许可证B2-20090418 丨
            <a
              target="_blank"
              href="https://h5static.kuwo.cn/resource/doc/icp.pdf"
              >京ICP证060261号</a
            >
          </p>
          <p >
            <a
              target="_blank"
              href="http://image.kuwo.cn/www/guangdianxuke.pdf"
              
              >广播电视节目制作经营许可证京字第2037号</a
            >
            丨
            <a
              target="_blank"
              href="http://image.kuwo.cn/www/yingye.pdf"
              
              >营业性演出许可证京市演1574</a
            >
            丨
            <a
              target="_blank"
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502030216"
              
              >京公网安备11010502030216号</a
            >
            丨
            <span 
              ><a
                target="_blank"
                href="http://beian.miit.gov.cn/state/outPortal/loginPortal.action"
                
                >京ICP备09014827号</a
              ></span
            >
          </p>
          <p>
            举报电话：010-87939949丨 举报邮箱：support@kuwo.cn
          </p>
          </div>
      </div>
    </footer>
</template>
<script>
export default {
}
</script>
<style lang="less" rel='stylesheet' scoped >
/* 底部 */
.container {
  padding: 0 120px;
  margin: 0 auto;
  min-width: 1100px;
}

.footer-first {
  margin-top: 62px;
  height: 220px;
  background: #282828;
  color: #fff;
  font-size: 13px;
  font-weight: 400;

}

.foot_info {
  line-height: 18px;
  padding-top: 49px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 36px;
}

.foot_info p {
  width: 32.2%;
}

.foot_tit {
  display: flex;
  justify-content: space-between;

}

.item {
  width: 32.2%;
  display: flex;
}

.item .item-device img {
  width: 30px;
  height: 30px;
}

.item .item-device {
  display: flex;
}

.item .item-device li {
  display: flex;
  flex-direction: column;
  margin-right: 37px;
  white-space: nowrap;
  font-size: 13px;
  line-height: 18px;
  color: grey;
  margin-bottom: 26px;
  align-items: center;
}

.item .item-device li span {
  margin-top: 5px;

}

.item .item-text1 {
  margin-right: 40px;

}

.item .item-text1 a {
  display: block;
  white-space: nowrap;
  height: 18px;
  font-size: 13px;
  line-height: 18px;
  color: grey;
  margin-bottom: 26px
}

.item .item-text1 span {
  display: block;
  white-space: nowrap
}

.item .item-text1 span a {
  display: inline-block;
}

.item .item-text1 span .item-text1-a {
  margin-right: 40px;
}

.footer-last {
  font-size: 12px;
  font-weight: 400;
  height: 182px;
  background: #1f1f1f;
  text-align: center;
  color: grey;
}

.footer-text{
  padding: 22px 0 94px;
  
}
.footer-text p{
  line-height: 22px;
  
}

.footer-text p a{
  color: grey;
}
</style>