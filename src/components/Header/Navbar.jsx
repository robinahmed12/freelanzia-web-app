import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Button from "../Button/Button";
import Button2 from "../Button/Button2";
import log from "../../assets/logo.png";
import logDark from "../../assets/logo-dark.png"; // Optional dark mode logo
import DarkModeBtn from "../DarkModeBtn";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const { user } = useContext(AuthContext);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? "text-white bg-orange-600 dark:bg-orange-700"
        : "text-gray-800 dark:text-orange-100 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-700"
    }`;

  const mobileNavLinkClasses = ({ isActive }) =>
    `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
      isActive
        ? "text-white bg-orange-600 dark:bg-orange-700"
        : "text-gray-800 dark:text-orange-100 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-700"
    }`;

  return (
    <header className="mt-5 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex justify-center items-center  text-2xl font-bold hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
          >
            <img
              className="w-[300px] hidden dark:block"
              src={logDark || log}
              alt="Logo Dark"
            />
            <img className="w-[300px] dark:hidden" src={log} alt="Logo" />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <ul className="flex items-center space-x-2">
              <li>
                <NavLink to="/" className={navLinkClasses}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/add-tasks" className={navLinkClasses}>
                  Add Tasks
                </NavLink>
              </li>
              <li>
                <NavLink to="/browse-tasks" className={navLinkClasses}>
                  Browse Tasks
                </NavLink>
              </li>
              <li>
                <NavLink to="/my-posted-tasks" className={navLinkClasses}>
                  My Posted Tasks
                </NavLink>
              </li>
            </ul>

            <div className="flex items-center space-x-4 pl-4">
              <DarkModeBtn className="ml-2" />

              {/* User Profile Section */}
              {user ? (
                <div className="relative">
                  <button
                    onClick={toggleProfileDropdown}
                    className="flex items-center gap-2 focus:outline-none group"
                  >
                    <img
                      src={user.photoURL || "https://via.placeholder.com/40"}
                      alt="Profile"
                      className="h-10 w-10 rounded-full object-cover border-2 border-orange-500 dark:border-orange-600 group-hover:border-orange-600 dark:group-hover:border-orange-500 transition-colors"
                    />
                    <svg
                      className={`w-4 h-4 text-gray-600 dark:text-orange-200 transition-transform ${
                        isProfileDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Profile Dropdown */}
                  {isProfileDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 border border-gray-200 dark:border-gray-700">
                      <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                        <p className="text-sm font-medium text-gray-800 dark:text-orange-100">
                          {user.displayName || "User"}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-orange-200 truncate">
                          {user.email}
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          setIsProfileDropdownOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-orange-200 hover:bg-orange-50 dark:hover:bg-gray-700 hover:text-orange-600 dark:hover:text-orange-400"
                      >
                        <Button2 />
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex gap-3">
                  <NavLink
                    to="/login"
                    className="px-4 py-2 text-gray-800 dark:text-orange-100 rounded-md hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
                  >
                    <Button />
                  </NavLink>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-4 mr-8">
            <DarkModeBtn className="lg:hidden" />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-800 dark:text-orange-200 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-800 px-4 pb-4 shadow-md rounded-lg mt-2 border border-gray-200 dark:border-gray-700">
            <ul className="flex flex-col space-y-2 py-2">
              <li>
                <NavLink
                  to="/"
                  onClick={toggleMenu}
                  className={mobileNavLinkClasses}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/add-tasks"
                  onClick={toggleMenu}
                  className={mobileNavLinkClasses}
                >
                  Add Tasks
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/browse-tasks"
                  onClick={toggleMenu}
                  className={mobileNavLinkClasses}
                >
                  Browse Tasks
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-posted-tasks"
                  onClick={toggleMenu}
                  className={mobileNavLinkClasses}
                >
                  My Posted Tasks
                </NavLink>
              </li>
            </ul>

            {/* Mobile User Profile Section */}
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              {user ? (
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <button
                      onClick={toggleProfileDropdown}
                      className="flex items-center gap-2 focus:outline-none w-full"
                    >
                      <img
                        src={user.photoURL || "https://via.placeholder.com/40"}
                        alt="Profile"
                        className="h-10 w-10 rounded-full object-cover border-2 border-orange-500 dark:border-orange-600"
                      />
                      <div className="flex-1 text-left">
                        <p className="text-gray-800 dark:text-orange-100 font-medium">
                          {user.displayName || "User"}
                        </p>
                        <p className="text-gray-500 dark:text-orange-200 text-sm">
                          {user.email}
                        </p>
                      </div>
                      <svg
                        className={`w-4 h-4 text-gray-600 dark:text-orange-200 transition-transform ${
                          isProfileDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Mobile Profile Dropdown */}
                  {isProfileDropdownOpen && (
                    <div className="pl-12">
                      <button
                        onClick={() => {
                          toggleMenu();
                          setIsProfileDropdownOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-base text-gray-700 dark:text-orange-200 hover:bg-orange-50 dark:hover:bg-gray-700 hover:text-orange-600 dark:hover:text-orange-400 rounded-md"
                      >
                        <Button2 />
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex flex-col gap-2 mt-4">
                  <NavLink
                    to="/login"
                    onClick={toggleMenu}
                    className="block px-4 py-2 text-center text-gray-800 dark:text-orange-100 rounded-md hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-700 transition-colors text-base font-medium"
                  >
                    <Button />
                  </NavLink>
                  <NavLink
                    to="/register"
                    onClick={toggleMenu}
                    className="block px-4 py-2 text-center bg-orange-600 hover:bg-orange-700 text-white rounded-md transition-colors text-base font-medium"
                  >
                    Register
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
