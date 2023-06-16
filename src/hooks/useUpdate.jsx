import { useState } from "react";


 const useUpdateHook=async(id)=>{
    const [pass,setPass]=useState('false')
    const res= await fetch(`https://edge-campus-server.vercel.app/cart/${id}`,{
        method:"PATCH"
    })
    const data= await res.json();
    console.log(data);
    if(data.modifiedCount>0){
        setPass("ture")
    }

    return {data,pass}
}
export default useUpdateHook;
