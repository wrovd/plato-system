import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import SearchPage from "./pages/Search";
import CreateCellPage from "./pages/CreateCell";
import CreateBoxPage from "./pages/CreateBox";
import HistoryPage from "./pages/History";
import StatsPage from "./pages/Stats";
import RolesPage from "./pages/Roles";
import SettingsPage from "./pages/Settings";
import PrintLabelsPage from "./pages/PrintLabels";

function NotFound() {
  return (
    <div className="min-h-screen bg-[#F4F3F1] px-4 py-10">
      <div className="max-w-[980px] mx-auto rounded-3xl bg-white p-6 shadow-[0_10px_28px_rgba(0,0,0,0.08)]">
        <h1 className="text-2xl font-extrabold text-black">Страница не найдена</h1>
        <p className="mt-2 text-black/60">Маршрут не существует. Вернись на главную.</p>
        <a
          className="inline-block mt-5 rounded-2xl bg-black text-white px-5 py-3 font-semibold"
          href="#/home"
        >
          На главную
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />

        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/search" element={<SearchPage />} />
        <Route path="/cells/new" element={<CreateCellPage />} />
        <Route path="/boxes/new" element={<CreateBoxPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/roles" element={<RolesPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/print" element={<PrintLabelsPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}