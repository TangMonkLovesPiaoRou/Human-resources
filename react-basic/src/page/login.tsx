import { useNavigate } from 'react-router-dom'
export default function Login() {
    const navigate = useNavigate()
    return (<div onClick={() => navigate('/detail')}>Login</div>)
}