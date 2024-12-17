import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPage from './components/adminpage/adminpage';
import Login from './components/adminpage/login/login';
import EsportAdmin from './components/adminpage/esport_admin';
import MusicAdmin from './components/adminpage/music_admin';
import TechNewsAdmin from './components/adminpage/tech_news_admin';
import TipsAdmin from './components/adminpage/tips_admin';
import VehicleAdmin from './components/adminpage/vehicle_admin';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AdminPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/esport_admin" element={<EsportAdmin />} />
          <Route path="/music_admin" element={<MusicAdmin />} />
          <Route path="/tech_news_admin" element={<TechNewsAdmin />} />
          <Route path="/tips_admin" element={<TipsAdmin />} />
          <Route path="/vehicle_admin" element={<VehicleAdmin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
