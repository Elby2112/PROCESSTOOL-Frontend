import React, { useEffect, useState } from 'react';
import '../styles/PartnerLogos.css';
import Logo1 from '../assets/PartnersLogos/Logo1.png';
import Logo2 from '../assets/PartnersLogos/Logo2.png';
import Logo3 from '../assets/PartnersLogos/Logo3.png';
import Logo4 from '../assets/PartnersLogos/Logo4.png';
import Logo5 from '../assets/PartnersLogos/Logo5.png';

const PartnerLogos = () => {
  const logos = [Logo1, Logo2, Logo3, Logo4, Logo5];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [logos.length]);

  return (
    <section className="partner-highlight-carousel">
      <div className="carousel-track-centered">
        {logos.map((logo, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              className={`carousel-item-centered ${isActive ? 'active' : ''}`}
              key={index}
            >
              <img src={logo} alt={`Partner ${index + 1}`} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PartnerLogos;
