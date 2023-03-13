import vue from 'vue'
import VueI18n from 'vue-i18n'
import locale from './component/locale'
import store from '@/store'
const messages = window.Language ? Object.keys(window.Language).reduce((s, v) => {
  s[v] = {
    ...locale[v.toLocaleLowerCase()],
    ...s[v]
  }
  return s
}, window.Language) : {}
vue.use(VueI18n)
export default new VueI18n({
  locale: store.getters.settings.language,
  messages
})
