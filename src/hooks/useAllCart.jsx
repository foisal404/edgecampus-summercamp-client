import { useContext } from "react";
import { authProvider } from "../provider/AuthContext";
import { useQuery } from "@tanstack/react-query";


const useAllCart = () => {
    const { user, loading } = useContext(authProvider);
    const { refetch, data: carts = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`https://edge-campus-server.vercel.app/carts`)
            return res.json();
        },
        
    })

    return [carts, refetch]
};

export default useAllCart;