import React from "react";
import Header from "../components/header/Header";
import HeroSection from "../components/home/HeroSection";
import CategorySection from "../components/home/CategorySection";
import CourseSection from "../components/home/CourseSection";
import EntrySection from "../components/home/EntrySection";
import Footer from "../components/footer/Footer";
import TutorSection from "../components/home/TutorSection";

const HomePage = () => {
  return (
    <>
      <Header activeLink="home" />
      <HeroSection />
      <CategorySection />
      {/* <CourseSection /> */}
      <EntrySection />
      <TutorSection />
      <Footer />
    </>
  );
};

export default HomePage;
