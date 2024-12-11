import React, { useState, useEffect } from "react";
import "./Home.css";
import bgr1 from "../Icons/image/background.png";
import bgr2 from "../Icons/image/anh2.jpg";
import bgr3 from "../Icons/image/anh1.jpg";
import set from "../Icons/image/set.jpg";
import to from "../Icons/image/to.jpg";
import nho from "../Icons/image/nho.jpg";
import cay from "../Icons/image/cay.jpg";
import yenHopImage from "../Icons/image/yenchung.jpg";
import yenset from "../Icons/image/set.jpg";
import yenhop from "../Icons/image/yenhop.jpg";


function Home() {
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
      <div className="body-home ">
        <button className="prev-btn" onClick={prevSlide}>
          ❮
        </button>
        <img className="img-slide" src={images[currentIndex]} alt="Slide" />
        <button className="next-btn" onClick={nextSlide}>
          ❯
        </button>
      </div>
      <div className="content-home d-flex">
        <div className="left-home">
          <h2 class="title-linear" style={{ textAlign: "justify" }}>
            NGÀN LÝ DO
            <br />
            ĐỂ BẠN KHÔNG NGẦN NGẠI CHỌN HT Nest!
          </h2>
          <ul style={{ listStyleType: "disc" }} className="para-child">
            <li style={{ textAlign: "justify" }}>
              Nếu bạn đang băn khoăn dùng yến chỉ vì giá quá đắt thì hãy chọn
              Yến Sào HT Nest, vì Yến sào HT Nest có giá trị dinh dưỡng tương
              đương với yến đảo tự nhiên nhưng lại có Mức Giá Hợp Lý, phù hợp
              với mọi gia đình.
            </li>
            <li style={{ textAlign: "justify" }}>
              Yến Sào HT Nest nói không với chất bảo quản và phụ gia hoá học.
              Cam kết quy trình sấy khô 100% đảm bảo việc bảo quản tổ Yến đạt
              hiệu quả cao nhất và sản phẩm đến tay người tiêu dùng với giá trị
              trọng lượng THẬT.
            </li>
            <li style={{ textAlign: "justify" }}>
              HT Nest sở hữu QUY TRÌNH TUYỂN CHỌN KHẮT KHE & THỦ CÔNG 100%, chỉ
              thu hoạch khi Tổ Yến đủ già để đảm bảo sản phẩm đạt giá trị dinh
              dưỡng cao.
            </li>
          </ul>
        </div>
        <div className="right-home">
          <img
            src={set}
            style={{
              width: "350px",
              border: "0px solid",
              borderRadius: "15px",
            }}
          />
        </div>
      </div>
      <div className="content-tag">
        <div className="content-tag-child">
          <h5 className="uppercase">
            <span style={{ fontSize: "130%", color: "#fff" }}>
              Yến sào HT Nest
            </span>
          </h5>
          <p style={{ textAlign: "justify", color: "#fff" }}>
            Sản phẩm HT Nest làm ra sẽ luôn chứa đựng đầy đủ thành ý, tâm ý và
            có ý nghĩa đối với mỗi khách hàng, mang đến cho khách hàng sức khỏe,
            sự an tâm, an toàn và một cuộc sống an nhiên.
          </p>
        </div>
      </div>
      <div className="content-tv d-flex">
        <div className="left-home">
          <h2 class="title-linear" style={{ textAlign: "justify" }}>
            Thu hoạch & phân phối
            <br />
            đông trùng hạ thảo tự nhiên
          </h2>
          <ul style={{ listStyleType: "disc" }} className="para-child">
            <li style={{ textAlign: "justify" }}>
              Thu hoạch các đông trùng hạ thảo chất lượng cao, kết hợp cùng các
              dược liệu quý hiếm, dược cổ truyền dân tộc, đem đến giải pháp chăm
              sóc sức khỏe toàn diện.
            </li>
          </ul>
        </div>
        <div className="right-home">
          <img
            src={nho}
            style={{
              width: "300px",
              border: "10px solid #fff5e8",
              borderRadius: "15px",
            }}
            className="small-img"
          />
          <img
            src={to}
            style={{
              width: "700px",
              border: "0px solid",
              borderRadius: "15px",
            }}
          />
        </div>
      </div>
      <div className="product-top">
        <h1 className="title-product-top">Sản phẩm nổi bật</h1>
        <div class="container py-4">
          <div class="row g-4">
            
              <div className="col-md-4" >
                <div className="card h-100 shadow-sm cardbody">
                  <img
                    src={yenHopImage}
                    className="card-img-top image-product"
                    
                  />
                  <div className="button-buy-in-image">
                    <i className="fas fa-shopping-cart logo-buy-in-image"></i>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fw-bold mt-2">
                      ssss
                    </h5>
                    <p className="card-text text-muted fw-bold">
                      <span>Thành phần: </span>
                      ssss
                    </p>
                    <p className="card-text text-muted fw-bold">
                      <span> Hàm lượng yến: </span>
                      ssssss
                    </p>
                    <div className="d-flex">
                      <p className="text-danger fw-bold ">1111111 đ</p>
                      <button
                        className="btn btn-outline-secondary button-buy"
                        
                      >
                        Chi tiết
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4" >
                <div className="card h-100 shadow-sm cardbody">
                  <img
                    src={yenhop}
                    className="card-img-top image-product"
                    
                  />
                  <div className="button-buy-in-image">
                    <i className="fas fa-shopping-cart logo-buy-in-image"></i>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fw-bold mt-2">
                      ssss
                    </h5>
                    <p className="card-text text-muted fw-bold">
                      <span>Thành phần: </span>
                      ssss
                    </p>
                    <p className="card-text text-muted fw-bold">
                      <span> Hàm lượng yến: </span>
                      ssssss
                    </p>
                    <div className="d-flex">
                      <p className="text-danger fw-bold ">1111111 đ</p>
                      <button
                        className="btn btn-outline-secondary button-buy"
                        
                      >
                        Chi tiết
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4" >
                <div className="card h-100 shadow-sm cardbody">
                  <img
                    src={yenset}
                    className="card-img-top image-product"
                    
                  />
                  <div className="button-buy-in-image">
                    <i className="fas fa-shopping-cart logo-buy-in-image"></i>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fw-bold mt-2">
                      ssss
                    </h5>
                    <p className="card-text text-muted fw-bold">
                      <span>Thành phần: </span>
                      ssss
                    </p>
                    <p className="card-text text-muted fw-bold">
                      <span> Hàm lượng yến: </span>
                      ssssss
                    </p>
                    <div className="d-flex">
                      <p className="text-danger fw-bold ">1111111 đ</p>
                      <button
                        className="btn btn-outline-secondary button-buy"
                        
                      >
                        Chi tiết
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
