import { useContext } from "react";
import ClassesCard from "../../../assets/components/ClassesCard";
import useAllClasses from "../../../hooks/useAllClasses";
import { authProvider } from "../../../provider/AuthContext";
import {  useLocation, useNavigate } from "react-router-dom";

const Classpage = () => {
  const [classes] = useAllClasses();
  const {user}=useContext(authProvider)
  console.log(user);
  const location=useLocation()
  const navigate=useNavigate()
  const approvedClass = classes.filter((user) => user.status === "approved");
  console.log(approvedClass);
  const handleSelectClass=()=>{
    if(user){
      console.log("object"); 
    }
    else{
      navigate('/login', {state:{ from: location }})
      console.log("hell");
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
