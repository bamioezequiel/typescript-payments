import React from "react";
import { BsCashCoin } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";
import "./Nav.css";

export default function Nav({user}) {
 
  return (
    <nav className="nav-container">
      <div className="nav-coins">
        <BsCashCoin /> Coins: <b>{user.coins}</b>
      </div>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </div>
      <Logout></Logout>
    </nav>
  );
}
