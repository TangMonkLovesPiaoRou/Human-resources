import { createApp } from 'vue'
import App from './App.vue'
import router  from './router'
import { globalState, permission  } from './types/index'
import components from '@/components/index'
import i18n from '@/lang/index'
import 'element-plus/dist/index.css'
import './styles/iconfont/iconfont.css'
import ElementPlus from 'element-plus'
import './permission'
let instance:any;
function render(props?: any) {
  instance = createApp(App)
  for(const ComponentName in components) {
    instance.component(ComponentName, components[ComponentName])
  }
  instance.use(router).use(i18n).use(ElementPlus).mount(props && props.container ? props.container.querySelector('#app') : '#app')
}
// 独立运行时

if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('bootstrap');
}
export async function mount(props: any) {
  console.log('[vue] props from main framework Resource', props);
  props.onGlobalStateChange((state:any, prev:any) => {
    console.log('父窗口通信-Resource-触发onGlobalStateChange函数==', state, prev);
  })
  props.setGlobalState({ router: permission.router, currentBase: '/resources' })
  globalState.set_Pigeon(props)
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
}
