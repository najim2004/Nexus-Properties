import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Card from "./Card/Card";
const Estate = ({ estateRef }) => {
  const { data } = useContext(AuthContext);
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
      <h3 className="text-center text-2xl md:text-4xl lg:text-4xl font-semibold mb-8">
        Chose Your Home
      </h3>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {cardData?.map((item) => (
          <Card key={item?.id} item={item}></Card>
        ))}
      </div>
      <div className="w-full flex justify-center mt-6 lg:mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="btn bg-transparent border-cmnBG border-[2px]  !rounded-[5px] text-cmnBG btn-sm h-10 font-semibold text-xl"
        >
          {showAll? 'Hide Some' :'See All'}
        </button>
      </div>
    </div>
  );
};

Estate.propTypes = {
  estateRef: PropTypes.object,
};

{
  /* <div className="flex flex-col lg:flex-row gap-6">
          <div className="h-[350px] w-[600px] bg-gray-200 rounded-lg">
            <img
              className="h-full w-full rounded-lg"
              src="https://i.ibb.co/mGNWG1q/nexus-properties-9.jpg"
              alt=""
            />
          </div>
          <div className="">
            <h3 className="text-2xl font-semibold">this is title</h3>
            <p>
              <p className="font-semibold">Segment name: </p>Senior living
              communities
            </p>
            <p>
              <p className="font-semibold">Status: </p>for sell
            </p>
            
          </div>
        </div> */
}
export default Estate;
