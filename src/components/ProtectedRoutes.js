import { Navigate } from "react-router-dom"

const ProtectedRoutes = ({ children }) => {  //oberver de firebase
    const token = localStorage.getItem('token')
    console.log(token)
    if(!token) return <Navigate to='/'/>
    return <>{children}</>
}

export default ProtectedRoutes