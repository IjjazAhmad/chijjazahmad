import React from 'react'
import Contactform from '../../../components/Form/ContactForm';
export default function Contact() {
  return (
    <>
      <div className="form">
        <div className="container ">

          <div className="row justify-content-center mt-5">
            <div className="col-12 col-md-3 col-lg-2 my-2">
              <a href="https://wa.me/923267876344" target='blank' className="card text-center p-3 bg-dark-emphasis">
                <i className="fa-brands fa-square-whatsapp mb-1"></i>
                <p className='mb-1'>WhatsApp</p>
              </a>
            </div>
            <div className="col-12 col-md-3 col-lg-2 my-2">
              <a href="mailto:ijjazahmad705@gmail.com" className="card text-center p-3">
                <i className="fa-solid fa-envelope mb-1"></i>
                <p className='mb-1'>Send Email</p>
              </a>
            </div>
            <div className="col-12 col-md-3 col-lg-2 my-2">
              <div className="card text-center p-3">
                <i className="fa-solid fa-location-dot"></i>
                <p className='mb-1'>Faisalabad, Punjab Pakistan</p>
              </div>
            </div>
          </div>

          {/* ---------- form -------- */}
          <Contactform />

        </div>
      </div>
    </>
  )
}
