import React, { useState, useEffect } from "react";
import yenHopImage from "../Icons/image/yenchung.jpg";
import { Link, useNavigate } from "react-router-dom";

import "./Cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCartItems = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://htnest-emd3hyerfzc8edh5.southeastasia-01.azurewebsites.net/api/Cart/Get-Cart",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Thay bằng token thật của bạn
          },
        }
      );

      if (!response.ok) {
        throw new Error("Không thể tải dữ liệu giỏ hàng.");
      }

      const data = await response.json();
      setCartItems(data.cartItems || []);
      setTotalPrice(data.totalPrice || 0);
      setQuantity(data.cartItems.totalItems);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  // if (loading) {
  //   return <div>Đang tải dữ liệu giỏ hàng...</div>;
  // }

  // if (error) {
  //   return <div>Lỗi: {error}</div>;
  // }

  return (
    <div>
      <div class="cart-wrap">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 item-cart">
              <button className="clear-cart">Xóa tất cả</button>
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
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="display-flex align-center">
                            <div className="img-product">
                              <img
                                src={item.image || yenHopImage} // Nếu không có hình ảnh, dùng ảnh mặc định
                                alt={item.name}
                                className="mCS_img_loaded"
                              />
                            </div>
                            <div className="name-product">
                              {item.description}
                            </div>
                            {/* <div className="price">
                              {item.price.toLocaleString()} đ
                            </div> */}
                          </div>
                        </td>
                        <td className="product-count">
                          <form className="count-inlineflex">
                            <div className="qtyminus">-</div>
                            <input
                              type="text"
                              name="quantity"
                              value={quantity}
                              className="qty"
                              readOnly
                            />
                            <div className="qtyplus">+</div>
                          </form>
                        </td>
                        <td>
                          <div className="total-price-cart">
                            {totalPrice} đ
                          </div>
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              /* Hàm xóa sản phẩm ở đây */
                            }}
                          >
                            Xóa
                          </button>
                        </td>
                      </tr>
                    ))}
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
                    <Link to="/product">
                      <a href="" class="update round-black-btn" title="">
                        Thêm sản phẩm khác
                      </a>
                    </Link>

                    <a
                      href="/checkout"
                      class="checkout round-black-btn"
                      title=""
                    >
                      Hoàn thành thanh toán
                    </a>

                    {/* <div>
                      <marquee>8===D</marquee>
                </div> */}
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
