import "./Product.css"
import React from "react";
import yenHopImage from '../Icons/image/yenchung.jpg';

function Product() {

    return (
        <div className="body">
            <div class="container py-4">
                <div class="row g-4">

                    <div class="col-md-4">
                        <div class="card h-100 shadow-sm cardbody">
                            <img src={yenHopImage} class="card-img-top" alt="Set quà hộp đứng 18 hũ YCS" />
                            <div className="button-buy-in-image">
                                <i class="fas fa-shopping-cart logo-buy-in-image"></i>
                            </div>
                            <div class="card-body">
                                <i class="fas fa-star star"></i>
                                <i class="fas fa-star star"></i>
                                <i class="fas fa-star star"></i>
                                <i class="fas fa-star star"></i>
                                <h5 class="card-title fw-bold mt-2">Set 6 hũ: 2 hũ hương cam, 2 hũ hương dâu, 2 hũ hương vani</h5>
                                <p class="card-text text-muted fw-bold">Thành phần: Tổ yến, đường phèn, Canxi, DHA </p>
                                <p class="card-text text-muted fw-bold"> Hàm lượng yến: 1g tổ yến </p>

                                <div className="d-flex">
                                    <p class="text-danger fw-bold">1.800.000 đ</p>
                                    <button class="btn btn-outline-secondary button-buy">Chi tiết</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card h-100 shadow-sm cardbody">
                            <img src={yenHopImage} class="card-img-top" alt="Set quà hộp đứng 18 hũ YCS" />
                            <div className="button-buy-in-image">
                                <i class="fas fa-shopping-cart logo-buy-in-image"></i>
                            </div>
                            <div class="card-body">
                                <i class="fas fa-star star"></i>
                                <i class="fas fa-star star"></i>
                                <i class="fas fa-star star"></i>
                                <i class="fas fa-star star"></i>
                                <h5 class="card-title fw-bold mt-2">Set 6 hũ: 2 hũ hương cam, 2 hũ hương dâu, 2 hũ hương vani</h5>
                                <p class="card-text text-muted fw-bold">Thành phần: Tổ yến, đường phèn, Canxi, DHA </p>
                                <p class="card-text text-muted fw-bold"> Hàm lượng yến: 1g tổ yến </p>

                                <div className="d-flex">
                                    <p class="text-danger fw-bold">1.800.000 đ</p>
                                    <button class="btn btn-outline-secondary button-buy">Chi tiết</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card h-100 shadow-sm cardbody">
                            <img src={yenHopImage} class="card-img-top" alt="Set quà hộp đứng 18 hũ YCS" />
                            <div className="button-buy-in-image">
                                <i class="fas fa-shopping-cart logo-buy-in-image"></i>
                            </div>
                            <div class="card-body">
                                <i class="fas fa-star star"></i>
                                <i class="fas fa-star star"></i>
                                <i class="fas fa-star star"></i>
                                <i class="fas fa-star star"></i>
                                <h5 class="card-title fw-bold mt-2">Set 6 hũ: 2 hũ hương cam, 2 hũ hương dâu, 2 hũ hương vani</h5>
                                <p class="card-text text-muted fw-bold">Thành phần: Tổ yến, đường phèn, Canxi, DHA </p>
                                <p class="card-text text-muted fw-bold"> Hàm lượng yến: 1g tổ yến </p>

                                <div className="d-flex">
                                    <p class="text-danger fw-bold">1.800.000 đ</p>
                                    <button class="btn btn-outline-secondary button-buy">Chi tiết</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card h-100 shadow-sm cardbody">
                            <img src={yenHopImage} class="card-img-top" alt="Set quà hộp đứng 18 hũ YCS" />
                            <div className="button-buy-in-image">
                                <i class="fas fa-shopping-cart logo-buy-in-image"></i>
                            </div>
                            <div class="card-body">
                                <i class="fas fa-star star"></i>
                                <i class="fas fa-star star"></i>
                                <i class="fas fa-star star"></i>
                                <i class="fas fa-star star"></i>
                                <h5 class="card-title fw-bold mt-2">Set 6 hũ: 2 hũ hương cam, 2 hũ hương dâu, 2 hũ hương vani</h5>
                                <p class="card-text text-muted fw-bold">Thành phần: Tổ yến, đường phèn, Canxi, DHA </p>
                                <p class="card-text text-muted fw-bold"> Hàm lượng yến: 1g tổ yến </p>

                                <div className="d-flex">
                                    <p class="text-danger fw-bold">1.800.000 đ</p>
                                    <button class="btn btn-outline-secondary  button-buy">Chi tiết</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default Product;