import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  DashboardLayout,
  EmailDashboard,
  Login,
  Records,
  Signup,
  SmsDashboard,
} from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="user-login" element={<Login />} />
          <Route path="user-signup" element={<Signup />} />
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<SmsDashboard />} />
            <Route path="email-dashboard" element={<EmailDashboard />} />
            <Route path="records" element={<Records />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
