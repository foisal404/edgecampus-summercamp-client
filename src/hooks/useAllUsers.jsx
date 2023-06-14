import { useContext } from "react";
import { authProvider } from "../provider/AuthContext";
import { useQuery } from "@tanstack/react-query";


const useAllUsers = () => {
    const { user, loading } = useContext(authProvider);
    // const token = localStorage.getItem('access-token');
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users`)
            return res.json();
        },
        
    })

    return [users, refetch]
};

export default useAllUsers;