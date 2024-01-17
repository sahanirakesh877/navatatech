import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";

import { close, toggle } from "../redux/features/hamSlice";

const Header = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => {
    return state.hamburger.value;
  });
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const handleLinkClick = () => {
    setShowDropdown(false);
  };

  // Scroll to the top when the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setShowDropdown(false);
  }, [location.pathname]);
  const handleMobileDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <nav className="text-primary bg-white body-font  py-1 sticky top-0 w-full  z-[99] shadow-xl">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          {/* logo and hamburger menu */}
          <div className="flex items-center">
            <Link
              className="flex  font-medium items-center text-gray-900 mb-4 md:mb-0"
              to="/"
            >
              <img
                src="/navata-logo.png"
                className="w-16 h-16 text-white  rounded-full"
                viewbox="0 0 24 24"
                alt="Logo"
              />
              NAVATA <span className="text-2xl text-primary ">TECH</span>
            </Link>
          </div>

          <div className="block lg:hidden">
            <button
              onClick={() => {
                dispatch(toggle());
              }}
              className="text-red-900 focus:outline-none pe-3"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                ></path>
              </svg>
            </button>
          </div>

          {/* nav-items  mid  */}

          <div className="hidden lg:flex flex-grow justify-center font-medium  ">
            <Link
              to="/"
              activeClassName="active"
              className="mr-5 hover:text-third"
            >
              Home
            </Link>
            <Link
              to="/about"
              activeClassName="active"
              className="mr-5 hover:text-third"
            >
              About
            </Link>
            <Link
              to="/services"
              activeClassName="active"
              className="mr-5 hover:text-third"
            >
              Services
            </Link>
            <Link
              to="/teams"
              activeClassName="active"
              className="mr-5 hover:text-third"
            >
              Teams
            </Link>
            <Link to="/contact" className="mr-5 hover:text-third">
              Contact
            </Link>

            <div
              className={`relative group `}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/pricing"
                activeClassName="active"
                className="mr-5 py-6 hover:text-third"
              >
                Pricing
                <RiArrowDropDownLine className="inline-block font-bold text-2xl" />
              </Link>
              {showDropdown && (
                <div
                  className="absolute z-10  bg-primary text-white mt-6   flex "
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Dropdown content */}
                  <Link
                    to="/pricing/web"
                    className="inline-block border-r-2 border-sec   px-5 py-2 hover:text-third"
                    onClick={handleLinkClick}
                  >
                    Web Development
                  </Link>
                  <Link
                    to="/pricing/digmarketing"
                    className="inline-block px-5 py-2 border-r-2 border-sec  hover:text-third"
                    onClick={handleLinkClick}
                  >
                    Digital Marketing
                  </Link>
                  <Link
                    to="/pricing/graphics"
                    className="inline-block px-5 py-2 hover:text-third"
                    onClick={handleLinkClick}
                  >
                    onClick={() => {}}
                    Graphics Design
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/jobs"
              activeClassName="active"
              className="mr-5 hover:text-third"
            >
              Careers & Jobs
            </Link>
          </div>

          {/* nav-items  right  */}

          <div className="hidden lg:flex items-center ">
            <Link to="/inquiry">
              <button
                type="button"
                className="text-white bg-sec hover:bg-primary  font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
              >
                Inquiry
              </button>
            </Link>
          </div>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } bg-primary   text-white lg:hidden py-5 mt-5 text-center font-medium`}
        >
          {/* Mobile menu content */}
          <Link
            to="/"
            className="block text-white px-4 py-2 border-b border-sec"
            onClick={() => {
              dispatch(close());
            }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-white px-4 py-2 border-b border-sec"
            onClick={() => {
              dispatch(close());
            }}
          >
            About
          </Link>
          <Link
            to="/services"
            className="block text-white px-4 py-2 border-b border-sec"
            onClick={() => {
              dispatch(close());
            }}
          >
            Services
          </Link>
          <Link
            to="/teams"
            className="block text-white px-4 py-2 border-b border-sec"
            onClick={() => {
              dispatch(close());
            }}
          >
            Teams
          </Link>
          <Link
            to="/contact"
            className="block text-white px-4 py-2 border-b border-sec"
            onClick={() => {
              dispatch(close());
            }}
          >
            Contact
          </Link>

          <div className={`relative group`} onClick={handleMobileDropdown}>
            <Link
              to="/pricing"
              className="block text-white px-4 py-2 border-b border-sec"
            >
              Pricing <RiArrowDropDownLine className="inline-block" />
            </Link>
            {showDropdown && (
              <div className="flex flex-col items-center border-sec py-5 bg-sec ">
                <Link
                  to="/pricing/web"
                  className="block text-white px-4 py-2 border-b border-white"
                  onClick={() => {
                    dispatch(close());
                    handleLinkClick();
                  }}
                >
                  Web Development
                </Link>
                <Link
                  to="/pricing/digmarketing"
                  className="block text-white px-4 py-2 border-b border-white"
                  onClick={() => {
                    dispatch(close());
                    handleLinkClick();
                  }}
                >
                  Digital Marketing
                </Link>
                <Link
                  to="/pricing/graphics"
                  className="block text-white px-4 py-2 border-b "
                  onClick={() => {
                    dispatch(close());
                    handleLinkClick();
                  }}
                >
                  Graphics Design
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/jobs"
            className="block text-white px-4 py-2 border-b border-t border-sec"
            onClick={() => {
              dispatch(close());
            }}
          >
            Careers & Jobs
          </Link>

          <div className="flex justify-center mt-4 gap-9">
            <Link to="/inquiry">
              <button
                type="button"
                className="text-white bg-sec hover:bg-primary  font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
                onClick={() => {
                  dispatch(close());
                }}
              >
                Inquiry
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
