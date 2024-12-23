import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminApp from "./admin/AdminApp";
import Layout from './teacher/components/common/Layout';
import InstructorDashboard from './teacher/components/dashboard/InstructorDashboard';
import MyCourses from './teacher/components/dashboard/MyCourses';
import Students from './teacher/components/dashboard/Students';
import CourseManagement from './teacher/components/course/CourseManagement';
import LandingPage from "./landing/LandingPage";
import Contact from './landing/Contact';
import CourseCatalog from './landing/CourseCatalog';
import CourseDetail from './landing/CourseDetail'; // Import CourseDetail component
import About from './landing/About'; // Import About component
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import "./app.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page - Default Route */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Public Routes */}
        <Route path="/courses" element={<CourseCatalog />} />
        <Route path="/course/:courseId" element={<CourseDetail />} /> {/* Add CourseDetail route */}
        <Route path="/about" element={<About />} /> {/* Add About route */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Routes */}
        <Route path="/admin/*" element={<AdminApp />} />
        <Route path="/teacher/*" element={
          <Layout>
            <Routes>
              <Route path="dashboard" element={<InstructorDashboard />} />
              <Route path="my-courses" element={<MyCourses />} />
              <Route path="students" element={<Students />} />
              <Route path="add-course" element={<CourseManagement />} />
            </Routes>
          </Layout>
        } />

        {/* Catch any unknown routes and redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;