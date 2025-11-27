import React from 'react'
import AboutHero from '../../../components/AboutSection/AboutHero'
import AboutDetail from '../../../components/AboutSection/AboutDetail';
import AboutSkills from '../../../components/AboutSection/AboutSkills';

export default function About() {
  return (
    <div className="about-section bgDark">
      <div className="container">
        <AboutHero />
        <AboutDetail />
        <AboutSkills />
      </div>
    </div>
  )
}
