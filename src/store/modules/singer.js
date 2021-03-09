import {reqArtistList, reqAllSingerList} from '../../api'
const state={
    artistList:[],//获取全部歌手列表
    allSingerList:[],//全部歌手分类信息
}
const mutations={
    RECEIVE_ARTISTLIST(state, {artistList}){
        state.artistList = artistList
    },
    RECEIVE_ALLSINGER_LIST(state,allSingerList){
        state.allSingerList = allSingerList
    }
}
const actions={
    //异步获取全部歌手列表
    async reqArtistList({commit}, {category}){
        const result = await reqArtistList(category)
        
        
            commit('RECEIVE_ARTISTLIST',result)
        
    },
    //异步获取全部歌手分类信息
    async reqAllSingerList({commit}){
        const result = await reqAllSingerList()
        if(result.code===200){
            commit('RECEIVE_ALLSINGER_LIST',result.data)
        }
    }
}
const getters={}
export default  {
   state,
   actions,
   mutations,
   getters
}