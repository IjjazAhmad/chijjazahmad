import React from 'react'
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
    <div className="footer bgDark text-secondary">
      <div className="container py-3">
  
        <div className="row">
          <div className="col-12 col-mg-6 col-lg-6 ">
            <p className="p-0">&copy; {year}. All Right Reserved By Ijjaz Ahmad</p>
          </div>
          <div className="col-12 col-mg-6 col-lg-6 d-lg-flex justify-content-end">           
            <div className="ico">
              <a href="https://www.facebook.com/ijjaz.ahmad.7902" target='blank' className='text-secondary'><i className="fa-brands fa-facebook ms-2 fs-4"></i></a>
              <a href="https://www.youtube.com/channel/UC8vfBs76i-uEBWyl43C6Fow" target='blank' className='text-secondary'><i className="fa-brands fa-youtube ms-2 fs-4"></i></a>
              <a href="https://www.instagram.com/ijjaz.a" target='blank' className='text-secondary'><i className="fa-brands fa-instagram ms-2 fs-4"></i></a>
              <a href="https://github.com/IjjazAhmad" target='blank' className='text-secondary'><i className="fa-brands fa-github ms-2 fs-4"></i></a>
              <a href="https://twitter.com/ijjaz_ahmad" target='blank' className='text-secondary'><i className="fa-brands fa-twitter ms-2 fs-4"></i></a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
