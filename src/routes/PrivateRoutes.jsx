import { useContext } from "react";
import { authProvider } from "../provider/AuthContext";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(authProvider)
    const location=useLocation();
    if(loading){
        return <div className="flex items-center justify-center min-h-screen"><span className="loading loading-bars loading-lg "></span></div>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;