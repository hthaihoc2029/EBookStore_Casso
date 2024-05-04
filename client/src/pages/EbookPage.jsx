import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import BookInfo from "../components/book/BookInfo";
const EbookPage = () => {
  return (
    <>
      <Header activeLink="book" />
      <BookInfo />
      <Footer />
    </>
  );
};

export default EbookPage;
