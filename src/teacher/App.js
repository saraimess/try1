import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import InstructorDashboard from './components/dashboard/InstructorDashboard';
import MyCourses from './components/dashboard/MyCourses';
import Students from './components/dashboard/Students';
import CourseManagement from './components/dashboard/CourseManagement'; // Import CourseManagement component

import './styles/common.css';
import './styles/dashboard/instructorDashboard.css';
import './styles/dashboard/sidebar.css';
import './styles/common/navbar.css';
import './styles/global.css'; // Add global styles

function TeacherApp() {
  return (
    <Layout>
      <Routes>
        <Route path="dashboard" element={<InstructorDashboard />} />
        <Route path="my-courses" element={<MyCourses />} />
        <Route path="students" element={<Students />} />
        <Route path="add-course" element={<CourseManagement />} /> {/* Use CourseManagement component */}
      </Routes>
    </Layout>
  );
}

export default TeacherApp;