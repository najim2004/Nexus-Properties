import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import Page404 from "../Pages/404/Page404";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import Bookmark from "../Pages/Bookmark/Bookmark";
import ContactUs from "../Pages/ContactUs/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Page404></Page404>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/bookmark",
        element: (
          <PrivateRoute>
            <Bookmark></Bookmark>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <DetailsPage></DetailsPage>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
