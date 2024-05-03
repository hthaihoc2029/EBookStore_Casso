import React from "react";
import HeroThumb from "../../assets/images/book.jpg";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="row st_screenfix">
          <div className="col-xl-5 col-lg-6 d-flex align-items-center">
            <div className="hero-content">
              <h1 style={{ fontSize: 55 }}>Bí mật của MAY MẮN </h1>
              <h1 style={{ fontSize: 30 }}>
                {" "}
                Chỉ có tại trang web của chúng tôi!
              </h1>
              <p>
                Mua và rinh Ebook 'Bí mật của may mắn' về liền tay với sự thuận
                tiện từ cổng thanh toán payOS.
              </p>
              <a className="button button--lg" href="/parents/register">
                Tạo tài khoản
              </a>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="hero-thumb">
              <img src={HeroThumb} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
