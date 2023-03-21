import { lazy, Suspense } from 'react'
import { RouteObject } from 'react-router-dom'
import Home from '../page/home'
import Login from '../page/login'

const User = lazy(() => import('../page/user'))
const Detail = lazy(() => import('../page/detail'))
const lazyload = (element) => {
    return <Suspense fallback={ <>loadding</> }>{ element }</Suspense>
}
const router: RouteObject[] = [
    {
        path: '/',
        element: <Home></Home>,
        children: [
            {
                index: true,
                element: lazyload(<User></User>)
            },
            {
                path: '/detail',
                element: lazyload(<Detail></Detail>)
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    }
]

export default router