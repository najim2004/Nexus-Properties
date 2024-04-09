import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className=" h-screen grid place-items-center">
        <span className="loading size-[80px] text-green-500 loading-infinity loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={location.pathname}></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
