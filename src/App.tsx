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
  UserProfile,
} from "./pages";
import appInitialState from "./app/StateData";
import { useState } from "react";
import appContext from "./app/state";

function App() {
  const [appState, updateAppState] = useState(appInitialState);
  const appStateData = {
    state: appState,
    stateUpdate: updateAppState,
  };

  console.log(appState, updateAppState);
  return (
    <appContext.Provider value={appStateData}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<LoadingPage />} />
            <Route path="user-login" element={<Login />} />
            <Route path="user-signup" element={<Signup />} />
            <Route path="dashboard" element={<DashboardLayout />}>
              <Route path="sms-dashboard" element={<SmsDashboard />} />
              <Route path="email-dashboard" element={<EmailDashboard />} />
              <Route path="user-profile" element={<UserProfile />} />
              <Route path="records" element={<Records />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </appContext.Provider>
  );
}

export default App;
