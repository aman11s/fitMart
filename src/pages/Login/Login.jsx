import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { useAuth } from "../../context";
import toast from "react-hot-toast";

const formDetails = [
  {
    id: uuid(),
    label: "Email",
    name: "email",
    type: "email",
  },

  {
    id: uuid(),
    label: "Password",
    name: "password",
    type: "password",
  },
];

const testCredentials = {
  email: "reachout.amansingh@gmail.com",
  password: "amansingh",
  rememberMe: true,
};

const initialFormData = {
  email: "",
  password: "",
  rememberMe: false,
};

export const Login = () => {
  const [formData, setFormData] = useState(initialFormData);

  const { email, password } = formData;
  const { setUserData } = useAuth();

  const inputChangeHandler = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleHandler = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.checked,
    }));
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const { status, data } = await axios.post("/api/auth/login", {
        email,
        password,
      });
      if (status === 200) {
        setUserData({ token: data.encodedToken, user: data.foundUser });
        toast.success("Successfully logged in!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <main className="main-center login-main mt-2">
        <form
          onSubmit={loginHandler}
          className="authenticate-form p-5 radius-5 shadow"
        >
          <h2 className="h2 mb-4 text-center">Login</h2>

          {formDetails.map(({ id, label, name, type }) => {
            return (
              <label key={id}>
                {label} :
                <input
                  onChange={inputChangeHandler}
                  type={type}
                  name={name}
                  value={formData[name]}
                  placeholder={`Enter your ${name}`}
                  className="input-box input-default"
                  required
                />
              </label>
            );
          })}

          <div className="container-flex mt-2">
            <label htmlFor="remember-checkbox">
              <input
                onChange={toggleHandler}
                type="checkbox"
                id="remember-checkbox"
                placeholder="Enter your password"
                checked={formData.rememberMe}
              />
              <span> Remember me</span>
            </label>

            <span className="pl-6 primary-link forgot-password">
              Forgot your Password?
            </span>
          </div>

          <button className="btn mt-3 primary-solid-btn">Login</button>
          <button
            onClick={() => setFormData(testCredentials)}
            type="button"
            className="btn mt-3 primary-solid-btn"
          >
            Use test credentials
          </button>

          <Link to={"/signup"} className="auth-link mt-3">
            Create New Account
            <i className="right-arrow-icon bx bx-chevron-right"></i>
          </Link>
        </form>
      </main>
    </>
  );
};
