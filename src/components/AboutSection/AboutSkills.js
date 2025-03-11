import React from 'react'

export default function AboutSkills() {
  const Skill_Data_1 = [
    { name: 'HTML', length: 95 },
    { name: 'CSS', length: 75 },
    { name: 'JavaScript', length: 80 },
    { name: 'React Js', length: 90 },
    { name: 'Next Js', length: 81 },]
  const Skill_Data_2 = [
    { name: 'Tailwind Css', length: 75 },
    { name: 'Node Js', length: 84 },
    { name: 'Mongo Db', length: 87 },
    { name: 'Shadcn/ui', length: 78 },
    { name: 'Typescript', length: 80 },]
  return (
    <div className='container'>
      <div className='row mb-5 px-0' style={{ columnGap: "30px" }}>
        <div className='col-12 text-white'>
          <span data-aos="fade-left">
            Who Am I ?
          </span>
          <h3 data-aos="fade-left" className="fw-semibold fs-2 text-warning">My Skills!</h3>
        </div>
        <div className='col-12 col-md-12 col-lg-6 mt-3 border border-2 border-warning rounded-1'>
          {Skill_Data_1.map((item, i) => {
            return (
              <div key={i} className='my-2'>
                <span className='text-white'>{item.name}</span>
                <div className="progress bg-transparent rounded-1 p-1 border border-2 border-warning" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: "20px" }}>
                  <div className="progress-bar bg-warning" style={{ width: `${item.length}%` }}></div>
                </div>
              </div>
            )
          })}
        </div>
        <div className='col-12 col-md-12 col-lg-6 mt-3 border border-2 border-warning rounded-1'>
          {Skill_Data_2.map((item, i) => {
            return (
              <div key={i} className='my-2'>
                <span className='text-white'>{item.name}</span>
                <div className="progress bg-transparent rounded-1 p-1 border border-2 border-warning" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: "20px" }}>
                  <div className="progress-bar bg-warning" style={{ width: `${item.length}%` }}></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
