import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from './components/index'
import elementUi from 'element-ui'
import './permission.js'
// import globalVariable from './global.js'
import 'element-ui/lib/theme-chalk/index.css'
import '@/style/index.scss'
import '@/style/iconfont/iconfont.css'

import { registerMicroApps, setDefaultMountApp, initGlobalState } from 'qiankun'

import i18n from '@/lang/index.js'

Vue.config.productionTip = false
Vue.use(components)

Vue.use(elementUi, {
  i18n: (key, value) => i18n.t(key, value)
})

store.commit('initGlobalState/setActions', initGlobalState(store.getters.initGlobalState))
// const state = {
//   name: 'zs',
//   age: 20
// }

// const actions = initGlobalState(state)

// actions.onGlobalStateChange((state, prev) => {
//   console.log('onGlobalStateChange=dome==', state, prev)
// })

registerMicroApps([
  {
    name: 'resources',
    entry: '//localhost:9816',
    container: '#vue3Resources',
    activeRule: '/portal/resources',
    props: {
      name: 'dome'
    }
  }
])

setDefaultMountApp('/portal/resources')

new Vue({
  router,
  store,
  i18n: i18n,
  render: h => h(App)
}).$mount('#app')
