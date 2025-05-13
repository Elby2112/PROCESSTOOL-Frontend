import React from 'react';
import HeroSectionFm from '../components/HeroSectionFm';
import UserInustry from '../components/IndustryUseFm';
import FmFeature from '../components/FmFeature';
import EquipmentSection from '../components/EquipmentSection';
import ApplicationSection from '../components/ApplicationSection';
/*import MoreFeatures from '../components/FmMoreFeatures';*/
import FmCtaLearn from '../components/FmCtaLearn';
import ModeSection from '../components/FmModeSection';
import flowmaxUsers from '../components/flowmaxUsers';

const Product = () => {
  return (
    <>
    <HeroSectionFm />
    <UserInustry />
    <EquipmentSection />
    {/*<MoreFeatures />*/}
    <FmFeature />
    <ApplicationSection />
    <ModeSection />
    <FmCtaLearn />
    </>
    
  );
};

export default Product;




