
import { useContext } from "react";
import {  useForm } from "react-hook-form";
import { authProvider } from "../../../provider/AuthContext";

const AddClass = () => {
    const { register,formState: { errors }, handleSubmit } = useForm();
    const {user}=useContext(authProvider)
    
  const onSubmit = data => {
    data.status="pending"
    console.log(data);
  };
    return (
        <div className="hero min-h-screen w-full bg-base-200">
        <div className="hero-content flex-col w-full px-20">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">ADD New Class!</h1>
          </div>
          <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
            <form className="card-body pb-3 w-full"  onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Class Name</span>
                </label>
                <input {...register("className",{required: true,})} className="py-2 bg-slate-100 rounded-md ps-2" />
                {errors.className && errors.className.type === "required" && (<span className="label-text-alt text-red-400">This is required*</span>)}
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Class Photo</span>
                </label>
                <input type="text" className="py-2 bg-slate-100 rounded-md ps-2" {...register("classPhoto",{required: true})} />
                {errors.classPhoto && errors.classPhoto.type === "required" && (<span className="label-text-alt text-red-400">This is required*</span>)}
                
              </div>
              <div className="flex gap-4">
                <div className="form-control w-1/2">
                    <label className="label">
                    <span className="label-text">Instructor Email</span>
                    </label>
                    <input defaultValue={user?.email} {...register("instructorEmail",{required: true})} className="py-2 bg-slate-100 rounded-md ps-2" />
                    {errors.instructorEmail && errors.instructorEmail.type === "required" && (<span className="label-text-alt text-red-400">This is required*</span>)}
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                    <span className="label-text">Instructor Name</span>
                    </label>
                    <input {...register("instructorName",{required: true})} className="py-2 bg-slate-100 rounded-md ps-2" />
                    {errors.instructorName && errors.instructorName.type === "required" && (<span className="label-text-alt text-red-400">This is required*</span>)}
                </div>
              </div>
              <div className="flex gap-4">
                <div className="form-control ">
                    <label className="label">
                    <span className="label-text">Available seats</span>
                    </label>
                    <input {...register("seats",{required: true})} className="py-2 bg-slate-100 rounded-md ps-2" />
                    {errors.seats && errors.seats.type === "required" && (<span className="label-text-alt text-red-400">This is required*</span>)}
                </div>
                <div className="form-control ">
                    <label className="label">
                    <span className="label-text">$Price</span>
                    </label>
                    <input {...register("price",{required: true})} className="py-2 bg-slate-100 rounded-md ps-2" />
                    {errors.price && errors.price.type === "required" && (<span className="label-text-alt text-red-400">This is required*</span>)}
                </div>
                
              </div>
              
              
             
              <div className="form-control mt-6">
                <button className="btn " type="submit">Add Class</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default AddClass;