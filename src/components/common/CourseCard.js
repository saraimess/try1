import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CourseCard.css'; // Import the CSS file

function CourseCard({ course }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/course/${course.id}`);
  };

  return (
    <div className="course-card" onClick={handleClick}>
      <div className="course-thumbnail">
        <img src={course.thumbnail} alt={course.title} />
        <div className="course-overlay">
          <span className="course-lessons">
            <i className="fas fa-book-open"></i> {course.lessons} Lessons
          </span>
          <span className="course-duration">
            <i className="fas fa-clock"></i> {course.duration}
          </span>
        </div>
      </div>
      <div className="course-content">
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <div className="course-footer">
          <button className="enroll-button">View Details</button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
