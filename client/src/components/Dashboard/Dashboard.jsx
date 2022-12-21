import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchGetUserOrders } from "../../redux/users";
import Nav from "../Nav/Nav";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const orders = useSelector( (state) => state.users.orders );
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    } else if (user.role !== "Admin") {
      navigate("/home");
      return;
    }

    dispatch(fetchGetUserOrders(user._id));
  }, []);

  return (
    <>
      <Nav user={user}></Nav>
      <div className="dashboard-container">
        <h2>
          Welcome to Dashboard{" "}
          <i>
            {user.name} {user.lastname}
          </i>
        </h2>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-4">Order Id</div>
            <div className="col col-1">Amount coins</div>
            <div className="col col-1">Price</div>
            <div className="col col-3">Payment Status</div>
            <div className="col col-4">Date</div>
          </li>
          {orders.length > 0 &&
            orders.map((order) => {
              return (
                <li className="table-row">
                  <div className="col col-4" data-label="Job Id">
                    {order._id}
                  </div>
                  <div className="col col-1" data-label="Amount coins">
                    {order.amount}
                  </div>
                  <div className="col col-1" data-label="Price">
                    ${order.priceTotal}
                  </div>
                  <div className="col col-3" data-label="Payment Status">
                    {order.status}
                  </div>
                  <div className="col col-4" data-label="Date">
                    {new Date(order.createdAt).toLocaleString()}
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}
