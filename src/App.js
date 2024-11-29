import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import UserRouter from './User/UserRouter';
import Login from './Login/Login'
import Footer from "./Footer/Footer";
import Register from "./Register/Register";
import Checkout from './Checkout/Checkout';

function App() {
  return (
    <Router>
      <Navigation />

      <Routes>
        <Route path="/*" element={<UserRouter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />

      </Routes>
      <Footer />

    </Router>

  );
}

export default App;
