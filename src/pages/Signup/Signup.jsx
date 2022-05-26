import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { singupHandler } from "../../services";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useAuth } from "../../context";

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  termsAndConditions: false,
};

const formDetails = [
  {
    id: 1,
    label: "First Name",
    name: "firstName",
    type: "text",
    placeholder: "first name",
  },

  {
    id: 2,
    label: "Last Name",
    name: "lastName",
    type: "text",
    placeholder: "last name",
  },

  {
    id: 3,
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "email",
  },

  {
    id: 4,
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "password",
  },

  {
    id: 5,
    label: "Confirm Password",
    name: "confirmPassword",
    type: "password",
    placeholder: "confirm password",
  },
];

export const Signup = () => {
  useDocumentTitle("Singup");

  const [formData, setFormData] = useState(initialFormData);

  const { setUserData } = useAuth();

  const { password, confirmPassword } = formData;
  const navigate = useNavigate();

  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

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

  return (
    <>
      <main className="main-center m-4">
        <form
          onSubmit={(e) =>
            singupHandler({
              e,
              password,
              confirmPassword,
              formData,
              navigate,
              setUserData,
              from,
            })
          }
          className="authenticate-form p-5 radius-5 shadow"
        >
          <h2 className="h2 mb-4 text-center">Signup</h2>
          {formDetails.map(({ id, label, name, type, placeholder }) => {
            return (
              <label key={id}>
                {label} :
                <input
                  onChange={inputChangeHandler}
                  type={type}
                  name={name}
                  value={formData[name]}
                  placeholder={`Enter your ${placeholder}`}
                  className="input-box input-default"
                  required
                />
              </label>
            );
          })}

          <label className="mt-2">
            <input
              onChange={toggleHandler}
              type="checkbox"
              name="termsAndConditions"
              checked={formData.termsAndConditions}
              required
            />
            <span> I accept all Terms & Conditions</span>
          </label>
          <button className="btn mt-3 primary-solid-btn">
            Create New Account
          </button>

          <Link to={"/login"} className="auth-link mt-3">
            Already have an account{" "}
            <i className="right-arrow-icon bx bx-chevron-right"></i>
          </Link>
        </form>
      </main>
    </>
  );
};
