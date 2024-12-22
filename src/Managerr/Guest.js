import React, { useState, useEffect } from "react";
import config from "../config/config";
import { toast } from "react-toastify";


import "./Guest.css"


function Guest() {
    const [clickLogout, setClickLogout] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [post, setPosts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showModalUpdate, setShowModalUpdate] = useState(false);
    const token = localStorage.getItem("token");
    const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);



// Hàm xử lý chuyển trang
const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Tính toán vị trí bắt đầu và kết thúc của dữ liệu hiện tại
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = post.slice(indexOfFirstItem, indexOfLastItem);
  console.log(currentItems);
  // Hiển thị số trang
  const totalPages = Math.ceil(post.length / itemsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
    /*delete*/
    const deleteProduct = async (id) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
            try {
                const response = await fetch(`${config.API_ROOT}/Product/${id}`, {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                toast.success("Xóa sản phẩm thành công!");
                fetchGuests();
            } catch (error) {
                console.error("Lỗi khi xóa sản phẩm:", error);
                toast.error("Không thể xóa sản phẩm!");
            }
        }
    };

    /*---------*/
    const fetchGuests = async () => {
        try {
          const response = await fetch(`${config.API_ROOT}/User`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
    
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
    
          const products = await response.json();
          setPosts(products);
        } catch (error) {
          console.error("Lỗi khi tải danh sách sản phẩm:", error);
        }
      };
    const showModelUpdate = (product) => {
        console.log("check sản phẩm: " + product);

        setSelectedProduct(product);
        setShowModalUpdate(true);
    };
    const showModelAdd = async () => {
        setShowModal(true);
    };
    const handleLogoutClick = () => {
        setClickLogout(true);
    };
    return (
        <div className="guest">
            <i
                class="fas fa-sign-out-alt logout-in-product"
                style={{ fontSize: "23px", cursor: "pointer" }}
                onClick={handleLogoutClick}
            ></i>
            <div className="product-chill">
                <p className="title-table">Danh sách khách hàng</p>
                <div className="search">
                    <input
                        type="text"
                        name="goldId"
                        // value={}
                        // onChange={(e) => setGoldIdSearch(e.target.value)}
                        placeholder="Tìm Kiếm"
                    />
                </div>

                {/* <button className="addProductt" onClick={showModelAdd}>
                    <i className="fas fa-plus"></i>
                    <p>Thêm mới sản phẩm</p>
                </button> */}

                <table className="tableProduct">
                    <thead>
                        <tr>
                            {/* <th className="stt-product">STT</th> */}
                            <th>User Name</th>
                            <th>Họ và Tên</th>
                            <th>Ảnh</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th>Vai trò</th>
                            <th>Trạng thái</th>
                            <th>Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {post.map((post, index) => (
                            <tr key={index}>
                                <td>{post.userName}</td>
                                <td>{post.fullName}</td>
                                <td>
                                    <img
                                        style={{ width: "50px", height: "50px" }}
                                        className="product-img-luan"
                                        src={post.image}
                                        alt="{post.productName}"
                                    />
                                </td>
                                <td>{post.email}</td>

                                <td> {post.phoneNumber}</td>
                                <td> {post.role}</td>
                                <td> {post.status}</td>
                                <td>
                                    <div className="btn-group">
                                        <i
                                            class="fas fa-wrench update"
                                            onClick={() => showModelUpdate(post)}
                                        ></i>

                                        <i
                                            class="fas fa-trash-alt delete"
                                            onClick={() => deleteProduct(post.productId)}
                                        ></i>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="pagination-ll ">
                    {currentPage > 1 && (
                        <button
                            className="btn btn-primary pgn-product-manager-next "
                            onClick={() => handlePageChange(currentPage - 1)}
                        >
                            Previous
                        </button>
                    )}
                    {pageNumbers.map((pageNumber) => (
                        <button
                            key={pageNumber}
                            className={`pgn-product-manager btn btn-primary ${currentPage === pageNumber ? "active" : ""
                                }`}
                            onClick={() => handlePageChange(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    ))}
                    {currentPage < totalPages && (
                        <button
                            className="btn btn-primary pgn-product-manager-back"
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            Next
                        </button>
                    )}
                </div>
            </div>

        </div>)
}
export default Guest;