
const state = {
  router: [],
  addRouter: [],
  id: 'zhoujie'
}

const mutations = {
  SET_ROUTER (state, road) {
    if (Array.isArray(road)) {
      state.router = state.router.concat(road)
      console.log('添加路由')
    }
  }
}

const actions = {
  ADD_ROUTER ({ context }, roads) {

  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
