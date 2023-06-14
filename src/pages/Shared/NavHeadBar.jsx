import { FaMoon } from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import navImg from "../../../public/campii.png";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { authProvider } from "../../provider/AuthContext";
import Swal from "sweetalert2";

const NavHeadBar = () => {
  const {user,logout}=useContext(authProvider);
  // console.log(user);
  const handleLogout=()=>{
    logout()
    .then(()=>{
      console.log("logout");
      Swal.fire({
        icon: 'success',
        title: 'logout succesfully',
        showConfirmButton: false,
        timer: 1500
      })
    })
    .catch(error=>{
      console.error(error.message);
    })
  }
  //theme set
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const navItems = (
    <>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/'>Instructors</Link></li>
      <li><Link to='/'>Classes</Link></li>
      <li><Link to='/'>Dashboard</Link></li>
      
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <img src={navImg} alt="" className="w-16 h-10" />
          edgeCampus
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        
        {
          user?<>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar md:mx-5 tooltip  tooltip-bottom" data-tip={user?.displayName} >
            {/* data-tip=`${user?.displayName}` */}
              <div className="w-10 rounded-full ">
                <img src={user?.photoURL} className=""/>
              </div>
            </label>
            <button onClick={handleLogout} className="btn btn-sm my-auto">logout</button>
            </> 
            :<button className="btn btn-sm"><Link to='/login' className="mx-3">Login</Link></button>
        }
        <button className="btn btn-square btn-ghost">
          <label className="swap swap-rotate w-12 h-12">
            <input
              type="checkbox"
              onChange={handleToggle}
              // show toggle image based on localstorage theme
              checked={theme === "light" ? false : true}
            />
            <BsSun className="w-6 h-6 swap-on" />
            <FaMoon alt="dark" className="w-6 h-6 swap-off" />
          </label>
        </button>
      </div>
    </div>
  );
};

export default NavHeadBar;
