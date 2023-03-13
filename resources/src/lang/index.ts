import { createI18n  } from 'vue-i18n'
import { settings } from '@/types/index'
import { elementPulsLocale } from '@/settings'
// 引入element-plus语言, 注意: 最外层的name、el属性独属于element-plus，不要覆盖
settings.language = Object.keys(window.Language).reduce((s: any, v: any) => {
    s[v] = {
        ...elementPulsLocale[v],
        ...s[v]
    }
    return s
}, window.Language)

export default createI18n({
    locale: settings.local,
    allowComposition: true, // you need to specify that!
    messages: settings.language
})