import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  DashboardLayout,
  EmailDashboard,
  Login,
  Records,
  Signup,
  SmsDashboard,
  LoadingPage,
} from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoadingPage />} />
          <Route path="user-login" element={<Login />} />
          <Route path="user-signup" element={<Signup />} />
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route path="sms-dashboard" element={<SmsDashboard />} />
            <Route path="email-dashboard" element={<EmailDashboard />} />
            <Route path="records" element={<Records />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
