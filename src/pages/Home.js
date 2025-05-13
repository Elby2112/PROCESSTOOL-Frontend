import React from 'react';
import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection';
import FlowmaxSection from '../components/FlowmaxSection';
import PartnerLogos from '../components/PartnerLogos';
import BlogSection from '../components/BlogSection';
import SubscribeSection from '../components/SubscribeSection';

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <FlowmaxSection />
      <PartnerLogos />
      <BlogSection />
      <SubscribeSection />
    </>
  );
};

export default Home;
