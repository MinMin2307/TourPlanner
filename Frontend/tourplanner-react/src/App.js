import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TourListPage from "./pages/tour/TourListPage";
import CreateTourPage from "./pages/tour/CreateTourPage";
import TourPage from "./pages/tour/TourPage";
import CreateTourLogPage from "./pages/tourlogs/CreateTourLogPage";
import TourUpdatePage from "./pages/tour/TourUpdatePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TourListPage />} />
        <Route path="/tour/create" element={<CreateTourPage />} />
        <Route path="/tour/:id" element={<TourPage />} />
        <Route path="/tour/log/:id" element={<TourListPage />} />
        <Route path="/tour/:id/log/create" element={<CreateTourLogPage />} />
        <Route path="/tour/:id/update" element = {<TourUpdatePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
