import React from 'react'

export default function Contactform() {



  return (
    <>
      <form action='https://formspree.io/f/mzbnpqwz' method='POST'>
        <div className="row justify-content-center">
          <div className="col-12 col-md-9 col-lg-6">
            <div className="card p-2 p-md-3 p-lg-4 my-5  justify-content-center ">
              <h3 className='text-center'>Send Message</h3>
              <div className="form-floating my-2">
                <input type='text' name='username' className="form-control" placeholder="Username" autoComplete='off' required ></input>
                <label className='ms-2'>Username</label>
              </div>
              <div className="form-floating my-2">
                <input type='email' name='Email' className="form-control" placeholder="Email" autoComplete='off' required ></input>
                <label className='ms-2'>Email</label>
              </div>
              <div className="form-floating my-2">
                <textarea className="form-control" name='message' placeholder="Leave a comment here" style={{ height: " 100px" }} autoComplete='off' required ></textarea>
                <label className='ms-2'>Type Message here.</label>
              </div>
              <div className="text-center">

              <button className='btn btn-warning w-50 ' type='submit'>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
