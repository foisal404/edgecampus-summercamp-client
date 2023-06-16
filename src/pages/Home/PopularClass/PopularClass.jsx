// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import useAllClasses from "../../../hooks/useAllClasses";
import { FaUserAlt } from "react-icons/fa";

const PopularClass = () => {
  const [classes] = useAllClasses();
  const popularClasses = classes
    .filter((user) => user.status === "approved")
    .slice(0, 6);
  console.log(popularClasses);
  return (
    <div className="px-20 p-10">
      <h2 className="text-center text-3xl py-10 text-gray-500">
        Popular Classes
      </h2>
      <>
        <Swiper
          
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {popularClasses.map((cls) => (
            <SwiperSlide key={cls._id}>
              <div className="pb-20 pt-10">
                <img src={cls.classPhoto} className="h-72 mx-auto" alt="" />
                <div className="text-sm">
                  <p className="text-xl">{cls.className}</p>
                  <p className="text-green-600">${cls.price}</p>
                  <p>
                    <FaUserAlt className="inline me-2" />
                    {cls.seats}
                  </p>
                  <p>Instructor: {cls.instructorName}</p>
                  <p>{cls.feedback && `Feedback : ${cls.feedback}`}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default PopularClass;
