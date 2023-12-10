import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BeerApp } from "../components";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BeerApp />} />
        <Route path="/cervejas" element={<Beer />} />
        <Route path="/estilos" element={<BeerStyle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
