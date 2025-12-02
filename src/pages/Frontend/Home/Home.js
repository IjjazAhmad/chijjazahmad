import React from "react";
import Hero from "../../../components/HomeSection/HomeHero";
import About from "../../../components/HomeSection/HomeAbout";
import Services from "../../../components/HomeSection/HomeServices";
import Portfolio from "../../../components/HomeSection/HomePortfolio";
import Contactform from "../../../components/Form/ContactForm";
import SEOHead from "../../../components/SEO/SEOHead";

export default function Home() {
  const homeSchemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ijjaz Ahmad",
    jobTitle: "Full Stack Developer",
    description:
      "Professional Full Stack Developer specializing in MERN Stack, React.js, Next.js, Node.js, and mobile app development",
    url: "https://chijjazahmad.vercel.app",
    sameAs: [
      "https://www.linkedin.com/in/ijjazahmad",
      "https://github.com/IjjazAhmad",
      "https://www.facebook.com/ijjazdev",
      "https://www.instagram.com/ch_ijjazahmad",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Faisalabad",
      addressRegion: "Punjab",
      addressCountry: "Pakistan",
    },
    email: "ijjazahmad@hotmail.com",
    telephone: "+923267876344",
    knowsAbout: [
      "React.js",
      "Next.js",
      "Node.js",
      "MongoDB",
      "JavaScript",
      "TypeScript",
      "Mobile App Development",
      "MERN Stack",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance Developer",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Developer",
      occupationLocation: {
        "@type": "City",
        name: "Faisalabad, Pakistan",
      },
      skills: [
        "React.js",
        "Next.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "JavaScript",
        "TypeScript",
        "Mobile Development",
      ],
    },
  };

  return (
    <>
      <SEOHead
        title="Ijjaz Ahmad - Full Stack Developer | MERN Stack Expert | Available for Hire"
        description="Professional Full Stack Developer from Faisalabad, Pakistan. Specializing in MERN Stack, React.js, Next.js, Node.js, and mobile app development. 5+ years experience building scalable web applications. Available for freelance projects and full-time opportunities."
        keywords="Ijjaz Ahmad, Full Stack Developer, MERN Stack Developer, React.js Expert, Next.js Developer, Node.js Developer, Mobile App Developer, Web Developer, JavaScript Developer, TypeScript, Faisalabad Developer, Pakistan Developer, Freelance Developer, Hire Developer"
        canonical="/"
        schemaData={homeSchemaData}
      />
      <Hero />
      <About />
      <Services />
      <Portfolio />
        <Contactform />
    </>
  );
}
