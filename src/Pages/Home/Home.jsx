import { useRef } from "react";
import Estate from "./Estate/Estate";
import Slider from "./Slider/Slider";
import ReviewSection from "./ReviewSection/ReviewSection";

const Home = () => {
  const estateRef = useRef();
  const scrollHandler = (elmRef) => {
    window.scrollTo({
      top: elmRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="">
      <Slider scrollHandler={scrollHandler} estateRef={estateRef}></Slider>
      <Estate estateRef={estateRef}></Estate>
      <ReviewSection></ReviewSection>
    </div>
  );
};

export default Home;
