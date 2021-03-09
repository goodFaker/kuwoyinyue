import { reqDefaultList } from '../../api'
const state = {
  defaultList: [], //默认歌手列表
}
const mutations = {
  RECEIVE_DEFAULT_LIST(state, defaultList) {
    state.defaultList = defaultList
  },
}
const actions = {
  async reqDefaultList({ commit }, order) {
    const result = await reqDefaultList(order)

    commit('RECEIVE_DEFAULT_LIST', result.data)
  },
}
const getters = {}
export default {
  state,
  actions,
  mutations,
  getters,
}
