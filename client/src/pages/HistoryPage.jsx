import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Book from "../assets/files/EbookBiMatCuaMayMan.pdf";
import { useLocation, useNavigate } from "react-router-dom";
const HistoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [isPreview, setIsPreview] = useState(false);

  // Lấy giá trị của tham số query
  const paramValue = params.get("status");
  const isPaid = paramValue == "PAID" ? true : false;

  const handleDownloadBook = () => {};
  const handlePreviewBook = () => {
    setIsPreview(!isPreview);
  };

  return (
    <>
      <Header activeLink="history" />
      {isPaid && (
        <div className="public-shopping-cart-section section-padding">
          <div className="container">
            <div className="student-title">
              <h2>Sách của tôi (1) </h2>
            </div>
            <div className="row">
              <div className="col-4">
                <div
                  className="d-flex justify-content-center align-items-center card"
                  style={{ width: "15rem" }}
                >
                  <img
                    className="card-img-top"
                    src="https://salt.tikicdn.com/media/catalog/product/b/i/bi_mat_cua_may_man.jpg"
                    alt="Card image cap"
                    width={343}
                  />
                  <div className="card-body">
                    <h5
                      style={{ textAlign: "center", fontWeight: "bold" }}
                      className="card-title"
                    >
                      Bí mật của may mắn
                    </h5>
                    <p
                      style={{ textAlign: "center", paddingBottom: "12px" }}
                      className="card-text"
                    >
                      NXB Tổng hợp TP.HCM
                    </p>
                    <div className="row">
                      <a
                        href={Book}
                        download="EbookBiMatCuaMayMan"
                        target="_blank"
                        // onClick={() => {
                        //   handleDownloadBook();
                        // }}
                        className="col-6 btn btn-outline-primary"
                      >
                        Tải xuống
                      </a>
                      <a
                        onClick={() => {
                          handlePreviewBook();
                        }}
                        className="col-6 btn btn-outline-success"
                      >
                        Đọc online
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {isPreview && (
                <div className="col-7">
                  <object
                    data={Book}
                    type="application/pdf"
                    width="100%"
                    height="700px"
                  ></object>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {!isPaid && (
        <div className="public-shopping-cart-section section-padding">
          <div className="container">
            <div className="student-title">
              <h2>Sách của tôi (0) </h2>
            </div>

            <div className="d-flex flex-column align-items-center justify-content-center">
              <img
                src="https://icones.pro/wp-content/uploads/2022/03/historique-icone-de-l-historique-orange.png"
                alt="empty"
                className="empty__img"
                width={160}
                height={160}
              />
              <div
                className="empty__message1 mt-3"
                style={{ paddingLeft: "20px", fontWeight: "bold" }}
              >
                Bạn chưa có lịch sử mua sách
              </div>
              <div
                style={{ paddingLeft: "20px" }}
                className="empty__message2 mt-3"
              >
                Hãy tham khảo thêm các sản phẩm ở trang mua sắm nhé!
              </div>
              <div style={{ paddingLeft: "20px" }}>
                <button
                  onClick={() => navigate("/book-info")}
                  className="mt-3 btn btn-outline-primary "
                >
                  Về trang mua sắm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default HistoryPage;
