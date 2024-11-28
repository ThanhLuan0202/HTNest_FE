import "./Product.css";
import React, { useState, useEffect } from "react";

import yenHopImage from "../Icons/image/yenchung.jpg";

function Product() {
  const [showDetail, setShowDetail] = useState(false);

  const showDetailForm = () => {
    setShowDetail(true);
  };
  return (
    <div className="body">
      <div class="container py-4">
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card h-100 shadow-sm cardbody">
              <img
                src={yenHopImage}
                class="card-img-top"
                alt="Set quà hộp đứng 18 hũ YCS"
              />
              <div className="button-buy-in-image">
                <i class="fas fa-shopping-cart logo-buy-in-image"></i>
              </div>
              <div class="card-body">
                <i class="fas fa-star star"></i>
                <i class="fas fa-star star"></i>
                <i class="fas fa-star star"></i>
                <i class="fas fa-star star"></i>
                <h5 class="card-title fw-bold mt-2">
                  Set 6 hũ: 2 hũ hương cam, 2 hũ hương dâu, 2 hũ hương vani
                </h5>
                <p class="card-text text-muted fw-bold">
                  Thành phần: Tổ yến, đường phèn, Canxi, DHA{" "}
                </p>
                <p class="card-text text-muted fw-bold">
                  {" "}
                  Hàm lượng yến: 1g tổ yến{" "}
                </p>

                <div className="d-flex">
                  <p class="text-danger fw-bold">1.800.000 đ</p>
                  <button
                    class="btn btn-outline-secondary  button-buy"
                    onClick={() => showDetailForm()}
                  >
                    Chi tiết
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
          <div class="col-md-4">
            <div class="card h-100 shadow-sm cardbody">
              <img
                src={yenHopImage}
                class="card-img-top"
                alt="Set quà hộp đứng 18 hũ YCS"
              />
              <div className="button-buy-in-image">
                <i class="fas fa-shopping-cart logo-buy-in-image"></i>
              </div>
              <div class="card-body">
                <i class="fas fa-star star"></i>
                <i class="fas fa-star star"></i>
                <i class="fas fa-star star"></i>
                <i class="fas fa-star star"></i>
                <h5 class="card-title fw-bold mt-2">
                  Set 6 hũ: 2 hũ hương cam, 2 hũ hương dâu, 2 hũ hương vani
                </h5>
                <p class="card-text text-muted fw-bold">
                  Thành phần: Tổ yến, đường phèn, Canxi, DHA{" "}
                </p>
                <p class="card-text text-muted fw-bold">
                  {" "}
                  Hàm lượng yến: 1g tổ yến{" "}
                </p>

                <div className="d-flex">
                  <p class="text-danger fw-bold">1.800.000 đ</p>
                  <button
                    class="btn btn-outline-secondary  button-buy"
                    onClick={() => showDetailForm()}
                  >
                    Chi tiết
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
          <div class="col-md-4">
            <div class="card h-100 shadow-sm cardbody">
              <img
                src={yenHopImage}
                class="card-img-top"
                alt="Set quà hộp đứng 18 hũ YCS"
              />
              <div className="button-buy-in-image">
                <i class="fas fa-shopping-cart logo-buy-in-image"></i>
              </div>
              <div class="card-body">
                <i class="fas fa-star star"></i>
                <i class="fas fa-star star"></i>
                <i class="fas fa-star star"></i>
                <i class="fas fa-star star"></i>
                <h5 class="card-title fw-bold mt-2">
                  Set 6 hũ: 2 hũ hương cam, 2 hũ hương dâu, 2 hũ hương vani
                </h5>
                <p class="card-text text-muted fw-bold">
                  Thành phần: Tổ yến, đường phèn, Canxi, DHA{" "}
                </p>
                <p class="card-text text-muted fw-bold">
                  {" "}
                  Hàm lượng yến: 1g tổ yến{" "}
                </p>

                <div className="d-flex">
                  <p class="text-danger fw-bold">1.800.000 đ</p>
                  <button
                    class="btn btn-outline-secondary  button-buy"
                    onClick={() => showDetailForm()}
                  >
                    Chi tiết
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 shadow-sm cardbody">
              <img
                src={yenHopImage}
                class="card-img-top"
                alt="Set quà hộp đứng 18 hũ YCS"
              />
              <div className="button-buy-in-image">
                <i class="fas fa-shopping-cart logo-buy-in-image"></i>
              </div>
              <div class="card-body">
                <i class="fas fa-star star"></i>
                <i class="fas fa-star star"></i>
                <i class="fas fa-star star"></i>
                <i class="fas fa-star star"></i>
                <h5 class="card-title fw-bold mt-2">
                  Set 6 hũ: 2 hũ hương cam, 2 hũ hương dâu, 2 hũ hương vani
                </h5>
                <p class="card-text text-muted fw-bold">
                  Thành phần: Tổ yến, đường phèn, Canxi, DHA{" "}
                </p>
                <p class="card-text text-muted fw-bold">
                  {" "}
                  Hàm lượng yến: 1g tổ yến{" "}
                </p>

                <div className="d-flex">
                  <p class="text-danger fw-bold">1.800.000 đ</p>
                  <button
                    class="btn btn-outline-secondary  button-buy"
                    onClick={() => showDetailForm()}
                  >
                    Chi tiết
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
          <div class="col-md-4">
            <div class="card h-100 shadow-sm cardbody">
              <img
                src={yenHopImage}
                class="card-img-top"
                alt="Set quà hộp đứng 18 hũ YCS"
              />
              <div className="button-buy-in-image">
                <i class="fas fa-shopping-cart logo-buy-in-image"></i>
              </div>
              <div class="card-body">
                <i class="fas fa-star star"></i>
                <i class="fas fa-star star"></i>
                <i class="fas fa-star star"></i>
                <i class="fas fa-star star"></i>
                <h5 class="card-title fw-bold mt-2">
                  Set 6 hũ: 2 hũ hương cam, 2 hũ hương dâu, 2 hũ hương vani
                </h5>
                <p class="card-text text-muted fw-bold">
                  Thành phần: Tổ yến, đường phèn, Canxi, DHA{" "}
                </p>
                <p class="card-text text-muted fw-bold">
                  {" "}
                  Hàm lượng yến: 1g tổ yến{" "}
                </p>

                <div className="d-flex">
                  <p class="text-danger fw-bold">1.800.000 đ</p>
                  <button
                    class="btn btn-outline-secondary  button-buy"
                    onClick={() => showDetailForm()}
                  >
                    Chi tiết
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 shadow-sm cardbody">
              <img
                src={yenHopImage}
                class="card-img-top"
                alt="Set quà hộp đứng 18 hũ YCS"
              />
              <div className="button-buy-in-image">
                <i class="fas fa-shopping-cart logo-buy-in-image"></i>
              </div>
              <div class="card-body">
                <i class="fas fa-star star"></i>
                <i class="fas fa-star star"></i>
                <i class="fas fa-star star"></i>
                <i class="fas fa-star star"></i>
                <h5 class="card-title fw-bold mt-2">
                  Set 6 hũ: 2 hũ hương cam, 2 hũ hương dâu, 2 hũ hương vani
                </h5>
                <p class="card-text text-muted fw-bold">
                  Thành phần: Tổ yến, đường phèn, Canxi, DHA{" "}
                </p>
                <p class="card-text text-muted fw-bold">
                  {" "}
                  Hàm lượng yến: 1g tổ yến{" "}
                </p>

                <div className="d-flex">
                  <p class="text-danger fw-bold">1.800.000 đ</p>
                  <button
                    class="btn btn-outline-secondary  button-buy"
                    onClick={() => showDetailForm()}
                  >
                    Chi tiết
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`product-detail ${showDetail ? "open" : ""}`}>
        
        <div class="container">
          <div class="container">
            <div class="card">
              <div
                className="button-close-product-detail"
                onClick={() => setShowDetail(false)}
              >
                <i class="fas fa-times-circle"></i>
              </div>
              <div class="container-fliud">
                <div class="wrapper row">
                  <div class="preview col-md-6">
                    <div class="preview-pic tab-content">
                      <div class="tab-pane active" id="pic-1">
                        <img src={yenHopImage} />
                      </div>
                      <div class="tab-pane" id="pic-2">
                        <img src={yenHopImage} />
                      </div>
                      <div class="tab-pane" id="pic-3">
                        <img src={yenHopImage} />
                      </div>
                      <div class="tab-pane" id="pic-4">
                        <img src={yenHopImage} />
                      </div>
                      <div class="tab-pane" id="pic-5">
                        <img src={yenHopImage} />
                      </div>
                    </div>
                    <ul class="preview-thumbnail nav nav-tabs">
                      <li class="active">
                        <a data-target="#pic-1" data-toggle="tab">
                          <img src={yenHopImage} />
                        </a>
                      </li>
                      <li>
                        <a data-target="#pic-2" data-toggle="tab">
                          <img src={yenHopImage} />
                        </a>
                      </li>
                      <li>
                        <a data-target="#pic-3" data-toggle="tab">
                          <img src={yenHopImage} />
                        </a>
                      </li>
                      <li>
                        <a data-target="#pic-4" data-toggle="tab">
                          <img src={yenHopImage} />
                        </a>
                      </li>
                      <li>
                        <a data-target="#pic-5" data-toggle="tab">
                          <img src={yenHopImage} />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="details col-md-6">
                    <h3 class="product-title">men's shoes fashion</h3>
                    <div class="rating">
                      <div class="stars">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                      </div>
                      <span class="review-no">41 reviews</span>
                    </div>
                    <p class="product-description">
                      Suspendisse quos? Tempus cras iure temporibus? Eu
                      laudantium cubilia sem sem! Repudiandae et! Massa senectus
                      enim minim sociosqu delectus posuere.
                    </p>
                    <h4 class="price">
                      current price: <span>$180</span>
                    </h4>
                    <p class="vote">
                      <strong>91%</strong> of buyers enjoyed this product!{" "}
                      <strong>(87 votes)</strong>
                    </p>
                    <h5 class="sizes">
                      sizes:
                      <span class="size" data-toggle="tooltip" title="small">
                        s
                      </span>
                      <span class="size" data-toggle="tooltip" title="medium">
                        m
                      </span>
                      <span class="size" data-toggle="tooltip" title="large">
                        l
                      </span>
                      <span
                        class="size"
                        data-toggle="tooltip"
                        title="xtra large"
                      >
                        xl
                      </span>
                    </h5>
                    <h5 class="colors">
                      colors:
                      <span
                        class="color orange not-available"
                        data-toggle="tooltip"
                        title="Not In store"
                      ></span>
                      <span class="color green"></span>
                      <span class="color blue"></span>
                    </h5>
                    <div class="action">
                      <button class="add-to-cart btn btn-default" type="button">
                        add to cart
                      </button>
                      <button class="like btn btn-default" type="button">
                        <span class="fa fa-heart"></span>
                      </button>
                    </div>
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
export default Product;
