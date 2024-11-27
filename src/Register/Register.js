import React from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <div className="register-child">
        <form class="formm">
          <p class="title">Đăng Ký </p>

          <div className="d-flex left-right ">
            <div className="register-child-left">
              <label>
                <span className="x">Email</span>

                <input required="" placeholder="" type="email" class="input" />
              </label>

              <label>
                <span className="x">Họ và Tên</span>

                <input
                  required=""
                  placeholder=""
                  type="Full Name"
                  class="input"
                />
              </label>
              <label>
                <span className="x">Số điện thoại</span>

                <input
                  required=""
                  placeholder=""
                  type="Full Name"
                  class="input"
                />
              </label>
              <label>
                <span className="x">Ngày sinh</span>

                <input required="" placeholder="" type="date" class="input" />
              </label>
            </div>
            <div className="register-child-right">
            <label>
                <span className="x">Tên người dùng</span>

                <input
                  required=""
                  placeholder=""
                  type="Full Name"
                  class="input"
                />
              </label>
              <label>
                <span className="x">Password</span>

                <input
                  required=""
                  placeholder=""
                  type="password"
                  class="input"
                />
              </label>
              <label>
                <span className="x">Confirm password</span>

                <input
                  required=""
                  placeholder=""
                  type="password"
                  class="input"
                />
              </label>
              <button class="submit submit-butoon">Submit</button>
            <Link to="/login">
              <p class="signin">
                Bạn đã có tài khoản ? <a href="#">Đăng Nhập</a>{" "}
              </p>
            </Link>
            </div>
            
          </div>
        </form>
      </div>
    </div>
  );
}
export default Register;
