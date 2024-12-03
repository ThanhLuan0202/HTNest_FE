import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import config from "../config/config";

import { jwtDecode } from "jwt-decode";
import { Link, useLocation, useNavigate } from "react-router-dom";
function Sidebar() {

  const [activeTab, setActiveTab] = useState("Báo Cáo Cửa Hàng");
  const [info, setInfo] = useState({});

  const fetchInfo = () => {
    fetch(`${config.API_ROOT}/api/StoreInfo`, {
    })
      .then(response => response.json())
      .then(data => {
        setInfo(data);
      })
      .catch(error => console.error("Error fetching store info:", error));
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  const handleClick = (label) => {
    setActiveTab(label);
    console.log(label);
  };

  const sidebars = []

  var decodedToken = ""

  var name = "";
  var token = "";
  var role = "";

  try {
    token = localStorage.getItem('token');
    decodedToken = jwtDecode(token);
    name = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
    role = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
  } catch (e) {
  }

  return (
    <div>
      <div className="viewport col-2">
        <div className="sidebar col-2">
          <header>
            <div id="sidebar_header_avatar">
              <img src={info.avatar} width="75px" />
            </div>
            <div>
              <b> {name}</b>
            </div>
            <div id="role">
              <a>Quản Lý</a>
            </div>
            <div id="line"></div>
          </header>
          <ul className="nav">
            
            
            
            <li className={`${activeTab === "Quản Lý Sản Phẩm" ? "sidebarActive" : ""}`} onClick={() => handleClick("Quản Lý Sản Phẩm")}>
              <Link to="/product-manager">
                <i class="fas fa-shopping-bag"></i><p>Sản Phẩm</p>
              </Link>
            </li>
           
            <li className={`${activeTab === "Quản Lý Khách Hàng" ? "sidebarActive" : ""}`} onClick={() => handleClick("Quản Lý Khách Hàng")}>
              <Link to="/manager/customer">
                <i className="fas fa-users"></i><p>Khách Hàng</p>
              </Link>
            </li>
            
            <li className={`${activeTab === "Quản Lý Danh Mục" ? "sidebarActive" : ""}`} onClick={() => handleClick("Quản Lý Danh Mục")}>
              <Link to="/manager/category">
                <i class="fas fa-bars"></i><p>Danh Mục</p>
              </Link>
            </li>
            
            <li className={`${activeTab === "Quản Lý Thể Loại" ? "sidebarActive" : ""}`} onClick={() => handleClick("Quản Lý Thể Loại")}>
              <Link to="/manager/gold">
              <i class="fas fa-mortar-pestle"></i><p>Thể Loại</p>
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
