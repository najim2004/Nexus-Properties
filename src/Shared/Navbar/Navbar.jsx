import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import userImg from "../../assets/user.png"

const Navbar = () => {
  const { user, logOutUser, sweetAlert } = useContext(AuthContext);

  const menu = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/update-profile"}>Update Profile</NavLink>
      </li>
      <li>
        <NavLink to={"/Contact-us"}>Contact us</NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOutUser()
      .then(() => {})
      .catch(() => {
        sweetAlert("Oops!", "warning", "Something went wrong", true , false);
      });
  };
  return (
    <div className="max-w-[1300px] mx-auto mt-3 md:mt-5 lg:mt-10">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl md:text-2xl lg:text-3xl">
            Home Haven
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL?user.photoURL:userImg}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to={"/profile"} className="justify-between">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to={"/update-profile"}>Update Profile</Link>
                </li>
                {user && (
                  <li onClick={handleLogOut}>
                    <a>Logout</a>
                  </li>
                )}
              </ul>
            </div>
          ) : (
            <Link to={"/login"}>
              <button className="btn">Login</button>
            </Link>
          )}
        </div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm right-0 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
