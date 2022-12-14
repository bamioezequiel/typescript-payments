import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Singup/Singup";
import Login from "./pages/Login/Login";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home/Home";
import Stripe from "./pages/Home/Stripe";
import Failure from "./components/Failure";
import Success from "./components/Success";

/* axios.defaults.baseURL = "http://localhost:3001"; */
axios.defaults.baseURL = "https://typescript-payments.onrender.com";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/stripe" element={<Stripe />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/success" element={<Success />} />
          <Route path="/failure" element={<Failure />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
