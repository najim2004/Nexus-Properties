import { useRef } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import Estate from "./Estate/Estate";
import Slider from "./Slider/Slider";

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
    </div>
  );
};

export default Home;
