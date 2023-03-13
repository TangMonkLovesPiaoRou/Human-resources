import type { Component } from 'vue'
const res = require.context('./', false, /\.(vue|tsx)$/)
const components: {
    [propName: string]: Component
} = {}

res.keys().forEach((v) => {
    const defaultName = v.replace(/([A-Za-z0-9])\.vue$/, '$1').split('./')[1]
    const modules:Component = res(v).default
    components[modules.name || defaultName] = modules
})

export default components
