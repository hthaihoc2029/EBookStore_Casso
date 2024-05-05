import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../sass/main.scss";
import Logo from "../../assets/LOGO.svg";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Bs1CircleFill } from "react-icons/bs";
import bookThumbnail from "../../assets/bookThumb.png";
import { deleteCart } from "../../redux/action/cartAction";

const Header = (props) => {
  const dispatch = useDispatch();
  const [isNotificationVisible, setNotificationVisible] = useState(false);
  const notificationRef = useRef(null);
  let isAddCart = useSelector((state) => state.cart.isAddCart);
  const { activeLink } = props;

  let navigate = useNavigate();
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  function toggleNotification() {
    setNotificationVisible(!isNotificationVisible);
  }

  return (
    <>
      <div className="header-section">
        <div className="header-top">
          <div className="responsive-logo">
            <a href="/">
              <img src={Logo} alt="brand-logo" />
            </a>
          </div>
          <div className="main-menu">
            <ul>
              <li>
                <a
                  className={activeLink === "home" ? "active" : ""}
                  onClick={() => navigate("/")}
                >
                  Trang Chủ
                </a>
              </li>
              <li>
                <a
                  className={activeLink === "book" ? "active" : ""}
                  onClick={() => {
                    navigate("/book-info");
                  }}
                >
                  EBook
                </a>
              </li>

              <li>
                <a
                  className={activeLink === "payment" ? "active" : ""}
                  onClick={() => {
                    navigate("/payment");
                  }}
                >
                  Giỏ hàng &#38; Thanh toán
                </a>
              </li>
              <li>
                <a
                  className={activeLink === "history" ? "active" : ""}
                  onClick={() => {
                    navigate("/history");
                  }}
                >
                  Lịch sử
                </a>
              </li>
              <li>
                <a
                  className={activeLink === "contact" ? "active" : ""}
                  onClick={() => navigate("/contact")}
                >
                  Liên hệ hỗ trợ
                </a>
              </li>
            </ul>
          </div>
          <div className="header-right">
            {/* <span style={{ fontSize: 15, color: "#8C94A3" }}>
              Trang dành cho Phụ huynh/Học sinh
            </span> */}
          </div>
          <div className="menu-bar">
            <svg
              width={24}
              height={25}
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 5.54468H21"
                stroke="#1D2026"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 12.5447H21"
                stroke="#1D2026"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 19.5447H21"
                stroke="#1D2026"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-left">
            <div className="header-bottom-left-wrap">
              <div className="main-logo">
                <a onClick={() => navigate("/")}>
                  <img src={Logo} alt="brand-logo" />
                </a>
              </div>

              <div className="search-field-wrap">
                <form action="#">
                  <div className="form-searchbox">
                    <span className="icon">
                      <FaSearch />
                    </span>
                    <input
                      type="text"
                      placeholder="Bạn muốn tìm kiếm thông tin gì?"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="header-bottom-right">
            <div className="header-cart-wrap">
              <ul>
                <li>
                  <a href="#">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.26855 9.75C5.26731 8.86051 5.44213 7.97957 5.78294 7.15796C6.12375 6.33635 6.62381 5.59031 7.25429 4.96286C7.88476 4.33541 8.6332 3.83895 9.45644 3.5021C10.2797 3.16525 11.1615 2.99467 12.0509 3.00019C15.7625 3.02778 18.7312 6.11282 18.7312 9.83474V10.5C18.7312 13.8577 19.4337 15.8062 20.0524 16.8711C20.1191 16.9849 20.1546 17.1142 20.1553 17.2461C20.156 17.378 20.1219 17.5077 20.0565 17.6222C19.991 17.7367 19.8966 17.8319 19.7826 17.8982C19.6686 17.9646 19.5392 17.9997 19.4073 18H4.59173C4.45985 17.9997 4.33038 17.9645 4.2164 17.8982C4.10242 17.8318 4.00795 17.7366 3.94252 17.6221C3.8771 17.5076 3.84303 17.3778 3.84376 17.2459C3.84449 17.1141 3.87999 16.9847 3.94667 16.8709C4.56573 15.806 5.26855 13.8575 5.26855 10.5L5.26855 9.75Z"
                        stroke="#1D2026"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 18V18.75C9 19.5456 9.31607 20.3087 9.87868 20.8713C10.4413 21.4339 11.2044 21.75 12 21.75C12.7956 21.75 13.5587 21.4339 14.1213 20.8713C14.6839 20.3087 15 19.5456 15 18.75V18"
                        stroke="#1D2026"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      width={22}
                      height={18}
                      viewBox="0 0 22 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 17.25C11 17.25 1.625 12 1.625 5.62501C1.62519 4.49826 2.01561 3.40635 2.72989 2.53493C3.44416 1.66351 4.4382 1.06636 5.54299 0.845015C6.64778 0.623669 7.79514 0.791788 8.78999 1.32079C9.78484 1.84979 10.5658 2.70702 11 3.74673L11 3.74673C11.4342 2.70702 12.2152 1.84979 13.21 1.32079C14.2049 0.79179 15.3522 0.62367 16.457 0.845015C17.5618 1.06636 18.5558 1.66351 19.2701 2.53493C19.9844 3.40635 20.3748 4.49826 20.375 5.62501C20.375 12 11 17.25 11 17.25Z"
                        stroke="#1D2026"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    onClick={toggleNotification}
                    className="notification-icon notification-visiable"
                  >
                    {isAddCart && (
                      <div
                        style={{
                          position: "absolute",
                          bottom: "10px",
                          left: "15px",
                        }}
                        className="numbert-cart"
                      >
                        <Bs1CircleFill />
                      </div>
                    )}
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.25 20.25C8.25 20.6642 7.91421 21 7.5 21C7.08579 21 6.75 20.6642 6.75 20.25C6.75 19.8358 7.08579 19.5 7.5 19.5C7.91421 19.5 8.25 19.8358 8.25 20.25Z"
                        fill="#1D2026"
                        stroke="#1D2026"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M17.25 21.75C18.0784 21.75 18.75 21.0784 18.75 20.25C18.75 19.4216 18.0784 18.75 17.25 18.75C16.4216 18.75 15.75 19.4216 15.75 20.25C15.75 21.0784 16.4216 21.75 17.25 21.75Z"
                        fill="#1D2026"
                      />
                      <path
                        d="M3.96429 6.75H20.7857L18.3108 15.4121C18.2213 15.7255 18.0321 16.0012 17.7718 16.1975C17.5116 16.3938 17.1945 16.5 16.8685 16.5H7.88145C7.55549 16.5 7.23839 16.3938 6.97816 16.1975C6.71792 16.0012 6.52872 15.7255 6.43917 15.4121L3.04827 3.54396C3.0035 3.38725 2.90889 3.24939 2.77878 3.15124C2.64866 3.05309 2.49011 3 2.32713 3H0.75"
                        stroke="#1D2026"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {isNotificationVisible && (
                      <div
                        ref={notificationRef}
                        className="card card-activity notification-box"
                      >
                        <div className="card-header">
                          <h2 className="card-title">Giỏ hàng hiện tại</h2>
                          <p
                            className="mark-read"
                            onClick={() => {
                              dispatch(deleteCart());
                            }}
                          >
                            Xóa tất cả
                          </p>
                        </div>
                        <div className="card-body">
                          {/* Activity content  */}
                          <ul className="activity">
                            {isAddCart ? (
                              <li
                                onClick={() => {
                                  navigate("/payment");
                                }}
                                className="activity-item"
                              >
                                <div style={{ paddingRight: "20px" }}>
                                  <img
                                    className="img-thumbnail img-fluid"
                                    style={{ maxWidth: "80px" }}
                                    src={bookThumbnail}
                                  />
                                </div>

                                <div className="activity-info">
                                  <p>
                                    {" "}
                                    <span className="username">
                                      Ebook: Bí mật của May mắn
                                    </span>{" "}
                                    - Alex Rovira &#38; Fernando Trias de Bes
                                  </p>
                                  <span className="time">Giá: 10.000 VND</span>
                                </div>
                              </li>
                            ) : (
                              <div
                                style={{
                                  padding: "15px",
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                                className="not-add-cart"
                              >
                                <p style={{ color: "red" }}>
                                  Chưa có sách trong giỏ hàng!
                                </p>
                              </div>
                            )}
                          </ul>
                        </div>
                      </div>
                    )}
                  </a>
                </li>
              </ul>
            </div>
            <div className="header-btn-wrap">
              <a
                className="header-btn orange-btn"
                onClick={() => navigate("/register")}
              >
                Tạo tài khoản
              </a>
              <a
                className="header-btn div-orange-btn"
                onClick={() => navigate("/login")}
              >
                Đăng nhập
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
