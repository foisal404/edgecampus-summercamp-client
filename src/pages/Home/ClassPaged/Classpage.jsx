import { useContext } from "react";
import ClassesCard from "../../../assets/components/ClassesCard";
import useAllClasses from "../../../hooks/useAllClasses";
import { authProvider } from "../../../provider/AuthContext";
import {  useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Classpage = () => {
  const [classes] = useAllClasses();
  const {user}=useContext(authProvider)
  // console.log(user);
  const location=useLocation()
  const navigate=useNavigate()
  const approvedClass = classes.filter((user) => user.status === "approved");
  // console.log(approvedClass);
  const handleSelectClass=(classid,classname,price)=>{
    if(user){
      const data={email:user?.email,classid,classname,price,enroll:"false"}
      // console.log(data); 
      fetch(`https://edge-campus-server.vercel.app/cart`,{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.insertedId){
          console.log(data);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'added to the cart',
            showConfirmButton: false,
            timer: 1500
          })

        }
      })
    }
    else{
      navigate('/login', {state:{ from: location }})
      // console.log("hell");
    }

  }
  return (
    <div>
      <h2 className="text-center text-3xl py-10 text-gray-500">
        --- All Classes ---
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-10">
        {approvedClass.map((cls) => (
          <ClassesCard key={cls._id} data={cls} handleSelectClass={handleSelectClass}></ClassesCard>
        ))}
      </div>
    </div>
  );
};

export default Classpage;
