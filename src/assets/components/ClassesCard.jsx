import { useContext, useEffect, useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { authProvider } from "../../provider/AuthContext";

const ClassesCard = ({ data,handleSelectClass }) => {
  const {user}=useContext(authProvider)
  // console.log(user);
  const [role, setRole] = useState(null);
  useEffect(() => {
    fetch(`https://edge-campus-server.vercel.app/users/role/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setRole(data.role);
      });
  }, []);
  // console.log(role);
  const {
    _id,
    className,
    classPhoto,
    feedback,
    instructorEmail,
    instructorName,
    price,
    seats,
    status,
  } = data;
  return (
    <div className={`card card-side bg-base-100 shadow-xl p-10 ${seats<1 && 'bg-red-200'} `}>
      <figure className="w-2/3 h-60">
        <img src={classPhoto} alt="Movie" className="w-full h-full rounded-2xl"/>
      </figure>
      <div className="card-body">
        <div className="card-actions justify-end">
          <button className={`btn ${seats<1 &&'btn-disabled'} ${user&&role!='student' &&'btn-disabled'}`} onClick={()=>handleSelectClass(_id,className,price)}>
            <FaBookmark />
          </button>
        </div>
        <h2 className="card-title">{className}</h2>
        <p>{instructorEmail}</p>
        <p>${price}</p>
        <p>Seats {seats}</p>
      </div>
    </div>
  );
};

export default ClassesCard;
