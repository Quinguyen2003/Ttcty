import React from "react";
import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
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

const Layout = () => {
  const location = useLocation();
  const isLoginOrAdmin = location.pathname === '/loginpage' || location.pathname === '/adminpage';

  return (
    <>
      {!isLoginOrAdmin && <Header />}
      <Routes>
        <Route path='/' element={<Homepages />} />
        <Route path='/detailpost/:id' element={<DetailPost />} />
        <Route path='/techpages' element={<Techpages />} />
        <Route path='/vehiclepages' element={<VehiclePages />} />
        <Route path='/esportpages' element={<EsportPages />} />
        <Route path='/musicpages' element={<MusicPages />} />
        <Route path='/tippages' element={<TipPages />} />
        <Route path='/adminpage' element={<AdminPage />} />
        <Route path='/loginpage' element={<LoginPage />} />
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
