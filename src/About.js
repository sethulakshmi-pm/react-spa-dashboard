import './About.css';

import React, { useEffect, useState } from 'react';

import img_1 from './img/1.png'
import img_2 from './img/2.png'
import img_3 from './img/3.png'
import img_4 from './img/4.png'

function About() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setScrollPosition((prevPosition) => (prevPosition + 1) % 100);
    }, 20);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="page about-page">
      <h2 className="page-title">About Us</h2>

      <div className="about-section">
        <h3>Who We Are</h3>
        <p>
          We are a team of passionate individuals working together to create a
          seamless experience for our users. Our mission is to deliver cutting-edge
          solutions that make a real impact.
        </p>
      </div>

      <div className="dashboard">
        <div className="dashboard-card">
          <h3>Years of Experience</h3>
          <p className="metric">20+</p>
        </div>
        <div className="dashboard-card">
          <h3>Projects Completed</h3>
          <p className="metric">150+</p>
        </div>
        <div className="dashboard-card">
          <h3>Team Members</h3>
          <p className="metric">50+</p>
        </div>
      </div>

      <div className="scrolling-notes">
        <div className="scrolling-text" style={{ transform: `translateX(-${scrollPosition}%)` }}>
          We are continuously improving! | Stay tuned for exciting updates! | Join our journey today!
        </div>
      </div>

      <div className="image-section">
        <h3>Meet Our Team</h3>
        <div className="team-gallery">
          <div className="image-item">
            <img src={img_1} alt="Team Member 1" />
            <p>Ayra - CEO</p>
          </div>
          <div className="image-item">
            <img src={img_2} alt="Team Member 2" />
            <p>Arnav - CTO</p>
          </div>
          <div className="image-item">
            <img src={img_3} alt="Team Member 3" />
            <p>Aswin - Lead Developer</p>
          </div>
          <div className="image-item">
            <img src={img_4} alt="Team Member 3" />
            <p>Sethu - Lead Developer</p>
          </div>
        </div>
      </div>

      <div className="footer-note">
        <p>Want to learn more? Contact us or explore our services!</p>
      </div>
    </div>
  );
}

export default About;
