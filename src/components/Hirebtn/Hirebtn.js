import React from 'react'

export default function Hirebtn() {
  return (
    <div className="hirebtn">
      <a 
        href="https://www.fiverr.com/ijjazahmad809" 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn-hire"
        aria-label="Hire me on Fiverr"
      >
        <span className="hire__icon">
          <i className="fa-solid fa-briefcase"></i>
        </span>
        <span className="hire__text">Hire Me</span>
        <div className="hire__glow"></div>
      </a>
    </div>
  )
}
