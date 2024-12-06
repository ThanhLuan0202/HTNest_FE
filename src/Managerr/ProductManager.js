import React, { useState, useEffect } from "react";
import config from "../config/config";
import "./ProductManager.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
function ProductManager() {
  const [post, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);

  const [category, setCategory] = useState([]);
  const [style, setStyle] = useState([]);
  const token = localStorage.getItem("token");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [clickLogout, setClickLogout] = useState(false);

  useEffect(() => {
    if (clickLogout) {
      const logout = async () => {
        try {
          const response = await fetch(`${config.API_ROOT}/Authen/logout`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`, // Gửi token nếu cần
            },
          });

          if (!response.ok) {
            throw new Error("Logout failed");
          }

          // Xử lý thành công
          localStorage.removeItem("token");
          localStorage.removeItem("name");
          toast.success("Đăng xuất thành công");
          window.location.href = "/"; // Redirect về trang chủ
        } catch (error) {
          console.error("Logout error:", error);
          toast.error("Đăng xuất không thành công, vui lòng thử lại!");
        } finally {
          setClickLogout(false); // Reset trạng thái
        }
      };

      logout();
    }
  }, [clickLogout]);
  useEffect(() => {
    fetch(`${config.API_ROOT}/Style`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const contentType = res.headers.get("Content-Type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Response is not JSON");
        }
        return res.json();
      })
      .then((style) => {
        setStyle(style);
      })
      .catch((error) => {
        console.error("Error fetching styles:", error);
      });
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${config.API_ROOT}/Category`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setCategory(data);
    } catch (error) {
      console.error("Fetch Error:", error.message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

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
  const showModelAdd = async () => {
    setShowModal(true);
  };
  const showModelUpdate = (product) => {
    console.log("check sản phẩm: " + product);

    setSelectedProduct(product);
    setShowModalUpdate(true);
  };
  const HandleCloseModelAdd = async () => {
    setShowModal(false);
  };
  const HandleCloseModelUpdate = async () => {
    setShowModalUpdate(false);
  };
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
  /*add*/
  const addProduct = async (event) => {
    event.preventDefault();
    console.log("ccc" + token);
    console.log("code :" + event.target.productCode.value);
    category.forEach((item, index) => {
      console.log(`Category ${index}:`, item);
    });
    const formElements = event.target.elements;
    const productData = {
      productCode: formElements.productCode?.value || "",
      productName: formElements.productName?.value || "",
      description: formElements.description?.value || "",
      quantityStock: formElements.quantityStock?.value || 0,
      discount: formElements.discount?.value || 0,
      image: formElements.image?.files[0] || null,
      ingredient: formElements.ingredient?.value || "",
      warning: formElements.warning?.value || "",
      categoryId: formElements.categoryID?.value || "",
      price: formElements.price?.value || 0,
      styleId: formElements.StyleId?.value || "",
      volume: formElements.Volume?.value || 0,
    };

    try {
      const formData = new FormData();
      Object.entries(productData).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const response = await fetch(`${config.API_ROOT}/Product`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Thêm sản phẩm thành công:", result);
      toast.success("Thêm sản phẩm thành công!");
      setShowModal(false);

      fetchProducts();
    } catch (error) {
      console.error("Lỗi khi thêm sản phẩm:", error);
      toast.error("Thêm sản phẩm thành công!");
    }
  };
  const fetchProducts = async () => {
    try {
      const response = await fetch(`${config.API_ROOT}/Product`, {
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
  useEffect(() => {
    fetchProducts();
  }, []);
  /*------------*/
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
        fetchProducts();
      } catch (error) {
        console.error("Lỗi khi xóa sản phẩm:", error);
        toast.error("Không thể xóa sản phẩm!");
      }
    }
  };

  /*---------*/
  /*update*/
  const updateProduct = async (event) => {
    event.preventDefault();

    const productData = {
      image: event.target.image.files[0], // Upload file ảnh
      productName: event.target.productName.value,
      description: event.target.description.value,
      stockQuantity: event.target.quantityStock.value,
      discount: event.target.discount.value,
      ingredient: event.target.ingredient.value,
      warning: event.target.warning.value,
      categoryId: event.target.categoryID.value,
      styleId: event.target.StyleId.value,
      price: event.target.price.value,
      volume: event.target.Volume.value,
    };

    try {
      const formData = new FormData();
      Object.entries(productData).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const response = await fetch(
        `${config.API_ROOT}/Product/${selectedProduct.productId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      toast.success("Cập nhật sản phẩm thành công!");
      setShowModalUpdate(false);
      fetchProducts();
    } catch (error) {
      console.error("Lỗi khi cập nhật sản phẩm:", error);
      toast.error("Không thể cập nhật sản phẩm!");
    }
  };
  const showModelUpdatee = (product) => {
    setSelectedProduct(product); // Lưu thông tin sản phẩm vào state
    setShowModalUpdate(true); // Hiển thị modal
  };
  const handleLogoutClick = () => {
    setClickLogout(true);
  };
  /*--------*/
  return (
    <div className="productManager">
      <i
        class="fas fa-sign-out-alt logout-in-product"
        style={{ fontSize: "23px", cursor: "pointer" }}
        onClick={handleLogoutClick}
      ></i>
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

        <button className="addProductt" onClick={showModelAdd}>
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
                    style={{ width: "50px", height: "50px" }}
                    className="product-img-luan"
                    src={post.image}
                    alt="{post.productName}"
                  />
                </td>
                <td>{post.stockQuantity}</td>

                <td> {post.price} VND</td>

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
      <div className={`modal-product ${showModal ? "open" : ""}`}>
        <div className="modal-product-child">
          <header className="modal-product-header">
            <div
              className="modal-product-closee closeAddxxx"
              onClick={HandleCloseModelAdd}
            >
              <i className="fas fa-times-circle"></i>
            </div>
            <p className="tspm">Thêm Mới Sản Phẩm Mới</p>
          </header>
          <div className="body-child">
            <form onSubmit={addProduct}>
              <div className="modal-product-form">
                <div className="modal-product-left">
                  <div className="d-flex">
                    <label
                      htmlFor="productCode"
                      className="modal-product-label"
                    >
                      Mã Sản Phẩm
                    </label>
                    <input
                      type="text"
                      id="productCode"
                      className="modal-product-input"
                      name="productCode"
                      // value={formik.values.productCode}
                      // onChange={formik.handleChange}
                      // onBlur={formik.handleBlur}
                      placeholder=""
                    />
                  </div>
                  {/* {formik.touched.productCode && formik.errors.productCode ? (
                    <span className="error lui">{formik.errors.productCode}</span>
                  ) : null} */}
                  <div className="d-flex cpn">
                    <label
                      htmlFor="productName"
                      className="modal-product-label"
                    >
                      Tên Sản Phẩm
                    </label>
                    <input
                      type="text"
                      id="productName"
                      className="modal-product-input"
                      name="productName"
                      // value={formik.values.productName}
                      // onChange={formik.handleChange}
                      // onBlur={formik.handleBlur}
                      placeholder=""
                    />
                  </div>
                  {/* {formik.touched.productName && formik.errors.productName ? (
                    <span className="error lui">{formik.errors.productName}</span>
                  ) : null} */}
                  <div className="d-flex cpn">
                    <label
                      htmlFor="description"
                      className="modal-product-label"
                    >
                      Mô Tả
                    </label>
                    <input
                      type="description"
                      id="description"
                      className="modal-product-input"
                      name="description"
                      // value={formik.values.description}
                      // onChange={formik.handleChange}
                      // onBlur={formik.handleBlur}
                      placeholder=""
                    />
                  </div>

                  <div className="chiVang">
                    <div className="d-flex cpn">
                      <label
                        htmlFor="goldWeight"
                        className="modal-product-label"
                      >
                        Số lượng
                      </label>
                      <input
                        type="number"
                        id="quantityStock"
                        name="quantityStock"
                        // value={formik.values.quantityStock}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        className="modal-product-input"
                        placeholder=""
                        step="0.1"
                      />
                    </div>
                  </div>
                  {/* {formik.touched.goldWeight && formik.errors.goldWeight ? (
                    <span className="error lui">{formik.errors.goldWeight}</span>
                  ) : null} */}
                  <div className="chiVang">
                    <div className="d-flex cpn">
                      <label
                        htmlFor="goldWeight"
                        className="modal-product-label"
                      >
                        Giảm giá
                      </label>
                      <input
                        type="number"
                        id="discount"
                        name="discount"
                        // value={formik.values.discount}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        className="modal-product-input"
                        placeholder=""
                        step="0.1"
                      />
                    </div>
                  </div>
                  <div className="d-flex cpn">
                    <label htmlFor="image" className="modal-product-label">
                      Ảnh
                    </label>
                    <div className="modal-product-image-upload">
                      <input
                        type="file"
                        className="modal-product-image-input"
                        id="image"
                        name="image"
                      // onChange={(event) => {
                      //   formik.setFieldValue(
                      //     "image",
                      //     event.currentTarget.files[0]
                      //   );
                      // }}
                      // onBlur={formik.handleBlur}
                      />
                    </div>
                  </div>
                  {/* {formik.touched.image && formik.errors.image ? (
                    <span className="error lui">{formik.errors.image}</span>
                  ) : null} */}
                </div>
                <div className="modal-product-right">
                  <div className="d-flex cpn">
                    <label htmlFor="size" className="modal-product-label">
                      Nguyên liệu
                    </label>
                    <input
                      type="text"
                      id="ingredient"
                      name="ingredient"
                      // value={formik.values.ingredient}
                      // onChange={formik.handleChange}
                      // onBlur={formik.handleBlur}
                      className="modal-product-input"
                      placeholder=""
                    />
                  </div>

                  {/* {formik.touched.size && formik.errors.size ? (
                    <span className="error lui">{formik.errors.size}</span>
                  ) : null} */}

                  <div className="d-flex cpn">
                    <label htmlFor="quantity" className="modal-product-label">
                      Cảnh báo
                    </label>
                    <input
                      type="text"
                      id="warning"
                      className="modal-product-input"
                      name="warning"
                      // value={formik.values.warning}
                      // onChange={formik.handleChange}
                      // onBlur={formik.handleBlur}
                      placeholder=""
                    />
                  </div>

                  {/* {formik.touched.quantity && formik.errors.quantity ? (
                    <span className="error lui">{formik.errors.quantity}</span>
                  ) : null} */}

                  <label htmlFor="categoryId" className="modal-product-label ">
                    Danh Mục
                    <div className="combobox comboboxDm">
                      <select
                        id="categoryID"
                        name="categoryID"
                        // value={formik.values.categoryId}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        className="modal-product-select"
                      >
                        <option value="" defaultValue disabled>
                          Danh Mục
                        </option>
                        {category.map((category, index) => (
                          <option key={index} value={category.categoryID}>
                            {category.categoryName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </label>
                  {/* {formik.touched.wage && formik.errors.wage ? (
                    <span className="error lui">{formik.errors.wage}</span>
                  ) : null} */}
                  <div className="tienCong">
                    <div className="d-flex cpn">
                      <label htmlFor="price" className="modal-product-label">
                        Giá Sản Phẩm
                      </label>
                      <input
                        type="number"
                        id="price"
                        name="price"
                        className="modal-product-input"
                        // value={formik.values.price}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* {formik.touched.price && formik.errors.price ? (
                    <span className="error lui">{formik.errors.price}</span>
                  ) : null} */}
                  <label htmlFor="categoryId" className="modal-product-label ">
                    Thể loại
                    <div className="combobox comboboxDm">
                      <select
                        id="StyleId"
                        name="StyleId"
                        // value={formik.values.StyleId}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        className="modal-product-select"
                      >
                        <option value="" defaultValue disabled>
                          Thể Loại
                        </option>
                        {style.map((style, index) => (
                          <option key={index} value={style.styleId}>
                            {style.styleName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </label>
                  {/* {formik.touched.warrantyPeriod && formik.errors.warrantyPeriod ? (
                    <span className="error lui">{formik.errors.warrantyPeriod}</span>
                  ) : null} */}
                  <div className="baoHanh">
                    <div className="d-flex cpn">
                      <label
                        htmlFor="warrantyPeriod"
                        className="modal-product-label"
                      >
                        Khối lượng
                      </label>
                      <input
                        type="number"
                        id="Volume"
                        className="modal-product-input"
                        name="Volume"
                        // value={formik.values.Volume}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* {formik.touched.warrantyPeriod && formik.errors.warrantyPeriod ? (
                    <span className="error lui">{formik.errors.warrantyPeriod}</span>
                  ) : null} */}
                </div>
              </div>

              <div className="footer-child">
                {" "}
                <button id="create-pro" type="submit">
                  Tạo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className={`modal-product-update ${showModalUpdate ? "open" : ""}`}>
        <div className="modal-product-child">
          <header className="modal-product-update-header">
            <div
              className="modal-product-update-closee closeAddxxx"
              onClick={HandleCloseModelUpdate}
            >
              <i className="fas fa-times-circle"></i>
            </div>
            <p className="tspm">Cập nhật sản phẩm</p>
          </header>
          <div className="body-child">
            <form onSubmit={updateProduct}>
              <div className="modal-product-update-form">
                <div className="modal-product-update-left">
                  <div className="d-flex cpn">
                    <label
                      htmlFor="productName"
                      className="modal-product-update-label"
                    >
                      Tên Sản Phẩm
                    </label>
                    <input
                      type="text"
                      id="productName"
                      className="modal-product-update-input"
                      name="productName"
                      defaultValue={selectedProduct?.productName || ""}
                      // value={formik.values.productName}
                      // onChange={formik.handleChange}
                      // onBlur={formik.handleBlur}
                      placeholder=""
                    />
                  </div>
                  {/* {formik.touched.productName && formik.errors.productName ? (
                    <span className="error lui">{formik.errors.productName}</span>
                  ) : null} */}
                  <div className="d-flex cpn">
                    <label
                      htmlFor="description"
                      className="modal-product-update-label"
                    >
                      Mô Tả
                    </label>
                    <input
                      type="description"
                      id="description"
                      className="modal-product-update-input"
                      name="description"
                      defaultValue={selectedProduct?.description || ""}
                      // value={formik.values.description}
                      // onChange={formik.handleChange}
                      // onBlur={formik.handleBlur}
                      placeholder=""
                    />
                  </div>

                  <div className="chiVang">
                    <div className="d-flex cpn">
                      <label
                        htmlFor="goldWeight"
                        className="modal-product-update-label"
                      >
                        Số lượng
                      </label>
                      <input
                        type="number"
                        id="quantityStock"
                        name="quantityStock"
                        // value={formik.values.quantityStock}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        className="modal-product-update-input"
                        defaultValue={selectedProduct?.stockQuantity || ""}
                        placeholder=""
                        step="0.1"
                      />
                    </div>
                  </div>
                  {/* {formik.touched.goldWeight && formik.errors.goldWeight ? (
                    <span className="error lui">{formik.errors.goldWeight}</span>
                  ) : null} */}
                  <div className="chiVang">
                    <div className="d-flex cpn">
                      <label
                        htmlFor="goldWeight"
                        className="modal-product-update-label"
                      >
                        Giảm giá
                      </label>
                      <input
                        type="number"
                        id="discount"
                        name="discount"
                        // value={formik.values.discount}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        className="modal-product-update-input"
                        defaultValue={selectedProduct?.discount || ""}
                        placeholder=""
                        step="0.1"
                      />
                    </div>
                  </div>

                  <div className="d-flex cpn">
                    <label
                      htmlFor="size"
                      className="modal-product-update-label"
                    >
                      Nguyên liệu
                    </label>
                    <input
                      type="text"
                      id="ingredient"
                      name="ingredient"
                      defaultValue={selectedProduct?.ingredient || ""}
                      // value={formik.values.ingredient}
                      // onChange={formik.handleChange}
                      // onBlur={formik.handleBlur}
                      className="modal-product-update-input"
                      placeholder=""
                    />
                  </div>
                  {/* {formik.touched.image && formik.errors.image ? (
                    <span className="error lui">{formik.errors.image}</span>
                  ) : null} */}
                  <div className="d-flex cpn">
                    <label
                      htmlFor="image"
                      className="modal-product-update-label"
                    >
                      Ảnh
                    </label>
                    <div className="modal-product-update-image-upload">
                      <input
                        type="file"
                        className="modal-product-update-image-input"
                        id="image"
                        name="image"

                      // onChange={(event) => {
                      //   formik.setFieldValue(
                      //     "image",
                      //     event.currentTarget.files[0]
                      //   );
                      // }}
                      // onBlur={formik.handleBlur}
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-product-update-right">
                  {/* {formik.touched.size && formik.errors.size ? (
                    <span className="error lui">{formik.errors.size}</span>
                  ) : null} */}

                  <div className="d-flex cpn">
                    <label
                      htmlFor="quantity"
                      className="modal-product-update-label"
                    >
                      Cảnh báo
                    </label>
                    <input
                      type="text"
                      id="warning"
                      className="modal-product-update-input"
                      name="warning"
                      defaultValue={selectedProduct?.warning || ""}
                      // value={formik.values.warning}
                      // onChange={formik.handleChange}
                      // onBlur={formik.handleBlur}
                      placeholder=""
                    />
                  </div>

                  {/* {formik.touched.quantity && formik.errors.quantity ? (
                    <span className="error lui">{formik.errors.quantity}</span>
                  ) : null} */}

                  <label
                    htmlFor="categoryId"
                    className="modal-product-update-label "
                  >
                    Danh Mục
                    <div className="combobox comboboxDm">
                      <select
                        id="categoryID"
                        name="categoryID"
                        // value={formik.values.categoryId}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        className="modal-product-update-select"
                        defaultValue={selectedProduct?.categoryId || ""}
                      >
                        <option value="" defaultValue disabled>
                          Danh Mục
                        </option>
                        {category.map((category, index) => (
                          <option key={index} value={category.categoryID}>
                            {category.categoryName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </label>
                  {/* {formik.touched.wage && formik.errors.wage ? (
                    <span className="error lui">{formik.errors.wage}</span>
                  ) : null} */}
                  <div className="tienCong">
                    <div className="d-flex cpn">
                      <label
                        htmlFor="price"
                        className="modal-product-update-label"
                      >
                        Giá Sản Phẩm
                      </label>
                      <input
                        type="number"
                        id="price"
                        name="price"
                        defaultValue={selectedProduct?.price || ""}
                        className="modal-product-update-input"
                        // value={formik.values.price}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* {formik.touched.price && formik.errors.price ? (
                    <span className="error lui">{formik.errors.price}</span>
                  ) : null} */}
                  <label
                    htmlFor="categoryId"
                    className="modal-product-update-label "
                  >
                    Thể loại
                    <div className="combobox comboboxDm">
                      <select
                        id="StyleId"
                        name="StyleId"
                        defaultValue={selectedProduct?.styleId || ""}
                        // value={formik.values.StyleId}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        className="modal-product-update-select"
                      >
                        <option value="" defaultValue disabled>
                          Thể Loại
                        </option>
                        {style.map((style, index) => (
                          <option key={index} value={style.styleId}>
                            {style.styleName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </label>
                  {/* {formik.touched.warrantyPeriod && formik.errors.warrantyPeriod ? (
                    <span className="error lui">{formik.errors.warrantyPeriod}</span>
                  ) : null} */}
                  <div className="baoHanh">
                    <div className="d-flex cpn">
                      <label
                        htmlFor="warrantyPeriod"
                        className="modal-product-update-label"
                      >
                        Khối lượng
                      </label>
                      <input
                        type="number"
                        id="Volume"
                        className="modal-product-update-input"
                        name="Volume"
                        defaultValue={selectedProduct?.volume || ""}
                        // value={formik.values.Volume}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* {formik.touched.warrantyPeriod && formik.errors.warrantyPeriod ? (
                    <span className="error lui">{formik.errors.warrantyPeriod}</span>
                  ) : null} */}
                </div>
              </div>

              <div className="footer-child">
                {" "}
                <button id="create-pro" type="submit">
                  Tạo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductManager;
