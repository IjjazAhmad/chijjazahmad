import React from "react";
import ServicesAdds from "../../../components/ServicesSection/ServicesAdds";
import ServicesHero from "../../../components/ServicesSection/ServicesHero";
import ServicesDetails from "../../../components/ServicesSection/ServicesDetails";
import SEOHead from "../../../components/SEO/SEOHead";
import { Link } from "react-router-dom";

const Services = () => {
  // Services Schema
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Development Services",
    provider: {
      "@type": "Person",
      name: "Ijjaz Ahmad",
      url: "https://chijjazahmad.vercel.app",
    },
    areaServed: [
      "Pakistan",
      "United States",
      "United Kingdom",
      "United Arab Emirates",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "MERN Stack Development",
            description:
              "Full-stack web application development using MongoDB, Express.js, React.js, and Node.js",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "React Native Mobile Development",
            description:
              "Cross-platform mobile app development for iOS and Android using React Native",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Next.js Development",
            description:
              "Server-side rendered React applications with Next.js for optimal performance and SEO",
          },
        },
      ],
    },
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://chijjazahmad.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://chijjazahmad.vercel.app/service",
      },
    ],
  };

  // FAQ Schema for Services
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What web development services do you offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I offer full-stack MERN development, React.js/Next.js frontend development, Node.js backend development, REST API development, database design with MongoDB, and mobile app development with React Native.",
        },
      },
      {
        "@type": "Question",
        name: "How much do your development services cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Project costs vary based on complexity and scope. Simple websites start from $500, while complex web applications range from $2,000-$10,000+. Contact me for a detailed quote based on your specific requirements.",
        },
      },
      {
        "@type": "Question",
        name: "What is the typical project timeline?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Project timelines depend on complexity. A simple website takes 1-2 weeks, while complex applications may take 1-3 months. I provide detailed timelines during project planning.",
        },
      },
    ],
  };

  return (
    <div className="services_page">
      <SEOHead
        title="MERN Stack Development Services | React & Next.js Expert | Ijjaz Ahmad"
        description="Hire Ijjaz Ahmad for professional MERN Stack, React.js, Next.js, and React Native development services. Get scalable web applications and mobile apps built by an experienced developer from Faisalabad, Pakistan."
        keywords="MERN Stack development services, React.js developer services, Next.js development, React Native app development, Node.js backend services, MongoDB database, hire web developer Pakistan, full stack services Faisalabad"
        canonical="/service"
        schemaData={servicesSchema}
        breadcrumbData={breadcrumbSchema}
        faqData={faqSchema}
      />

      <ServicesHero />
      <ServicesDetails />
      <ServicesAdds />

      {/* Services CTA Section */}
      <section className="services__cta py-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8" data-aos="fade-up">
              <h2>Ready to Start Your Project?</h2>
              <p className="mb-4">
                Let's discuss your requirements and create a solution that meets
                your business goals. I offer competitive rates and deliver
                high-quality results.
              </p>
              <div className="cta__buttons d-flex flex-wrap justify-content-center gap-3">
                <Link to="/contact" className="btn btn-primary">
                  <i className="fa-solid fa-envelope me-2"></i>
                  Get a Free Quote
                </Link>
                <a
                  href="https://wa.me/923267876344"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <i className="fa-brands fa-whatsapp me-2"></i>
                  Chat on WhatsApp
                </a>
                <Link to="/project" className="btn btn-outline">
                  <i className="fa-solid fa-folder-open me-2"></i>
                  View My Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
