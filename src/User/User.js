import React, { useState, useEffect } from "react";
import "./User.css";
import setImage from "../Icons/image/set.jpg";
import toYenImage from "../Icons/image/yenhop2.jpg";
import toYen2Image from "../Icons/image/yenhop.jpg";
import yenHopImage from "../Icons/image/yenchung.jpg";
import bgr1 from "../Icons/image/background.png";
import bgr2 from "../Icons/image/anh2.jpg";
import bgr3 from "../Icons/image/anh1.jpg";

function User() {
  const images = [bgr1, bgr2, bgr3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Tự động chuyển ảnh sau mỗi 3 giây
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Thay đổi thời gian chuyển ảnh (3 giây)
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div className="body">
        <div className="body-script">
          <button className="prev-btn" onClick={prevSlide}>
            ❮
          </button>
          <img className="img-slide" src={images[currentIndex]} alt="Slide" />
          <button className="next-btn" onClick={nextSlide}>
            ❯
          </button>
        </div>
        <div className="body-product">
          <div className="div-up-script ">
            <div className="floating-item need-border">
              <i className="icon">🏅</i>
              <div className="test">
                <h3>CAM KẾT CHẤT LƯỢNG</h3>
                <p>
                  Bồi hoàn gấp 10 lần giá trị sản phẩm nếu phát hiện hàng giả.
                </p>
              </div>
            </div>
            <div className="floating-item need-border">
              <i className="icon">🛡️</i>
              <h3>ĐẢM BẢO VỆ SINH ATTP</h3>
              <p>Quy trình sản xuất khép kín theo tiêu chuẩn VSATP.</p>
            </div>
            <div className="floating-item need-border">
              <i className="icon">🔄</i>
              <h3>ĐỔI TRẢ SẢN PHẨM</h3>
              <p>Đổi trả sản phẩm trong vòng 24h từ thời điểm nhận hàng.</p>
            </div>
            <div className="floating-item">
              <i className="icon">🚚</i>
              <h3>GIAO HÀNG</h3>
              <p>Giao hàng toàn quốc, thanh toán COD.</p>
            </div>
          </div>
          <div className="script">
            <div className="script-text">
              <h2>YẾN SÀO HTNEST</h2>
              <p>
                Thương hiệu Yến sào cung đình hảo hạng. Yến sào HTNest chuyên
                cung cấp các loại sản phẩm Tổ yến, yến chưng cao cấp.
              </p>
            </div>
            <div className="script-image-text">
              <img className="image" src={yenHopImage} alt="set" />
              <h4>Tổ Yến</h4>
            </div>
            <div className="script-image-text">
              <img className="image" src={toYen2Image} alt="set" />
              <h4>Yến Chưng</h4>
            </div>
            <div className="script-image-text">
              <img className="image" src={toYenImage} alt="set" />
              <h4>Yến Hộp</h4>
            </div>
            <div className="script-image-text">
              <img className="image" src={setImage} alt="set" />
              <h4>Yến Nguyên Set</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default User;
