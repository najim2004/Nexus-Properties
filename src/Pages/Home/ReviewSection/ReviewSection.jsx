import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Autoplay } from "swiper/modules";
const ReviewSection = () => {
  const { reviewData } = useContext(AuthContext);
  return (
    <div className="max-w-[1300px] mx-auto mt-10 overflow-hidden">
      <h3
        data-aos="fade-up"
        data-aos-duration="600"
        className="text-4xl text-center mb-10 mt-10 font-semibold"
      >
        Our customers review
      </h3>
      <Swiper
        data-aos="flip-right"
        data-aos-duration="2000"
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          // when window width is smaller than sm breakpoint

          640: {
            slidesPerView: 1,
          },
          // when window width is between sm and md breakpoint
          768: {
            slidesPerView: 2,
          },
          // when window width is between md and lg breakpoint
          1024: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 3000,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
      >
        {reviewData.map((review, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-[300px] mx-auto py-3 px-3 overflow-hidden relative min-h-[200px] rounded-md"
              style={{ backgroundColor: `${review.background_color}` }}
            >
              <img
                className="size-[90px] object-cover absolute -left-3 top-0 rounded-br-[50%]"
                src={review.image}
                alt=""
              />

              <div className="ml-[70px]">
                <h3>
                  <span className="font-semibold">Name : </span> {review.name}
                </h3>
                <p>
                  <span className="font-medium">From : </span> {review.from}
                </p>
              </div>
              <div className="h-[200px] grid content-center justify-center">
                <p>{review.review_description}</p>
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
