import React from 'react'

export default function AboutSkills() {
  const Skill_Data_1 = [
    { name: 'HTML', length: 95 },
    { name: 'CSS', length: 75 },
    { name: 'JavaScript', length: 80 },
    { name: 'React Js', length: 90 },
    { name: 'Next Js', length: 81 },
  ]
  const Skill_Data_2 = [
    { name: 'Tailwind Css', length: 75 },
    { name: 'Node Js', length: 84 },
    { name: 'Mongo Db', length: 87 },
    { name: 'Shadcn/ui', length: 78 },
    { name: 'Typescript', length: 80 },
  ]
  
  return (
    <div className='about-skills'>
      <div className='skills-header' data-aos="fade-up">
        <span className="section-label">My Expertise</span>
        <h3>Technical Skills</h3>
      </div>
      <div className='row' style={{ gap: '2rem 0' }}>
        <div className='col-12 col-lg-6' data-aos="fade-right">
          <div className='skills-container'>
            {Skill_Data_1.map((item, i) => (
              <div key={i} className='skill-item'>
                <div className='skill-name'>
                  <span>{item.name}</span>
                  <span className='skill-percentage'>{item.length}%</span>
                </div>
                <div className="progress" role="progressbar" aria-label={item.name} aria-valuenow={item.length} aria-valuemin="0" aria-valuemax="100">
                  <div className="progress-bar" style={{ width: `${item.length}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='col-12 col-lg-6' data-aos="fade-left" data-aos-delay="200">
          <div className='skills-container'>
            {Skill_Data_2.map((item, i) => (
              <div key={i} className='skill-item'>
                <div className='skill-name'>
                  <span>{item.name}</span>
                  <span className='skill-percentage'>{item.length}%</span>
                </div>
                <div className="progress" role="progressbar" aria-label={item.name} aria-valuenow={item.length} aria-valuemin="0" aria-valuemax="100">
                  <div className="progress-bar" style={{ width: `${item.length}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
