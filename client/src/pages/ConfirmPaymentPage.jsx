import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ConfirmPayment from "../components/payment/ConfirmPayment";

const ConfirmPaymentPage = () => {
  return (
    <>
      <Header activeLink="payment" />
      <ConfirmPayment />
      <Footer />
    </>
  );
};

export default ConfirmPaymentPage;
