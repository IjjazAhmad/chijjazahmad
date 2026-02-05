import React from "react";
import AboutHero from "../../../components/AboutSection/AboutHero";
import AboutDetail from "../../../components/AboutSection/AboutDetail";
import SEOHead from "../../../components/SEO/SEOHead";
import ResumeDownload from "../../../components/ResumeDownload/ResumeDownload";
import SocialShare from "../../../components/SocialShare/SocialShare";
import { Link } from "react-router-dom";

export default function About() {
  // Person Schema for About page
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Ijjaz Ahmad",
      givenName: "Ijjaz",
      familyName: "Ahmad",
      jobTitle: "Full Stack MERN Developer",
      description:
        "Professional Full Stack Developer from Faisalabad, Pakistan with 3+ years of experience in MERN Stack development. Specialized in React.js, Next.js, Node.js, and React Native mobile development.",
      image: "https://chijjazahmad.vercel.app/images/myPic.jpg",
      url: "https://chijjazahmad.vercel.app/about",
      sameAs: [
        "https://www.linkedin.com/in/ijjazahmad",
        "https://github.com/IjjazAhmad",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Faisalabad",
        addressRegion: "Punjab",
        addressCountry: "Pakistan",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "University of Agriculture Faisalabad",
      },
      knowsLanguage: ["English", "Urdu", "Punjabi"],
      nationality: "Pakistani",
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
        name: "About",
        item: "https://chijjazahmad.vercel.app/about",
      },
    ],
  };

  // Career Timeline Data
  const careerTimeline = [
    {
      year: "2023 - Present",
      title: "Senior Full Stack Developer",
      company: "Freelance",
      description:
        "Leading development of complex web applications and mobile apps for international clients. Specializing in MERN Stack and React Native development.",
    },
    {
      year: "2022 - 2023",
      title: "React.js Developer",
      company: "Various Projects",
      description:
        "Developed multiple e-commerce platforms, dashboards, and web applications using React.js and Next.js frameworks.",
    },
    {
      year: "2021 - 2022",
      title: "Junior Web Developer",
      company: "Start of Journey",
      description:
        "Started professional journey in web development, learning MERN Stack technologies and building foundational skills.",
    },
  ];

  // Skills Data
  const skillsData = {
    frontend: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "HTML5/CSS3", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 90 },
    ],
    backend: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 75 },
      { name: "Socket.io", level: 80 },
    ],
    mobile: [
      { name: "React Native", level: 85 },
      { name: "Expo", level: 85 },
      { name: "Mobile UI/UX", level: 80 },
    ],
    tools: [
      { name: "Git/GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 75 },
      { name: "Postman", level: 85 },
      { name: "Docker", level: 70 },
    ],
  };

  return (
    <div className="about-page bgDark">
      <SEOHead
        title="About Ijjaz Ahmad - MERN Stack Developer Faisalabad | 3+ Years Experience"
        description="Learn about Ijjaz Ahmad, a professional Full Stack Developer from Faisalabad, Pakistan. 3+ years experience in React.js, Next.js, Node.js, React Native. 50+ projects completed for global clients."
        keywords="about Ijjaz Ahmad, MERN developer Faisalabad, full stack developer Pakistan, React developer bio, freelance developer Punjab, web developer profile, hire Pakistani developer, Faisalabad programmer"
        canonical="/about"
        schemaData={aboutSchema}
        breadcrumbData={breadcrumbSchema}
      />

      {/* Hero Section */}
      <div className="about-section">
        <div className="container">
          <AboutHero />
          <AboutDetail />
        </div>
      </div>

      {/* Expanded Bio Section */}
      <section className="about__expanded py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div
                className="section__header text-center mb-5"
                data-aos="fade-up"
              >
                <span className="section__label">&lt; my_journey /&gt;</span>
                <h2>My Story & Experience</h2>
              </div>

              <div className="about__bio" data-aos="fade-up">
                <p className="lead">
                  Hi, I'm <strong>Ijjaz Ahmad</strong>, a passionate Full Stack
                  Developer based in
                  <strong> Faisalabad, Punjab, Pakistan</strong>. With over{" "}
                  <strong>3 years of professional experience</strong> and{" "}
                  <strong>50+ successful projects</strong>, I specialize in
                  building modern, scalable web applications and mobile apps
                  using the MERN Stack.
                </p>

                <p>
                  My journey in software development began with a deep curiosity
                  about how technology can solve real-world problems. This
                  curiosity led me to master the MERN Stack (MongoDB,
                  Express.js, React.js, Node.js) and expand into mobile
                  development with React Native. Today, I help businesses and
                  entrepreneurs bring their digital ideas to life.
                </p>

                <p>
                  I've had the privilege of working with clients from{" "}
                  <strong>
                    United States, United Kingdom, UAE, and Pakistan
                  </strong>
                  , delivering solutions ranging from AI-powered educational
                  platforms like <Link to="/project">HomeworkRabbit</Link> to
                  Islamic mobile applications like the{" "}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.rafiqapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Rafiq App
                  </a>{" "}
                  available on Google Play Store.
                </p>

                <h3>Why Work With Me?</h3>
                <ul className="about__benefits">
                  <li>
                    <i className="fa-solid fa-check-circle"></i>
                    <span>
                      <strong>Quality Code:</strong> I write clean,
                      maintainable, and well-documented code following best
                      practices.
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check-circle"></i>
                    <span>
                      <strong>Communication:</strong> Regular updates and
                      transparent communication throughout the project
                      lifecycle.
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check-circle"></i>
                    <span>
                      <strong>On-Time Delivery:</strong> I understand the
                      importance of deadlines and deliver projects on schedule.
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check-circle"></i>
                    <span>
                      <strong>Post-Launch Support:</strong> I provide ongoing
                      support and maintenance after project completion.
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check-circle"></i>
                    <span>
                      <strong>Competitive Rates:</strong> High-quality
                      development services at competitive prices.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline Section */}
      <section className="career__timeline py-5">
        <div className="container py-5">
          <div className="section__header text-center mb-5" data-aos="fade-up">
            <span className="section__label">&lt; career_path /&gt;</span>
            <h2>Professional Journey</h2>
          </div>

          <div className="timeline">
            {careerTimeline.map((item, index) => (
              <div
                key={index}
                className="timeline__item"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="timeline__marker"></div>
                <div className="timeline__content">
                  <span className="timeline__year">{item.year}</span>
                  <h4 className="timeline__title">{item.title}</h4>
                  <p className="timeline__company">{item.company}</p>
                  <p className="timeline__description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Skills Section */}
      <section className="detailed__skills py-5">
        <div className="container py-5">
          <div className="section__header text-center mb-5" data-aos="fade-up">
            <span className="section__label">&lt; technical_skills /&gt;</span>
            <h2>My Technical Expertise</h2>
            <p>Technologies I use to build scalable applications</p>
          </div>

          <div className="row g-4">
            {/* Frontend Skills */}
            <div className="col-lg-6" data-aos="fade-up">
              <div className="skills__card">
                <h4>
                  <i className="fa-solid fa-laptop-code"></i> Frontend
                  Development
                </h4>
                {skillsData.frontend.map((skill, index) => (
                  <div key={index} className="skill__item">
                    <div className="skill__info">
                      <span className="skill__name">{skill.name}</span>
                      <span className="skill__level">{skill.level}%</span>
                    </div>
                    <div className="skill__bar">
                      <div
                        className="skill__progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
                <div className="card__corner top-right"></div>
                <div className="card__corner bottom-left"></div>
              </div>
            </div>

            {/* Backend Skills */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="skills__card">
                <h4>
                  <i className="fa-solid fa-server"></i> Backend Development
                </h4>
                {skillsData.backend.map((skill, index) => (
                  <div key={index} className="skill__item">
                    <div className="skill__info">
                      <span className="skill__name">{skill.name}</span>
                      <span className="skill__level">{skill.level}%</span>
                    </div>
                    <div className="skill__bar">
                      <div
                        className="skill__progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
                <div className="card__corner top-right"></div>
                <div className="card__corner bottom-left"></div>
              </div>
            </div>

            {/* Mobile Skills */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="skills__card">
                <h4>
                  <i className="fa-solid fa-mobile-alt"></i> Mobile Development
                </h4>
                {skillsData.mobile.map((skill, index) => (
                  <div key={index} className="skill__item">
                    <div className="skill__info">
                      <span className="skill__name">{skill.name}</span>
                      <span className="skill__level">{skill.level}%</span>
                    </div>
                    <div className="skill__bar">
                      <div
                        className="skill__progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
                <div className="card__corner top-right"></div>
                <div className="card__corner bottom-left"></div>
              </div>
            </div>

            {/* Tools */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
              <div className="skills__card">
                <h4>
                  <i className="fa-solid fa-tools"></i> Tools & Technologies
                </h4>
                {skillsData.tools.map((skill, index) => (
                  <div key={index} className="skill__item">
                    <div className="skill__info">
                      <span className="skill__name">{skill.name}</span>
                      <span className="skill__level">{skill.level}%</span>
                    </div>
                    <div className="skill__bar">
                      <div
                        className="skill__progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
                <div className="card__corner top-right"></div>
                <div className="card__corner bottom-left"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about__cta py-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8" data-aos="fade-up">
              <h2>Let's Build Something Amazing Together</h2>
              <p className="mb-4">
                I'm always excited to work on new projects. Whether you need a
                web application, mobile app, or full-stack solution, I'm here to
                help bring your ideas to life.
              </p>
              <div className="cta__buttons d-flex flex-wrap justify-content-center gap-3 mb-4">
                <Link to="/contact" className="btn btn-primary">
                  <i className="fa-solid fa-envelope me-2"></i>
                  Get In Touch
                </Link>
                <ResumeDownload
                  variant="button"
                  className="btn btn-secondary"
                />
                <Link to="/project" className="btn btn-outline">
                  <i className="fa-solid fa-folder-open me-2"></i>
                  View Projects
                </Link>
              </div>
              <div className="share__section mt-4">
                <p className="mb-2">Share my profile:</p>
                <SocialShare
                  url="https://chijjazahmad.vercel.app/about"
                  title="Check out Ijjaz Ahmad - Expert MERN Stack Developer"
                  description="Professional Full Stack Developer from Pakistan with 3+ years experience. Hire for your next project!"
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
