import React from "react";
import "./Navigation.css"
import logo from '../Icons/image/logoweb.jpg';


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
                <h3>Giới thiệu</h3>
                <h3>Sản Phẩm <i class="fas fa-angle-down"></i></h3>
                <h3>Liên Hệ</h3>

                </div>
            </div>
        </div>


    )
}
export default Navigation;