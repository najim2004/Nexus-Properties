import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Autoplay } from "swiper/modules";

import { FaQuoteLeft } from "react-icons/fa";
const ReviewSection = () => {
  const { reviewData } = useContext(AuthContext);
  return (
    <div className="max-w-[1300px] mb-16 px-3 mx-auto mt-10 overflow-hidden">
      <h3
        data-aos="fade-up"
        data-aos-duration="600"
        className="text-center text-2xl md:text-4xl lg:text-4xl mb-10 mt-10 font-semibold"
      >
        Customers review
      </h3>
      <Swiper
        data-aos="flip-right"
        data-aos-duration="2000"
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          // when window width is smaller than sm breakpoint

          640: {
            slidesPerView: 1,
          },
          // when window width is between sm and md breakpoint
          768: {
            slidesPerView: 1,
          },
          // when window width is between md and lg breakpoint
          1024: {
            slidesPerView: 2,
          },
        }}
        autoplay={{
          delay: 3000,
        }}
        allowTouchMove={false}
        navigation={false}
        modules={[Autoplay]}
      >
        {reviewData.map((review, index) => (
          <SwiperSlide key={index}>
            <div
              className="max-w-[500px] mx-auto flex flex-col justify-center relative min-h-[300px] rounded-[20px] p-6 lg:p-10"
              style={{ backgroundColor: `${review.background_color}` }}
            >
              <FaQuoteLeft className="size-8 mb-6 text-[#a4c0ca]" />
              <div className="">
                <p className="text-[#000000b0]">{review?.review_description}</p>
                <div className="mt-6  flex items-center gap-6">
                  <img
                    className="size-16 rounded-[50%] object-cover object-center"
                    src={review?.image}
                    alt=""
                  />
                  <div className="">
                    <h3 className="font-semibold text-xl">{review?.name}</h3>
                    <p>{review?.from}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/**/}
    </div>
  );
};

export default ReviewSection;
