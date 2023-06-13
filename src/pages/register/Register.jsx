import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
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
                <input {...register("name")} className="py-2 bg-slate-100 rounded-md ps-2" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input {...register("email")} className="py-2 bg-slate-100 rounded-md ps-2" />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" className="py-2 bg-slate-100 rounded-md ps-2" {...register("password")} />
                
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" className="py-2 bg-slate-100 rounded-md ps-2" {...register("confirm")} />
                
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="text" className="py-2 bg-slate-100 rounded-md ps-2" {...register("photo")} />
                
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