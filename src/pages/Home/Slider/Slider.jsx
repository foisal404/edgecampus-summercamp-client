import banner1 from "../../../assets/image/banner1.jpg";
import banner11 from "../../../assets/image/banner11.jpg";
import banner5 from "../../../assets/image/banner5.jpg";
import banner10 from "../../../assets/image/banner10.jpg";

const Slider = () => {
    const bannerInfo = (
        <div className="absolute  flex items-center top-0 left-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  text-white  ">
          <div className="md:w-5/12 space-y-5 pl-10">
            <h2 className=" text-4xl md:text-7xl ">Welcome to <span className="text-zinc-500">EdgeCampus</span> Summer Sports Academy!</h2>
            <p className="text-zinc-500">
            Unleash Your Potential in the World of Sports and Learning,Our academy is dedicated to providing a cutting-edge environment where aspiring students and eager learners can excel.
            </p>
            
          </div>
        </div>
      );
  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={banner1}
            className="w-full h-[85vh]"
          />
          {
            bannerInfo
            }
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={banner5}
            className="w-full h-[85vh]"
          />
          {
            bannerInfo
          }
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={banner10}
            className="w-full h-[85vh]"
          />
          {
            bannerInfo
          }
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={banner11}
            className="w-full h-[85vh]"
          />
          {
            bannerInfo
          }
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
