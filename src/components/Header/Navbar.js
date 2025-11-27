import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  return (
    <header role="banner">
      <nav
        className={`navbar navbar-expand-lg navbar-dark ${scrolled ? 'scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container">
          <Link
            to="/"
            className="navbar-brand"
            aria-label="Ijjaz Ahmad - Full Stack Developer Home"
          >
            <span className="brand__bracket">&lt;</span>
            <span className="brand__text">IA</span>
            <span className="brand__bracket">/&gt;</span>
            <span className="brand__dot"></span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0" role="menubar">
              <li className="nav-item" role="none">
                <Link
                  to="/"
                  className={isActive("/")}
                  role="menuitem"
                  aria-current={location.pathname === "/" ? "page" : undefined}
                >
                  <span className="nav__number">01</span>
                  <span className="nav__text">HOME</span>
                </Link>
              </li>
              <li className="nav-item" role="none">
                <Link
                  to="/about"
                  className={isActive("/about")}
                  role="menuitem"
                  aria-current={
                    location.pathname === "/about" ? "page" : undefined
                  }
                >
                  <span className="nav__number">02</span>
                  <span className="nav__text">ABOUT</span>
                </Link>
              </li>
              <li className="nav-item" role="none">
                <Link
                  to="/service"
                  className={isActive("/service")}
                  role="menuitem"
                  aria-current={
                    location.pathname === "/service" ? "page" : undefined
                  }
                >
                  <span className="nav__number">03</span>
                  <span className="nav__text">SERVICES</span>
                </Link>
              </li>
              <li className="nav-item" role="none">
                <Link
                  to="/project"
                  className={isActive("/project")}
                  role="menuitem"
                  aria-current={
                    location.pathname === "/project" ? "page" : undefined
                  }
                >
                  <span className="nav__number">04</span>
                  <span className="nav__text">PROJECTS</span>
                </Link>
              </li>
              <li className="nav-item" role="none">
                <Link
                  to="/contact"
                  className="nav__cta"
                  role="menuitem"
                  aria-label="Contact Ijjaz Ahmad for your project"
                >
                  <i className="fa-solid fa-paper-plane"></i>
                  <span>CONTACT</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
