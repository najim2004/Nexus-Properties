import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { getStoredData, removeBookmarked } from "../../Utilities/LocalStorage";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Bookmark = () => {
  const { data } = useContext(AuthContext);
  const [bookmarks, setBookmarks] = useState([]);
  const localSData = getStoredData();

  useEffect(() => {
    const localSData = getStoredData();
    setBookmarks(data.filter((item) => localSData.includes(item.id)));
  }, [data, localSData]);

  const handleRemove = (id) => {
    removeBookmarked(parseInt(id));
  };
  return (
    <div className="">
      <h3 className="text-3xl mt-10 text-center font-bold">Your Bookmarked</h3>
      <div className="max-w-[800px] grid grid-cols-1 gap-6 rounded-xl border-[1px] min-h-[140px] border-cmnBG p-5 mx-auto mt-5">
        {bookmarks.map((bookmark) => (
          <div
            key={bookmark?.id}
            className="bg-gray-100 relative flex justify-between items-center p-4 rounded-lg"
          >
            <div className="">
              <h3 className="text-2xl font-bold">{bookmark?.estate_title}</h3>
              <p className="">
                <span className="text-xl font-semibold">Price : </span>{" "}
                {bookmark?.price}
              </p>
              <p className="">
                <span className="text-lg font-medium">Status : </span>{" "}
                {bookmark?.status}
              </p>
            </div>
            <Link to={`/details/${bookmark?.id}`}>
              <button className="text-cmnBG bg-transparent btn rounded-[5px] border-[2px] border-cmnBG">
                See Details...
              </button>
            </Link>
            <span
              onClick={() => handleRemove(bookmark?.id)}
              data-tip="Remove"
              className="absolute tooltip tooltip-top top-1 right-1 text-red-500 btn btn-sm !p-0 !border-none !shadow-none !bg-transparent"
            >
              <AiOutlineCloseCircle className="text-2xl " />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookmark;
