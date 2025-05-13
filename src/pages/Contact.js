import React from 'react';
import "../styles/Contact.css";
import logo from '../assets/pt_logo1.png';
import background from '../assets/mockup5.jpg';

const Contact = () => {
  return (
    <section
      className="contact-section"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="contact-overlay">
        <div className="contact-container">
          <div className="contact-header">
            <img src={logo} alt="PROCESSTOOL Logo" className="contact-logo" />
            <div>
              <h1 className="contact-title">Contact Us</h1>
              <p className="contact-subtitle">
                We're here to assist you. Please fill out the form below, and we'll get back to you promptly.
              </p>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input type="text" id="company" name="company" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="question">Question *</label>
              <textarea id="question" name="question" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
