const res = require.context('./', false, /\.vue$/)

export default {
  install (Vue) {
    res.keys().forEach((v) => {
      const defaultName = v.replace(/^\.\/(.*)\.vue$/, '$1')
      const module = res(v).default
      Vue.component([module.name || defaultName].toString(), module)
    })
  }
}
