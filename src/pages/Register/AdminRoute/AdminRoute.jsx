import React from "react";
import { Spinner } from "react-bootstrap";

import useAuth from "../../context/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, isLoading} = useAuth();
  console.log('test',admin);
 
  if (isLoading) {
    return <Spinner animation="border" variant="danger" />;
  }
  return admin ? (
  <Outlet/>
  ) : (
    <Navigate
      to={{
        pathname: "/dashboard",
        state: { from: location },
      }}
    />
  );
};

export default AdminRoute;
