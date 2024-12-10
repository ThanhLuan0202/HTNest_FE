import "./Product.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config/config.js";
import { useLocation } from "react-router-dom";
import yenHopImage from "../Icons/image/yenchung.jpg";

function Product() {
  const [showDetail, setShowDetail] = useState(false);
  const [getProduct, setGetProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productDetail, setProductDetail] = useState([]);

  const itemsPerPage = 9;

  const [editingPost, setEditingPost] = useState([]);
  const token = localStorage.getItem("token");
  const location = useLocation();
  // const showDetailForm = () => {
  //   setShowDetail(true);
  // };

  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = getProduct.slice(indexOfFirstItem, indexOfLastItem);

  // // Hiển thị số trang
  // const totalPages = Math.ceil(getProduct.length / itemsPerPage);
  // const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  // for (let i = 1; i <= totalPages; i++) {
  //   pageNumbers.push(i);
  // }
  const showProductDetail = async (product) => {
    setShowDetail(true);
    setProductDetail(product);
  };
  const addToCard = async (productId) => {
    const apiUrl = "https://your-api-endpoint.com/cart"; // Thay bằng endpoint thực tế của bạn

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Nếu API yêu cầu token
        },
        body: JSON.stringify(productId),
      });

      if (!response.ok) {
        throw new Error(`Failed to add product to cart: ${response.status}`);
      }

      const data = await response.json();
      console.log("Product added to cart successfully:", data);
      alert("Product added to cart successfully!");
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert("Failed to add product to cart. Please try again!");
    }
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${config.API_ROOT}/Product`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setGetProduct(data); // Cập nhật danh sách sản phẩm
      } catch (error) {
        console.error("Fetch Error:", error.message);
      }
    };

    fetchProducts();
  }, []);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = getProduct.slice(indexOfFirstItem, indexOfLastItem);

  // Tổng số trang
  const totalPages = Math.ceil(getProduct.length / itemsPerPage);

  // Thay đổi trang
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="body">
      <div class="container py-4">
        <div class="row g-4">
          {currentItems.map((product) => (
            <div className="col-md-4" key={product.id}>
              <div className="card h-100 shadow-sm cardbody">
                <img
                  src={product.image || "placeholder.jpg"}
                  className="card-img-top image-product"
                  alt={product.productName}
                />
                <div className="button-buy-in-image">
                  <i className="fas fa-shopping-cart logo-buy-in-image"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold mt-2">
                    {product.ingredient}
                  </h5>
                  <p className="card-text text-muted fw-bold">
                    <span>Thành phần: </span>
                    {product.ingredient}
                  </p>
                  <p className="card-text text-muted fw-bold">
                    <span> Hàm lượng yến: </span>
                    {product.volume}g tổ yến
                  </p>
                  <div className="d-flex">
                    <p className="text-danger fw-bold ">{product.price} đ</p>
                    <button
                      className="btn btn-outline-secondary button-buy"
                      onClick={() => showProductDetail(product)}
                    >
                      Chi tiết
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination-l">
          {currentPage > 1 && (
            <button
              className="btn btn-primary pagination-button button-revious"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
          )}

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                className={`btn btn-primary pagination-button ${
                  currentPage === pageNumber ? "active" : ""
                }`}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            )
          )}

          {currentPage < totalPages && (
            <button
              className="btn btn-primary pagination-button"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          )}
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
                        <img
                          src={productDetail.image}
                          style={{ width: "500px" }}
                        />
                      </div>
                    </div>
                    {/* <ul class="preview-thumbnail nav nav-tabs">
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
                    </ul> */}
                  </div>
                  <div class="details col-md-6">
                    <h3 class="product-title">{productDetail.productName}</h3>
                    <div class="rating">
                      <div class="stars">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                      </div>
                    </div>

                    <p className="card-text text-muted fw-bold">
                      <span>
                        <i class="fas fa-minus"></i> Mô tả:{" "}
                      </span>
                      {productDetail.description}
                    </p>
                    <p className="card-text text-muted fw-bold">
                      <span>
                        <i class="fas fa-minus"></i> Thành phần:{" "}
                      </span>
                      {productDetail.ingredient}
                    </p>
                    <p className="card-text text-muted fw-bold">
                      <span>
                        <i class="fas fa-minus"></i> Hàm lượng yến:{" "}
                      </span>
                      {productDetail.volume}g tổ yến
                    </p>
                    <p className="card-text text-muted fw-bold">
                      <span>
                        <i class="fas fa-minus"></i> Cảnh báo:{" "}
                      </span>
                      {productDetail.warning}g tổ yến
                    </p>
                    <p className="card-text text-muted fw-bold">
                      <span>
                        <i class="fas fa-minus"></i> Hạn sử dụng:{" "}
                      </span>
                      Hiện in trên bao bì sản phẩm
                    </p>
                    <p className="card-text text-muted fw-bold">
                      <span>
                        <i class="fas fa-minus"></i> Hướng dẫn bảo quản:{" "}
                      </span>
                      Bảo quản nơi khô thoáng, tránh ánh nắng mặt trời hoặc ngăn
                      mát tủ lạnh.
                    </p>

                    <h4 class="price price-detail-product">
                      Giá tiền: <span>{productDetail.price} VND</span>
                    </h4>

                    <div class="action">
                      <button class="add-to-cart btn btn-default" type="button" onClick={() => addToCard(productDetail.productCode)}>
                        Thêm vào giỏ hàng
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
