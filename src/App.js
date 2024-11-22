import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import UserRouter from './User/UserRouter';
import Login from './Login/Login'
import Footer from "./Footer/Footer";

function App() {
  return (
    <Router>
      <Navigation />

      <Routes>
        <Route path="/*" element={<UserRouter />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />

    </Router>

  );
}

export default App;
