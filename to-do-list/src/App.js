import React from "react";

// import Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Pages
import LoginPage from "./pages/LoginPage";
import Registration from "./pages/Registration";
import Forgot from "./pages/Forgot";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/Registration" element={<Registration />} />
          <Route exact path="/ForgotPassword" element={<Forgot />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
