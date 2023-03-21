import './App.scss'
import { useRoutes } from 'react-router-dom'
import router from './router/index.tsx'
export default function App() {
    const element = useRoutes(router)
    return element
}