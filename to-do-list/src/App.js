import React from "react";

// import Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Pages
import Registration from "./pages/Registration";
import MainPage from "./pages/mainPage";

function App() {
  return (
    <React.StrictMode>
      <Router>
          <Routes>
            <Route exact path="/" element={<Registration />} />
            <Route exact path="/main" element={<MainPage />} />
          </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;