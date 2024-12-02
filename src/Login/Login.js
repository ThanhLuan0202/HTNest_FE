import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import config from "../config/config.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { jwtDecode } from "jwt-decode";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Vui lòng nhập email và mật khẩu.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`${config.API_ROOT}/Authen/Login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Đăng nhập không thành công.");
      }

      const data = await response.json();
      //!chú ý dòng này
      localStorage.setItem("token", data.token); // Lưu token vào localStorage

      const decoded = jwtDecode(data.token); //giải mã decode
      const userName =
        decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
      //! Chú ý dòng này
      localStorage.setItem("name", userName); // Lưu userName vào localStorage
      toast.success("Đăng nhập thành công");
      navigate("/");
    } catch (error) {
      console.error("Lỗi:", error.message);
      setError("Đăng nhập không thành công. Vui lòng thử lại.");
      toast.error("Đăng nhập lỗi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="login-child">
        <div className="login-left">
          <form className="form">
            <div className="flex-column">
              <label>Tên Đăng Nhập</label>
            </div>
            <div className="inputForm">
              <input
                placeholder="Nhập email của bạn"
                className="input"
                type="text"
                value={email}
                //!thay đổi dòng này
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex-column">
              <label>Mật Khẩu</label>
            </div>
            <div className="inputForm">
              <input
                placeholder="Nhập mật khẩu của bạn"
                className="input"
                type="password"
                value={password}
                //!thay đổi dòng này
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <div>
              <input type="radio" id="rememberMe" />
              <label htmlFor="rememberMe" className="ms-2">
                Ghi nhớ mật khẩu
              </label>
              <span className="span">Quên mật khẩu</span>
            </div>
            <div
              className={`button-submit ${loading ? "disabled" : ""}`}
              onClick={handleLogin}
            >
              {loading ? "Đang Đăng Nhập..." : "Đăng Nhập"}
            </div>
            <Link to="/register">
              <p className="p">
                Bạn không có tài khoản? <span className="span">Đăng Ký</span>
              </p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
