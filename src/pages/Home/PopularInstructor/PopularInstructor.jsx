// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { FaUserAlt } from "react-icons/fa";
import useAllUsers from "../../../hooks/useAllUsers";

const PopularInstructor = () => {
    const [users] = useAllUsers()
  const popularUsers =  users.filter((user) => user.role === "instructor").slice(0, 6);
  console.log(popularUsers);
    return (
        <div className="p-5 md:px-20 md:p-10">
      <h2 className="text-center text-3xl py-10 text-gray-500">
        Popular Instructors 
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
          <div className="flex flex-wrap">
          {popularUsers.map((cls) => (
            <SwiperSlide key={cls._id}>
              <div className="py-10">
                <img src={cls.photo} className="h-16 w-16 md:h-28 md:w-28 lg:h-72 lg:w-72 mx-auto rounded-full" alt="" />
                <div className="text-sm">
                  
                  <p className="text-center text-zinc-500">Name: {cls.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          </div>
        </Swiper>
      </>
    </div>
    );
};

export default PopularInstructor;