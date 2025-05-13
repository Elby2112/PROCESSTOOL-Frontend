import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/FmCtaLearn.css';

const FmCtaLearn = () => {
  const navigate = useNavigate();

  return (
    <section className="cta-learn-section">
      <div className="cta-learn-content">
        <h2>Master Flowmax with Expert Tutorials</h2>
        <p>Explore in-depth tutorials, guides, and resources to get the most out of Flowmax. Unlock tips, tricks, and best practices to elevate your skills.</p>
        <button onClick={() => navigate('/learn')}>Explore Learning Resources</button>
      </div>
    </section>
  );
};

export default FmCtaLearn;
