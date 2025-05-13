import React from 'react';
import { FaIndustry, FaFireExtinguisher, FaCogs, FaUserCog, FaTools } from 'react-icons/fa';
import '../styles/flowmaxUsers.css';

const users = [
  {
    title: 'Engineering Companies',
    description:
      'Professionals involved in the design, construction, and maintenance of fluid flow systems, leveraging Flowmax to deliver optimized and reliable engineering solutions.',
    icon: <FaIndustry />,
  },
  {
    title: 'Fire Water Specialists',
    description:
      'Experts focused on designing and maintaining fire water systems and sprinkler networks to ensure safety and compliance with standards such as NFPA.',
    icon: <FaFireExtinguisher />,
  },
  {
    title: 'Equipment and Packages Providers',
    description:
      'Suppliers of pumps, valves, and other hydraulic equipment who use Flowmax to test and validate their products and integrate them with network systems, ensuring they meet required performance specifications.',
    icon: <FaCogs />,
  },
  {
    title: 'Operators',
    description:
      'Personnel responsible for daily operations of oil and gas facilities, water and fuel distribution networks, using Flowmax to ensure efficiency, safety, and reliability.',
    icon: <FaUserCog />,
  },
  {
    title: 'Hydraulic Engineers',
    description:
      'Specialists in water distribution systems who use Flowmax to design, analyze, and optimize hydraulic networks for various applications.',
    icon: <FaTools />,
  },
];

const FlowmaxUsers = () => {
  return (
    <section className="flowmax-users-section">
      <h2 className="flowmax-users-title">Who Uses Flowmax?</h2>
      <div className="flowmax-users-list">
        {users.map((user, index) => (
          <div key={index} className={`user-card ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="user-icon">{user.icon}</div>
            <div className="user-info">
              <h3>{user.title}</h3>
              <p>{user.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlowmaxUsers;
