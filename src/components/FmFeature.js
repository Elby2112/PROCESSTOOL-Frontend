import React from 'react';
import { motion } from 'framer-motion';
import { FaCogs, FaFileAlt, FaUsers, FaPumpSoap, FaShieldAlt, FaBolt, FaWaveSquare } from 'react-icons/fa';
import flowmaxLogo from '../assets/fm_logo1.png';
import '../styles/FmFeature.css';

const features = [
  {
    icon: <FaCogs />,
    title: 'Scenario Manager',
    description: 'Simulate and analyze multiple operational scenarios for better decision-making and performance optimization.',
  },
  {
    icon: <FaPumpSoap />,
    title: 'Automated Pump & Valve Sizing',
    description: 'Streamline pump and valve selection with automated sizing for optimal performance.',
  },
  {
    icon: <FaFileAlt />,
    title: 'Detailed Reports Generation',
    description: 'Generate in-depth reports for analysis and documentation, aiding informed decision-making.',
  },
  {
    icon: <FaUsers />,
    title: 'User-Friendly Interface',
    description: 'Intuitive design for easy navigation and faster adoption by professionals.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'NFPA Compliance',
    description: 'Ensure safety compliance using reliable hydraulic equations for firewater networks.',
  },
  {
    icon: <FaBolt />,
    title: 'Dynamic Mode',
    description: 'Analyze unsteady-state hydraulic behavior to capture real-world system dynamics.',
  },
  {
    icon: <FaWaveSquare />,
    title: 'Surge Analysis',
    description: 'Detect and mitigate pressure surges to protect infrastructure and optimize design.',
  },
];

const FmFeature = () => {
  return (
    <section className="fm-feature-timeline">
      <h2 className="fm-feature__title">
        Key Features of <img src={flowmaxLogo} alt="Flowmax" className="fm-feature__logo" />
      </h2>
      <div className="timeline">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="timeline-content">
              <div className="icon-circle">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FmFeature;
