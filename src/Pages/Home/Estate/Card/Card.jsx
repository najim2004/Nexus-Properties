import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";

const Card = ({ item }) => {
  const {
    image,
    estate_title,
    segment_name,
    price,
    status,
    area,
    location,
    facilities,
  } = item;
  return (
    <div>
      <div className="p-2 border-[1px] h-full flex flex-col border-gray-400 bg-[#f4e1d22d] rounded-xl">
        <div className="flex-grow h-full">
          <div className="w-full h-[250px] rounded-xl bg-gray-300 mb-4">
            <img
              className="w-full h-full rounded-xl"
              src={image}
              alt="loading"
            />
          </div>
          <h3 className="text-2xl mb-3 font-bold">{estate_title}</h3>
          <h3>
            <span className="font-bold">Segment Name : </span>
            {segment_name}
          </h3>
          <div className="mt-3">
            <h3 className="font-bold">Facilities :</h3>
            <div className="flex font-medium text-[#565656] *:mr-3 flex-wrap">
              {facilities.map((item, index) => (
                <p key={index}>{item},</p>
              ))}
            </div>
          </div>
          <div className="flex mt-4 gap-2 items-center">
            <h3>
              <span className="font-bold">Status: </span>
              {status}
            </h3>
            <h3 className="">
              <span className="font-bold">Price: </span>
              {price}
            </h3>
            <h3>
              <span className="font-bold">Area: </span>
              {area}
            </h3>
          </div>
          <p className="flex items-center font-medium mt-4 text-[#565656]">
            <IoLocationOutline className="size-6" /> {location}
          </p>
        </div>
        <button className="w-full btn btn-sm h-10 mt-4 text-white bg-purple-500">
          View Property
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Card;
