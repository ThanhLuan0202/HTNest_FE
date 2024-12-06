import React from "react";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Managerr.css";
// import Customer from "./Customer";
import Product from "./ProductManager";
import Guest from "./Guest";
// import Category from "./Category";


function Managerr() {
  return (
  
    <div className="d-flex">
      <div>
        <Sidebar />
      </div>
      <div className="col align-self-start">
        <Routes>
          <Route path="/product-manager" element={<Product />} />
          <Route path="/guest" element={<Guest />} />

        </Routes>
      </div>
    </div>
  );
}

export default Managerr;
