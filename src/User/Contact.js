import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Contact.css";
import logoys from '../Icons/image/logoys.png'

function Contact() {
  return (
    <div className="contact">
      <div className="contact-child">
        <div className="contact-child-left">
          <img src={logoys} />
          <h5>Công Ty TNHH thương mại Khanh Lộc Vương</h5>
          <h6>
            Mọi thắc mắc quý khách vui lòng liên hệ tới chúng tôi thông qua
            thông tin bên dưới hoặc quý khách có thể điền thông tin ở form bên
            cạnh. Chúng tôi sẽ liên hệ giải đáp thắc mắc tới quý khách một cách
            sớm nhất.
          </h6>
          <i class="fas fa-phone"></i>
          <span>08 8921 8255</span>
          <i class="fas fa-envelope"></i>
          <span>htnest@gmail.com</span>
          <span>
            <i class="fas fa-map-marker-alt"></i>1051 Hùng Vương, Tổ 4, Phường
            Thiện An, Buôn Hồ, Đăk Lăk
          </span>
        </div>
        <div className="contact-child-right">
          <label>
            <span className="">Tên của bạn</span>

            <input required="" placeholder="" type="Full Name" class="contact-input" />
          </label>
          <label>
            <span className="">Email</span>

            <input required="" placeholder="" type="email" class="contact-input" />
          </label>

          <label>
            <span className="">Số điện thoại</span>

            <input required="" placeholder="" type="Full Name" class="contact-input" />
          </label>
          <label>
            <span className="">Tin nhắn của bạn</span>

            <input required="" placeholder="" type="" class="contact-input input-mess" />
          </label>
          <button className="button-send-mess">Gửi tin nhắn</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
