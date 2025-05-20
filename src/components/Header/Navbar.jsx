import React, { useContext, useState } from "react";
import Button from "../Button/Button";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Button2 from "../Button/Button2";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useContext(AuthContext);
  console.log(user);
  
console.log(user);

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
            <div className="ml-8">
            {
              user ? <Button2></Button2>: <Button/>
            }
            </div>
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
          <nav className="lg:hidden pb-4">
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

            <Link to={"/register"} className="mt-4">
              <Button className="w-full" />
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
