import React from 'react';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../styles/Footer.css';
import logo from '../assets/pt_logo1.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">

        <motion.div 
          className="footer__section footer__logo-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0 }}
        >
          <img src={logo} alt="Processtool Logo" className="footer__logo" />
          <p className="footer__tagline">Empowering your workflows with precision</p>
          <div className="footer__socials">
            <a href="https://www.linkedin.com/company/processtool1/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.youtube.com/@ProcessTool-me8en" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="footer__section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/videos">Videos</a></li>
          </ul>
        </motion.div>

        <motion.div 
          className="footer__section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h4>Contact Us</h4>
          <p>Algeria - DZ</p>
          <p>Annaba City</p>
          <p>Tel: +213 (770) 072-662</p>
          <p>Email: support@processtool.net</p>
        </motion.div>

      </div>

      <motion.div 
        className="footer__bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <p>&copy; {new Date().getFullYear()} Processtool. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
