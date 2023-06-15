import useAllClasses from "../../../hooks/useAllClasses";

const AllClasses = () => {
  const [classes, refetch] = useAllClasses();
  console.log(classes);
  const handleApproved=(id)=>{
    console.log(id);
  }
  const handleDeny=(id)=>{
    console.log(id);
  }
  const handleFeedback=(id)=>{
    console.log(id);
  }
  return (
    <div className="w-full px-20">
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
            </tr>
          </thead>
          <tbody>
            {classes.map((cls, idx) => (
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
                <td>
                    <div className="flex flex-col my-auto justify-center gap-2">
                        <button onClick={()=>handleApproved(cls._id)} className={`btn btn-sm bg-green-400  ${cls?.status!== "pending"&&"btn-disabled"}`}>Approve</button>
                        <button onClick={()=>handleDeny(cls._id)} className="btn btn-sm bg-red-400">Deny</button>
                        <button onClick={()=>handleFeedback(cls._id)} className="btn btn-sm bg-orange-400">send feedback</button>
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
