import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-charcoal mt-20">
      {/* Main Footer Content */}
      <div className=" mx-4 px-4 py-8">
        <div className="flex flex-col lg:flex-row flex-wrap  justify-between border-b border-gray-200 pb-8 mb-8 gap-8">
          {/* Logo and Social Media */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              {/* Replace with your actual logo */}
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                FM
              </div>
              <span className="text-charcoal font-semibold text-lg">
                FreelanceMarket
              </span>
            </div>
            <address className="not-italic text-charcoal text-sm">
              123 Freelance St.
              <br />
              Remote City, WC 45678
              <br />
              Email:{" "}
              <a
                href="mailto:support@freelancemarket.com"
                className="text-orange-600 hover:underline"
              >
                support@freelancemarket.com
              </a>
              <br />
              Phone:{" "}
              <a
                href="tel:+1234567890"
                className="text-orange-600 hover:underline"
              >
                +1 (234) 567-890
              </a>
            </address>
          </div>

          {/* Company Links */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/about"
                  className="text-gray-600 hover:text-orange-600 transition-colors duration-200"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/leadership"
                  className="text-gray-600 hover:text-orange-600 transition-colors duration-200"
                >
                  Leadership
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/how-it-works"
                  className="text-gray-600 hover:text-orange-600 transition-colors duration-200"
                >
                  How it Works
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/careers"
                  className="text-gray-600 hover:text-orange-600 transition-colors duration-200"
                >
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/security"
                  className="text-gray-600 hover:text-orange-600 transition-colors duration-200"
                >
                  Security
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Work Inquiries and Careers */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Work inquiries
            </h3>
            <p className="mb-2 text-gray-600">Interested in working with us?</p>
            <p className="mb-6">
              <a
                href="mailto:web-freelanzia@gmail.com"
                className="text-orange-600 hover:underline"
              >
                web-freelanzia@gmail.com
              </a>
            </p>

            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Careers
            </h3>
            <p className="mb-2 text-gray-600">Looking for a job opportunity?</p>
            <p>
              <NavLink
                to="/careers"
                className="text-orange-600 hover:underline"
              >
                See open positions
              </NavLink>
            </p>
          </div>

          <div>
            <h1 className="text-lg font-semibold mb-4 text-gray-800">Follow us on</h1>
            <div className="flex flex-col justify-center gap-7 space-x-6 mt-5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-charcoal hover:text-orange-600 transition-colors"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12a10 10 0 1 0-11.5 9.8v-6.9h-2.8v-2.9h2.8V9.4c0-2.8 1.7-4.3 4.2-4.3 1.2 0 2.4.2 2.4.2v2.6h-1.3c-1.3 0-1.7.8-1.7 1.7v2h2.9l-.5 2.9h-2.4v6.9A10 10 0 0 0 22 12" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-charcoal hover:text-orange-600 transition-colors"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.38 8.61 8.61 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.3 3.9A12.15 12.15 0 0 1 3 4.87a4.27 4.27 0 0 0 1.33 5.7 4.24 4.24 0 0 1-1.94-.53v.05a4.28 4.28 0 0 0 3.44 4.2 4.28 4.28 0 0 1-1.93.07 4.29 4.29 0 0 0 4 3 8.59 8.59 0 0 1-5.3 1.83A8.73 8.73 0 0 1 2 18.29a12.15 12.15 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.19 0-.19 0-.38-.01-.57A8.72 8.72 0 0 0 22.46 6z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-charcoal hover:text-orange-600 transition-colors"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM8.34 18H5.67v-7.34h2.67zm-1.33-8.38a1.53 1.53 0 1 1 1.52-1.52 1.52 1.52 0 0 1-1.52 1.52zm11 8.38h-2.67v-3.68c0-.88-.31-1.48-1.08-1.48a1.17 1.17 0 0 0-1.1.75 1.49 1.49 0 0 0-.07.53v3.88H9.3v-7.34h2.56v1h.04a2.82 2.82 0 0 1 2.54-1.4c1.86 0 3.26 1.22 3.26 3.85z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <ul className="flex flex-col gap-7 justify-center items-center">
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
          </div>
          {/* Newsletter Signup */}
          <div className="w-full md:w-1/2 lg:w-1/4">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Sign up for the newsletter
            </h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Email address..."
                className="p-2 rounded border border-gray-300 flex-grow focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors duration-200">
                Sign Up
              </button>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  className="mt-1 mr-2 rounded text-orange-600 focus:ring-orange-500"
                />
                <span>
                  I'm okay with getting emails and having that activity tracked
                  to improve my experience.
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <div className="mb-4 md:mb-0">
            Copyright &copy; 2025 Freelanzia. All Rights Reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <NavLink
              to="/privacy"
              className="hover:text-orange-600 transition-colors duration-200"
            >
              Privacy Policy
            </NavLink>
            <NavLink
              to="/terms"
              className="hover:text-orange-600 transition-colors duration-200"
            >
              Terms and Conditions
            </NavLink>
            <NavLink
              to="/security"
              className="hover:text-orange-600 transition-colors duration-200"
            >
              Security
            </NavLink>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-orange-600 transition-colors duration-200 flex items-center"
              aria-label="Scroll to top"
            >
              <FaArrowUp className="inline mr-1" />
              Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
