import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/index'
// import store from '../store/index.js'

// 解决qiankun重复导航，以处理catch捕获处理阻止代码终止
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

// const contentRouter = [
//   {
//     path: '/template/home',
//     name: 'home',
//     component: () => import('@/views/home/index.vue'),
//     meta: { desc: 'homePage', icon: 'icon-dashboard' }
//   },
//   {
//     path: '/documentation',
//     name: 'documentation',
//     meta: { desc: 'file', icon: 'icon-documentation' },
//     redirect: '/personnel',
//     children: [
//       {
//         path: '/personnel',
//         name: 'personnel',
//         component: () => import('@/views/personnel/index.vue'),
//         meta: { desc: 'personnel', icon: 'icon-people' }
//       }
//     ]
//   },
//   {
//     path: '/guide',
//     name: 'guide',
//     component: () => import('@/views/guide/index.vue'),
//     meta: { desc: 'guidance', icon: 'icon-guide' }
//   }
// ]

const routes = [
  {
    path: '/portal/*',
    name: 'portal',
    component: Layout
  },
  {
    path: '/',
    name: 'dome',
    component: Layout
  }
]

// store.commit('permission/SET_ROUTER', contentRouter)

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
