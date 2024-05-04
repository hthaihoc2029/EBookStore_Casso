import React, { useEffect } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import CartSection from "../components/payment/CartSection";
const PaymentPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header activeLink="payment" />
      <CartSection />
      <Footer />
    </>
  );
};

export default PaymentPage;
