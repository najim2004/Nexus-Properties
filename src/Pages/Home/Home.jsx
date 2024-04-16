import { useRef } from "react";
import Estate from "./Estate/Estate";
import Slider from "./Slider/Slider";
import ReviewSection from "./ReviewSection/ReviewSection";
import Brokers from "./Brokers/Brokers";

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
      <Brokers></Brokers>
    </div>
  );
};

export default Home;
