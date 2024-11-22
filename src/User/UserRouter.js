import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import User from './User'
import Product from './Product'
import Login from "../Login/Login.css";


function UserRouter() {
  return (
    <div>
      <Routes>
        <Route path="/user" element={< User />} />
        <Route path="/product" element={< Product />} />
        <Route path="/login" element={< Login />} />
      </Routes>
    </div>
  );
}

export default UserRouter;