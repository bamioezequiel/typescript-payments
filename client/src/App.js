import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Singup/Singup";
import Login from "./pages/Login/Login";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home/Home";
import Success from "./components/Success";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
/* axios.defaults.baseURL = "http://localhost:3001"; */
axios.defaults.baseURL = "https://typescript-payments-eb.onrender.com";

function App() {
  const dispatch = useDispatch();
  let isVerify = false;
  useEffect(() => {
    const verifyUser = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.post("/auth/verifyUser", {}, {
        headers: {
          authorization: `Bearer ${token}`,
        } 
      });
      console.log(res)
      isVerify = res.data.status;
    };
    verifyUser();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={!isVerify ? <Login /> : <Navigate to="/home" />}
          />
          <Route
            path="/login"
            element={!isVerify ? <Login /> : <Navigate to="/home" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/home"
            element={isVerify ? <Home /> : <Navigate to="/login" />}
          />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
