import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link
      to="/login"
      className="
        /* Base styles */
        relative inline-flex items-center justify-center 
        px-6 py-3 md:px-8 md:py-3.5 lg:px-10 lg:py-4
        overflow-hidden font-medium transition-all 
        rounded-lg group
        
        /* Light mode styles */
        bg-white text-orange-600 border-2 border-orange-500
        hover:text-white
        
        /* Dark mode styles */
        dark:bg-gray-900 dark:text-orange-400 dark:border-orange-600
        dark:hover:text-orange-100
        
        /* Responsive sizes */
        text-sm sm:text-base md:text-lg
      "
    >
      {/* Button text */}
      <span className="relative z-10">Log in</span>

      {/* Animated elements */}
      <span
        className="
        absolute inset-0 
        bg-orange-500 
        transition-all duration-300 ease-out 
        transform -translate-x-full 
        group-hover:translate-x-0
        dark:bg-orange-700
      "
      ></span>

      <span
        className="
        absolute inset-0 
        bg-gradient-to-r from-orange-500 to-orange-600
        opacity-0 
        transition-all duration-300 ease-out 
        transform translate-x-full 
        group-hover:translate-x-0 group-hover:opacity-100
        dark:from-orange-700 dark:to-orange-800
      "
      ></span>
    </Link>
  );
};

export default Button;
