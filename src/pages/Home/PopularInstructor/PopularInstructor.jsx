import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import useAllUsers from "../../../hooks/useAllUsers";

const PopularInstructor = () => {
    const [users] = useAllUsers()
  const popularUsers =  users.filter((user) => user.role === "instructor").slice(0, 6);
  // console.log(popularUsers);
    return (
        <div className="p-5 md:px-20 md:p-10">
      <h2 className="text-center text-3xl py-10 text-gray-500">
        Popular Instructors 
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
           480: {
             slidesPerView: 2,
           },
           768: {
             slidesPerView: 3,
           },
           1024: {
             slidesPerView: 3,
           },
         }}
         className="mySwiper"
        >
          <div className="flex flex-wrap">
          {popularUsers.map((cls) => (
            <SwiperSlide key={cls._id}>
              <div className="py-10 mb-25">
                <img src={cls.photo} className="h-64 w-64 mx-auto rounded-full" alt="" />
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