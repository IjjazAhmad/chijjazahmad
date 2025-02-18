import React from "react";
import ServicesAdds from "../../../components/ServicesSection/ServicesAdds";
import ServicesHero from "../../../components/ServicesSection/ServicesHero";
import ServicesDetails from "../../../components/ServicesSection/ServicesDetails";


const Services = () => {
  return (
    <div className="services_page">
      <ServicesHero />
      <ServicesDetails />
      <ServicesAdds />
    </div>
  );
};

export default Services;
