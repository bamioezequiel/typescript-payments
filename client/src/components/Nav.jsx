import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BsCashCoin } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";
import "./Nav.css";

export default function Nav() {
  const [user, setUser] = useState({});
  useEffect(() => {
    if (!Object.keys(user).length) {
      setUser(JSON.parse(localStorage.getItem("data-user")));
    }
  }, [user]);
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
