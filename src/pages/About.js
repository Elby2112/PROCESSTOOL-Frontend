import React from 'react';
import '../styles/About.css'; 
import logo from '../assets/pt_logo2.png';
import background from '../assets/mockup3.jpg';

const AboutProcesstool = () => {
  return (
    <section
      className="about-section"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="about-overlay">
        <div className="about-container">
          <div className="about-header">
          <h1 className="about-title">About</h1>
            <img src={logo} alt="PROCESSTOOL Logo" className="about-logo" />
            
          </div>
          <p className="about-description">
            <strong>PROCESSTOOL</strong> is a company specializing in advanced tech solutions for process engineering calculations. As the first of its kind in Algeria, we pride ourselves on delivering innovative software products tailored to various industries.
          </p>
          <div className="about-grid">
            <div className="about-card">
              <h3>Company Name</h3>
              <p>PROCESSTOOL</p>
            </div>
            <div className="about-card">
              <h3>Creation Year</h3>
              <p>2023</p>
            </div>
            <div className="about-card">
              <h3>Specialization</h3>
              <p>Tech solutions for process engineering calculations</p>
            </div>

            <div className="about-card">
              <h3>Core Values</h3>
              <ul>
                <li>Innovation</li>
                <li>Excellence</li>
                <li>Customer-Centric Approach</li>
              </ul>
            </div>
            <div className="about-card">
              <h3>Flagship Product</h3>
              <p>Flowmax</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProcesstool;
