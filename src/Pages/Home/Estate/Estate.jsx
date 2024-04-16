import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Card from "./Card/Card";

const Estate = ({ estateRef }) => {
  const { data, dataLoading } = useContext(AuthContext);
  const [cardData, setCardData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  


  useEffect(() => {
    if (showAll) {
      setCardData(data);
    } else {
      setCardData(data.slice(0, 6));
    }
  }, [data, showAll]);
  return (
    <div
      className="max-w-[1300px] mt-8 p-3 lg:p-0 md:mt-12 lg:mt-20 mx-auto "
      ref={estateRef}
    >
      <h3
        data-aos="fade-up"
        data-aos-duration="600"
        className="text-center text-2xl md:text-4xl lg:text-4xl font-semibold mb-8"
      >
        Chose Your Home
      </h3>
      {dataLoading ? (
        <div className="w-full flex justify-center">
          <span className="loading size-[80px] text-cmnBG loading-infinity loading-lg"></span>
        </div>
      ) : (
        <div className="">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {cardData?.map((item) => (
              <Card key={item?.id} item={item}></Card>
            ))}
          </div>
          <div
            data-aos="fade-up"
            className="w-full flex justify-center mt-6 lg:mt-10"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn bg-transparent border-cmnBG border-[2px] px-8  !rounded-[15px] text-cmnBG btn-sm h-10 font-semibold text-xl"
            >
              {showAll ? "Hide Some" : "See All"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

Estate.propTypes = {
  estateRef: PropTypes.object,
};

export default Estate;
