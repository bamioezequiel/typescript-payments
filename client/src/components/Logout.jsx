import React from "react";
import "./Logout.css";

export default function Logout() {
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('data-user');
  };
  return (
    <div className="logout-container">
      <button onClick={handleLogout} className="logout">
        Logout
      </button>
    </div>
  );
}
