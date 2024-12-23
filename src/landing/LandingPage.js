import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './LandingPage.module.css'; // Import the CSS module

function LandingPage() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/courses');
  };

  return (
    <div className={styles.landingContainer}>
      <header className={styles.landingHeader}>
        <div className={styles.logo}>Language Tutors</div>
        <nav className={styles.navigationMenu}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      </header>
      <div className={styles.mainContent}>
        <h1>Unlock the Future of Learning with Our Expert Tutors</h1>
        <p>Find top-notch courses and connect with industry-leading instructors.</p>
        <button className={styles.ctaButton} onClick={handleGetStartedClick}>Get Started</button>
      </div>
      <div className={styles.roleSelection}>
        <h2>Select Your Role</h2>
        <div className={styles.buttonsContainer}>
          <Link to="/teacher">
            <button className={`${styles.roleButton} ${styles.teacher}`}>I'm a Teacher</button>
          </Link>
          <Link to="/student">
            <button className={`${styles.roleButton} ${styles.student}`}>I'm a Student</button>
          </Link>
          <Link to="/admin">
            <button className={`${styles.roleButton} ${styles.admin}`}>I'm an Admin</button>
          </Link>
        </div>
      </div>
      <section className={styles.features}>
        <h2>Why Choose Us?</h2>
        <div className={styles.featureList}>
          <div className={styles.featureItem}>
            <i className="fas fa-chalkboard-teacher" aria-hidden="true"></i>
            <h3>Expert Tutors</h3>
            <p>Learn from the best in the industry.</p>
          </div>
          <div className={styles.featureItem}>
            <i className="fas fa-book-open" aria-hidden="true"></i>
            <h3>Comprehensive Courses</h3>
            <p>Access a wide range of courses tailored to your needs.</p>
          </div>
          <div className={styles.featureItem}>
            <i className="fas fa-comments" aria-hidden="true"></i>
            <h3>Community Support</h3>
            <p>Join a community of learners and educators.</p>
          </div>
        </div>
      </section>
      <footer className={styles.footerNavigation}>
        <button className={styles.footerButton}>Home</button>
        <button className={styles.footerButton}>Contact</button>
      </footer>
    </div>
  );
}

export default LandingPage;