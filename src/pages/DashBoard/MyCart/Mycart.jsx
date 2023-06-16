import { useContext } from "react";
import useAllCart from "../../../hooks/useAllCart";
import { authProvider } from "../../../provider/AuthContext";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";


const Mycart = () => {
  const [carts, refetch] = useAllCart();
  const {user}=useContext(authProvider)
//   console.log(carts);
//   console.log(user.email);
  const mydata=carts.filter(cart=>cart.email===user.email && cart.enroll==="false")
  console.log(mydata);
  const hadleDelete=(id)=>{
    console.log(id);
    fetch(`https://edge-campus-server.vercel.app/carts/${id}`,{
        method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.deletedCount>0){
            console.log(data);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'remove from cart',
                showConfirmButton: false,
                timer: 1500
              })
              refetch()
        }
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
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {mydata.map((data,inX)=><tr key={data._id}>
                <th>{inX+1}</th>
                <td>{data.classname}</td>
                <td>${data.price}</td>
                <td><button className="btn" onClick={()=>hadleDelete(data._id)}> <FaTrash/> </button></td>
              </tr>)
                
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mycart;
