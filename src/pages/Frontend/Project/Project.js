import React, { useState } from "react";
import PorfolioHero from "../../../components/PortfolioSection/PortfolioHero";
import SEOHead from "../../../components/SEO/SEOHead";
import SocialShare from "../../../components/SocialShare/SocialShare";
import { Link } from "react-router-dom";
import { caseStudies } from "../../../config/caseStudies";
import CaseStudyCard from "../../../components/Card/CaseStudyCard";

export default function Project() {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const handleShowMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, caseStudies.length));
  };

  const handleShowLess = () => {
    setVisibleProjects(6);
  };

  // Portfolio Schema
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Ijjaz Ahmad's Portfolio - Web & Mobile Projects",
    description:
      "Explore 50+ projects built by Ijjaz Ahmad including AI platforms, mobile apps, e-commerce solutions, and full-stack MERN applications.",
    url: "https://chijjazahmad.vercel.app/project",
    author: {
      "@type": "Person",
      name: "Ijjaz Ahmad",
      url: "https://chijjazahmad.vercel.app",
    },
    hasPart: [
      {
        "@type": "SoftwareApplication",
        name: "Homework Rabbit",
        applicationCategory: "AI Educational Platform",
        operatingSystem: "Web",
        description:
          "Fastest AI-powered homework helper delivering instant, step-by-step solutions across 15+ subjects. Built with Next.js, NextAuth, and Convex. 500K+ problems solved, 99% accuracy.",
        url: "https://www.homeworkrabbit.com",
        author: {
          "@type": "Person",
          name: "Ijjaz Ahmad",
        },
      },
      {
        "@type": "MobileApplication",
        name: "Rafiq Islamic App",
        applicationCategory: "Lifestyle",
        operatingSystem: "Android",
        description:
          "Comprehensive Islamic mobile app with prayer times, Quran, and mosque finder features.",
        downloadUrl:
          "https://play.google.com/store/apps/details?id=com.rafiqapp",
        author: {
          "@type": "Person",
          name: "Ijjaz Ahmad",
        },
      },
    ],
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
        name: "Projects",
        item: "https://chijjazahmad.vercel.app/project",
      },
    ],
  };

  // Featured Case Studies - now using imported data
  // const caseStudies is imported from config

  return (
    <div className="portfolio__page">
      <SEOHead
        title="Portfolio - Web & Mobile Projects | Ijjaz Ahmad MERN Developer"
        description="Explore 50+ web and mobile projects by Ijjaz Ahmad including Homework Rabbit (Fastest AI Homework Helper with 500K+ problems solved), Rafiq Islamic App, and full-stack MERN applications. View case studies, technologies used, and results achieved."
        keywords="web development portfolio, React.js projects, Next.js applications, MERN Stack projects, mobile app portfolio, React Native apps, full stack developer work, Pakistani developer projects, Faisalabad developer portfolio"
        canonical="/project"
        schemaData={portfolioSchema}
        breadcrumbData={breadcrumbSchema}
      />

      <PorfolioHero />

      {/* Case Studies Section */}
      <section className="case__studies py-5">
        <div className="container py-5">
          <div className="section__header text-center mb-5" data-aos="fade-up">
            <span className="section__label">&lt; all_projects /&gt;</span>
            <h2>Project Case Studies</h2>
            <p>
              In-depth look at all {caseStudies.length} of my impactful projects
            </p>
          </div>

          {caseStudies.slice(0, visibleProjects).map((study, index) => (
            <CaseStudyCard key={index} study={study} index={index} />
          ))}

          {/* Show More/Less Buttons */}
          <div
            className="projects__load-more text-center mt-5"
            data-aos="fade-up"
          >
            {visibleProjects < caseStudies.length && (
              <button
                onClick={handleShowMore}
                className="load-more__btn primary"
              >
                <span className="btn__content">
                  <span>Show More Projects</span>
                  <i className="fa-solid fa-arrow-down"></i>
                </span>
                <span className="btn__glow"></span>
              </button>
            )}

            {visibleProjects > 6 && (
              <button
                onClick={handleShowLess}
                className="load-more__btn secondary"
              >
                <span className="btn__content">
                  <span>Show Less</span>
                  <i className="fa-solid fa-arrow-up"></i>
                </span>
                <span className="btn__border"></span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="project__stats py-5">
        <div className="container">
          <div className="row g-4 justify-content-center text-center">
            <div className="col-6 col-md-3" data-aos="fade-up">
              <div className="stat__item">
                <span className="stat__number">50+</span>
                <span className="stat__label">Projects Completed</span>
              </div>
            </div>
            <div
              className="col-6 col-md-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="stat__item">
                <span className="stat__number">10+</span>
                <span className="stat__label">Happy Clients</span>
              </div>
            </div>
            <div
              className="col-6 col-md-3"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="stat__item">
                <span className="stat__number">3+</span>
                <span className="stat__label">Years Experience</span>
              </div>
            </div>
            <div
              className="col-6 col-md-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="stat__item">
                <span className="stat__number">5</span>
                <span className="stat__label">Countries Served</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="project__cta py-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8" data-aos="fade-up">
              <h2>Have a Project in Mind?</h2>
              <p className="mb-4">
                I'm always excited to work on new challenges. Whether it's a web
                application, mobile app, or a full-stack solution, let's discuss
                how I can help bring your ideas to life.
              </p>
              <div className="cta__buttons d-flex flex-wrap justify-content-center gap-3 mb-4">
                <Link to="/contact" className="btn btn-primary">
                  <i className="fa-solid fa-envelope me-2"></i>
                  Start a Project
                </Link>
                <a
                  href="https://wa.me/923267876344"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <i className="fa-brands fa-whatsapp me-2"></i>
                  WhatsApp Me
                </a>
              </div>
              <div className="share__section mt-4">
                <p className="mb-2">Share my portfolio:</p>
                <SocialShare
                  url="https://chijjazahmad.vercel.app/project"
                  title="Check out this impressive portfolio by Ijjaz Ahmad!"
                  description="50+ web and mobile projects by a MERN Stack developer from Pakistan. Must see!"
                  size={36}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
