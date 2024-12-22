import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Managerr.css";
// import Customer from "./Customer";
import Product from "./ProductManager";
import Guest from "./Guest";
// import Category from "./Category";


function Managerr() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login"); // Chuyển về login nếu không có token
      return;
    }

    try {
      const decoded = jwtDecode(token);
      const userRole =
        decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

      if (userRole !== "Manager") {
        navigate("/"); // Chuyển về trang chính nếu không phải Manager
      }
    } catch (error) {
      console.error("Invalid token:", error);
      navigate("/login"); // Chuyển về login nếu token không hợp lệ
    }
  }, []);
  return (
  
    <div className="d-flex">
      <div>
        <Sidebar />
      </div>
      <div className="col align-self-start">
        <Routes>
          <Route path="/*" element={<Product />} />
          <Route path="/guest" element={<Guest />} />

        </Routes>
      </div>
    </div>
  );
}

export default Managerr;
