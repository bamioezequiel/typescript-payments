import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BsCashCoin } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchGetUserByToken } from "../redux/users";
import Logout from "./Logout";
import "./Nav.css";

export default function Nav({user}) {
 

  return (
    <nav className="nav-container">
      <div className="nav-coins">
        <BsCashCoin /> Coins: <b>{user.name}</b>
      </div>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </div>
      <Logout></Logout>
    </nav>
  );
}
