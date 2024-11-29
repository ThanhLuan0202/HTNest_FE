import React from "react";
import "./Checkout.css";
import { Link, useNavigate } from "react-router-dom";
import yenHopImage from "../Icons/image/yenchung.jpg";

function Checkout() {
  return (
    <div>
      <div className="checkout">
        <div className="checkout-child">
          <table
            className="table text-center align-middle table-checkout"
            style={{ height: "100px", width: "90%" }}
          >
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên Sản Phẩm</th>
                <th>Số Lượng</th>
                <th>Giá tiền</th>
              </tr>
            </thead>
            <tbody>
              <tr className="item-checkout">
                <td className="align-middle">1</td>
                <td>
                  <img
                    src={yenHopImage}
                    style={{ width: "50px", borderRadius: "10px" }}
                  />{" "}
                  Yến hộp
                </td>
                <td>2</td>
                <td>1.000.000</td>
              </tr>
              <tr className="item-checkout">
                <td className="align-middle">1</td>
                <td>
                  <img
                    src={yenHopImage}
                    style={{ width: "50px", borderRadius: "10px" }}
                  />{" "}
                  Yến hộp
                </td>
                <td>2</td>
                <td>1.000.000</td>
              </tr>
              <tr className="item-checkout">
                <td className="align-middle">1</td>
                <td>
                  <img
                    src={yenHopImage}
                    style={{ width: "50px", borderRadius: "10px" }}
                  />{" "}
                  Yến hộp
                </td>
                <td>2</td>
                <td>1.000.000</td>
              </tr>
              <tr className="item-checkout">
                <td className="align-middle">1</td>
                <td>
                  <img
                    src={yenHopImage}
                    style={{ width: "50px", borderRadius: "10px" }}
                  />{" "}
                  Yến hộp
                </td>
                <td>2</td>
                <td>1.000.000</td>
              </tr>
              <tr className="item-checkout">
                <td className="align-middle">1</td>
                <td>
                  <img
                    src={yenHopImage}
                    style={{ width: "50px", borderRadius: "10px" }}
                  />{" "}
                  Yến hộp
                </td>
                <td>2</td>
                <td>1.000.000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="infomation">
        <div className="infomation-guest d-flex">
          <div className="left-infomation-detail d-flex">
            <table
              className="table text-center align-middle"
              style={{ height: "100px", width: "90%" }}
            >
              <thead>
                <th>Tên người nhận</th>
                <th>Số điện thoại</th>
                <th>Địa chỉ nhận hàng</th>
              </thead>
              <tbody>
                <td>Nguyễn Thành Luân</td>
                <td>0842004200</td>
                <td>Vinhomes Grand Park Q9</td>
                <td>
                  <button className="button-change">
                    <span>
                      <i class="fas fa-exchange-alt"></i>
                    </span>
                  </button>
                </td>
              </tbody>
            </table>
          </div>
          <div className="right-infomation-detail">
            <p>
              <span className="infomation-detail">Tổng tiền hành: </span>
              <p className="st">5.000.000</p>
            </p>
            <p>
              <span className="infomation-detail">Tổng phí vận chuyển: </span>
              <p className="st">25.000</p>
            </p>
            <p>
              <span className="infomation-detail">Tổng thanh toán: </span>
              <p className="st">5.025.000</p>
            </p>

            <button className="button-checkout">
              <i class="fas fa-shopping-bag"></i> Đặt hàng
            </button>
          </div>

          {/* <div className="infomation-guest">
          <div class="input-group">
            <input class="button--submit" value="Tên người nhận:" type="submit" />
            <input
              type="email"
              class="inputs"
              id="Email"
              name="Email"
              placeholder=""
              autocomplete="off"
            />
          </div>
          <div class="input-group">
            <input class="button--submit" value="Số điện thoại:" type="submit" />
            <input
              type="email"
              class="inputs"
              id="Email"
              name="Email"
              placeholder=""
              autocomplete="off"
            />
          </div>
          <div class="input-group">
            <input class="button--submit" value="Địa chỉ:" type="submit" />
            <input
              type="email"
              class="inputs"
              id="Email"
              name="Email"
              placeholder=""
              autocomplete="off"
            />
          </div>
          <div class="input-group">
            <input class="button--submit" value="Tổng tiền hàng:" type="submit" />
            <input
              type="email"
              class="inputs"
              id="Email"
              name="Email"
              placeholder=""
              autocomplete="off"
            />
          </div>
          <div class="input-group">
            <input class="button--submit" value="Tổng phí vận chuyển: " type="submit" />
            <input
              type="email"
              class="inputs"
              id="Email"
              name="Email"
              placeholder=""
              autocomplete="off"
            />
          </div>
          <div class="input-group">
            <input class="button--submit" value="Tổng thanh toán:" type="submit" />
            <input
              type="email"
              class="inputs"
              id="Email"
              name="Email"
              placeholder=""
              autocomplete="off"
            />
          </div>
          

          <button className="button-checkout">Đặt hàng</button>
        </div> */}
        </div>
      </div>
    </div>
  );
}
export default Checkout;
