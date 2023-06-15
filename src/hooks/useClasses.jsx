import { useContext } from "react";
import { authProvider } from "../provider/AuthContext";
import { useQuery } from "@tanstack/react-query";


const useClasses = () => {
    const { user, loading } = useContext(authProvider);
    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/class/${user?.email}`)
            return res.json();
        },
        
    })

    return [classes, refetch]
};

export default useClasses;