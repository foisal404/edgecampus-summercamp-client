import useClasses from "../../../hooks/useClasses";

const MyClasses = () => {
  const [classes] = useClasses();
  console.log(classes);
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
              <th>Status</th>
              <th>Feedback</th>
              <th>Enrolled Students</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls, idx) => (
              <tr key={cls._id}>
                <th>{idx + 1}</th>
                <td>{cls?.className}</td>
                <td
                  className={
                    (cls?.status === "pending" && "text-yellow-500") ||
                    (cls?.status === "approved" && "text-green-500") ||
                    (cls?.status === "denied" && "text-red-500")
                  }
                >
                  {cls?.status}
                </td>
                <td>{cls?.feedback}</td>
                <td>{cls?.students || 0}</td>
                <td>
                  <button className="btn btn-sm bg-slate-400">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
