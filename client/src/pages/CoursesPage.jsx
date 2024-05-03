import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import FilterSection from "../components/tutor/FilterSection";
import CoursesSection from "../components/courses/CoursesSection";
const CoursesPage = () => {
  return (
    <>
      <Header activeLink="courses" />
      <div className="my-5 list-container d-flex">
        <div className="col-xl-3">
          <FilterSection />
        </div>
        <div className="px-3 col-xl-8">
          <CoursesSection />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursesPage;
