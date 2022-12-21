import React from "react";
import { useNavigate } from "react-router-dom";
import "./Logout.css";

export default function Logout() {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('data-user');
    window.location.reload();
  };
  return (
    <div className="logout-container">
      <button onClick={handleLogout} className="logout">
        Logout
      </button>
    </div>
  );
}
