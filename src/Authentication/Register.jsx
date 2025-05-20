import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { Bounce, toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 350px;
    padding: 20px;
    border-radius: 20px;
    position: relative;
    background-color: #ffffff;
    color: #333333;
    border: 1px solid #e5e7eb;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
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
    color: #666666;
  }

  .signin {
    text-align: center;
  }

  .signin a:hover {
    text-decoration: underline #ff6f00;
  }

  .signin a {
    color: #ff6f00;
  }

  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }

  .form label {
    position: relative;
  }

  .form label .input {
    background-color: #ffffff;
    color: #333333;
    width: 100%;
    padding: 20px 05px 05px 10px;
    outline: 0;
    border: 1px solid #dddddd;
    border-radius: 10px;
  }

  .form label .input + span {
    color: #999999;
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
    padding: 10px;
    border-radius: 10px;
    color: #ffffff;
    font-size: 16px;
    transform: 0.3s ease;
    background-color: #ff6f00;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .submit:hover {
    background-color: #e66500;
  }

  .google-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: 1px solid #dddddd;
    background-color: #ffffff;
    color: #333333;
    padding: 10px;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .google-btn:hover {
    background-color: #f5f5f5;
    border-color: #cccccc;
  }

  .divider {
    display: flex;
    align-items: center;
    margin: 15px 0;
    color: #999999;
    font-size: 14px;
  }

  .divider::before,
  .divider::after {
    content: "";
    flex: 1;
    height: 1px;
    background-color: #dddddd;
    margin: 0 10px;
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

  @media (max-width: 640px) {
    .form {
      width: 90%;
      margin: 0 auto;
    }
  }
`;

const Register = () => {
  const { createUser, setUser, signInWithGoogle } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const user = Object.fromEntries(formData.entries());
    const { email, password } = user;

    const RegExpLower = /[a-z]/;
    const RegExpUpper = /[A-Z]/;
    const RegExpLength = /^.{6,}$/;

    if (!RegExpLower.test(password)) {
      toast.error("Must have an Lower letter in the password", {
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
    } else if (!RegExpUpper.test(password)) {
      toast.error("Must have an uppercase letter in the password", {
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
    } else if (!RegExpLength.test(password)) {
      toast.error("Password must be at least 6 characters long", {
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
    }

    createUser(email, password)
      .then((result) => {
        console.log(result);
        if (result.user) {
          toast.success("🦄 Registration successful", {
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

        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success("Google sign-in successful", {
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
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <StyledWrapper>
        <form onSubmit={handleRegister} className="form">
          <p className="title">Register</p>
          <p className="message">Signup now and get full access to our app.</p>

          <button
            type="button"
            className="google-btn"
            onClick={handleGoogleSignIn}
          >
            <FcGoogle size={20} />
            <span>Sign up with Google</span>
          </button>

          <div className="divider">or</div>

          <div className="flex">
            <label>
              <input
                className="input"
                name="name"
                type="text"
                placeholder=""
                required
              />
              <span>Name</span>
            </label>
          </div>

          <label>
            <input
              className="input"
              type="email"
              name="email"
              placeholder=""
              required
            />
            <span>Email</span>
          </label>

          <label>
            <input
              className="input"
              type="password"
              name="password"
              placeholder=""
              required
            />
            <span>Password</span>
          </label>

          <label>
            <input
              className="input"
              type="text"
              name="photo"
              placeholder=""
              required
            />
            <span>Photo URL</span>
          </label>

          <button type="submit" className="submit">
            Submit
          </button>

          <p className="signin">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-600 hover:underline">
              Log in
            </Link>
          </p>
        </form>
      </StyledWrapper>
    </div>
  );
};

export default Register;
