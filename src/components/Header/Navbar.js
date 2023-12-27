import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
      <header>

        <nav className="navbar navbar-expand-lg bgDark navbar-dark" >
          <div className="container">
            <Link className="navbar-brand animate__animated animate__rotateInDownLeft animate__slow	2s" >I A</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa-solid fa-ellipsis-vertical"></i>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/ "  className="nav-link" >HOME</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about"  className="nav-link" >ABOUT</Link>
                </li>
                <li className="nav-item">
                  <Link to="/service"  className="nav-link" >SERVICES</Link>
                </li>
                <li className="nav-item">
                  <Link to="/project"  className="nav-link" >PROJECT</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact"  className=" btn btn-warning" >CONTACT</Link>
                </li>
              </ul>

            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
