import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { IoArrowBack } from "react-icons/io5";
import { BsBookmarks } from "react-icons/bs";
import { getStoredData, saveBookmarked } from "../../Utilities/LocalStorage";
const DetailsPage = () => {
  const { id } = useParams();
  const { data, sweetAlert } = useContext(AuthContext);
  const [findData, setFindData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    setFindData(data?.find((item) => item.id == id));
    setFilterData(data?.filter((item) => item.id != id));
  }, [data, id]);

  const handleBookmark = () => {
    if (!getStoredData().includes(parseInt(findData?.id))) {
      saveBookmarked(parseInt(findData?.id));
      sweetAlert("Successfully Bookmarked!", "success", false, false, 1500);
    } else {
      sweetAlert("Already Bookmarked!", "warning", false, true, false);
    }
  };
  return (
    <div>
      <div className="max-w-[1300px] grid grid-cols-1 gap-6 lg:grid-cols-6 mx-auto">
        <div className="lg:col-span-4 p-5 h-fit border-[1px] m-3 border-gray-300 rounded-xl">
          <div className="h-[200px] md:h-[300px] lg:h-[400px] w-full rounded-lg bg-gray-200">
            <img
              className="w-full h-full rounded-lg"
              src={findData?.image}
              alt=""
            />
          </div>
          <h3 className="text-3xl my-5 font-bold">{findData?.estate_title}</h3>
          <h3>
            <span className="font-bold">Segment Name : </span>
            {findData?.segment_name}
          </h3>
          <div className="">
            <h3>
              <span className="font-bold">Status: </span>
              {findData?.status}
            </h3>
            <h3 className="">
              <span className="font-bold">Price: </span>
              {findData?.price}
            </h3>
            <h3>
              <span className="font-bold">Area: </span>
              {findData?.area}
            </h3>
          </div>
          <div className="mt-2 gap-5 flex">
            <h3 className="font-bold">Facilities :</h3>

            <ol className="list-decimal lg:flex gap-5 flex-wrap font-medium  text-[#565656]  *:mr-3">
              {findData?.facilities?.map((item, index) => (
                <li key={index}>{item},</li>
              ))}
            </ol>
          </div>
          <p className="flex mt-2 items-center font-medium text-[#565656]">
            <IoLocationOutline className="size-6 text-black" />{" "}
            {findData?.location}
          </p>
          <div className="mt-6 text-justify">
            <span className="font-bold">Description : </span>
            {findData?.description}
          </div>
          <div className="flex flex-wrap  justify-center md:justify-between  mt-10 lg:justify-between items-center">
            <Link to={-1}>
              <button className="btn bg-cmnBG  flex items-center text-white">
                <IoArrowBack className="font-bold text-xl" /> Previous page
              </button>
            </Link>
            <p className="flex gap-5 items-center">
              <span className="font-semibold">Bookmark This Property</span>
              <button
                onClick={handleBookmark}
                className="btn bg-transparent border-none hover:bg-transparent !shadow-none !p-0"
              >
                <BsBookmarks className="text-3xl" />
              </button>
            </p>
          </div>
        </div>
        <div className="lg:col-span-2 p-8 grid grid-cols-1 gap-5 border-[1px] border-gray-300 rounded-xl">
          <h3 className="text-center text-xl font-semibold">Choose Other</h3>
          {filterData?.slice(0, 4).map((item, index) => (
            <Link
              key={index}
              to={`../details/${item?.id}`}
              state={item?.estate_title}
            >
              <div className="">
                <div
                  className="lg:w-full bg-gray-200 group relative bg-cover bg-center md:h-[300px] lg:h-[200px] min-h-[200px] rounded-lg"
                  style={{ backgroundImage: `url(${item?.image})` }}
                >
                  <div
                    className="inset-0 lg:hidden flex lg:group-hover:flex flex-col justify-end rounded-lg p-5 absolute"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(0, 0, 0, 0.70) 40%, rgba(0, 0, 0, 0.0) 100%)",
                    }}
                  >
                    <h3 className="text-white font-bold">
                      {item?.estate_title}
                    </h3>
                    <div className="flex justify-between">
                      <h3 className="text-white font-semibold">
                        {item?.price}
                      </h3>
                      <p className="text-white font-semibold">
                        For {item?.status}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          <Link to={"/"}>
            <button className="btn w-full bg-transparent border-[2px] border-cmnBG text-cmnBG rounded-[5px]">
              Go Home for more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
