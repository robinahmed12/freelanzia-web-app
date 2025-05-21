import React, { useContext, useState } from "react";
import Button from "../Button/Button";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Button2 from "../Button/Button2";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const { user } = useContext(AuthContext);
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center p-2 text-2xl font-bold text-gray-800 hover:text-orange-600 transition-colors"
          >
            Freelanzia
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "text-white bg-orange-600"
                        : "text-gray-800 hover:text-orange-600 hover:bg-orange-50"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/add-tasks"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "text-white bg-orange-600"
                        : "text-gray-800 hover:text-orange-600 hover:bg-orange-50"
                    }`
                  }
                >
                  Add Tasks
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/browse-tasks"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "text-white bg-orange-600"
                        : "text-gray-800 hover:text-orange-600 hover:bg-orange-50"
                    }`
                  }
                >
                  Browse Tasks
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-posted-tasks"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "text-white bg-orange-600"
                        : "text-gray-800 hover:text-orange-600 hover:bg-orange-50"
                    }`
                  }
                >
                  My Posted Tasks
                </NavLink>
              </li>
            </ul>

            {/* User Profile Section */}
            {user ? (
              <div className="relative">
                <button
                  onClick={toggleProfileDropdown}
                  className="flex items-center gap-2 focus:outline-none"
                >
                  <img
                    src={user.photoURL || "https://via.placeholder.com/40"}
                    alt="Profile"
                    className="h-10 w-10 rounded-full object-cover border-2 border-orange-500"
                  />
                  <svg
                    className={`w-4 h-4 text-gray-600 transition-transform ${
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
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <div className="px-4 py-2 border-b border-gray-200">
                      <p className="text-sm font-medium text-gray-800">
                        {user.displayName || "User"}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {user.email}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setIsProfileDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    >
                      <Button2 />
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex gap-4">
                <NavLink
                  to="/login"
                  className="px-4 py-2 text-gray-800 rounded-md hover:text-orange-600 hover:bg-orange-50 transition-colors text-sm font-medium"
                >
                  <Button />
                </NavLink>
              </div>
            )}
          </nav>

         {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-md text-gray-800 hover:text-orange-600 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
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

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white px-4 pb-4 shadow-md">
          <ul className="flex flex-col space-y-2">
            <li>
              <NavLink
                to="/"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? "text-white bg-orange-600"
                      : "text-gray-800 hover:text-orange-600 hover:bg-orange-50"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-tasks"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? "text-white bg-orange-600"
                      : "text-gray-800 hover:text-orange-600 hover:bg-orange-50"
                  }`
                }
              >
                Add Tasks
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/browse-tasks"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? "text-white bg-orange-600"
                      : "text-gray-800 hover:text-orange-600 hover:bg-orange-50"
                  }`
                }
              >
                Browse Tasks
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-posted-tasks"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? "text-white bg-orange-600"
                      : "text-gray-800 hover:text-orange-600 hover:bg-orange-50"
                  }`
                }
              >
                My Posted Tasks
              </NavLink>
            </li>
          </ul>

          {/* Mobile User Profile Section */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            {user ? (
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <button
                    onClick={toggleProfileDropdown}
                    className="flex items-center gap-2 focus:outline-none"
                  >
                    <img
                      src={user.photoURL || "https://via.placeholder.com/40"}
                      alt="Profile"
                      className="h-10 w-10 rounded-full object-cover border-2 border-orange-500"
                    />
                    <div>
                      <p className="text-gray-800 font-medium text-left">
                        {user.displayName || "User"}
                      </p>
                      <p className="text-gray-500 text-sm text-left">
                        {user.email}
                      </p>
                    </div>
                    <svg
                      className={`w-4 h-4 text-gray-600 transition-transform ${
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
                      className="block w-full text-left px-4 py-2 text-base text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md"
                    >
                      <Button2/>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-2 mt-4">
                <NavLink
                  to="/login"
                  onClick={toggleMenu}
                  className="block px-4 py-2 text-center text-gray-800 rounded-md hover:text-orange-600 hover:bg-orange-50 transition-colors text-base font-medium"
                >
                  <Button/>
                </NavLink>
                <NavLink
                  to="/register"
                  onClick={toggleMenu}
                  className="block px-4 py-2 text-center bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors text-base font-medium"
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
