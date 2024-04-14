import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const {
    image,
    id,
    estate_title,
    segment_name,
    price,
    status,
    area,
    location,
    facilities,
  } = item;
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay={id != 0 ? 100 * id : 0}
    >
      <div className="p-2 border-[1px] h-full flex flex-col border-gray-200 bg-[#f4e1d22d] rounded-lg">
        <div className="flex-grow h-full">
          <div className="w-full h-[250px] rounded-xl bg-gray-300 mb-4">
            <img
              className="w-full h-full rounded-lg"
              src={image}
              alt="loading"
            />
          </div>
          <h3 className="text-2xl mb-3 font-bold">{estate_title}</h3>
          <h3>
            <span className="font-bold">Segment Name : </span>
            {segment_name}
          </h3>
          <div className="mt-3 mb-3">
            <h3 className="font-bold">Facilities :</h3>
            <div className="font-medium text-[#565656]">
              <ol className="list-decimal ml-5">
                {facilities.map((item, index) => (
                  <li key={index}>{item},</li>
                ))}
              </ol>
            </div>
          </div>
          <div className="space-y-3 items-center">
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
        <Link to={`/details/${id}`}>
          <button className="w-full btn btn-sm h-10 mt-4 border-[2px] border-cmnBG bg-transparent rounded-[5px] text-cmnBG">
            View Property
          </button>
        </Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Card;
