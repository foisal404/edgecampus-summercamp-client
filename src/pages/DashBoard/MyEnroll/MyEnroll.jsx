import { useContext } from "react";
import { authProvider } from "../../../provider/AuthContext";
import useAllCart from "../../../hooks/useAllCart";
import { FaPaypal } from "react-icons/fa";
import Swal from "sweetalert2";

const MyEnroll = () => {
//TODO payment system isnt added  will add in future insaAllah

  const [carts, refetch] = useAllCart();
  const { user } = useContext(authProvider);
  const mydata = carts.filter((cart) => cart.email === user.email);
  //   console.log(carts);
  //   console.log(user.email);
  console.log(mydata);
  const handlePay=(id,classid)=>{
    console.log(id,classid);
    fetch(`https://edge-campus-server.vercel.app/cart/${id}`,{
        method:"PATCH"
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.modifiedCount>0){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Payment Succesfully',
                showConfirmButton: false,
                timer: 1500
              })
            refetch()
        }
    })
    fetch(`https://edge-campus-server.vercel.app/class/${classid}`,{
        method:"PATCH"
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
  }
  return (
    <div className="w-full px-20">
      <h2> my cart{mydata.length}+</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>price</th>
              <th>status</th>
              <th>pay</th>
            </tr>
          </thead>
          <tbody>
            {mydata.map((data, inX) => (
              <tr key={data._id}>
                <th>{inX + 1}</th>
                <td>{data.classname}</td>
                <td>${data.price}</td>
                <td>{data.enroll==="true"?<span className="text-green-400">Enrolled</span>:<span className="text-red-400">Unpaid</span>}</td>
                <td>
                  <button className="btn" onClick={() => handlePay(data._id,data.classid)}>
                    <FaPaypal />{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnroll;
