import React from "react";
import tutorPic from "../../assets/images/cta.png";
const EntrySection = () => {
  return (
    <>
      <div className="cat-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="cta-left">
                <h4>Mua sách điện tử?</h4>
                <p>
                  Chào mừng đến với trải nghiệm mua sách điện tử tại Casso!
                  Chúng tôi tự hào mang đến cho bạn một bộ sưu tập đa dạng các
                  ebook từ những tác giả nổi tiếng và các thể loại sách phổ
                  biến.
                </p>
                <a
                  className="default-btn btn-large bg-white icon-btn"
                  href="/parents/contact"
                >
                  Mua ngay
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.75 12H20.25"
                      stroke="#FF6636"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.5 5.25L20.25 12L13.5 18.75"
                      stroke="#FF6636"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <div className="cat-thumb">
                  <img src={tutorPic} alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="cta-right">
                <h3>Quy trình đơn giản và tiện lợi:</h3>
                <ul>
                  <li>
                    <span className="color-1">1</span> Tìm Kiếm Sách
                  </li>
                  <li>
                    <span className="color-2">2</span> Thêm Vào Giỏ Hàng
                  </li>
                  <li>
                    <span className="color-3">3</span> Thanh Toán An Toàn với
                    PayOS
                  </li>
                  <li>
                    <span className="color-4">4</span> Tải Xuống và Thường Thức
                    Đọc Sách
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EntrySection;
