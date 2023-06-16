import { useContext } from "react";
import { authProvider } from "../provider/AuthContext";
import { useQuery } from "@tanstack/react-query";


const useAllClasses = () => {
    const { user, loading } = useContext(authProvider);
    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`https://edge-campus-server.vercel.app/classes`)
            return res.json();
        },
        
    })

    return [classes, refetch]
};

export default useAllClasses;