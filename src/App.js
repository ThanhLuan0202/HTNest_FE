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

function App() {
  const [isManager, setIsManager] = useState(null); // Khởi tạo là null để kiểm tra trạng thái
  const token = localStorage.getItem("token"); // Lấy token từ localStorage
  let role = null;

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token); // Giải mã token
        role = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
        setIsManager(role === "Manager"); // Kiểm tra xem vai trò có phải là "Manager" không
      } catch (error) {
        console.error("Invalid token:", error);
        setIsManager(false); // Nếu token không hợp lệ, coi như không phải là manager
      }
    } else {
      setIsManager(false); // Nếu không có token, coi như không phải là manager
    }
  }, [token]); // Chạy lại mỗi khi token thay đổi

  // Khi đăng xuất, token bị xóa khỏi localStorage và isManager cần được cập nhật lại.
  useEffect(() => {
    const handleStorageChange = () => {
      setIsManager(false); // Khi token bị xóa, đảm bảo isManager là false
    };
    window.addEventListener("storage", handleStorageChange); // Lắng nghe sự thay đổi trong localStorage

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <Router>
      {/* Chỉ hiển thị Navigation nếu là không phải manager */}
      {!isManager && <Navigation />}

      <Routes>
        <Route path="/*" element={<UserRouter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/manager/*" element={<Managerr />} />
      </Routes>

      {/* Chỉ hiển thị Footer nếu là không phải manager */}
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
