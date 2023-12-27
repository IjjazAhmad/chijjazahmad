import React from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Link } from 'react-router-dom'
import images from '../../../images/index'
export default function About() {
  return (
    <>
      <section >
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                <ol className="breadcrumb mb-0">
                  <Link to="/" className="breadcrumb-item">Home</Link>
                  <Link to="/about" className="breadcrumb-item">About</Link>
                  <Link className="breadcrumb-item active" aria-current="page">Profile</Link>
                </ol>
              </nav>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img src={images.myPic} alt="Profile"
                    className="rounded-circle img-fluid" style={{ width: " 150px" }} />
                  <h5 className="my-3">Ijjaz Ahmad</h5>
                  <p className="text-muted mb-1">Full Stack Developer</p>
                  <p className="text-muted mb-4">Faisalabad, Punjab Pakitan</p>
                  <div className="d-flex justify-content-center mb-2">
                    <button type="button" className="btn btn-outline-primary ms-1"><a href="https://wa.me/+923267876344" target='blank'>Message</a></button>
                  </div>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Ijjaz Ahmad</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">ijjazahmad705@gmail.com</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Mobile</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">(+92) 326-7876344</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Faisalabad, Punjab Pakitan</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-8">

              <div className="row">
                <div className="col-md-6">
                  <div className="card mb-4 mb-md-0">
                    <div className="card-body">
                      <p className="mb-4"><span className="text-primary font-italic me-1"></span>Skills Status
                      </p>
                      <p className="mb-1" style={{ fontSize: ".77rem" }}  >HTML</p>
                      <div className="progress rounded" style={{ height: "5px" }} >
                        <div className="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="80"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }} >CSS</p>
                      <div className="progress rounded" style={{ height: "5px" }} >
                        <div className="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="72"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }} >Bootstrap</p>
                      <div className="progress rounded" style={{ height: "5px" }} >
                        <div className="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="72"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }} >JavaScipt</p>
                      <div className="progress rounded" style={{ height: "5px" }} >
                        <div className="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="89"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }} >React</p>
                      <div className="progress rounded" style={{ height: "5px" }} >
                        <div className="progress-bar" role="progressbar" style={{ width: "65%" }} aria-valuenow="55"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }} >Backend API</p>
                      <div className="progress rounded mb-2" style={{ height: "5px" }} >
                        <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="66"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }} >Firebase</p>
                      <div className="progress rounded mb-2" style={{ height: "5px" }} >
                        <div className="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="66"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }} >React Native</p>
                      <div className="progress rounded mb-2" style={{ height: "5px" }} >
                        <div className="progress-bar" role="progressbar" style={{ width: "45%" }} aria-valuenow="66"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card mb-4 mb-md-0">
                    <div className="card-body">
                      <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                      </p>
                      <p className="mb-1" style={{ fontSize: ".77rem" }} >Web Design</p>
                      <div className="progress rounded" style={{ height: "5px" }} >
                        <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }} >Website Markup</p>
                      <div className="progress rounded" style={{ height: "5px" }} >
                        <div className="progress-bar" role="progressbar" style={{ width: "72%" }} aria-valuenow="72"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }} >One Page</p>
                      <div className="progress rounded" style={{ height: "5px" }} >
                        <div className="progress-bar" role="progressbar" style={{ width: "89%" }} aria-valuenow="89"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }} >Mobile Template</p>
                      <div className="progress rounded" style={{ height: "5px" }} >
                        <div className="progress-bar" role="progressbar" style={{ width: "55%" }} aria-valuenow="55"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }} >Backend API</p>
                      <div className="progress rounded mb-2" style={{ height: "5px" }} >
                        <div className="progress-bar" role="progressbar" style={{ width: "66%" }} aria-valuenow="66"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card my-4 mb-lg-0">
                <div className="card-body p-0">
                  <ul className="list-group list-group-flush rounded-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <Link to='www.linkedin.com/in/ijjazahmad' target='blank'><i className="fa fa-linkedin fa-lg"></i></Link>

                      <p className="mb-0">@ijjazahmad</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <Link to='https://github.com/IjjazAhmad ' target='blank'><i className="fab fa-github fa-lg" style={{ color: "#333333" }} ></i></Link>

                      <p className="mb-0">@ijjazAhmad</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <Link to='https://twitter.com/ijjaz_ahmad' target='blank'><i className="fab fa-twitter fa-lg" style={{ color: "#55acee" }}></i></Link>

                      <p className="mb-0">@ijjaz_ahmad</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <Link to='https://www.instagram.com/ijjaz.a' target='blank'><i className="fab fa-instagram fa-lg" style={{ color: "#ac2bac" }}></i></Link>

                      <p className="mb-0">@ijjaz.a</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <Link to='https://www.facebook.com/ijjaz.ahmad.7902' target='blank'><i className="fab fa-facebook-f fa-lg" style={{ color: "#3b5998" }}></i></Link>

                      <p className="mb-0">@ijjazahmad</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
