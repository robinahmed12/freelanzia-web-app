import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../../context/AuthContext";
import { Bounce, toast } from "react-toastify";

const StyledWrapper = styled.div`
  .btn {
    --color: #00a97f;
    --color2: rgb(10, 25, 30);
    padding: 0.8em 1.75em;
    background-color: transparent;
    border-radius: 6px;
    border: 0.3px solid var(--color);
    transition: 0.5s;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    z-index: 1;
    font-weight: 300;
    font-size: 17px;
    font-family: "Roboto", "Segoe UI", sans-serif;
    text-transform: uppercase;
    color: var(--color);
  }

  .btn::after,
  .btn::before {
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    transform: skew(90deg) translate(-50%, -50%);
    position: absolute;
    inset: 50%;
    left: 25%;
    z-index: -1;
    transition: 0.5s ease-out;
    background-color: var(--color);
  }

  .btn::before {
    top: -50%;
    left: -25%;
    transform: skew(90deg) rotate(180deg) translate(-50%, -50%);
  }

  .btn:hover::before {
    transform: skew(45deg) rotate(180deg) translate(-50%, -50%);
  }

  .btn:hover::after {
    transform: skew(45deg) translate(-50%, -50%);
  }

  .btn:hover {
    color: var(--color2);
  }

  .btn:active {
    filter: brightness(0.7);
    transform: scale(0.98);
  }
`;


const Button2 = () => {
  const { logOutUser , setUser  } = useContext(AuthContext);
  const handleLogOut = () => {
    
    logOutUser()
      .then(() => {
        setUser(null)
        toast.success("🦄 Log out successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <button
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
      <button onClick={handleLogOut} className="relative z-10">
        Log out
      </button>

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
    </button>
  );
};

export default Button2;

{
  /* <button onClick={handleLogOut} className="btn"> Log out</button> */
}
