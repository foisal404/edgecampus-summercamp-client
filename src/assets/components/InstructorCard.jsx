import { FaFacebookMessenger, FaMailBulk, FaPhone } from "react-icons/fa";

const InstructorCard = ({ data }) => {
  const { photo, email, name } = data;
  return (
    <div className="card md:w-96 px-10 bg-base-100 shadow-xl">
      <figure className="pt-5 ">
        <img
          src={photo}
          alt="Shoes"
          className="h-60 w-60 rounded-full border-green-200 border-8 "
        />
      </figure>
      <div className="card-body  text-center ">
        <h2 className="card-title mx-auto ">{name}</h2>
        <p className="text-xs text-slate-400">{email}</p>
        <div className="btn-group mx-auto">
          <button className="btn"><FaFacebookMessenger/></button>
          <button className="btn "><FaPhone/></button>
          <button className="btn"><FaMailBulk/></button>
        </div>
        <div className="card-actions mx-auto">
          <button className="btn lowercase ">View Profile</button>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
