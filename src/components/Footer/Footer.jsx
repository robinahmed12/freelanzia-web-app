import { Link, NavLink } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/logo-dark.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-charcoal bg-primary text-white mt-28 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-orange-600 opacity-10"></div>
      <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-orange-600 opacity-10"></div>

      {/* Main content */}
      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img className="w-64 h-auto" src={logo} alt="Freelanzia Logo" />
            </div>
            <p className="text-neutral-700 text-sm leading-relaxed">
              Connecting top talent with businesses worldwide. Our platform
              makes freelancing simple, secure, and successful.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-orange-600 transition-all duration-300"
              >
                <FaFacebookF className="text-neutral-950" />
              </a>
              <a
                href="#"
                className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-orange-600 transition-all duration-300"
              >
                <FaLinkedinIn className="text-neutral-950" />
              </a>
              <a
                href="#"
                className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-orange-600 transition-all duration-300"
              >
                <FaYoutube className="text-gray-950" />
              </a>
              <a
                href="#"
                className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-orange-600 transition-all duration-300"
              >
                <FaXTwitter className="text-neutral-950" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 pb-2 border-b border-orange-600 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/"
                  className="text-gray-700 hover:text-orange-600 transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/browse-tasks"
                  className="text-gray-700 hover:text-orange-600 transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                  Browse Tasks
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/add-tasks"
                  className="text-gray-700 hover:text-orange-600 transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                  Post a Task
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-posted-tasks"
                  className="text-gray-700 hover:text-orange-600 transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                  My Tasks
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Company info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 pb-2 border-b border-orange-600 inline-block">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/about"
                  className="text-gray-700 hover:text-orange-600 transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/careers"
                  className="text-gray-700 hover:text-orange-600 transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className="text-gray-700 hover:text-orange-600 transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-gray-700 hover:text-orange-600 transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 pb-2 border-b border-orange-600 inline-block">
              Newsletter
            </h3>
            <p className="text-gray-700 mb-4">
              Subscribe to get updates on new tasks and features.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                Subscribe
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Freelanzia. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-6">
            <NavLink
              to="/privacy"
              className="text-gray-400 hover:text-orange-600 transition-colors text-sm"
            >
              Privacy Policy
            </NavLink>
            <NavLink
              to="/terms"
              className="text-gray-400 hover:text-orange-600 transition-colors text-sm"
            >
              Terms of Service
            </NavLink>
            <NavLink
              to="/cookies"
              className="text-gray-400 hover:text-orange-600 transition-colors text-sm"
            >
              Cookie Policy
            </NavLink>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-400 hover:text-orange-600 transition-colors flex items-center text-sm"
            >
              Back to Top
              <FaArrowUp className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
