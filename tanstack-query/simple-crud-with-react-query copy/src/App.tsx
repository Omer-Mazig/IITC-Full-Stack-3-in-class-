import { Routes, Route } from "react-router-dom";
import EditCatPage from "./pages/edit-cat-page";
import HomePage from "./pages/home-page";
import CatListPage from "./pages/cat-list-page";
import CatDetailsPage from "./pages/cat-details";
import CreateCatPage from "./pages/create-cat-page";
import Navbar from "./components/navber";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/cats"
          element={<CatListPage />}
        />
        <Route
          path="/cats/:id"
          element={<CatDetailsPage />}
        />
        <Route
          path="/create"
          element={<CreateCatPage />}
        />
        <Route
          path="/cats/edit/:id"
          element={<EditCatPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
