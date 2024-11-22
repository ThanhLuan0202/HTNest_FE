import React from "react";
import "./Footer.css";
import logoys from '../Icons/image/logoys.png'
import logoyfooter from '../Icons/image/logofooter.png'

function Footer() {


    return (
        <div className="footer">
            <img className="logofooter" src={logoyfooter} />
            <div className="container ">
                <div className="row g-4 footerdetail">
                    <div className="col-3">
                        <img src={logoys} className="logoinfooter" alt="Logo" />
                    </div>
                    <div className="col-4 c1">
                        <h5>CÔNG TY TNHH THƯƠNG MẠI KHANG LỘC VƯỢNG</h5>
                        <p>Top 10 thương hiệu – nổi tiếng quốc gia,
                            Giấy chứng nhận cơ sở đủ kiệu kiện về an toàn thực phẩm,
                            Giấy chứng nhận OCOP đạt hạng sản phậm 3 sao
                        </p>
                        <div>
                            <p><span className="fw-bold detail">Showroom 1:</span> 1051 Hùng Vương, Tổ 4, Phường Thiện An, Buôn Hồ, Đăk Lăk</p>
                            <p><span className="fw-bold detail">Hotline:</span> 0889218255</p>
                            <p><span className="fw-bold detail">Email:</span> htnest@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-2 c1">
                        <h5>CHÍNH SÁCH</h5>
                        <ul>
                            <li>Chính sách quy định chung</li>
                            <li>Chính sách bảo mật</li>
                            <li>Chính sách bảo hành</li>
                            <li>Chính sách đổi trả hàng</li>
                        </ul>
                    </div>
                    <div className="col-3 c1">
                        <h5>HỖ TRỢ KHÁCH HÀNG</h5>
                        <ul>
                            <li>Chính sách đặt hàng - thanh toán</li>
                            <li>Chính sách vận chuyển - kiểm hàng</li>
                            <li>Câu hỏi thường gặp</li>
                        </ul>
                        {/* <div>
                            <img src="path-to-bocongthuong-logo.png" alt="Bộ Công Thương" />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Footer;