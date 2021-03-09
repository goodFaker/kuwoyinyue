//引入mock
import Mock from 'mockjs'
import allSinger from './allSinger.json'
import playListInfo from './playListInfo.json'
Mock.mock('/mock/allsinger',{code:200,data:allSinger})
Mock.mock('/mock/playListInfo',{code:200,data:playListInfo})
// console.log('执行了mock')