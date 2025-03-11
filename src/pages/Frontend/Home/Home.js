import React from "react";
import Hero from "../../../components/HomeSection/HomeHero";
import About from "../../../components/HomeSection/HomeAbout";
import Services from "../../../components/HomeSection/HomeServices";
import Portfolio from "../../../components/HomeSection/HomePortfolio";
import Contactform from "../../../components/Form/ContactForm";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <div className="container">
        <Contactform />
      </div>
    </>
  );
}
