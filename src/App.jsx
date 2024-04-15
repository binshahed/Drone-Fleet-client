import "./App.css";
import Home from "./pages/Home/Home/Home";
import React from "react";
import AllProducts from "./pages/AllProducts/AllProducts";
import NotFound from "./pages/NotFound/NotFound";
import AboutUs from "./pages/AboutUs/AboutUs";
import Register from "./pages/Register/Register";
import Login from "./pages/Register/Login";
import initializeAuthentication from "./pages/Register/firebase/firebase.init";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import PrivateRoute from "./pages/Register/PrivateRoute/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardHome from "./pages/Dashboard/DashboardPage/DashboardHome";
import OrderList from "./pages/Dashboard/DashboardPage/OrderList";
import Pay from "./pages/Dashboard/DashboardPage/Pay";
import Review from "./pages/Dashboard/DashboardPage/Review";
import AllOrders from "./pages/Dashboard/DashboardPage/AllOrders/AllOrders";
import AddProduct from "./pages/Dashboard/DashboardPage/AddProduct/AddProduct";
import MakeAdmin from "./pages/Dashboard/DashboardPage/MakeAdmin";
import ManageProducts from "./pages/Dashboard/DashboardPage/ManageProducts/ManageProducts";
import useAuth from "./pages/context/useAuth";
import PublicRoute from "./pages/Register/PrivateRoute/PublicRoute";

initializeAuthentication();

function App() {
  const { admin } = useAuth();
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drones" element={<AllProducts />} />
          <Route path="/about" element={<AboutUs />} />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route path="/*" element={<NotFound />} />
          <Route
            path="/drones/:productId"
            element={
              // <PrivateRoute>
              <ProductDetail />
              // </PrivateRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route path="" element={<DashboardHome />} />
            <Route path="myorders" element={<OrderList />} />
            <Route path="pay" element={<Pay />} />
            <Route path="review" element={<Review />} />
            {/* admin route */}
            <Route path="manageOrder" element={admin && <AllOrders />} />
            <Route path="addProduct" element={admin && <AddProduct />} />
            <Route path="makeAdmin" element={admin && <MakeAdmin />} />
            <Route
              path="manageProducts"
              element={admin && <ManageProducts />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
