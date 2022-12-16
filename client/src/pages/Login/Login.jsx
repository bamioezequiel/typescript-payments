import React from "react";
import axios from "axios";
import { useState } from "react";
import { AiFillWechat } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { handleValidationLogin, toastOptions } from "../../utils";
import { useDispatch } from 'react-redux';
import "./Login.css";
import { fetchGetUserById } from "../../redux/users";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!handleValidationLogin(input)) return;
    const { email, password } = input;
    const { data } = await axios.post(
      "/auth/login",
      {
        email,
        password,
      },
      { withCredentials: true }
    );
    console.log(data);
    if (data) {
      if (data.errors) {
        const { email, password } = data.errors;
        if (email) toast.error(email, toastOptions);
        else if (password) toast.error(password, toastOptions);
      } else {
        localStorage.setItem("token", data.token);
        dispatch(fetchGetUserById(data.user._id));
        navigate("/home");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="left">
        <AiFillWechat size="20em" />
      </div>
      <div className="right">
        <form onSubmit={(e) => handleSubmit(e)} className="login-form">
          <h2>Log In</h2>
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

          <button type="submit">Log In</button>
          <span>
            Don't have an account ? <Link to="/signup">Sign In</Link>
          </span>
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}
