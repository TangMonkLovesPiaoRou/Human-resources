import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { permission } from '@/types/index'
const staticeRoutes: Array<RouteRecordRaw> = [
    {
        path: '/documentation',
        component: () => import('@/views/documentation/index.vue'),
        meta: { desc: 'file', icon: 'icon-documentation' },
        redirect: '/personnel',
        children: [
            {
            path: '/personnel',
            name: 'personnel',
            component: () => import('@/views/personnel/index.vue'),
            meta: { desc: 'personnel', icon: 'icon-people' }
            }
        ]
    }
]

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('@/views/home/index.vue'),
        meta: { desc: 'homePage', icon: 'icon-dashboard' }
    },
    ...staticeRoutes
]

permission.Set_Router(routes);


export default createRouter({
    routes,
    history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/portal/resources' : '/'),
})