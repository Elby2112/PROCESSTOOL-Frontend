import React from 'react';
import { motion } from 'framer-motion';
import '../styles/ServicesSection.css';
import { FaClock, FaProjectDiagram, FaRocket, FaChartLine } from 'react-icons/fa';

const services = [
  { icon: <FaClock size={28} color="var(--pt-color-2)" />, title: 'Save Time and Effort', description: 'Easily access and calculate engineering data efficiently with minimal setup.' },
  { icon: <FaProjectDiagram size={28} color="var(--pt-color-2)" />, title: 'Remove Complexity', description: 'Solve problems of any scale with intuitive tools tailored for engineers.' },
  { icon: <FaRocket size={28} color="var(--pt-color-2)" />, title: 'Accelerate Projects', description: 'Automate repetitive calculations to reduce delays and improve consistency.' },
  { icon: <FaChartLine size={28} color="var(--pt-color-2)" />, title: 'Maximize Efficiency', description: 'Reduce costs and tool clutter with an all-in-one process design platform.' },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3, // Stagger animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const iconVariants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const ServicesSection = () => (
  <section className="services-section">
    <motion.h2 
      className="services-heading" 
      variants={headingVariants} 
      initial="hidden" 
      whileInView="show"
    >
      Why engineers choose PROCESSTOOL
    </motion.h2>

    <motion.div
      className="services-grid"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {services.map((service, index) => (
        <motion.div className="service-item" variants={itemVariants} key={index}>
          <motion.div className="icon-container" variants={iconVariants}>
            {service.icon}
          </motion.div>
          <motion.div className="service-text" variants={textVariants}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default ServicesSection;
