import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { toast, Bounce } from "react-toastify";

const Login = () => {
  const { loginUser, signInWithGoogle , setUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((result) => {
        if (result.user) {
          toast.success("🦄 Login successful", {
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
        }
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success("🦄 Google login successful", {
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
        const user = result.user
        setUser(user)
        
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <StyledWrapper>
        <form onSubmit={handleLogin} className="form">
          <p className="title">Log in</p>
          <p className="message">Login now and get full access to our app.</p>

          <div className="flex"></div>

          <label>
            <input
              className="input"
              name="email"
              type="email"
              placeholder=" "
              required
            />
            <span>Email</span>
          </label>

          <label>
            <input
              className="input"
              name="password"
              type="password"
              placeholder=" "
              required
            />
            <span>Password</span>
          </label>

          <p className="message border-b border-dashed border-gray-600 pb-3">
            <Link to="/forgot-password" className="hover:text-orange-400">
              Forgot password?
            </Link>
          </p>

          <button type="submit" className="submit">
            Login
          </button>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="mx-4 text-gray-400">OR</span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="google-btn flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </button>

          <p className="signin">
            New to this website?{" "}
            <Link to="/register" className="text-orange-400 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </StyledWrapper>
    </div>
  );
};

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 400px;
    padding: 30px;
    border-radius: 20px;
    position: relative;
    background-color: #333333;
    color: #fff;
    border: 1px solid #444;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }

  .title {
    font-size: 28px;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
    color: #ff6f00;
    margin-bottom: 10px;
  }

  .title::before {
    width: 18px;
    height: 18px;
  }

  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }

  .title::before,
  .title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: #ff6f00;
  }

  .message,
  .signin {
    font-size: 14.5px;
    color: rgba(255, 255, 255, 0.7);
  }

  .signin {
    text-align: center;
    margin-top: 10px;
  }

  .signin a:hover {
    text-decoration: underline;
  }

  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }

  .form label {
    position: relative;
    margin-bottom: 5px;
  }

  .form label .input {
    background-color: #444;
    color: #fff;
    width: 100%;
    padding: 20px 5px 5px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
    transition: border-color 0.3s;
  }

  .form label .input:focus {
    border-color: #ff6f00;
  }

  .form label .input + span {
    color: rgba(255, 255, 255, 0.5);
    position: absolute;
    left: 10px;
    top: 0px;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form label .input:placeholder-shown + span {
    top: 12.5px;
    font-size: 0.9em;
  }

  .form label .input:focus + span,
  .form label .input:valid + span {
    color: #ff6f00;
    top: 0px;
    font-size: 0.7em;
    font-weight: 600;
  }

  .input {
    font-size: medium;
  }

  .submit {
    border: none;
    outline: none;
    padding: 12px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    transition: 0.3s ease;
    background-color: #ff6f00;
    cursor: pointer;
    margin-top: 10px;
  }

  .submit:hover {
    background-color: #ff8c00;
  }

  .google-btn {
    border: none;
    outline: none;
    padding: 12px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    transition: 0.3s ease;
    background-color: #444;
    cursor: pointer;
    border: 1px solid #555;
  }

  .google-btn:hover {
    background-color: #555;
  }

  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }

    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }
`;

export default Login;
