import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import User from './User'
import Product from './Product'
import Login from "../Login/Login.css";
import Contact from './Contact';
import Cart from './Cart';


function UserRouter() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={< User />} />
        <Route path="/product" element={< Product />} />
        <Route path="/login" element={< Login />} />
        <Route path="/contact" element={< Contact />} />
        <Route path="/cart" element={< Cart />} />

      </Routes>
    </div>
  );
}

export default UserRouter;