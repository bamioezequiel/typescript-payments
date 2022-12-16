import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Singup/Singup";
import Login from "./pages/Login/Login";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home/Home";
import Failure from "./components/Failure";
import Success from "./components/Success";
import { Provider } from 'react-redux';
import store from './redux/store.js';
/* axios.defaults.baseURL = "http://localhost:3001"; */
axios.defaults.baseURL = "https://typescript-payments-eb.onrender.com";

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
