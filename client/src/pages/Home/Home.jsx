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
import { useNavigate } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.users.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!Object.keys(user).length) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    if (!Object.keys(user).length) {
      const token = localStorage.getItem("token");

      dispatch(fetchGetUserByToken(token));
    } else {
      setLoading(false);
    }
    console.log(user);
  }, [user]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(fetchGetUserByToken(token));
    console.log(user);
  }, []);

  return loading ? (
    <>Loading...</>
  ) : (
    <>
      <Nav user={user}></Nav>
      <div className="home-container">
        <div className="coins-container">
          <BuyCoins></BuyCoins>
        </div>
        <div className="cards">
          <div className="card">          
            <div className="contentBox">
              <h3>Admin</h3>
              <h2 className="price">
                200.<small>00</small> <BsCashCoin/>
              </h2>
              <a href="#" className="buy">
                Buy Now
              </a>
            </div>
          </div>
          <div className="card">          
            <div className="contentBox">
              <h3>VIP</h3>
              <h2 className="price">
                100.<small>00</small> <BsCashCoin/>
              </h2>
              <a href="#" className="buy">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
}
