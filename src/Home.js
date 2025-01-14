import './Home.css';

import React, { useEffect, useState } from "react";

import img_1 from './img/1.png'
import img_2 from './img/2.png'
import img_3 from './img/3.png'
import img_4 from './img/4.png'

function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setScrollPosition(prevPosition => (prevPosition + 1) % 100);
    }, 20);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="page home-page">
      <h2 className="page-title">Welcome to the Dashboard</h2>

      <div className="dashboard">
        <div className="dashboard-card">
          <h3>Active Views</h3>
          <p className="metric">1200</p>
        </div>
        <div className="dashboard-card">
          <h3>Likes</h3>
          <p className="metric">3050</p>
        </div>
        <div className="dashboard-card">
          <h3>Comments</h3>
          <p className="metric">250</p>
        </div>
        <div className="dashboard-card">
          <h3>Published</h3>
          <p className="metric">70</p>
        </div>
      </div>

      <div className="scrolling-notes">
        <div className="scrolling-text" style={{ transform: `translateX(-${scrollPosition}%)` }}>
          Don't forget to check the latest updates on our blog! | New features coming soon! | Join our community for exclusive offers.
        </div>
      </div>

      <div className="image-section">
        <h3>Explore Our Features</h3>
        <div className="image-gallery">
          <div className="image-item">
            <img src={img_1} alt="Feature 1" />
            <p>A</p>
          </div>
          <div className="image-item">
            <img src={img_2} alt="Feature 2" />
            <p>B</p>
          </div>
          <div className="image-item">
            <img src={img_3} alt="Feature 3" />
            <p>C</p>
          </div>
          <div className="image-item">
            <img src={img_4} alt="Feature 2" />
            <p>D</p>
          </div>
        </div>
      </div>

      <div className="footer-note">
        <p>Stay tuned for more updates. We are constantly improving!</p>
      </div>
    </div>
  );
}

export default Home;
