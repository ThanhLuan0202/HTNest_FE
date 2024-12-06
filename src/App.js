import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import UserRouter from "./User/UserRouter";
import Login from "./Login/Login";
import Footer from "./Footer/Footer";
import Register from "./Register/Register";
import Checkout from "./Checkout/Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Managerr from "./Managerr/Managerr";
import { jwtDecode } from "jwt-decode";
import { log10 } from "chart.js/helpers";


function App() {
  const [isManager, setIsManager] = useState("");
  // Lấy token từ storage
  const token = localStorage.getItem("token"); // Lấy token từ localStorage
  let role = null;

  if (token) {
    try {
      const decoded = jwtDecode(token); // Giải mã token
      console.log("Decoded token:", decoded); // Log toàn bộ payload

      // Lấy giá trị role
      role = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
      console.log("Role sau khi giải mã:", role); // Log role
    } catch (error) {
      console.error("Invalid token:", error);
    }
  }
  useEffect(() => {
    setIsManager(role);


  },[token])

  // Kiểm tra nếu vai trò là "manager"


  return (
    <Router>
      {/* Chỉ hiện Navigation nếu không phải manager */}
      {!isManager && <Navigation />}

      <Routes>
        <Route path="/*" element={<UserRouter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/manager/*" element={<Managerr />} />
      </Routes>

      {/* Chỉ hiện Footer nếu không phải manager */}
      {!isManager && <Footer />}

      <ToastContainer
        position="top-right"
        autoClose={6000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{
          zIndex: "999990 !important",
        }}
      />
    </Router>
  );
}

export default App;
