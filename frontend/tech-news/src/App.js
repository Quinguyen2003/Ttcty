import React from "react";
import "./App.css";
import Header from "./components/common/header/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Homepages from "./components/home/Homepages";
import Footer from "./components/common/footer/footer";
import DetailPost from "./components/home/detailpost/detailpost";
import Techpages from "./components/techpage/techpage";
import VehiclePages from "./components/vehiclepage/vehiclepage";
import EsportPages from "./components/esportpage/esportpage";
import MusicPages from "./components/musicpage/musicpage";
import TipPages from "./components/tippage/tippage";
import AdminPage from "./components/adminpage/adminpage";
import LoginPage from "./components/adminpage/login/login";
import TechNewsPage from "./components/adminpage/tech_news_admin";
import VehiclesPage from "./components/adminpage/vehicle_admin";
import EsportsPage from "./components/adminpage/esport_admin";
import MusicsPage from "./components/adminpage/music_admin";
import TipsPage from "./components/adminpage/tips_admin";

const Layout = () => {
  const location = useLocation();
  const isLoginOrAdmin =
    location.pathname === "/loginpage" ||
    location.pathname === "/adminpage" ||
    location.pathname === "/technewsadmin" ||
    location.pathname === "/vehicleadmin" ||
    location.pathname === "/esportadmin" ||
    location.pathname === "/musicadmin" ||
    location.pathname === "/tipsadmin";

  return (
    <>
      {!isLoginOrAdmin && <Header />}
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/detailpost/:id" element={<DetailPost />} />
        <Route path="/techpages" element={<Techpages />} />
        <Route path="/vehiclepages" element={<VehiclePages />} />
        <Route path="/esportpages" element={<EsportPages />} />
        <Route path="/musicpages" element={<MusicPages />} />
        <Route path="/tippages" element={<TipPages />} />
        <Route path="/adminpage" element={<AdminPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/technewsadmin" element={<TechNewsPage />} />
        <Route path="/vehicleadmin" element={<VehiclesPage />} />
        <Route path="/esportadmin" element={<EsportsPage />} />
        <Route path="/musicadmin" element={<MusicsPage />} />
        <Route path="/tipsadmin" element={<TipsPage />} />
      </Routes>
      {!isLoginOrAdmin && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
