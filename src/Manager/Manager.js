import React from "react";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Customer from "./Customer";
import Product from "./Product";
import Category from "./Category";

function Manager() {
  return (
    <div className="row">
      <Sidebar />
        <Routes>
          <Route path="/customer" element={<Customer />} />
          <Route path="/product" element={<Product />} />
          <Route path="/category" element={<Category />} />
        </Routes>
    </div>
  );
}

export default Manager;
