import { useMediaQuery } from "react-responsive";
import broker1 from "../../../assets/broker1.jpg";
import broker2 from "../../../assets/broker2.jpg";
import broker3 from "../../../assets/broker3.jpg";
import broker4 from "../../../assets/broker4.jpg";

const Brokers = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 768 });
  return (
    <div className="max-w-[1300px] px-3 !my-[100px] mx-auto">
      <h3
        id="brokers"
        data-aos="fade-up"
        data-aos-duration="600"
        className="text-center text-2xl md:text-4xl lg:text-4xl font-semibold mb-4"
      >
        Our Brokers
      </h3>
      <p
        data-aos="fade-up"
        data-aos-anchor="#brokers"
        data-aos-duration="600"
        className="max-w-[800px] mx-auto text-center mb-10"
      >
        Our Brokers are dedicated professionals offering expert guidance in real
        estate transactions. With in-depth market knowledge and personalized
        service, they strive to help clients navigate the complexities of
        property transactions successfully
      </p>
      <div className="flex flex-wrap gap-6 justify-around">
        {/* 1st broker */}
        <div data-aos="fade-up" data-aos-duration="600" className="space-y-2">
          <div className="size-[200px] border-[3px] border-gray-300 bg-gray-300 shadow-xl group relative rounded-[50%] overflow-hidden">
            <img
              className="size-[200px] transition-transform duration-300 transform group-hover:scale-110 object-cover object-top rounded-[50%]"
              src={broker1}
              alt=""
            />
            <div className="w-full absolute bottom-0 group-hover:flex hidden bg-[#000000a2] h-16">
              <button className="text-white text-center w-full h-full">
                About me
              </button>
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-center">Michael</h3>
          <p className="text-center text-lg">Senior Broker</p>
        </div>
        {/* 2nd broker */}
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay={isLargeScreen != false ? 200 : 0}
          className="space-y-2 "
        >
          <div className="size-[200px] border-[3px] border-gray-300 bg-gray-300 shadow-xl group relative rounded-[50%] overflow-hidden">
            <img
              className="size-[200px] transition-transform duration-300 transform group-hover:scale-110 object-cover object-center rounded-[50%]"
              src={broker2}
              alt=""
            />
            <div className="w-full absolute bottom-0 group-hover:flex hidden bg-[#000000a2] h-16">
              <button className="text-white text-center w-full h-full">
                About me
              </button>
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-center">David</h3>
          <p className="text-center text-lg">Senior Broker</p>
        </div>
        {/* 3rd broker */}
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay={isLargeScreen != false ? 300 : 0}
          className="space-y-2 "
        >
          <div className="size-[200px] border-[3px] border-gray-300 bg-gray-300 shadow-xl group relative rounded-[50%] overflow-hidden">
            <img
              className="size-[200px] transition-transform duration-300 transform group-hover:scale-110 object-cover object-top rounded-[50%]"
              src={broker3}
              alt=""
            />
            <div className="w-full absolute bottom-0 group-hover:flex hidden bg-[#000000a2] h-16">
              <button className="text-white text-center w-full h-full">
                About me
              </button>
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-center">James</h3>
          <p className="text-center text-lg">Broker</p>
        </div>
        {/* 4th broker */}
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay={isLargeScreen != false ? 400 : 0}
          className="space-y-2 "
        >
          <div className="size-[200px] border-[3px] border-gray-300 bg-gray-300 shadow-xl group relative rounded-[50%] overflow-hidden">
            <img
              className="size-[200px] transition-transform duration-300 transform group-hover:scale-110 object-cover object-top rounded-[50%]"
              src={broker4}
              alt=""
            />
            <div className="w-full absolute bottom-0 group-hover:flex hidden bg-[#000000a2] h-16">
              <button className="text-white text-center w-full h-full">
                About me
              </button>
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-center">Emily</h3>
          <p className="text-center text-lg">Broker</p>
        </div>
      </div>
    </div>
  );
};

export default Brokers;
