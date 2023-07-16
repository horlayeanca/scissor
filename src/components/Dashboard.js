import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const menuLinks = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Create URL",
      link: "/create",
    },
    {
      id: 3,
      name: "Analytics",
      link: "/analytics",
    },
    {
      id: 4,
      name: "Delete URL",
      link: "/delete",
    },
    {
      id: 5,
      name: "Settings",
      link: "/settings",
    },
    {
      id: 6,
      name: "Logout",
      link: "/logout",
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
                  <a href={link}>{name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-2 border-red-600 flex w-full h-16 justify-between items-center">
          <h1 className="text-xl font-gilroy-light font-semibold pt-5 ml-5">
            Scissor
          </h1>
          <h1 className="">USER</h1>
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
          <ul className="flex flex-col pt-20 absolute top-0 left-0 w-2/3 h-screen bg-blue-600 text-black">
            {menuLinks.map(({ id, link, name }) => (
              <li
                key={id}
                onClick={toggleMenu}
                className="px-4 cursor-pointer list-none capitalize font-medium py-5 text-xl text-white hover:bg-blue-500 rounded-lg"
              >
                <a href={link}>{name}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
