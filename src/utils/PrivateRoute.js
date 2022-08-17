import { Navigate, Outlet } from 'react-router-dom'
const PrivateRoute = () => {
    let token = localStorage.getItem('token')
    console.log("token in private route ====>>>",token);

return (
    token ? <Outlet/> : <Navigate to='/'/>
  )
}
export default PrivateRoute;