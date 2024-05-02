import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from '.'

const PrivateRoute = ({ children }) => {
  const access = isAuthenticated();
  if (access === true) {
    return children;
  } else {
    return <Navigate to='/login' />
  }
}

export default PrivateRoute;
