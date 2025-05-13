
import "../styles/Documentation.css"; // Assuming you have a CSS file for styling
import flowmaxLogo from "../assets/fm_logo1.png";
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';


const Documentation = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Placeholder data
  const docs = [
    { title: 'Getting Started Guide', description: 'Learn how to get started with Flowmax quickly and efficiently.' },
    { title: 'Modeling Basics', description: 'Understand the basic concepts and tools used in Flowmax modeling.' },
    { title: 'Advanced Features', description: 'Dive deeper into powerful tools and custom simulations in Flowmax.' },
    { title: 'System Requirements', description: 'Ensure your system is optimized for running Flowmax smoothly.' },
    { title: 'Licensing & Activation', description: 'Learn how to install, activate, and manage your license.' },
    { title: 'Troubleshooting', description: 'Find solutions to common issues and technical problems.' },
  ];

  const filteredDocs = docs.filter(doc =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="documentation-page">
      <div className="documentation-header">
        <img src={flowmaxLogo} alt="Flowmax Logo" className="flowmax-logo" />
        <h1 className="documentation-title">Documentation</h1>
      </div>

      <div className="documentation-search-wrapper">
        <input
          type="text"
          placeholder="Search documentation..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="documentation-search"
        />
        <FaSearch className="search-icon" />
      </div>

      <div className="documentation-list">
        {filteredDocs.map((doc, index) => (
          <div key={index} className="doc-card">
            <h2>{doc.title}</h2>
            <p>{doc.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documentation;
