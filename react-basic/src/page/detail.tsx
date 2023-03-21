import { useLocation, matchRoutes } from 'react-router-dom'
import router from '../router';
export default function Detail() {
    const location = useLocation()
    console.log('Detail--', location);
    const routers = matchRoutes(router, location.pathname)
    console.log('matchRoutes--', routers);
    return (<div>Detail</div>)
}