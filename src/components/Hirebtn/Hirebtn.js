import React from 'react'

export default function Hirebtn() {
  return (
    <div className="hirebtn">
      <a 
        href="https://www.upwork.com/freelancers/~01cc805e4438446732?mp_source=share" 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn-hire"
        aria-label="Hire me on Upwork"
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
