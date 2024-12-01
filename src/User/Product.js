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

  fetch(`${config.API_ROOT}/Product`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("API Response:", data);
      setGetProduct(data);
    })
    .catch(
      (error) => {
        console.error("Fetch Error:", error.message);
      },
      [location]
    );

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
                    <button className="btn btn-outline-secondary button-buy">
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
