import React, { useContext } from "react";
import { Link } from "react-router";

import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { Bounce, toast } from "react-toastify";
const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 350px;
    padding: 20px;
    border-radius: 20px;
    position: relative;
    background-color: #1a1a1a;
    color: #fff;
    border: 1px solid #333;
  }

  .title {
    font-size: 28px;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
    color: #00bfff;
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
    background-color: #00bfff;
  }

  .message,
  .signin {
    font-size: 14.5px;
    color: rgba(255, 255, 255, 0.7);
  }

  .signin {
    text-align: center;
  }

  .signin a:hover {
    text-decoration: underline royalblue;
  }

  .signin a {
    color: #00bfff;
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
    background-color: #333;
    color: #fff;
    width: 100%;
    padding: 20px 05px 05px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
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
    color: #00bfff;
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
    color: #fff;
    font-size: 16px;
    transform: 0.3s ease;
    background-color: #00bfff;
  }

  .submit:hover {
    background-color: #00bfff96;
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

const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const user = Object.fromEntries(formData.entries());
    const { email, password } = user;

    //

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

        const user = result.user
        setUser(user)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="max-w-7xl mx-auto flex justify-center mt-20">
        <StyledWrapper>
          <form onSubmit={handleRegister} className="form">
            <p className="title">Register </p>
            <p className="message">
              Signup now and get full access to our app.{" "}
            </p>
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
              <span>photo url</span>
            </label>
            <button type="submit" className="submit">
              Submit
            </button>
            <p className="signin">
              Already have an account ?{" "}
              <Link to={"/login"} href="#">
                Log in
              </Link>{" "}
            </p>
          </form>
        </StyledWrapper>
      </div>
    </div>
  );
};

export default Register;
