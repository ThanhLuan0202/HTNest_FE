import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import config from "../config/config.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { jwtDecode } from "jwt-decode";
import ProtectedRoute from "../User/ProtectedRoute.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(localStorage.getItem("Image") || "");

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
      localStorage.setItem("token", data.token); // Lưu token vào localStorage

      const decoded = jwtDecode(data.token); // Giải mã decode
      const userName =
        decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
      const userRole =
        decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

      localStorage.setItem("name", userName); // Lưu userName vào localStorage

      // Kiểm tra nếu là role "manager", chuyển hướng đến trang quản lý
      if (userRole === "Manager") {
        navigate("/manager"); // Điều hướng đến trang quản lý
        window.location.reload();
      } else {
        navigate("/"); // Nếu không phải manager, chuyển đến trang chính
      }

      toast.success("Tài Khoản " + userName + " Đăng Nhập Thành Công");
    } catch (error) {
      console.error("Lỗi:", error.message);
      setError("Đăng nhập không thành công. Vui lòng thử lại.");
      toast.error(error.message);
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
            <div className="flex-row">
              <button className="btn google">
                <svg
                  style={{ enableBackground: "new 0 0 512 512" }}
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="me-2"
                  width="20"
                >
                  <path
                    d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
	c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
	C103.821,274.792,107.225,292.797,113.47,309.408z"
                    fill="#FBBB00"
                  />
                  <path
                    d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
	c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
	c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
                    fill="#518EF8"
                  />
                  <path
                    d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
	c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
	c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
                    fill="#28B446"
                  />
                  <path
                    d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
	c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
	C318.115,0,375.068,22.126,419.404,58.936z"
                    fill="#F14336"
                  />
                </svg>
                Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
