import { useContext, useEffect, useState } from "react";
import {  FaCalendarAlt, FaHome, FaShoppingCart, FaUsers ,FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { authProvider } from "../../provider/AuthContext";

const DashBoard = () => {
    const {user}=useContext(authProvider)
    console.log(user);
    const[role,setRole]=useState(null)

    useEffect(()=>{
        fetch(`http://localhost:5000/users/role/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setRole(data.role)
        })
    },[])
    console.log(role);

    // const isAdmin = true;

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-slate-300">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">

                    {
                        role==="admin" ? <>
                            <div className="py-10">
                                <h2 className="text-3xl text-center">Admin DashBoard</h2>
                            </div>
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> Manage Users</NavLink></li>
                            <li><NavLink to="/dashboard/allclasses"><FaUsers></FaUsers> Manage Classes</NavLink></li>
                            
                        </> : <>
                            <li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
                            <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> my courses</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                                </NavLink>

                            </li>
                        </>
                    }




                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;
