import React from "react";
import bookThumbnail from "../../assets/bookThumb.png";
import { postPayment } from "../../services/apiPayment";
import { updateOrderCode } from "../../redux/action/orderCodeAction";
const ConfirmPayment = () => {
  const generateRandomId = () => {
    // Lấy thời gian hiện tại dưới dạng timestamp
    const timestamp = new Date().getTime();

    // Tạo một số ngẫu nhiên từ 0 đến 99999
    const random = Math.floor(Math.random() * 1000);

    // Kết hợp timestamp và số ngẫu nhiên để tạo ID
    const id = (timestamp % 100000) + random;

    return id;
  };

  const handleClickPayment = async () => {
    const randomOrderCode = generateRandomId();
    dispatch(updateOrderCode(randomOrderCode));
    let data = await postPayment();
    console.log("====================================");
    console.log(data);
    console.log("====================================");
    if (data && data.EC === 0) {
      window.location.href = data.data;
    }
  };
  return (
    <>
      <div className="course-gift-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="course-gift-wrap">
                <div className="section-title">
                  <h2>Phương thức thanh toán</h2>
                </div>
                <div style={{ padding: "20px" }} className="contact-wrap mb-0">
                  <div className="plans">
                    <label className="plan complete-plan">
                      <input type="radio" id="three" name="plan" />
                      <small className="plan-content paypal-column">
                        <img
                          src="https://payos.vn/wp-content/uploads/sites/13/2023/07/Untitled-design-8.svg"
                          width={55}
                          height={45}
                        />
                        <strong>
                          Thanh toán chuyển khoản (Quét mã VietQR) - PayOS by
                          Casso
                        </strong>
                      </small>
                    </label>
                  </div>
                </div>
                <div style={{ padding: "20px" }} className="contact-wrap">
                  <form action="#">
                    <div className="form-field form-field-- mb-3">
                      <label>Tên (*)</label>
                      <div className="field-wrapper">
                        <input type="text" placeholder="Nguyen Van A" />
                        <span className="icon icon--success">
                          <img
                            src="assets/images/svg-icon/checkcircle.svg"
                            alt="success-icon"
                          />
                        </span>
                        <span className="icon icon--warning">
                          <img
                            src="assets/images/svg-icon/Warning.svg"
                            alt="warning-icon"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="form-field form-field-- mb-3">
                      <label>Email (*)</label>
                      <div className="field-wrapper">
                        <input type="text" placeholder="nva@gmail.com" />
                        <span className="icon icon--success">
                          <img
                            src="assets/images/svg-icon/checkcircle.svg"
                            alt="success-icon"
                          />
                        </span>
                        <span className="icon icon--warning">
                          <img
                            src="assets/images/svg-icon/Warning.svg"
                            alt="warning-icon"
                          />
                        </span>
                      </div>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault-0"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault-0"
                      >
                        Ghi nhớ thông tin
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="amount-sidebar">
                <div className="course-details-wrap">
                  <h4>Sách (1)</h4>

                  <div className="course-details-item">
                    <a className="course-details-thumb">
                      <img src={bookThumbnail} alt="" />
                    </a>
                    <div className="course-details-data">
                      <p>
                        Tác giả:
                        <span>Alex Rovira và Fernando Trías de Bes</span>
                      </p>
                      <a className="course-detalis-title">
                        <b>Bí mật của May Mắn</b>
                      </a>
                      <h5>
                        10.000 VND <del>20.000 VND</del>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="about-sidebar-wrap">
                  <div className="amunt-detalis">
                    <h4>Đơn hàng</h4>
                    <ul>
                      <li>
                        Đơn giá<span>10.000 VND</span>
                      </li>
                      <li>
                        Mã giám giá<span>10%</span>
                      </li>
                    </ul>
                    <h3>
                      Tổng cộng:
                      <span />
                      10.000 VND
                    </h3>
                  </div>
                  <div className="amaunt-confirm-button">
                    <a
                      className="button button--lg d-block"
                      onClick={() => handleClickPayment()}
                    >
                      Thanh toán với PayOS
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmPayment;
