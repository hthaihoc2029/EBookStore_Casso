import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CoursesPage from "../pages/CoursesPage";
import TutorsPage from "../pages/TutorsPage";
import ContactPage from "../pages/ContactPage";
import PaymentPage from "../pages/PaymentPage";
import HistoryPage from "../pages/HistoryPage";
import TutorProfile from "../components/tutorProfile/TutorProfile";
import CourseProfile from "../components/courses/CourseProfile";

function WebRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/tutors" element={<TutorsPage />} />
        <Route path="/tutor-profile" element={<TutorProfile />} />
        <Route path="/course-profile" element={<CourseProfile />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default WebRouter;
