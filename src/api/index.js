import ajax from './ajax'

import mock from './mock'

import serve from '@/api/ajaxonline'

/* 请求搜索数据的接口 */
export const reqSearchData = (keyWord, pn = 1, rn = 30) =>
  ajax.get(`/search/searchMusicBykeyWord?key=${keyWord}&pn=${pn}&rn=${rn}`)

export const getSongList = () => mock.get('/songList')

export const getRegister = (phone, psw) =>
  ajax.post('/register', { phone, psw })

export const getLogin = (phone, psw) => ajax.post('/', { phone, psw })

export const getMusicUrl = (rid=95379975) => {
    return serve({
        method: 'GET',
        url: `/url?rid=${rid}`,

    })
}

export const getMusicLrc = (rid=95379975) => {
    return serve({
        method: 'GET',
        url: `/lrc?musicId=${rid}`,
    })
}
