import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";
import Footer from "./Shared/Footer/Footer";
import { ToastContainer } from "react-toastify";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
function App() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname == "/") {
      document.title = "Home";
    } else {
      document.title = location.pathname.split("/")[1];
    }
    if (location.state != null) {
      document.title = location.state;
    }
  }, [location.pathname]);
  return (
    <div className="">
      <Navbar></Navbar>
      <Outlet />
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
