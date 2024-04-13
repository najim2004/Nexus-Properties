import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Autoplay } from "swiper/modules";
const ReviewSection = () => {
  const { reviewData } = useContext(AuthContext);
  return (
    <div className="max-w-[1300px] mx-auto mt-10 overflow-hidden">
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {reviewData.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="w-[250px] mx-auto py-3 px-6 overflow-hidden relative min-h-[300px] bg-[#fff5d7] rounded-md">
              <img className={`${review.image}`} alt="" />

              <div className="ml-[70px]">
                <h3>
                  <span className="font-semibold">Name : </span> {review.name}
                </h3>
                <p>
                  <span className="font-medium">From : </span> {review.from}
                </p>
              </div>
              <div className="flex items-center h-full">
                <p className="text-justify">{review.review_description}</p>
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
