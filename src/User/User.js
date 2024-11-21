import React from "react";
import "./User.css"
import setImage from '../Icons/image/set.jpg';
import toYenImage from '../Icons/image/yenhop2.jpg';
import toYen2Image from '../Icons/image/yenhop.jpg';
import yenHopImage from '../Icons/image/yenchung.jpg';

function User() {


    return (
        <div>
            
            <div className="body">
                <div className="body-script"></div>
                <div className="body-product">
                    <div className="div-up-script ">
                        <div className="floating-item need-border">
                            <i className="icon">🏅</i>
                            <h3>CAM KẾT CHẤT LƯỢNG</h3>
                            <p>Bồi hoàn gấp 10 lần giá trị sản phẩm nếu phát hiện hàng giả.</p>
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
                            <p>Thương hiệu Yến sào cung đình hảo hạng.
                                Yến sào HTNest chuyên cung cấp các loại sản phẩm Tổ yến, yến chưng cao cấp.</p>
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
    )
}
export default User;