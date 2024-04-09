import { Link } from "react-router-dom";
import img404 from "../../assets/404.gif";
const Page404 = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h3 className="text-8xl font-semibold text-gray-500">404</h3>
      <p>Page Not Found!</p>
      <div className="max-w-[500px]">
      <img className="w-full h-full" src={img404} alt="" />
      </div>
      <Link to={-1} className="btn bg-gray-300 hover:!bg-[#EFBC9B] text-medium !border-none">Go Back</Link>
    </div>
  );
};

export default Page404;
