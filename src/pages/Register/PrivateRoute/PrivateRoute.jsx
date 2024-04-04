import React from "react";
import { Spinner } from "react-bootstrap";

import useAuth from "../../context/useAuth";
import { Navigate, Outlet, Route } from "react-router-dom";
import Navbar from "../../Dashboard/Dashboard/Navbar";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <Spinner animation="border" variant="danger" />;
  }
  return user.email ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate
      to={{
        pathname: "/login",
        state: { from: location },
      }}
    />
  );
};

export default PrivateRoute;
