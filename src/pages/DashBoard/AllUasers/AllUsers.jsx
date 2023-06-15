import useAllUsers from "../../../hooks/useAllUsers";

const AllUsers = () => {
  const [users, refetch] = useAllUsers();
  //   console.log(users);
  const makeAdmin = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/users/admin/${id}`, {
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
  const makeInstructor = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/users/instructor/${id}`, {
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
  return (
    <div className="w-full px-20">
      {<p>Total Users {users.length}</p>}
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>details</th>
              <th>Name</th>
              <th>email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12 me-3">
                      <img
                        src={user?.photo}
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  {user._id}
                </td>
                <td>{user?.name}</td>
                <td>{user.email}</td>
                <th>
                  {user?.role ? (
                    `${user?.role}`
                  ) : (
                    <>
                      <button
                        className="btn mx-2"
                        onClick={() => makeInstructor(user._id)}
                      >
                        Instructor
                      </button>
                      <button
                        className="btn"
                        onClick={() => makeAdmin(user._id)}
                      >
                        Admin
                      </button>
                    </>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
