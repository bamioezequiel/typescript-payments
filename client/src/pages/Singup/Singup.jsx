import React from "react";
import "./Singup.css";
import { useState, useEffect } from "react";
import { AiFillWechat } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { handleValidationSingup, toastOptions } from "../../utils";

export default function Singup() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!handleValidationSingup(input)) return;
    const { name, lastname, email, password } = input;
    const { data } = await axios.post(
      "/auth/register",
      {
        name,
        lastname,
        email,
        password,
      },
      { withCredentials: true }
    );
    if (data) {
      if(data.errors) {
        const { email, password } = data.errors;
        if (email) toast.error(email, toastOptions);
        else if (password) toast.error(password, toastOptions);
      } else {
        /* localStorage.setItem('token', data.token);
          localStorage.setItem('data-user', data.user); */
        navigate("/login");
      } 
    } 
  };
  return (
    <div className="register-container">
      <div className="left">
        <AiFillWechat size="20em" />
      </div>
      <div className="right">
        <form onSubmit={(e) => handleSubmit(e)} className="register-form">
          <h2>Sign in</h2>
          <input
            type="text"
            name="name"
            placeholder="First name..."
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last name..."
            onChange={(e) => handleChange(e)}
          />

          <input
            type="email"
            name="email"
            placeholder="Email..."
            onChange={(e) => handleChange(e)}
          />

          <input
            type="password"
            name="password"
            placeholder="Password..."
            onChange={(e) => handleChange(e)}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password..."
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Sign in</button>
          <span>
            Already have an account ? <Link to="/login">Log In.</Link>
          </span>
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}
