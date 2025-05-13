import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Header.css';
import logo from '../assets/pt_logo2.png';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Product', path: '/product' },
  { name: 'Learn', path: '/learn' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  return (
    <motion.header 
      className="header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="header__container">
        
        {/* Logo */}
        <motion.div 
          className="header__logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <img src={logo} alt="ProcessTool Logo" />
        </motion.div>

        {/* Navigation */}
        <nav className="header__nav">
          <ul>
            {navLinks.map((link, index) => {
              if (link.name === 'Product') {
                return (
                  <motion.li
                    key={link.name}
                    className="has-dropdown"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <span>Product</span>
                    <ul className="dropdown">
                      <li>
                        <Link to="/product">Flowmax</Link>
                      </li>
                    </ul>
                  </motion.li>
                );
              } else {
                return (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Link to={link.path}>{link.name}</Link>
                  </motion.li>
                );
              }
            })}
          </ul>
        </nav>

        {/* Buttons */}
        <div className="header__actions">
          <Link to="/Tryflowmax">
            <motion.button
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Try Flowmax
            </motion.button>
          </Link>

          <Link to="/Getflowmax">
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Buy Flowmax
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
