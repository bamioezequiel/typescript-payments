import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Signup from "./pages/Singup/Singup";
import Login from "./pages/Login/Login";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home/Home";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGetUserByToken } from "./redux/users";
import Dashboard from "./components/Dashboard/Dashboard";
// axios.defaults.baseURL = "http://localhost:3001"; 
axios.defaults.baseURL = "https://typescript-payments-eb.onrender.com";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const verifyUser = async () => {
      console.log("a");
      const res = await axios.post(
        "/auth/verifyUser",
        {},
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      if (!res.data.status) return localStorage.removeItem("token");
      dispatch(fetchGetUserByToken(token));
    };
    verifyUser();
  }, [token]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
