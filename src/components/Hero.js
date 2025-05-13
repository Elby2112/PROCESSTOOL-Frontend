import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';
import { Link } from 'react-router-dom';
import heroImage1 from '../assets/Hero-img.png';
import heroImage2 from '../assets/Hero-img.png';
import heroImage3 from '../assets/Hero-img.png';

const images = [heroImage1, heroImage2, heroImage3];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showVideo, setShowVideo] = useState(false);  // New state

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <img src={images[currentImage]} alt="Hero Background" className="hero__image" />
      <div className="hero__overlay">
        <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 20 }} transition={{ duration: 0.8 }} className="hero__title">
          Optimize your Design and Operation
        </motion.h1>
        <motion.p initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 20 }} transition={{ duration: 0.8, delay: 0.2 }} className="hero__subtitle">
          Simplify Calculations and Analysis for Process Systems and Utilities
        </motion.p>
        <motion.div className="hero__buttons" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 20 }} transition={{ duration: 0.8, delay: 0.4 }}>
          <Link to="/about">
            <button className="hero-btn hero-btn--primary">About Processtool</button>
          </Link>
          <button className="hero-btn hero-btn--secondary" onClick={() => setShowVideo(true)}>Play Video</button>
        </motion.div>
      </div>

      {showVideo && (
        <div className="hero__video-popup">
          <div className="hero__video-content">
            <button className="hero__video-close" onClick={() => setShowVideo(false)}>×</button>
            <iframe
  width="100%"
  height="400"
  src="https://www.youtube.com/embed/X8aSYEqCIks"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
