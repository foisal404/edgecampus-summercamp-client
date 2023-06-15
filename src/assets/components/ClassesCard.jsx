import { FaBookmark } from "react-icons/fa";

const ClassesCard = ({ data }) => {
  const {
    className,
    classPhoto,
    feedback,
    instructorEmail,
    instructorName,
    price,
    seats,
    status,
  } = data;
  return (
    <div className="card card-side bg-base-100 shadow-xl p-10">
      <figure className="w-2/3 h-60">
        <img src={classPhoto} alt="Movie" className="w-full h-full rounded-2xl"/>
      </figure>
      <div className="card-body">
        <div className="card-actions justify-end">
          <button className="btn">
            <FaBookmark />
          </button>
        </div>
        <h2 className="card-title">{className}</h2>
        <p>{instructorEmail}</p>
        <p>${price}</p>
        <p>Seats {seats}</p>
      </div>
    </div>
  );
};

export default ClassesCard;
