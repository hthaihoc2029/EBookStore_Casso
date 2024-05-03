import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import FilterSection from "../components/tutor/FilterSection";
import TutorsSection from "../components/tutor/TutorsSection";
const TutorsPage = () => {
  return (
    <>
      <Header activeLink="tutors" />
      <div className="my-5 list-container d-flex">
        <div className="col-xl-3">
          <FilterSection />
        </div>
        <div className="px-3 scol-xl-9">
          <TutorsSection />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TutorsPage;
