import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BeerApp } from "../components";
import { Login } from "../components/login";
import { PrivateRoute } from "./privateRoute";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route
          path="/cervejas"
          element={
            <PrivateRoute>
              <BeerApp />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </Router>
  );
};
