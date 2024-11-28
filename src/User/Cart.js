import React, { useState, useEffect } from "react";
import yenHopImage from "../Icons/image/yenchung.jpg";
import { Link, useNavigate } from "react-router-dom";

import "./Cart.css";

function Cart() {
  return (
    <div>
      <div class="cart-wrap">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="main-heading">Giỏ hàng</div>
              <div class="table-cart">
                <table>
                  <thead>
                    <tr>
                      <th>Sản phẩm</th>
                      <th>Số lượng</th>
                      <th>Tổng</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="display-flex align-center">
                          <div class="img-product">
                            <img
                              src={yenHopImage}
                              alt=""
                              class="mCS_img_loaded"
                            />
                          </div>
                          <div class="name-product">Yến hộp</div>
                          <div class="price">1.000.000</div>
                        </div>
                      </td>
                      <td class="product-count">
                        <form action="#" class="count-inlineflex">
                          <div class="qtyminus">-</div>
                          <input
                            type="text"
                            name="quantity"
                            value="1"
                            class="qty"
                          />
                          <div class="qtyplus">+</div>
                        </form>
                      </td>
                      <td>
                        <div class="total">1.000.000</div>
                      </td>
                      <td>
                        <a href="#" title="">
                          <img
                            src="images/icons/delete.png"
                            alt=""
                            class="mCS_img_loaded"
                          />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="display-flex align-center">
                          <div class="img-product">
                            <img
                              src={yenHopImage}
                              alt=""
                              class="mCS_img_loaded"
                            />
                          </div>
                          <div class="name-product">Yến hộp</div>
                          <div class="price">1.000.000</div>
                        </div>
                      </td>
                      <td class="product-count">
                        <form action="#" class="count-inlineflex">
                          <div class="qtyminus">-</div>
                          <input
                            type="text"
                            name="quantity"
                            value="1"
                            class="qty"
                          />
                          <div class="qtyplus">+</div>
                        </form>
                      </td>
                      <td>
                        <div class="total">1.000.000</div>
                      </td>
                      <td>
                        <a href="#" title="">
                          <img
                            src="images/icons/delete.png"
                            alt=""
                            class="mCS_img_loaded"
                          />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="display-flex align-center">
                          <div class="img-product">
                            <img
                              src={yenHopImage}
                              alt=""
                              class="mCS_img_loaded"
                            />
                          </div>
                          <div class="name-product">Yến hộp</div>
                          <div class="price">1.000.000</div>
                        </div>
                      </td>
                      <td class="product-count">
                        <form action="#" class="count-inlineflex">
                          <div class="qtyminus">-</div>
                          <input
                            type="text"
                            name="quantity"
                            value="1"
                            class="qty"
                          />
                          <div class="qtyplus">+</div>
                        </form>
                      </td>
                      <td>
                        <div class="total">1.000.000</div>
                      </td>
                      <td>
                        <a href="#" title="">
                          <img
                            src="images/icons/delete.png"
                            alt=""
                            class="mCS_img_loaded"
                          />
                        </a>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
                <div class="coupon-box">
                  <form action="#" method="get" accept-charset="utf-8">
                    <div class="coupon-input">
                      <input
                        type="text"
                        name="coupon code"
                        placeholder="Mã giảm giá"
                      />
                      <button type="submit" class="round-black-btn">
                        Chọn mã
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="cart-totals">
                <h3>Tổng giỏ hàng</h3>
                <form action="#" method="get" accept-charset="utf-8">
                  <table>
                    <tbody>
                      <tr>
                        <td>Tổng tiền thanh toán</td>
                        <td class="subtotal">3.000.000</td>
                      </tr>
                      <tr>
                        <td>Phí vận chuyển</td>
                        <td class="free-shipping">Miễn phí</td>
                      </tr>
                      <tr class="total-row">
                        <td>Tổng</td>
                        <td class="price-total">3.000.000</td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="btn-cart-totals">
                <Link to = "/product">
                    <a href="" class="update round-black-btn" title="">
                      Thêm sản phẩm khác
                    </a>
                </Link>
                    <a href="#" class="checkout round-black-btn" title="">
                      Hoàn thành thanh toán
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
