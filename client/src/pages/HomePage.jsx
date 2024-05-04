import React, { useEffect } from "react";
import Header from "../components/header/Header";
import HeroSection from "../components/home/HeroSection";
import CategorySection from "../components/home/CategorySection";
import EntrySection from "../components/home/EntrySection";
import Footer from "../components/footer/Footer";
import BooksSection from "../components/home/BooksSection";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header activeLink="home" />
      <HeroSection />
      <CategorySection />
      <EntrySection />
      <BooksSection />
      <Footer />
    </>
  );
};

export default HomePage;
