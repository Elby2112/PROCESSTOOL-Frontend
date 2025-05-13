import React from 'react';
import { motion } from 'framer-motion';
import '../styles/FlowmaxSection.css';
import flowmaxImage from '../assets/flowmax-screenshot.png';
import flowmaxLogo from '../assets/fm_logo1.png';
import { Link } from 'react-router-dom';

const FlowmaxSection = () => {
  return (
    <section className="flowmax-section">
      <h2 className="flowmax-title">See Our Product in Action</h2>

      <div className="flowmax-image-wrapper">
      <motion.img
  src={flowmaxImage}
  alt="Flowmax in Action"
  className="flowmax-image"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  viewport={{ once: true, amount: 0.3 }}
/>

        <div className="flowmax-overlay">
          <img
            src={flowmaxLogo}
            alt="Flowmax Logo"
            className="flowmax-overlay-logo"
          />
          <p className="flowmax-overlay-description">
            Flowmax: Advanced software for hydraulic system analysis and design.
          </p>
          <Link to="/product">
            <button className="flowmax-overlay-button">Meet Flowmax</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FlowmaxSection;
