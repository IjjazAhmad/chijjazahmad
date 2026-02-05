import React from "react";
import { Link } from "react-router-dom";
import Newsletter from "../Newsletter/Newsletter";

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/service" },
    { name: "Projects", path: "/project" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "MERN Stack Development",
    "React.js Development",
    "Next.js Applications",
    "React Native Apps",
    "Node.js Backend",
    "API Development",
  ];

  return (
    <>
      <footer className="footer bgDark text-white" role="contentinfo">
        <div className="container py-5">
          <div className="row g-4">
            {/* About Column */}
            <div className="col-lg-4 col-md-6">
              <div className="footer__about">
                <Link
                  to="/"
                  className="footer__logo"
                  aria-label="Ijjaz Ahmad - Home"
                >
                  <span className="brand__bracket">&lt;</span>
                  <span className="brand__text">IA</span>
                  <span className="brand__bracket">/&gt;</span>
                </Link>
                <p className="footer__description">
                  Professional MERN Stack Developer from Faisalabad, Pakistan.
                  Building scalable web applications and mobile apps with 3+
                  years of experience and 50+ completed projects.
                </p>
                <div className="footer__social">
                  <a
                    href="https://www.linkedin.com/in/ijjazahmad"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    href="https://github.com/IjjazAhmad"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/ijjazdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook Profile"
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/ch_ijjazahmad"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Profile"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href="https://wa.me/923267876344"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp Contact"
                  >
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="col-lg-2 col-md-6">
              <div className="footer__links">
                <h4>Quick Links</h4>
                <ul>
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Services Column */}
            <div className="col-lg-3 col-md-6">
              <div className="footer__links">
                <h4>Services</h4>
                <ul>
                  {services.map((service, index) => (
                    <li key={index}>
                      <Link to="/service">{service}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Column */}
            <div className="col-lg-3 col-md-6">
              <div className="footer__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li>
                    <i className="fa-solid fa-location-dot"></i>
                    <span>Faisalabad, Punjab, Pakistan</span>
                  </li>
                  <li>
                    <a href="mailto:ijjazahmad@hotmail.com">
                      <i className="fa-solid fa-envelope"></i>
                      <span>ijjazahmad@hotmail.com</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/923267876344"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-whatsapp"></i>
                      <span>+92 326 7876344</span>
                    </a>
                  </li>
                </ul>
                <div className="footer__newsletter mt-3">
                  <Newsletter variant="minimal" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer__bottom">
          <div className="container py-3">
            <div className="row align-items-center">
              <div className="col-md-6">
                <p className="mb-0">
                  &copy; {year} Ijjaz Ahmad. All Rights Reserved.
                </p>
              </div>
              <div className="col-md-6">
                <ul className="footer__bottom__links">
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/project">Portfolio</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Hire Me</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
