import React, { useState } from "react";
import "./Home.css";
import axios from "axios";
import { BsCashCoin } from "react-icons/bs";
import { toastOptions } from "../../utils";
import { toast, ToastContainer } from "react-toastify";

export default function Home() {
  const [coins, setCoins] = useState(0);

  const handleChangeCoin = (e) => {
    const value = e.target.value;
    if(value !== '') setCoins(value);
  };

  const handleClickMP = async (e) => {
    e.preventDefault();
    console.log(coins)
    if (coins > 0) {
      const token = localStorage.getItem('token');
      console.log(coins)
      const res = await axios.post("/payment/mp", {
        quantity: coins,
        unit_price: 2,
        token
      });
      console.log(res);
      window.location = res.data.init_point;
    } else {
      toast.error('The number of coins must be greater than 0', toastOptions);
    }
  };

  return (
    <div className="home-container">
      <h1>Home</h1>
      <div className="coins-count">
        <BsCashCoin /> Coins: 233
      </div>
      <div className="coins-container">
        <h2>Buy coins</h2>
        <input
          type="number"
          name="coin"
          className="coins-input"
          onChange={handleChangeCoin}
          placeholder="Coins..."
        />
        <div>
          <button onClick={handleClickMP}>Mercado Pago</button>
          <button>Stripe</button>
        </div>
      </div>
      <div className="products-container">
        <div className="card">
          <h3>Role Admin</h3>
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/role-1-438983.png"
            alt=""
          />
          <span>
            <BsCashCoin /> 200 coins
          </span>
          <button>Buy</button>
        </div>
        <div className="card">
          <h3>Role Vip</h3>
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/role-1-438983.png"
            alt=""
          />
          <span>
            <BsCashCoin /> 200 coins
          </span>
          <button>Buy</button>
        </div>
      </div>
      <button className="logout">Logout</button>
      <ToastContainer></ToastContainer>
    </div>
  );
}
