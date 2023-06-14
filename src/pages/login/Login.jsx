import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { authProvider } from "../../provider/AuthContext";
import Swal from "sweetalert2";
const Login = () => {
  const {login,googleUp}=useContext(authProvider)
    const { register, handleSubmit } = useForm();
    const handleGoogleIn=()=>{
      googleUp()
      .then((result)=>{
        const currentUser=result.user;
        // console.log(currentUser.email);
        fetch('http://localhost:5000/user',{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify({email:currentUser?.email,name:currentUser?.displayName})
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
            console.log(data);

          }
        })
      })
      .catch(error=>{
        console.error(error.message);
      })
    }
  const onSubmit = data => {
    // console.log(data)
    const {email,password}=data;
    console.log(email,password);
    login(email,password)
    .then(result=>{
      const currentUser=result.user;
      console.log(currentUser);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Login done',
        showConfirmButton: false,
        timer: 1500
      })
    })
    .catch(error=>{
      console.error(error.message);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${error.message.slice(17)}`,
      })
    })
  };
  const {user}=useContext(authProvider);
  console.log(user);
  return (
    <div className="hero min-h-screen w-full bg-base-200">
      <div className="hero-content flex-col w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body pb-3"  onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input {...register("email")} className="py-2" />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" className="py-2" {...register("password")} />
              <label className="label">
                <Link to='/registration' className="label-text-alt link link-hover">
                  New Here?go to register
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn " type="submit">Login</button>
            </div>
          </form>
          <div className="card-body pt-1">
          <div className="divider"></div>
          <button className="btn " onClick={handleGoogleIn}><FaGoogle/>With Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
