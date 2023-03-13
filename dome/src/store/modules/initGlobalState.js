import store from '@/store'
const state = {
  globalState: {
    router: [],
    currentBase: '/'
  },
  actions: {}
}

function initOnGlobalStateChange (after) {
  this.globalState = after
  store.commit('permission/SET_ROUTER', this.globalState.router)
  console.log('initOnGlobalStateChange--')
}

const mutations = {
  setActions (state, play) {
    state.actions = play
    play.onGlobalStateChange(initOnGlobalStateChange.bind(state))
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
