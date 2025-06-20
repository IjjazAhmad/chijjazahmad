import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  return (
    <header role="banner">
      <nav
        className="navbar navbar-expand-lg bgDark navbar-dark"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container">
          <Link
            to="/"
            className="navbar-brand animate__animated animate__rotateInDownLeft animate__slow"
            aria-label="Ijjaz Ahmad - Full Stack Developer Home"
          >
            I A
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
            <i className="fa-solid fa-ellipsis-vertical" aria-hidden="true"></i>
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
                  HOME
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
                  ABOUT
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
                  SERVICES
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
                  PROJECTS
                </Link>
              </li>
              <li className="nav-item" role="none">
                <Link
                  to="/contact"
                  className="btn btn-warning px-3"
                  role="menuitem"
                  aria-label="Contact Ijjaz Ahmad for your project"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
