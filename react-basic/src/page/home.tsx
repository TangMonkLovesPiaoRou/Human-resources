import { useLocation, Outlet } from 'react-router-dom'
export default function Home() {
    const location = useLocation()
    console.log('Home--', location);
    
    return (<div>
        <div>home</div>
        <Outlet></Outlet>
    </div>)
}