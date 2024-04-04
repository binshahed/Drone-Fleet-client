// import { Route, Switch, useLocation } from "react-router-dom";
import "./Navbar.css";

import DashboardHome from "../DashboardPage/DashboardHome";
import Navbar from "./Navbar";

import OrderList from "../DashboardPage/OrderList";
import Pay from "../DashboardPage/Pay";
import Review from "../DashboardPage/Review";
import MakeAdmin from "../DashboardPage/MakeAdmin";
import useAuth from "../../context/useAuth";
import AdminRoute from "../../Register/AdminRoute/AdminRoute";
import AddProduct from "../DashboardPage/AddProduct/AddProduct";
import AllOrders from "../DashboardPage/AllOrders/AllOrders";
import { Spinner } from "react-bootstrap";
import ManageProducts from "../DashboardPage/ManageProducts/ManageProducts";
import NotFound from "../../NotFound/NotFound";
import { Outlet } from "react-router-dom";

function Dashboard() {
  let { path } = useLocation();
  const { isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="App my-5">
        <Spinner
          style={{ marginTop: "200px", height: "100px", width: "100px" }}
          animation="border"
          variant="warning"
        />
      </div>
    );
  }

  return (
    <>
      <Outlet />
    </>
  );
}

export default Dashboard;
