import React, { useState, useEffect } from "react";
import "./Navigation.css";
import logo from "../Icons/image/logoweb.jpg";
import { Link, useNavigate } from "react-router-dom";
import config from "../config/config.js";

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [getCategory, setGetCategory] = useState([]);
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");

  // Handle scroll event to toggle the sticky class
  const handleScroll = () => {
    if (window.scrollY > 60) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Fetch categories from API
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

  // Call the fetchCategories function when the component mounts
  useEffect(() => {
    fetchCategories();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
            {userName ? (
              <span>{userName}</span> // Hiển thị tên người dùng khi đã đăng nhập
            ) : (
              <i className="fas fa-user icon-user"></i> // Hiển thị icon người dùng khi chưa đăng nhập
            )}
          </Link>
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
                {getCategory.map((cate) => (
                  <li key={cate.id}>{cate.categoryName}</li>
                ))}
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
