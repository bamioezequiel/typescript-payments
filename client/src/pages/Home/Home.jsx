import React, { useState } from "react";
import "./Home.css";
import axios from "axios";
import { BsCashCoin } from "react-icons/bs";
import { toastOptions } from "../../utils";
import { toast, ToastContainer } from "react-toastify";
import Nav from "../../components/Nav";
import BuyCoins from "../../components/BuyCoins/BuyCoins";

export default function Home() {
  return (
    <>
      <Nav></Nav>

      <div className="home-container">
        <div className="coins-container">
          <BuyCoins></BuyCoins>
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
          {/*<div className="card">
            <h3>Role Vip</h3>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/role-1-438983.png"
              alt=""
            />
            <span>
              <BsCashCoin /> 200 coins
            </span>
            <button>Buy</button>
          </div> */}
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
}
