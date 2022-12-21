import React, { useEffect, useState } from "react";
import "./Home.css";
import { BsCashCoin } from "react-icons/bs";
import { toastOptions } from "../../utils";
import { ToastContainer } from "react-toastify";
import Nav from "../../components/Nav/Nav";
import BuyCoins from "../../components/BuyCoins/BuyCoins";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetUserByToken } from "../../redux/users";
import { useNavigate } from "react-router-dom";
import BuyCard from "../../components/Cards/BuyCard/BuyCard";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.users.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
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
  }, [user]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(fetchGetUserByToken(token));
  }, []);

  return loading ? (
    <>Loading...</>
  ) : (
    <>
      <Nav user={user}></Nav>
      <div className="home-container">
        <div>
          <div className="home-info">
          <span>ID: {user._id}</span>
          <span>NAME: {user.name}</span>
          <span>LASTNAME: {user.lastname}</span>
          <span>ROL: {user.role}</span>
          <span>EMAIL: {user.email}</span>            
          </div>
        </div>
        <div className="cards">
          <BuyCard title='Admin' price='200' btn='Buy Now'></BuyCard>
          <BuyCoins></BuyCoins>
          <BuyCard title='User' price='0' btn='Get Now'></BuyCard>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
}
