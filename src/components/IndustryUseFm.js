import React from 'react';
import { motion } from 'framer-motion';
import flowmaxLogo from '../assets/fm_logo1.png';

import firewaterImg from '../assets/firewater.png';
import oilgasImg from '../assets/oilgas.png';
import waterImg from '../assets/watertreatment.png';
import petrochemicalImg from '../assets/petrochemicalImg.png';
import lngImg from '../assets/Hero-img2.png';
import powerImg from '../assets/powerImg.png';

import '../styles/IndustryUseFm.css';

const industryData = [
  {
    title: 'FIREWATER SYSTEMS',
    description: 'Design for effective firefighting capabilities and safety compliance, ringmain, deluge system, sprinkler, etc.',
    image: firewaterImg,
  },
  {
    title: 'OIL & GAS',
    description: 'Piping network design and pumping system for upstream, gas processing, renewable energy, and refining sectors.',
    image: oilgasImg,
  },
  {
    title: 'WATER TREATMENT',
    description: 'Design water treatment systems for various processes and distribution network modeling.',
    image: waterImg,
  },
  {
    title: 'PETROCHEMICAL',
    description: 'Model piping systems for chemical plants including flow dynamics, pressure drops, and operational optimization.',
    image: petrochemicalImg,
  },
  {
    title: 'LIQUEFIED NATURAL GAS (LNG)',
    description: 'Design and optimize LNG storage, vaporization, and regasification systems in transport and terminal facilities.',
    image: lngImg,
  },
  {
    title: 'POWER GENERATION',
    description: 'Simulate cooling water systems, fuel supply lines, and auxiliary piping networks for thermal and nuclear power plants.',
    image: powerImg,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const IndustryUseFm = () => {
  return (
    <section className="industry-fm">
      <div className="industry-fm__title">
        <h2>
          Industry Use of{' '}
          <img src={flowmaxLogo} alt="Flowmax" className="industry-fm__logo" />
        </h2>
      </div>
      <div className="industry-fm__cards">
        {industryData.map((item, index) => (
          <motion.div
            key={index}
            className="industry-fm__card"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: '0 6px 14px rgba(0, 0, 0, 0.08), 0 0 0 3px rgba(0, 123, 255, 0.2)',
              borderRadius: '12px',
            }}
          >
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default IndustryUseFm;
