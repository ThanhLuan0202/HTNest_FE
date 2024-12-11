import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import User from './User'
import Product from './Product'
import Login from "../Login/Login.css";
import Contact from './Contact';
import Cart from './Cart';
import Home from './Home';
import { useLocation } from "react-router-dom";

function UserRouter() {
  const location = useLocation();
  return (
    <div>
      <Routes>
        <Route path="/*"  key={location.pathname} element={< User />} />
        <Route path="/product"  key={location.pathname} element={< Product />} />
        <Route path="/login"  key={location.pathname} element={< Login />} />
        <Route path="/contact"  key={location.pathname} element={< Contact />} />
        <Route path="/cart"  key={location.pathname} element={< Cart />} />
        <Route path="/home"  key={location.pathname} element={< Home />} />

      </Routes>
    </div>
  );
}

export default UserRouter;