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

  const isActiveBottom = (path) => {
    return location.pathname === path
      ? "bottom-nav__item active"
      : "bottom-nav__item";
  };

  return (
    <>
      <header role="banner">
        <nav
          className={`navbar navbar-expand-lg navbar-dark ${
            scrolled ? "scrolled" : ""
          }`}
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="container">
            <Link
              to="/"
              className="navbar-brand"
              aria-label="Ijjaz Ahmad - Software Developer Home"
            >
              <span className="brand__bracket">&lt;</span>
              <span className="brand__text">IA</span>
              <span className="brand__bracket">/&gt;</span>
              <span className="brand__dot"></span>
            </Link>

            {/* Desktop Navigation */}
            <div className="navbar-collapse desktop-nav">
              <ul className="navbar-nav mb-2 mb-lg-0" role="menubar">
                <li className="nav-item" role="none">
                  <Link
                    to="/"
                    className={isActive("/")}
                    role="menuitem"
                    aria-current={
                      location.pathname === "/" ? "page" : undefined
                    }
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
                    to="/book-appointment"
                    className="nav__cta nav__cta--book"
                    role="menuitem"
                    aria-label="Book a free consultation meeting"
                  >
                    <i className="fa-solid fa-calendar-check"></i>
                    <span>BOOK</span>
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

      {/* Mobile Bottom Navigation */}
      <nav
        className="bottom-nav"
        role="navigation"
        aria-label="Mobile navigation"
      >
        <Link to="/" className={isActiveBottom("/")}>
          <i className="fa-solid fa-house"></i>
          <span>Home</span>
        </Link>
        <Link to="/about" className={isActiveBottom("/about")}>
          <i className="fa-solid fa-user"></i>
          <span>About</span>
        </Link>
        <Link to="/service" className={isActiveBottom("/service")}>
          <i className="fa-solid fa-code"></i>
          <span>Services</span>
        </Link>
        <Link
          to="/book-appointment"
          className={isActiveBottom("/book-appointment")}
        >
          <i className="fa-solid fa-calendar-check"></i>
          <span>Book</span>
        </Link>
        <Link to="/contact" className={isActiveBottom("/contact")}>
          <i className="fa-solid fa-paper-plane"></i>
          <span>Contact</span>
        </Link>
      </nav>
    </>
  );
}
