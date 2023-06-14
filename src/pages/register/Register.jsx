import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { authProvider } from "../../provider/AuthContext";
import Swal from 'sweetalert2'

const Register = () => {
  const{signUp,updateUser}=useContext(authProvider);
    const { register,formState: { errors }, handleSubmit } = useForm();
    const [error,setError]=useState("")
  const onSubmit = data => {
    console.log(data);
    if(data.password!== data.confirm){
      setError("password doesnt match")
      return
    }
    else{
      setError('')
    }
    const {name,password,email,photo}=data;
    signUp(email,password)
    .then(result=>{
      const currenUser=result.user;
      console.log(currenUser);
      updateUser(name,photo)
      .then(()=>{
        console.log("profile Updated");
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Registation done',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch(error=>{
        console.error(error.message);
      })
      
    })
    .catch(error=>{
      console.error(error.message);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "registation error",
      })
    })
  };
    return (
        <div className="hero min-h-screen w-full bg-base-200">
        <div className="hero-content flex-col w-full">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body pb-3"  onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input {...register("name",{required: true,})} className="py-2 bg-slate-100 rounded-md ps-2" />
                {errors.name && errors.name.type === "required" && (<span className="label-text-alt text-red-400">This is required*</span>)}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input {...register("email",{required: true})} className="py-2 bg-slate-100 rounded-md ps-2" />
                {errors.email && errors.email.type === "required" && (<span className="label-text-alt text-red-400">This is required*</span>)}
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password",{required: true,minLength:6,pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/})} className="py-2 bg-slate-100 rounded-md ps-2" />
                {errors.password && errors.password.type === "required" && (<span className="label-text-alt text-red-400">This is required*</span>)}
                {errors.password&& errors.password.type === "minLength" && <p className="label-text-alt text-red-400">{'password should be 6 charecter'}</p>}
                {errors.password&& errors.password.type === "pattern" && <p className="label-text-alt text-red-400">{'Must have one Capital and special charecter*'}</p>}
                
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" className="py-2 bg-slate-100 rounded-md ps-2" {...register("confirm",{required: true})} />
                {errors.confirm && errors.confirm.type === "required" && (<span className="label-text-alt text-red-400">This is required*</span>)}
                {error && <p className="label-text-alt text-red-400">{error}</p>}
                
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="text" className="py-2 bg-slate-100 rounded-md ps-2" {...register("photo",{required: true})} />
                {errors.photo && errors.photo.type === "required" && (<span className="label-text-alt text-red-400">This is required*</span>)}
                
              </div>
              <label className="label">
                  <Link to='/registration' className="label-text-alt link link-hover">
                    New Here?go to register
                  </Link>
                </label>
              <div className="form-control mt-6">
                <button className="btn " type="submit">Register</button>
              </div>
            </form>
            <div className="card-body pt-1">
            <div className="divider"></div>
            <button className="btn "><FaGoogle/>With Google</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;