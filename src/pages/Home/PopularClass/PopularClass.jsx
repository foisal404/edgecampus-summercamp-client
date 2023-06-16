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
  // console.log(popularClasses);
  return (
    <div className=" md:px-20 md:p-10">
      <h2 className="text-center text-3xl py-10 text-gray-500">
        Popular Classes
      </h2>
      <>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper"
        >
          {popularClasses.map((cls) => (
            <SwiperSlide key={cls._id}>
              <div className="p-5">
                <div className="card card-compact  bg-base-100 shadow-xl">
                <figure>
                  <img src={cls.classPhoto} className="h-72  mx-auto" alt="" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{cls.className}</h2>
                  <p className="text-green-600">${cls.price}</p>
                  <p><FaUserAlt className="inline me-2" />
                    {cls.students}</p>
                    <p>Instructor: {cls.instructorName}</p>
                  <div className="mx-auto">
                    <button className="btn btn-wide mx-auto">details</button>
                  </div>
                </div>
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
