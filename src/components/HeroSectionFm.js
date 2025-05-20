import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/HeroSectionFm.css';
import flowmaxImg from '../assets/fm-img1.png';

const HeroSectionFm = () => {
  return (
    <section className="hero-fm">
      <motion.div
        className="hero-fm__content"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1>Hydraulic Design Software</h1>
        <p>
          Unified Hydraulic Simulation — Steady-State and Transient in One Tool.
        </p>
        <div className="hero-fm__buttons">
          <Link to="/Tryflowmax" className="btn btn-outline">Try Now</Link>
          <Link to="/Getflowmax" className="btn btn-primary">Buy Now</Link>
        </div>
      </motion.div>

      <motion.div
        className="hero-fm__image"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <img src={flowmaxImg} alt="Flowmax Illustration" />
      </motion.div>
    </section>
  );
};

export default HeroSectionFm;
