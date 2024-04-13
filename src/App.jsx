import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";
import Footer from "./Shared/Footer/Footer";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function App() {
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
