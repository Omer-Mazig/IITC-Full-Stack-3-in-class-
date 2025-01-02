import { Link, Route, Routes, useLocation, useNavigate } from "react-router";
import HatsPage from "./hats-page";
import { useEffect } from "react";
import HatDetails from "./hat-details";

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    alert(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <nav style={{ display: "flex", gap: "8px" }}>
        <Link to="/">Home</Link>
        <Link to="/hats">Hats</Link>
        <button onClick={() => navigate("/hats")}>also Hats...</button>
        <button onClick={() => navigate(-1)}>go back</button>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<div>home</div>}
        />
        <Route
          path="/hats"
          element={<HatsPage />}
        />
        <Route
          path="/hats/:hatId"
          element={<HatDetails />}
        />
      </Routes>
    </>
  );
}
