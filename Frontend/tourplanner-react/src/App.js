import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TourListPage from "./pages/tour/TourListPage";
import CreateTourPage from "./pages/tour/CreateTourPage";
import TourPage from "./pages/tour/TourPage";
import CreateTourLogPage from "./pages/tourlogs/CreateTourLogPage";
import TourUpdatePage from "./pages/tour/TourUpdatePage";
import UpdateTourLogPage from "./pages/tourlogs/UpdateTourLogPage";
import TourReportPage from "./pages/tour/TourReportPage";
import TourStatReportPage from "./pages/tour/TourStatReportPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TourListPage />} />
        <Route path="/tour/create" element={<CreateTourPage />} />
        <Route path="/tour/:id" element={<TourPage />} />
        <Route path="/tour/report/:id" element={<TourReportPage />} />
        <Route path="/tour/stat_report/:id" element={<TourStatReportPage />} />
        <Route path="/tour/log/:id" element={<TourListPage />} />
        <Route path="/tour/:id/update" element = {<TourUpdatePage/>} />
        <Route path="/tour/:id/log/create" element={<CreateTourLogPage />} />
        <Route path="/tour/:id/log/update/:tourLogId" element={<UpdateTourLogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
