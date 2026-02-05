import React from "react";
import Hero from "../../../components/HomeSection/HomeHero";
import About from "../../../components/HomeSection/HomeAbout";
import Services from "../../../components/HomeSection/HomeServices";
import Portfolio from "../../../components/HomeSection/HomePortfolio";
import SEOHead from "../../../components/SEO/SEOHead";
import ContactForm from "../../../components/Form/ContactForm";
import Testimonials from "../../../components/Testimonials/Testimonials";
import Newsletter from "../../../components/Newsletter/Newsletter";
import SocialShare from "../../../components/SocialShare/SocialShare";
import ResumeDownload from "../../../components/ResumeDownload/ResumeDownload";

export default function Home() {
  // Enhanced Schema Data for Homepage
  const homeSchemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://chijjazahmad.vercel.app/#person",
    name: "Ijjaz Ahmad",
    givenName: "Ijjaz",
    familyName: "Ahmad",
    jobTitle: "MERN Stack Developer",
    description:
      "Professional Full Stack Developer from Faisalabad, Pakistan specializing in MERN Stack, React.js, Next.js, Node.js, and React Native mobile app development. 3+ years of experience building scalable web applications with 50+ completed projects.",
    url: "https://chijjazahmad.vercel.app",
    image: "https://chijjazahmad.vercel.app/images/myPic.jpg",
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
      postalCode: "38000",
    },
    email: "ijjazahmad@hotmail.com",
    telephone: "+923267876344",
    alumniOf: {
      "@type": "Organization",
      name: "University of Agriculture Faisalabad",
    },
    knowsAbout: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "TypeScript",
      "React Native",
      "Mobile App Development",
      "MERN Stack",
      "REST API Development",
      "Full Stack Development",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Developer",
      occupationLocation: {
        "@type": "City",
        name: "Faisalabad, Punjab, Pakistan",
      },
      skills: [
        "React.js",
        "Next.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "JavaScript",
        "TypeScript",
        "React Native",
        "Git",
        "REST APIs",
      ],
    },
    offers: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "MERN Stack Development Services",
        description: "Professional web and mobile app development services",
      },
    },
  };

  // FAQ Schema for homepage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does Ijjaz Ahmad offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ijjaz Ahmad offers full-stack web development using MERN Stack (MongoDB, Express.js, React.js, Node.js), mobile app development with React Native, Next.js applications, API development, and technical consulting services.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Ijjaz Ahmad located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ijjaz Ahmad is based in Faisalabad, Punjab, Pakistan and works with clients globally through remote collaboration.",
        },
      },
      {
        "@type": "Question",
        name: "How can I hire Ijjaz Ahmad for my project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can contact Ijjaz Ahmad via WhatsApp at +92 326 7876344, email at ijjazahmad@hotmail.com, or through the contact form on this website to discuss your project requirements.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies does Ijjaz Ahmad specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ijjaz specializes in React.js, Next.js, Node.js, Express.js, MongoDB, TypeScript, JavaScript, and React Native for mobile development. He has expertise in building scalable web applications and mobile apps.",
        },
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="Ijjaz Ahmad - MERN Stack Developer Faisalabad | Hire Expert Now"
        description="Hire Ijjaz Ahmad, experienced MERN developer in Faisalabad, Pakistan for React, Next.js, React Native apps. 50+ projects, 3+ years experience, scalable solutions. Available for freelance projects."
        keywords="hire MERN developer Faisalabad, React Native developer Pakistan, full stack web developer Punjab, MERN Stack developer Pakistan, React.js expert Faisalabad, hire full stack developer Pakistan, Next.js developer Punjab, mobile app developer Faisalabad, Node.js developer Pakistan, freelance developer Faisalabad"
        canonical="/"
        schemaData={homeSchemaData}
        faqData={faqSchema}
      />

      {/* Hero Section with Primary Keywords */}
      <Hero />

      {/* About Section with Expanded Content */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Testimonials Section - Social Proof */}
      <Testimonials />

      {/* Contact Form */}
      <ContactForm />

      {/* Newsletter Subscription */}
      <Newsletter />

      {/* Social Share and Resume CTA */}
      <section className="home__cta py-5">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-lg-8" data-aos="fade-up">
              <h2>Ready to Work Together?</h2>
              <p className="mb-4">
                Let's build something amazing. Download my resume or share my
                portfolio with your network.
              </p>
              <div className="cta__buttons d-flex flex-wrap justify-content-center gap-3 mb-4">
                <ResumeDownload variant="button" className="btn btn-primary" />
                <a
                  href="https://wa.me/923267876344"
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-whatsapp me-2"></i>
                  WhatsApp Me
                </a>
              </div>
              <div className="share__section">
                <p className="mb-2">Share my portfolio:</p>
                <SocialShare size={36} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
