import React from 'react';
import { BookOpen, PlayCircle, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/Learn.css';

const Learn = () => {
  const navigate = useNavigate();

  return (
    <div className="learn-page">
      <h1 className="learn-title">Unlock the Power of Flowmax</h1>
      <p className="learn-subtitle">Explore resources to get the most out of Flowmax</p>
      <div className="learn-resources">
        <div className="learn-card" onClick={() => navigate('/documentation')}>
          <BookOpen className="learn-icon" size={48} />
          <h3>Documentation</h3>
          <p>Find detailed technical guides and reference documents.</p>
        </div>
        <div className="learn-card" onClick={() => navigate('/tutorials')}>
          <PlayCircle className="learn-icon" size={48} />
          <h3>Tutorials</h3>
          <p>Follow step-by-step tutorials to become a Flowmax expert.</p>
        </div>
        <div className="learn-card" onClick={() => navigate('/community-forums')}>
          <Users className="learn-icon" size={48} />
          <h3>Community Forums</h3>
          <p>Join the conversation, ask questions, and share knowledge.</p>
        </div>
      </div>
    </div>
  );
};

export default Learn;
