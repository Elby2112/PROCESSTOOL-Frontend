import '../styles/Tutorials.css'; // adjust path as needed
import flowmaxLogo from '../assets/fm_logo1.png';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; 


const tutorials = [
  {
    title: 'Tutorial 1: Water Flow Distribution',
    description: 'This first tutorial is an introduction to Flowmax, showing you how to build and run a simple model.',
    videoId: '6z2OmkFza4I',
  },
  {
    title: 'Tutorial 2: Pump Sizing',
    description: 'In this tutorial, we will learn how to model a pumping system and size pumps and valves using Flowmax.',
    videoId: 'D7lByQmpTuA',
  },
  {
    title: 'Tutorial 3: Scenario Manager',
    description: "We'll explore modeling a pump in rating mode and utilizing the scenario manager to assess various scenarios.",
    videoId: 'mWKxBTQxV0c',
  },
  {
    title: 'Tutorial 4: Introduction to Fire Water Hydraulic',
    description: "This tutorial serves as an introduction to fire water modeling with Flowmax. We'll cover modeling a spray hydraulic system and analyzing the results.",
    videoId: 'GmQn2PGf7cc',
  },
];

const Tutorials = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter tutorials based on search query
  const filteredTutorials = tutorials.filter((tut) => 
    tut.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    tut.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="tutorials-page">
      <div className="tutorials-header">
  <img src={flowmaxLogo} alt="Flowmax Logo" className="flowmax-logo" />
  <h1 className="tutorials-title">Tutorials</h1>
</div>


      <div className="tutorials-search-wrapper">
        <input
          type="text"
          placeholder="Search tutorials..."
          className="tutorials-search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FaSearch className="search-icon" />
      </div>

      <div className="tutorials-list">
        {filteredTutorials.length > 0 ? (
          filteredTutorials.map((tut, index) => (
            <div className="tutorial-card" key={index}>
              <h2>{tut.title}</h2>
              <p>{tut.description}</p>
              <div className="video-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${tut.videoId}`}
                  title={tut.title}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))
        ) : (
          <p>No tutorials found.</p>
        )}
      </div>
    </div>
  );
};

export default Tutorials;
