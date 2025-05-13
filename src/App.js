import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './styles/global.css';

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Learn from './pages/Learn';
import TryFlowmax from './pages/TryFlowmax';
import GetFlowmax from './pages/GetFlowmax';

// New pages here
import Documentation from './pages/Documentation';
import Tutorials from './pages/Tutorials';
import CommunityForums from './pages/CommunityForums';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/community-forums" element={<CommunityForums />} />
        <Route path="/Tryflowmax" element={<TryFlowmax />} />
        <Route path="/Getflowmax" element={<GetFlowmax />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
