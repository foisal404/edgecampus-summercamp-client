
import Swal from "sweetalert2";
import useAllClasses from "../../../hooks/useAllClasses";
import { useRef, useState } from "react";

const AllClasses = () => {
  const [classes, refetch] = useAllClasses();
  console.log(classes);
  
  const [uid,setUid]=useState('')
    const refValue=useRef(null);
  const handleApproved = (id) => {
    console.log(id);
    fetch(`https://edge-campus-server.vercel.app/class/approve/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data);
          refetch();
        }
      });
  };
  const handleDeny = (id) => {
    console.log(id);
    fetch(`https://edge-campus-server.vercel.app/class/deny/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data);
          refetch();
        }
      });
  };


  const handleFeedback = (id) => {
    // console.log(id);
    setUid(id)
    window.my_modal_1.showModal()
  };
  const handleForm = () => {
    const feedback={feedback:refValue.current.value};
    console.log(feedback);
    console.log(uid);
    fetch(`https://edge-campus-server.vercel.app/class/feedback/${uid}`,{
      method:"PATCH",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(feedback)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.modifiedCount>0){
        console.log(data);
        refetch();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Feedback added',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
    

  };
  return (
    <div className="w-full px-20">
      {/* handleFeedback(cls._id) */}

      {/* modal ---------------------------------- */}
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Feedback!</h3>
          <input type="text" ref={refValue} className="w-full bg-slate-200 py-3" />
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn" onClick={handleForm}>
              post
            </button>
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
      {/* modal ---------------------------------- */}

      {<p>Total Class {classes.length}</p>}
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Instructor name</th>
              <th>Instructor email</th>
              <th>Available seats</th>
              <th>price</th>
              <th>status</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {classes.toReversed().map((cls, idx) => (
              <tr key={cls._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-square w-32 h-32">
                        <img
                          src={cls?.classPhoto}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{cls?.className}</div>
                    </div>
                  </div>
                </td>
                <td>{cls?.instructorName}</td>
                <td>{cls?.instructorEmail}</td>
                <td>{cls?.available}</td>
                <td>${cls?.price}</td>
                <td
                  className={
                    (cls?.status === "pending" && "text-yellow-500") ||
                    (cls?.status === "approved" && "text-green-500") ||
                    (cls?.status === "denied" && "text-red-500")
                  }
                >
                  {cls?.status}
                </td>
                <td>
                  <div className="flex flex-col my-auto justify-center gap-2">
                    <button
                      onClick={() => handleApproved(cls._id)}
                      className={`btn btn-sm bg-green-400 lowercase ${
                        cls?.status !== "pending" && "btn-disabled"
                      }`}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleDeny(cls._id)}
                      className={`btn btn-sm bg-red-400 lowercase  ${
                        cls?.status !== "pending" && "btn-disabled"
                      }`}
                    >
                      Deny
                    </button>
                    <button
                      onClick={() => handleFeedback(cls._id)}
                      className="btn btn-sm bg-orange-400 lowercase"
                    >
                      feedback
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllClasses;
