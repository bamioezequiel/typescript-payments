import axios from "axios";
import React from "react";
import { BsCashCoin } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { fetchGetUserByToken } from "../../../redux/users";
import { toastOptions } from "../../../utils";
import "./BuyCard.css";

export default function BuyCard({ title, price, btn }) {
    const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const handleBuy = async () => {
    if (price > user.coins) {
      toast.error("You don't have enough coins to buy", toastOptions);
    } else if (user.role === "Admin" && title === "Admin") {
      toast.error("You are already Admin", toastOptions);
    } else {
      if (user.role === "Admin" && title === "User") {
        const res = window.confirm(
          'Are you sure you want to be "User"? your current role will be lost'
        );

        if (!res) return;
        
    }

      const res = await axios.post("/store/buyRoles", {
        role: title,
        userId: user._id,
      });
      console.log(res.data)
      if(res.data.status) {
        const token = localStorage.getItem('token');
        dispatch(fetchGetUserByToken(token));
        window.location.reload();
      }
      //action
    }
  };

  return (
    <div className="card">
      <div className="contentBox">
        <h3>{title}</h3>
        <h2 className="price">
          {price} <BsCashCoin />
        </h2>
        <button onClick={() => handleBuy()} className="buy">
          {btn}
        </button>
      </div>
    </div>
  );
}
