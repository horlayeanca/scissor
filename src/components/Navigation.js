import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
// import { Link } from "react-scroll";

function Navigation() {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const { currentUser, logOut } = UserAuth();

  const handleLogOut = async (e) => {
    e.preventDefault();
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const menuLinks = [
    {
      id: 1,
      link: "Urls",
    },
    {
      id: 2,
      link: "Features",
    },
    {
      id: 3,
      link: "Pricing",
    },
    {
      id: 4,
      link: "Analytics",
      to: "dashboard",
    },
    {
      id: 5,
      link: "FAQs",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-3 bg-yellow-50 bg-blend-lighten fixed">
      <Link to="/" className="">
        <h1 className="text-2xl flex justify-between items-center text-blue-600 font-bold cursor-pointer font-gilroy">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.647 0.439381C23.0612 -0.14646 22.1031 -0.14646 21.5173 0.439381L18.4642 3.49483C17.2133 2.66275 15.7779 2.24971 14.3364 2.24971C12.4174 2.24971 10.4736 2.98219 9.03361 4.44691L4.53359 8.94716C1.96726 11.5106 1.65093 15.4747 3.57862 18.384L0.525808 21.4394C-0.0600349 22.0253 -0.0600349 22.9745 0.525808 23.5606C0.818849 23.8536 1.20261 24 1.58637 24C1.97038 24 2.3539 23.8536 2.64694 23.5606L5.69975 20.5051C6.95088 21.3372 8.39497 21.7502 9.83641 21.7502C11.7305 21.7502 13.6743 21.0178 15.1392 19.553L19.6306 15.053C22.197 12.4893 22.5133 8.52524 20.5853 5.61595L23.647 2.56051C24.2329 1.97466 24.2329 1.02522 23.647 0.439381ZM18.8276 9.74996C18.8276 10.9512 18.3589 12.0821 17.5095 12.9317L13.0181 17.4317C12.1656 18.2813 11.0129 18.75 9.83641 18.75C9.15673 18.75 8.50633 18.5832 7.90872 18.2988L10.1223 16.0605C10.7081 15.4747 10.7081 14.5255 10.1223 13.9394C9.56113 13.3536 8.61193 13.3536 8.02609 13.9394L5.78783 16.1777C5.50079 15.5829 5.33663 14.9325 5.33663 14.25C5.33663 13.0488 5.80535 11.9179 6.65496 11.0683L11.13 6.56828C11.9796 5.71867 13.1352 5.24995 14.3364 5.24995C15.0161 5.24995 15.6634 5.41675 16.2612 5.70115L13.9791 7.9862C13.3932 8.57204 13.3932 9.52124 13.9791 10.1073C14.2721 10.4004 14.6556 10.5468 15.0396 10.5468C15.4205 10.5468 15.8043 10.4004 16.0971 10.1073L18.3766 7.82228C18.6634 8.41676 18.8276 9.0674 18.8276 9.74996Z"
              fill="#0065FE"
            />
          </svg>{" "}
          | scissor
        </h1>
      </Link>
      <div className="hidden md:flex justify-between">
        {menuLinks.map(({ id, link, to }) => (
          <li
            key={id}
            className={`px-4 list-none capitalize font-gilroy-light font-light text-lg text-black hover:scale-100 duration-300 hover:text-blue-600 cursor-pointer`}
          >
            <Link to={to}>{link}</Link>
          </li>
        ))}
      </div>
      <div className="md:flex justify-center items-center gap-3 hidden">
        {currentUser?.displayName ? (
          <button
            onClick={handleLogOut}
            id="logout"
            className="text-blue-600 text-base font-medium cursor-pointer leading-5 w-20 hover:scale-100 duration-300 hover:text-blue-300"
          >
            Log out
          </button>
        ) : (
          <Link
            to="/login"
            className="text-blue-600 text-base font-medium cursor-pointer leading-5 w-20 hover:scale-100 duration-300 hover:text-blue-300"
          >
            Log in
          </Link>
        )}
        <Link
          to="/"
          className="flex flex-row justify-center cursor-pointer items-center py-3 px-6 bg-blue-600 rounded-full text-white w-36 h-11 hover:scale-100 hover:bg-gradient-to-br from-blue-600 to-green-400 duration-200"
        >
          Try for free
        </Link>
      </div>
      <div onClick={toggleMenu} className="pr-4 z-10 text-blue-600 md:hidden">
        {showMenu ? (
          <FontAwesomeIcon icon={faTimes} size="xl" className="px-1" />
        ) : (
          <FontAwesomeIcon icon={faBars} size="xl" className="px-1" />
        )}
      </div>

      {showMenu && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-inherit text-black">
          {menuLinks.map(({ id, link }) => (
            <li
              key={id}
              onClick={toggleMenu}
              className="px-4 cursor-pointer list-none capitalize font-medium py-5 text-xl text-black"
            >
              <Link onClick={() => setShowMenu(!showMenu)} to={link}>
                {link}
              </Link>
            </li>
          ))}
          <div className="flex flex-col justify-center items-center gap-3 mt-4 w-full">
            {showMenu && (
              <Link
                to="/login"
                className="text-blue-600 text-base font-bold leading-5 w-20 hover:scale-100 duration-300 hover:text-red-400"
              >
                Log in
              </Link>
            )}
            {showMenu && (
              <button className="flex flex-row justify-center items-center py-3 px-6 bg-blue-600 rounded-full text-white w-36 h-11 hover:scale-100 duration-300 hover:text-blue-600 hover:bg-red-400">
                Try for free
              </button>
            )}
          </div>
        </ul>
      )}
    </div>
  );
}

export default Navigation;
