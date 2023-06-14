import useAllUsers from "../../../hooks/useAllUsers";

const AllUsers = () => {
  const [users, refetch] = useAllUsers();
  console.log(users);
  return (
    <div className="w-full px-20">
      {<p>Total Users {users.length}</p>}
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user,idx)=><tr key={user._id}>
                    <th>
                        {idx+1}
                    </th>
                    <td>
                      {user._id}
                    </td>
                    <td>{user.email}</td>
                    <th>
                      {
                        user?.role?"user?.role":<>
                        <button className="btn mx-2">Instructor</button>
                        <button className="btn">Admin</button>
                        </>
                      }
                    </th>
                  </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
