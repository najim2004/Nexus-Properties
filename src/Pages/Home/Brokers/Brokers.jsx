import broker1 from "../../../assets/broker1.jpg";
import broker2 from "../../../assets/broker2.jpg";
import broker3 from "../../../assets/broker3.jpg";
import broker4 from "../../../assets/broker4.jpg";

const Brokers = () => {
  return (
    <div className="max-w-[1300px] px-3 !my-[100px] mx-auto">
      <h3
        data-aos="fade-up"
        data-aos-duration="600"
        className="text-center text-2xl md:text-4xl lg:text-4xl font-semibold mb-10"
      >
        Our Brokers
      </h3>
      <div className="flex flex-wrap gap-6 justify-around">
        <div className="space-y-2">
          <div className="size-[200px] group relative rounded-[50%] overflow-hidden">
            <img
              className="size-[200px]  object-cover object-top rounded-[50%]"
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
        <div className="space-y-2 ">
          <div className="size-[200px] group relative rounded-[50%] overflow-hidden">
            <img
              className="size-[200px]  object-cover object-center rounded-[50%]"
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
        <div className="space-y-2 ">
          <div className="size-[200px] group relative rounded-[50%] overflow-hidden">
            <img
              className="size-[200px]  object-cover object-top rounded-[50%]"
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
        <div className="space-y-2 ">
          <div className="size-[200px] group relative rounded-[50%] overflow-hidden">
            <img
              className="size-[200px]  object-cover object-top rounded-[50%]"
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
