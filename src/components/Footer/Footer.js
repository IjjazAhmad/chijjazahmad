import React from "react";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="footer bgDark text-white">
        <div className="container py-3">
          <div className="row align-items-center">
            <div className="col-12 col-mg-6 col-lg-6">
              <p className="p-0">
                &copy; {year}. All Right Reserved By Ijjaz Ahmad
              </p>
            </div>
            <div className="col-12 col-mg-6 col-lg-6 d-lg-flex justify-content-end">
              <div className="ico">
                <a
                  href="https://www.facebook.com/ijjaz.ahmad.7902"
                  target="blank"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UC8vfBs76i-uEBWyl43C6Fow"
                  target="blank"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a href="https://www.instagram.com/ijjaz.a" target="blank">
                  <i className="fa-brands fa-instagram "></i>
                </a>
                <a href="https://github.com/IjjazAhmad" target="blank">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://twitter.com/ijjaz_ahmad" target="blank">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
