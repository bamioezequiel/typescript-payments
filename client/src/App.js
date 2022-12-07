import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Singup/Singup";
import Login from "./pages/Login/Login";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home/Home";
import { useEffect } from "react";

axios.defaults.baseURL = "http://localhost:3001";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
