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
        id="review"
        data-aos="fade-up"
        data-aos-duration="600"
        className="text-center text-2xl md:text-4xl lg:text-4xl mb-4 mt-10 font-semibold"
      >
        Customers review
      </h3>
      <p
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-anchor="#review"
        className="max-w-[800px] mx-auto text-center mb-10"
      >
        Customers Review provides a platform for authentic feedback on products
        and services, aiding potential buyers in making informed decisions and
        fostering trust between businesses and consumers.
      </p>
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
            <div className="max-w-[500px] shadow-lg overflow-hidden mx-auto flex flex-col  relative min-h-[300px] rounded-[20px] pt-6 lg:pt-10 bg-[#f9fafb]">
              <div className="flex-grow px-6 lg:px-10">
                <FaQuoteLeft className="size-8 mb-4 text-[#0369a1]" />
                <p className="text-[#000000b0] italic">{review?.review_description}</p>
              </div>
              <div className="mt-6 w-full h-[100px] bg-[#0369a1] text-white justify-center flex items-center gap-6">
                <img
                  className="size-16 border-[3px] border-[white] rounded-[50%] object-cover object-center"
                  src={review?.image}
                  alt=""
                />
                <div className="">
                  <h3 className="font-semibold text-xl">{review?.name}</h3>
                  <p>{review?.from}</p>
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
