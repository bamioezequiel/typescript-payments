import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { toastOptions } from "../../utils";
import "./BuyCoins.css";

export default function BuyCoins() {
  const [coins, setCoins] = useState(0);

  const handleChangeCoin = (e) => {
    const value = e.target.value;
    if (value !== "") setCoins(value);
  };

  const handleClickMP = async (e) => {
    e.preventDefault();
    console.log(coins);
    if (coins > 0) {
      const token = localStorage.getItem("token");
      console.log(coins);
      const res = await axios.post("/payment/mp", {
        quantity: coins,
        unit_price: 2,
        token,
      });
      console.log(res);
      window.location = res.data.init_point;
    } else {
      toast.error("The number of coins must be greater than 0", toastOptions);
    }
  };
  return (
    <div className="card">
      <div className="contentBox">
        <h3>Buy coins</h3>
        <input
          type="number"
          name="coin"
          className="coins-input"
          onChange={handleChangeCoin}
          placeholder="Coins..."
        />
        <button className="buy" onClick={handleClickMP}>
          Mercado Pago
        </button>
      </div>
    </div>
  );
}
