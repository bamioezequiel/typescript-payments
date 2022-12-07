import React from "react";
import "./Home.css";
import { BsCashCoin } from "react-icons/bs";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Home</h1>
      <div className="coins-count">
        <BsCashCoin /> Coins: 233
      </div>
      <div className="coins-container">
        <h2>Buy coins</h2>
        <div>
          <button>Mercado Pago</button>
          <button>Stripe</button>
        </div>
      </div>
      <div className="products-container">
        <div className="card">
          <h3>Role Admin</h3>
          <img src="https://cdn.iconscout.com/icon/free/png-256/role-1-438983.png" alt="" />
          <span>
            <BsCashCoin /> 200 coins
          </span>
          <button>Buy</button>
        </div>
        <div className="card">
          <h3>Role Vip</h3>
          <img src="https://cdn.iconscout.com/icon/free/png-256/role-1-438983.png" alt="" />
          <span>
            <BsCashCoin /> 200 coins
          </span>
          <button>Buy</button>
        </div>
      </div>
      <button className="logout">Logout</button>
    </div>
  );
}
