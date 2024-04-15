import React from "react";
import { Spinner } from "react-bootstrap";

import useAuth from "../../context/useAuth";
import { Navigate, Outlet, Route } from "react-router-dom";
import Navbar from "../../Dashboard/Dashboard/Navbar";

const PublicRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <Spinner animation="border" variant="danger" />;
  }
  return !user.email ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate
      to={{
        pathname: "/",
        state: { from: location },
      }}
    />
  );
};

export default PublicRoute;
