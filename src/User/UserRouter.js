import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import User from './User'
import Product from './Product'
import Footer from "../Footer/Footer";



function UserRouter() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/user" element={< User />} />
        <Route path="/product" element={< Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default UserRouter;