import getPermission from './modules/permission'
import getGlobalState from './modules/globalState'
import getSettings from './modules/settings'

// const req = require.context('./modules', false, /\.ts$/)
// const modules = function() {
//     return req.keys().reduce((modules:any, modulesPath:string) => {
//         const pathName = modulesPath.replace(/\.\/(.*)\.ts$/, '$1')
//         modules[pathName] = req(modulesPath).default
//         return modules
//       }, {})
// }

// const types = modules()
// const keys = Object.keys(types)
// console.log('types--', types, keys);


// export default types
export const permission:any = getPermission
export const globalState:any = getGlobalState
export const settings:any = getSettings
