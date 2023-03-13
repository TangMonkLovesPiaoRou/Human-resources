
/*
  sideBar  是否折起sideBar栏
*/
const state = {
  sideBar: false,
  language: 'zh'
}

/*
  commit解构: SET_xxxx, 如: SET_sideBar
*/
const collectParams = () => {
  return Object.keys(state).reduce((s, v) => {
    const name = `SET_${v}`
    s[name] = (state, play) => {
      console.log(name, play, v)
      state[v] = play
      play.success && this.$message(play.success)
      console.log(state)
    }
    return s
  }, {})
}

const mutations = collectParams()

export default {
  namespaced: true,
  state,
  mutations
}
