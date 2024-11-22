import React, { useState, useEffect } from "react";
import "./Navigation.css"
import logo from '../Icons/image/logoweb.jpg';
import { Link, useNavigate } from "react-router-dom";



function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);






    const navigate = useNavigate();

    const handleUserClick = () => {
        navigate('./login');
    };
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

                    {/* <i class="fas fa-user icon-user" onClick={handleUserClick}></i>
                     */}
                    <Link to="/login">
                        <i class="fas fa-user icon-user" ></i>
                    </Link>


                </div>
            </div>
            <div className={`navigation-bar ${isScrolled ? 'sticky' : ''}`}>
                <div className="left">
                    <img src={logo} alt="logo" />
                    <h2>HT Nest</h2>
                </div>
                <div className="right">
                    <Link to="/user" className="link">
                        <h4>GIỚI THIỆU</h4>
                    </Link>
                    <Link to="/product" className="link">
                        <h4 >SẢN PHẨM <i className="fas fa-angle-down ms-2"></i></h4>
                        <div className="dropdown">
                            <ul>
                                <li>Tổ yến tinh chế</li>
                                <li>Yến chưng</li>
                                <li>Set hộp quà tặng</li>
                            </ul>
                        </div>
                    </Link>
                    <h4>LIÊN HỆ</h4>
                </div>


            </div>
        </div>


    )
}
export default Navigation;