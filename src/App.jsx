import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./Auth/Register";
import VerifyOtp from "./Auth/VerifyOTP";
import CreateJobseeker from "./Auth/CreateJobseeker";
import CreateOrganisation from "./Auth/CreateOrganisation";
import Login from "./Auth/Login";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/verify_otp" element={<VerifyOtp />} />
        <Route path="/create_jobseeker" element={<CreateJobseeker />} />
        <Route path="/create_organisation" element={<CreateOrganisation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
