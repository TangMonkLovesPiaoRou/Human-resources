import { loadMicroApp } from 'qiankun'
const handleLoadMicroApp = function (data) {
  const name = data.name
  const url = data.url
  const container = data.container
  const props = data.props || {}
  if (this.microApp) {
    this.$microApp.$destroy()
    this.$microApp.$el.innerHTML = ''
  }
  this.$microApp = loadMicroApp({
    name,
    entry: url,
    container,
    props
  })
}

export default {
  install: function (Vue, options) {
    Vue.prototype.$microApp = ''
    Vue.prototype.$handleLoadMicroApp = handleLoadMicroApp.bind(Vue.prototype)
  }
}
