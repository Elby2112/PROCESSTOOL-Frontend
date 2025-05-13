import React from 'react';
import { motion } from 'framer-motion';
import '../styles/FmMoreFeatures.css';
import { Wrench,Settings2 } from 'lucide-react';

const features = [
  {
    title: "Pump Sizing",
    description: "Accurately calculate the optimal pump size for your system requirements",
    icon: <Wrench size={32} />,
  },
  {
    title: "Pipeline Sizing",
    description: "Determine the best pipeline diameters to minimize pressure loss",
    icon: <Wrench size={32} />,
  },
  {
    title: "Valve Selection",
    description: "Select suitable valves and assess their impact on system performance",
    icon: <Settings2 size={32} />,
  },
];

const FmMoreFeatures = () => {
  return (
    <section className="more-features-section">
      <h2 className="more-features-title">More Powerful Features</h2>
      <p className="more-features-subtitle">
        Explore additional advanced capabilities available in <strong>Flowmax</strong>
      </p>
      <div className="feature-steps">
        {features.map((feature, index) => (
          <motion.div
            className="feature-step"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FmMoreFeatures;
