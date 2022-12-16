import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BsCashCoin } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchGetUser } from "../redux/users";
import Logout from "./Logout";
import "./Nav.css";

export default function Nav() {
  const dispatch = useDispatch();
  const user = useSelector((state)=>state.user);
  const token = localStorage.getItem('token');
  
  useEffect(() => {
    
  }, []);
  
  return (
    <nav className="nav-container">
      <div className="nav-coins">
        {console.log(user)} <BsCashCoin /> Coins: <b>{user.coins}</b>
      </div>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </div>
      <Logout></Logout>
    </nav>
  );
}
