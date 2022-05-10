import React from "react";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";

export const Signup = () => {
  const formDetails = [
    {
      id: uuid(),
      label: "First Name",
      name: "first name",
      type: "text",
    },

    {
      id: uuid(),
      label: "Last Name",
      name: "last name",
      type: "text",
    },

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

    {
      id: uuid(),
      label: "Confirm Password",
      name: "confirm password",
      type: "password",
    },
  ];
  return (
    <>
      <main className="main-center m-4">
        <form className="authenticate-form p-5 radius-5 shadow">
          <h2 className="h2 mb-4 text-center">Signup</h2>
          {formDetails.map(({ id, label, name, type }) => {
            return (
              <label key={id}>
                {label} :
                <input
                  type={type}
                  placeholder={`Enter your ${name}`}
                  className="input-box input-default"
                  required
                />
              </label>
            );
          })}

          <label className="mt-2">
            <input type="checkbox" />
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
