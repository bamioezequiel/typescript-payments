import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import { BsCashCoin } from "react-icons/bs";
import { toastOptions } from "../../utils";
import { toast, ToastContainer } from "react-toastify";
import Nav from "../../components/Nav";
import BuyCoins from "../../components/BuyCoins/BuyCoins";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetUserByToken } from "../../redux/users";

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    if(!Object.keys(user).length) {
      const token = localStorage.getItem("token");
  
      dispatch(fetchGetUserByToken(token)).then((res)=>console.log(res));
    } else {
      setLoading(false);
    }
    console.log(user);
  }, [user]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(fetchGetUserByToken(token));
    console.log(user)
  }, []);

  return (
    loading ? <>Loading...</> :  <>
      <Nav user={user}></Nav>
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
