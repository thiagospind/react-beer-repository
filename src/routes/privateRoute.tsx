import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../services/auth";

export const PrivateRoute = ({ children }) => {
  const isAuth = isAuthenticated();

  return <>{isAuth ? children : <Navigate to="/login" />}</>;
};
