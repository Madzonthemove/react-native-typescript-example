// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import OTP from "./pages/OTP";
import Profile from "./pages/Profile";
import TripPlanner from "./pages/TripPlanner";
import MapView from "./pages/MapView";
import TripMetrics from "./pages/TripMetrics";
import Settings from "./pages/Settings";
import "./styles/theme.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/trip-planner" element={<TripPlanner />} />
        <Route path="/map" element={<MapView />} />
        <Route path="/metrics" element={<TripMetrics />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
