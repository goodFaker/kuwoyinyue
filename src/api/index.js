import ajax from './ajax'

import ajaxMock from './mock'

import serve from '@/api/ajaxonline'

/* 请求搜索数据的接口 */
export const reqSearchData = (keyWord, pn = 1, rn = 30) =>
  ajax.get(`/search/searchMusicBykeyWord?key=${keyWord}&pn=${pn}&rn=${rn}`)


export const getRegister = (phone, psw) =>
  ajax.post('/register', { phone, psw })

export const getLogin = (phone, psw) => ajax.post('/', { phone, psw })

export const getMusicUrl = (rid = 95379975) => {
  return serve({
    method: 'GET',
    url: `/url?rid=${rid}`,
  })
}

export const getMusicLrc = (rid = 95379975) => {
  return serve({
    method: 'GET',
    url: `/lrc?musicId=${rid}`,
  })
}

//请求banner
export const reqbannerList = () => ajax.get(`/banner`)

// 主播电台
export const reqradioList = () => ajax.get(`/radio`)

//获取分类歌手信息
export const reqAllSingerList = () => ajaxMock.get(`/allsinger`)
// 获取歌手页面全部歌手
export const reqArtistList = (category) =>
  ajax.get(`/singer?category=${category}&rn=100&pn=1`)
//获取默认歌单数据
export const reqDefaultList = (order) =>
  ajax.get(`/playList?order=${order}&rn=30&pn=1`)
//精选歌单数据接口(原型调用)
export const wellMusicList = () => ajax.get(`/playList_tags`)
//歌手详情页面信息
export const reqPlayListInfo = () => ajaxMock.get(`/playListInfo`)

export const reqRank = () => ajax.get('/rank');
export const reqMusic = (sourceid,page) => ajax.get(`/rank/musicList?bangId=${sourceid}&pn=${page}`);
export const reqComment = (page, sourceid) => ajax.get(`/comment?type=get_rec_comment&f=web&page=${page}&rows=20&digest=2&sid=${sourceid}&uid=0`)
export const reqComment1 = (page, sourceid) => ajax.get(`/comment?type=get_comment&f=web&page=${page}&rows=20&digest=2&sid=${sourceid}&uid=0`)
