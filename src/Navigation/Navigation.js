import React, { useState, useEffect } from "react";
import "./Navigation.css";
import logo from "../Icons/image/logoweb.jpg";
import { Link, useNavigate } from "react-router-dom";
import config from "../config/config.js";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [getCategory, setGetCategory] = useState([]);
  const [userName, setUserName] = useState(localStorage.getItem("name") || "");
  const [avatar, setAvatar] = useState(localStorage.getItem("Image") || "");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [clickLogout, setClickLogout] = useState(false);

  const handleLogoutClick = () => {
    setClickLogout(true);
  };
  useEffect(() => {
    if (clickLogout) {
      const logout = async () => {
        try {
          const response = await fetch(`${config.API_ROOT}/Authen/logout`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`, // Gửi token nếu cần
            },
          });

          if (!response.ok) {
            throw new Error("Logout failed");
          }

          // Xử lý thành công
          localStorage.removeItem("token");
          localStorage.removeItem("name");
          toast.success("Đăng xuất thành công");
          window.location.href = "/"; // Redirect về trang chủ
        } catch (error) {
          console.error("Logout error:", error);
          toast.error("Đăng xuất không thành công, vui lòng thử lại!");
        } finally {
          setClickLogout(false); // Reset trạng thái
        }
      };

      logout();
    }
  }, [clickLogout]);
  const handleScroll = () => {
    if (window.scrollY > 60) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    //! Token thay đổi, cập nhật userName
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const name =
          decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
        setUserName(name); // State sẽ update tại đây
        setAvatar(name);
      } catch (error) {
        console.error("Lỗi Token:", error);
      }
    }
  }, [token]);

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${config.API_ROOT}/Category`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setGetCategory(data);
    } catch (error) {
      console.error("Fetch Error:", error.message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <div className="navigation-info">
        <div className="left">
          <i className="fas fa-phone icon-phone"></i>
          <p>08 8921 8255 |</p>
          <i className="fas fa-clock icon-clock"></i>
          <p className="timeWork">
            08h30 – 20h30 từ thứ 2 – thứ 7, CN: 08h30 – 17h30
          </p>
        </div>

        <div className="right">
          <i className="fas fa-search icon-find"></i>
          <Link to="/cart">
            <i className="fas fa-shopping-cart icon-shopping"></i>
          </Link>

          <Link to="/login">
            {avatar ? (
              <span>{avatar}</span>
            ) : (
              <i className="fas fa-user icon-user"></i>
            )}
          </Link>
          {avatar ? (
              <i
              class="fas fa-sign-out-alt"
              style={{ fontSize: "23px", cursor: "pointer" }}
              onClick={handleLogoutClick}
            ></i>
            ) : (
              null
            )}
          
        </div>
      </div>

      <div className={`navigation-bar ${isScrolled ? "sticky" : ""}`}>
        <div className="left">
          <img src={logo} alt="logo" />
          <h2>HT Nest</h2>
        </div>
        <div className="right">
          <Link to="/user" className="link">
            <h4>GIỚI THIỆU</h4>
          </Link>
          <Link to="/product" className="link">
            <h4>
              SẢN PHẨM <i className="fas fa-angle-down ms-2"></i>
            </h4>
            <div className="dropdown">
              <ul>
                {/* {getCategory.map((cate) => (
                  <li key={cate.id}>{cate.categoryName}</li>
                ))} */}
                <li>Yến hộp</li>
                <li>Yến chưng</li>


              </ul>
            </div>
          </Link>
          <Link to="/contact">
            <h4>LIÊN HỆ</h4>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
