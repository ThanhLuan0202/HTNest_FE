import React from "react";
import "./Navigation.css"
import logo from '../Icons/image/logoweb.jpg';
import { Link } from "react-router-dom";



function Navigation() {

    return (
        <div>
            <div className="navigation-info">
                <div className="left">

                    <i class="fas fa-phone icon-phone"></i>
                    <p>08 8921 8255 |</p>
                    <i class="fas fa-clock icon-clock"></i>
                    <p className="timeWork">08h30 – 20h30 từ thứ 2 – thứ 7, CN: 08h30 – 17h30</p>
                </div>

                <div className="right">

                    <i class="fas fa-search icon-find"></i>
                    <i class="fas fa-shopping-cart icon-shopping"></i>
                    <i class="fas fa-user icon-user"></i>

                </div>
            </div>
            <div className="navigation-bar">
                <div className="left">
                    <img src={logo} alt="logo" />
                    <h2>HT Nest</h2>
                </div>
                <div className="right">
                    <Link to="/user" className="link">
                        <h4>GIỚI THIỆU</h4>
                    </Link>
                    <Link to="/product" className="link">
                        <h4>SẢN PHẨM <i class="fas fa-angle-down ms-2"> </i></h4>
                    </Link>

                    <h4>LIÊN HỆ</h4>

                </div>
            </div>
        </div>


    )
}
export default Navigation;