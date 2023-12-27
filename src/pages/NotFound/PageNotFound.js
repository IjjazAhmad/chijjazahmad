import React from 'react'
import images from '../../images/index'
export default function PageNotFound() {
  return (
    <div className='pageNotFound bg-dark text-white' style={{ minHeight: "100vh" }}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="logo mt-5">
              <a href="/"><img src={images.logo1} alt="logo" style={{ width: "80px" }} /></a>
              
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "8rem" }}>
      <div className="row">
          <div className="col-12 col-md-6 col-lg-6 ">
            <p>Sorry!</p>
            <h3>We can't seem to find the resource you're looking for.</h3>
            <p>Please check that the Web site address is spelled correctly. <br/>
              Or go to our <a href="/">Home page</a>, and use the menus to navigate to a specific section.</p>
          </div>
          <div className="col-6 col-md-6 col-lg-6 text-center">
            <img src={images.error404} alt="error 404..." class="animate__animated animate__flash animate__infinite	infinite animate__slower" style={{ maxWidth: "18rem" }} />
          </div>
        </div>
      </div>
    </div>
  )
}
