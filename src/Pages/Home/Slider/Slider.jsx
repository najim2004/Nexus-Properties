import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import nextBtn from "../../../assets/nextbtn.svg";
import prevBtn from "../../../assets/prevbtn.svg";
import PropTypes from "prop-types";

const Slider = ({ scrollHandler, estateRef }) => {
  const { data } = useContext(AuthContext);
  return (
    <div
      id="slider"
      className="w-full h-screen relative -top-[71.2px]"
    >
      <div className="relative h-screen bg-gray-400">
        <Swiper
          className="z-0 mySwiper"
          loop={true}
          autoplay={{
            delay: 2000,
          }}
          slidesPerView={"auto"}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <div
              className="w-full bg-no-repeat bg-cover bg-center min-h-screen relative"
              style={{ backgroundImage: `url(${data[3]?.image})` }}
            >
              <div
                className="absolute flex flex-col items-center justify-center inset-0"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.10) 100%)",
                }}
              ></div>
            </div>
          </SwiperSlide>
          {data?.slice(4, 6)?.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full bg-no-repeat bg-cover bg-center min-h-screen relative "
                style={{ backgroundImage: `url(${item?.image})` }}
              >
                <div
                  className="absolute flex flex-col items-center justify-center inset-0"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.10) 100%)",
                  }}
                ></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute z-10 w-full h-full top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <h3
              data-aos="fade-right"
              data-aos-anchor="#slider"
              data-aos-duration="1000"
              className="lg:text-6xl md:text-4xl w-[300px] md:w-auto lg:w-auto text-center text-3xl mb-3 lg:mb-6 md:mb-4 font-bold text-[#F4E1D2]"
            >
              Discover Your New Home
            </h3>
            <p
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-anchor="#slider"
              className="text-xl text-center max-w-[500px] lg:max-w-[700px] text-[#F4E1D2]"
            >
              Explore our diverse range of residences tailored to your
              lifestyle, offering comfort, convenience, and lasting memories.
            </p>
            <div
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="600"
              data-aos-anchor="#slider"
            >
              <button
                onClick={() => scrollHandler(estateRef)}
                className="btn bg-[#036aa1df] font-medium  lg:text-lg border-none lg:h-10 mt-2 lg:mt-4 !rounded-lg hover: text-white lg:!font-bold"
              >
                Explore Now
              </button>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="600"
              data-aos-delay="600"
              data-aos-anchor="#slider"
              className="z-20 absolute flex  md:gap-4 gap-2 lg:gap-4 bottom-20 lg:bottom-5 md:right-5 right-3 lg:right-5"
            >
              <button className="btn !bg-transparent !border-none !p-0 prev-btn">
                <img className="size-10 lg:size-auto" src={prevBtn} alt="" />
              </button>
              <button className="btn !bg-transparent !border-none !p-0 next-btn">
                <img className="size-10 lg:size-auto" src={nextBtn} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Slider.propTypes = {
  scrollHandler: PropTypes.func,
  estateRef: PropTypes.object,
};

export default Slider;
