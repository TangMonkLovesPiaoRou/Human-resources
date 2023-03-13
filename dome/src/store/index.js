import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
Vue.use(Vuex)

const req = require.context('./modules', false, /\.js$/)

const modules = () => {
  return req.keys().reduce((modules, modulesPath) => {
    const pathName = modulesPath.replace(/\.\/(.*)\.js$/, '$1')
    modules[pathName] = req(modulesPath).default
    return modules
  }, {})
}

export default new Vuex.Store({
  modules: modules(),
  getters
})
