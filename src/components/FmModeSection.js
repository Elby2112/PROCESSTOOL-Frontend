import React from 'react';
import '../styles/FmModesSection.css';
import { motion } from 'framer-motion';
import { FaTachometerAlt, FaBolt } from 'react-icons/fa';
import flowmaxLogo from '../assets/fm_logo1.png';

const FmModesSection = () => {
  return (
    <section className="fm-modes-section">
      <h2 className="fm-modes-title">
        Two Integrated Modes in <img src={flowmaxLogo} alt="Flowmax" className="fm-modes-logo" />
      </h2>
      <p className="fm-modes-subtitle">
        Flowmax operates seamlessly in both hydraulic and surge analysis modes—within a single interface.
      </p>
      <div className="fm-modes-panels">
        <motion.div
          className="fm-mode-card"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FaTachometerAlt className="fm-mode-icon steady" />
          <h3>Steady-State Mode</h3>
          <p>
            Ideal for hydraulic analysis. Enables pressure profiling, pump and pipe sizing, and
            accurate flow and pressure calculations across the network.
          </p>
        </motion.div>

        <motion.div
          className="fm-mode-card"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FaBolt className="fm-mode-icon dynamic" />
          <h3>Dynamic Mode</h3>
          <p>
            Designed for precise surge (water hammer) analysis. Helps evaluate and mitigate
            transient events and surge protection strategies effectively.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FmModesSection;
