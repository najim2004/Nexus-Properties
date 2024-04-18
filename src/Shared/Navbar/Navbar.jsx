import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import userImg from "../../assets/user.png";

const Navbar = () => {
  const { user, logOutUser, sweetAlert, loading } = useContext(AuthContext);

  const menu = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/bookmark"}>Bookmark</NavLink>
      </li>
      <li>
        <NavLink to={"/contact-us"}>Contact us</NavLink>
      </li>
      <li>
        <NavLink to={"/update-profile"}>Update Profile</NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOutUser()
      .then(() => {})
      .catch(() => {
        sweetAlert("Oops!", "warning", "Something went wrong", true, false);
      });
  };
  // scroll check
  const [bgColor, setBgColor] = useState({});
  const handleScroll = () => {
    if (window.scrollY > 30) {
      setBgColor({ backgroundColor: "#eaeaeadc", backdropFilter: "blur(8px)" });
    } else {
      setBgColor("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="sticky top-0 z-50" style={{ ...bgColor }}>
      <div className="max-w-[1300px] navbar mx-auto">
        <div className="navbar-start">
          <Link to={"/"} className="text-xl font-bold md:text-2xl lg:text-3xl">
            Nexus <span className="text-cmnBG">Properties</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu gap-10 n-menu menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end">
          {loading ? (
            <span className="loading text-cmnBG loading-ring loading-lg"></span>
          ) : (
            <>
              {user ? (
                <div className="flex z-20 gap-3 items-center">
                  <div
                    data-tip={user?.displayName.toUpperCase()}
                    className="tooltip tooltip-left dropdown dropdown-end"
                  >
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 bg-gray-300 rounded-full">
                        <img
                          alt="Tailwind CSS Navbar component"
                          src={user?.photoURL ? user.photoURL : userImg}
                        />
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <NavLink to={"/update-profile"}>Update Profile</NavLink>
                      </li>
                      {user && (
                        <li onClick={handleLogOut}>
                          <a>Logout</a>
                        </li>
                      )}
                    </ul>
                  </div>
                  <button
                    onClick={handleLogOut}
                    className="hidden lg:flex text-sm font-semibold btn-sm btn text-cmnBG bg-transparent border-[2px] border-cmnBG rounded-[5px]"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link to={"/login"}>
                  <button className="btn text-cmnBG bg-transparent border-[2px] border-cmnBG rounded-[5px]">
                    Login
                  </button>
                </Link>
              )}
            </>
          )}
        </div>
        <div className="dropdown  !z-20">
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
            {user ? (
              <li onClick={handleLogOut}>
                <a>Logout</a>
              </li>
            ) : (
              <>
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
                <li>
                  <Link to={"/register"}>Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
