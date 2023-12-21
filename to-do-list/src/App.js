import React from "react";

// import Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Pages
import Registration from "./pages/Registration";
import NewRegistration from "./pages/NewAcc";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route exact path="/" element={<Registration />} />
          <Route exact path="/CreateNewAccount" element={<NewRegistration />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
