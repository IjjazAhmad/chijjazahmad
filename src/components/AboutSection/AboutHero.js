import React from "react";

export default function AboutHero() {
  return (
    <div className="about-hero">
      <h1 data-aos="fade-down">About Me</h1>
      <div className="breadcrumb" data-aos="fade-up" data-aos-delay="100">
        <span>Home</span>
        <i className="fa-solid fa-arrow-right-long"></i>
        <span>About</span>
      </div>
    </div>
  );
}
