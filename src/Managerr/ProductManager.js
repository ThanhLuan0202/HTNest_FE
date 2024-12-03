import React, { useState, useEffect } from "react";
import config from "../config/config";
import "./ProductManager.css";

function ProductManager() {
  const [post, setPosts] = useState([]);
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
  useEffect(() => {
    fetch(
      `${config.API_ROOT}/Product`
      // , {
      //   // headers: {
      //   //   Authorization: `Bearer ${token}`
      //   // }
      // }
    )
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
        // setPostCount(posts.length);
      });
  }, []);
  return (
    <div className="productManager">
      <div className="product-chill">
        <p className="title-table">Danh sách sản phẩm</p>
        <div className="search">
          <input
            type="text"
            name="goldId"
            // value={}
            // onChange={(e) => setGoldIdSearch(e.target.value)}
            placeholder="Tìm Kiếm"
          />
        </div>

        <button className="addProductt">
          <i className="fas fa-plus"></i>
          <p>Thêm mới sản phẩm</p>
        </button>

        <table className="tableProduct">
          <thead>
            <tr>
              {/* <th className="stt-product">STT</th> */}
              <th>Mã Sản Phẩm</th>
              <th>Tên Sản Phẩm</th>
              <th>Ảnh</th>
              <th>Số Lượng</th>
              <th>Thành Tiền</th>
              <th>Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            {post.map((post, index) => (
              <tr key={index}>
                <td>{post.productCode}</td>
                <td>{post.productName}</td>
                <td>
                  <img
                    style={{ width: "100px" }}
                    className="product-img-luan"
                    src={post.image}
                    alt="{post.productName}"
                  />
                </td>
                <td>{post.stockQuantity}</td>

                <td> {post.price} VND</td>

                <td>
                  <div className="btn-group">
                    <i class="fas fa-wrench update"></i>

                    <i class="fas fa-trash-alt delete"></i>
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
              className={`pgn-product-manager btn btn-primary ${
                currentPage === pageNumber ? "active" : ""
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
    </div>
  );
}

export default ProductManager;
