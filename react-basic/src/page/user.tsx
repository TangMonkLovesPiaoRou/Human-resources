import { useLocation, matchRoutes } from 'react-router-dom'
import router from '../router';
export default function User() {
    const location = useLocation()
    console.log('User--', location);
    const routers = matchRoutes(router, location.pathname)
    console.log('matchRoutes--', routers);
    
    return (<div>User</div>)
}