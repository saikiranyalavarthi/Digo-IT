import React from "react";
import HeroSection from "../Components/Hero";
import WhoWeAre from "../Components/WhoWeAre";
import ServicesSection from "../Components/ServicesSection";
import StatsSection from "../Components/StatsSection";
import Contactsection from "../Components/Contactsection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WhoWeAre />
      <ServicesSection />
      <StatsSection />
      <Contactsection />
    </div>
  );
};

export default Home;
