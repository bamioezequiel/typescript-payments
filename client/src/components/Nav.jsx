import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BsCashCoin } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
    const [user, setUser] = useState({});
    useEffect( () => {
        setUser(localStorage.getItem("data-user") || {});
    }, [] )
  return (
    <nav className="nav-container">

      <div className="nav-coins">
{        console.log(user)
}        <BsCashCoin /> Coins: {user.coins}
      </div>
      <div className="nav-links">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </div>
    </nav>
  );
}
