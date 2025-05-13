import React, { useState } from 'react';
import { motion } from 'framer-motion';
import flowmaxLogo from '../assets/fm_logo1.png';
import defaultImg from '../assets/flowmaxImg.jpg';
import defaultImg1 from '../assets/flowmaxImg1.jpg';
import defaultImg2 from '../assets/flowmaxImg2.jpg';
import defaultImg3 from '../assets/flowmaxImg3.jpg';
import defaultImg4 from '../assets/flowmaxImg6.jpg';
import defaultImg5 from '../assets/flowmaxImg5.jpg';

import { default as BuildingIcon } from '@heroicons/react/20/solid/BuildingOffice2Icon';
import { default as FireIcon } from '@heroicons/react/20/solid/FireIcon';
import { default as TruckIcon } from '@heroicons/react/20/solid/TruckIcon';
import { default as BeakerIcon } from '@heroicons/react/20/solid/BeakerIcon';
import { default as CogIcon } from '@heroicons/react/20/solid/Cog6ToothIcon';
import { default as BoltIcon } from '@heroicons/react/20/solid/BoltIcon';

import '../styles/ApplicationSection.css';

const applications = [
  {
    title: 'Water Distribution',
    icon: <BuildingIcon className="app-icon" />,
    image: defaultImg,
  },
  {
    title: 'Water Injection Network',
    icon: <BeakerIcon className="app-icon" />,
    image: defaultImg2,
  },
  {
    title: 'LNG Loading Transient',
    icon: <TruckIcon className="app-icon" />,
    image: defaultImg5,
  },
  {
    title: 'Oil Pumping Transfer Station',
    icon: <CogIcon className="app-icon" />,
    image: defaultImg,
  },
  {
    title: 'Cooling Water Network',
    icon: <BoltIcon className="app-icon" />,
    image: defaultImg4,
  },
  {
    title: 'Fire Water System',
    icon: <FireIcon className="app-icon" />,
    image: defaultImg3,
  },
];

const ApplicationSection = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <section className="application-section">
      <div className="application-section__title">
        <h2>
          <img src={flowmaxLogo} alt="Flowmax" className="application-section__logo" /> Applications
        </h2>
        <p className="application-section__subtitle">
          Versatile solutions across industries
        </p>
      </div>

      <div className="application-section__list">
        {applications.map((app, index) => (
          <motion.div
            key={index}
            className="application-section__item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="application-section__header">
              {app.icon}
              <h3>{app.title}</h3>
            </div>
            <img
              src={app.image}
              alt={app.title}
              className="application-section__image"
              onClick={() => setLightboxImage(app.image)}
              style={{ cursor: 'pointer' }}
            />
          </motion.div>
        ))}
      </div>

      {lightboxImage && (
        <div className="image-lightbox" onClick={() => setLightboxImage(null)}>
          <img src={lightboxImage} alt="Enlarged view" />
          <span className="image-lightbox__close" onClick={() => setLightboxImage(null)}>
            &times;
          </span>
        </div>
      )}
    </section>
  );
};

export default ApplicationSection;
