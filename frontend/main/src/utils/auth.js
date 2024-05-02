import { Navigate } from "react-router-dom";

export const requireLogin = (next) => {
  if (typeof window != 'undefined') {
    const accessToken = localStorage.getItem('jwt');
    if (accessToken !== undefined) {
      return next();
    } else {
      return <Navigate to="/login" />
    }
  }
}