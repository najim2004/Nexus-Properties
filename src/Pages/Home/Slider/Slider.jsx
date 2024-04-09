import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import nextBtn from "../../../assets/nextbtn.svg";
import prevBtn from "../../../assets/prevbtn.svg";

const Slider = () => {
  const { data } = useContext(AuthContext);

  return (
    <div className="max-w-[1200px] mx-auto mt-5 p-3 lg:p-0 lg:mt-10 md:mt-8">
      <div className="relative md:h-[400px] h-[350px] rounded-lg lg:h-[550px] bg-gray-400">
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {data?.slice(3, 6)?.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full bg-gray-500 bg-no-repeat bg-cover bg-center md:min-h-[400px] min-h-[350px] lg:min-h-[550px] relative rounded-xl"
                style={{ backgroundImage: `url(${item?.image})` }}
              >
                <div
                  className="absolute flex flex-col items-center justify-center inset-0 rounded-xl"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%)",
                  }}
                ></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute w-full  z-10 h-full top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <h3 className="lg:text-6xl md:text-4xl text-center text-3xl mb-3 lg:mb-6 md:mb-4 font-bold text-white">
              Discover Your New Home
            </h3>
            <p className="text-xl text-center max-w-[400px] lg:max-w-[500px] text-gray-200">
              Explore our diverse range of residences tailored to your
              lifestyle, offering comfort, convenience, and lasting memories.
            </p>
            <div className="z-20 absolute flex gap-4 bottom-5 right-5">
              <button className="btn !bg-transparent !border-none !p-0 prev-btn">
                <img src={prevBtn} alt="" />
              </button>
              <button className="btn !bg-transparent !border-none !p-0 next-btn">
                <img src={nextBtn} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
