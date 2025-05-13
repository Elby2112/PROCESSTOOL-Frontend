import React, { useState } from 'react';
import '../styles/CommunityForums.css'; 
import { FaSearch } from 'react-icons/fa';
import flowmaxLogo from '../assets/fm_logo1.png';

const CommunityForums = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const forumPosts = [
    {
      title: 'Welcome to the Flowmax Community!',
      description: 'Introduce yourself and get familiar with the community guidelines.',
    },
    {
      title: 'Troubleshooting & Support',
      description: 'Post your issues and get help from other users and experts.',
    },
    {
      title: 'Tips & Tricks',
      description: 'Share your best practices and efficiency hacks using Flowmax.',
    },
    {
      title: 'Feature Requests',
      description: 'Suggest new features you’d love to see in future versions.',
    },
    {
      title: 'Project Showcases',
      description: 'Show off how you’ve used Flowmax in real-world scenarios.',
    },
    {
      title: 'Feedback & Suggestions',
      description: 'Help us improve by sharing your thoughts on the platform.',
    },
  ];

  const filteredPosts = forumPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="forums-page">
      <div className="forums-header">
        <img src={flowmaxLogo} alt="Flowmax Logo" className="flowmax-logo" />
        <h1 className="forums-title">Community Forums</h1>
      </div>

      <div className="forums-search-wrapper">
        <input
          type="text"
          placeholder="Search community posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="forums-search"
        />
        <FaSearch className="search-icon" />
      </div>

      <div className="forums-list">
        {filteredPosts.map((post, index) => (
          <div key={index} className="forum-card">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityForums;
