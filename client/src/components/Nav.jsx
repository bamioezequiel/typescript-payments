import React from "react";
import { BsCashCoin } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  const user = localStorage.getItem("data-user") || {};
  return (
    <nav className="nav-container">

      <div className="nav-coins">
        <BsCashCoin /> Coins: {user.coins}
      </div>
      <div className="nav-links">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </div>
    </nav>
  );
}
