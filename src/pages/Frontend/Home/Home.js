import React from 'react'
import images from '../../../images/index'
import { Typewriter } from 'react-simple-typewriter'
export default function Home() {
  return (
    <div className='home flex-column d-flex justify-content-center align-items-center'>
      <div className="container text-white text-center ">
        <div className="row ">
          <div className="col-12">
            <div className='imageDiv'>
              <div className="image-container">
                <img src={"https://res.cloudinary.com/dzlgu06oq/image/upload/v1703600195/WhatsApp_Image_2023-01-01_at_6.20.46_PM_2_dqkjrm.jpg"} alt="loading..." aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" />
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-12">
            <div>
              <h3 className="fw-normal  mt-3">Hello, I'm</h3>
              <h2 className="fw-normal ">{''}
                <span style={{ color: '#FF7B00', fontWeight: 'bold' }}>
                  <Typewriter
                    words={['Ijjaz Ahmad']}
                    loop={1}

                    cursorStyle=''
                    typeSpeed={100}


                  />
                </span>
              </h2>
            </div>
            <div>
              <h5 className="fw-normal w-100">{''}
                <span style={{ color: '#FF9500', fontWeight: 'bold' }}>
                  <Typewriter
                    words={['UI Designer', 'Frontend Developer', 'Backend Developer', 'Fullstack Developer']}
                    loop={1000}
                    cursor
                    cursorStyle='_'
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}

                  />
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
