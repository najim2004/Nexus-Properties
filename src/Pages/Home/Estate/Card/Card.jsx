import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import { BiArea } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
const Card = ({ item }) => {
  const isLargeScreen = useMediaQuery({ minWidth: 768 });
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
      data-aos-delay={isLargeScreen != false ? 100 * id : 0}
    >
      <div className="p-2 shadow-lg border-[1px] h-full flex flex-col border-gray-200  rounded-lg">
        <div className="flex-grow h-full">
          <div className="w-full relative h-[250px] rounded-xl bg-gray-300 mb-4">
            <div className="absolute inset-0">
              <div className="inset-0 relative h-full flex items-end">
                <h3 className="absolute right-2 top-2 bg-[#00000048] p-1 rounded-lg font-semibold text-white">
                  {status}
                </h3>
                <div className="flex bg-[#00000060] justify-between w-full p-3 rounded-b-xl font-semibold text-white">
                  <h3 className="">{price}</h3>
                  <h3 className="flex gap-1 items-center">
                    <BiArea /> {area}
                  </h3>
                </div>
              </div>
            </div>
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
          <p className="flex items-center font-medium mt-4 text-[#565656]">
            <IoLocationOutline className="size-6" /> {location}
          </p>
        </div>
        <Link to={`/details/${id}`} state={estate_title}>
          <button className="w-full btn btn-sm h-10 mt-4 border-[2px] bg-cmnBG  rounded-[5px] text-white">
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
