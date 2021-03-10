import {reqSearchData}  from '@/api'
const state = {
  searchList: [],
}
const mutations = {
  RECIVESEARCHLIST(state,searchList) {
    state.searchList = searchList
  },
}
const actions = {
    async getSearchList({commit},{keyWord,page,limit}){
        // console.log(1223)
       let result = await reqSearchData(keyWord,page,limit)
        commit('RECIVESEARCHLIST',result.list)
    }
}
const getters = {
    
}
export default {
  state,
  actions,
  mutations,
  getters,
}
