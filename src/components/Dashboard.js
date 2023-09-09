import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { AuthContext } from "../context/AuthContext";
import { db } from "./firebase";

function Dashboard() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const currentUser = useContext(AuthContext);
  // console.log(user.email);
  const navigate = useNavigate();

  const { logOut } = UserAuth();
  const handleLogOut = (e) => {
    e.preventDefault();

    logOut();
    navigate("/");
  };

  const menuLinks = [
    {
      id: 1,
      name: "Home",
      link: "/dashboard/urls",
    },
    {
      id: 2,
      name: "Create URL",
      link: "/dashboard/create",
    },
    {
      id: 3,
      name: "Analytics",
      link: "/dashboard/analytics",
    },
    {
      id: 4,
      name: "Delete URL",
      link: "/dashboard/delete",
    },
    {
      id: 5,
      name: "Settings",
      link: "/settings",
    },
  ];
  return (
    <div>
      <div className="w-full flex justify-between">
        <div className="md:hidden"></div>
        <div className="hidden md:inline w-1/4 bg-blue-600 h-screen text-white">
          <h1 className="text-center text-xl font-gilroy-light font-semibold pt-8">
            Scissor
          </h1>

          <div>
            <ul className="pt-20 leading-10 mx-2">
              {menuLinks.map(({ id, name, link }) => (
                <li
                  key={id}
                  className="text-lg leading-10 hover:bg-blue-500 px-5 rounded-lg"
                >
                  <Link to={link}>{name}</Link>
                </li>
              ))}
              <button
                className="text-lg text-left leading-10 hover:bg-blue-500 px-5 rounded-lg w-full"
                onClick={handleLogOut}
              >
                Logout
              </button>
            </ul>
          </div>
        </div>
        <div className="border-2 border-red-600 flex flex-col w-full h-16 item-center">
          <div className="">
            <div className="text-black">
              {currentUser && <h1>welcome {currentUser.displayName}</h1>}
            </div>
          </div>
          <Outlet />
        </div>

        <div
          onClick={toggleMenu}
          className="px-4 z-10 flex items-center text-blue-600 md:hidden"
        >
          {showMenu ? (
            <FontAwesomeIcon icon={faTimes} size="xl" className="px-1" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="xl" className="px-1" />
          )}
        </div>
        {showMenu && (
          <ul className="flex flex-col pt-20 absolute top-0 left-0 w-2/3 h-screen bg-blue-600 text-black ease-in-out duration-500">
            {menuLinks.map(({ id, link, name }) => (
              <li
                key={id}
                onClick={toggleMenu}
                className="px-4 cursor-pointer list-none capitalize font-medium py-5 text-xl text-white hover:bg-blue-500 rounded-lg"
              >
                <Link to={link}>{name}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
