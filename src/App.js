import React from "react";
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
import ProtectedRoute from './User/ProtectedRoute';


function App() {
  return (
    <Router>
      <Navigation />

      <Routes>
        <Route path="/*" element={<UserRouter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />       
        <Route path="/manager" element={<Managerr />} />
      </Routes>
      <Footer />
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
