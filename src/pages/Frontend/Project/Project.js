import React from 'react'
import ProjectCard from '../../../components/Card/ProjectCard'
import images from '../../../images/index'
export default function Project() {
  return (
    <>
      <div className="project pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12  col-md-6 col-lg-6 text-center py-5">
              <p class="container-title">Here are the Recent<br></br>Projects</p>
              <p className='para mx-5'>Creating a web project is an exciting endeavor that allows us to showcase my creativity and technical skills while reaching a global audience.</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>Web Designing Project</h3>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-3 my-3">
                  <ProjectCard title='iweb website' description="iweb website design with HTML,CSS, Bootstrap. Fully responsive." imglink={images.iweb} weblink="https://iwebdevelopedbyijjaz.surge.sh/" />
                </div>

                <div className="col-12 col-md-6 col-lg-3 my-3 ">
                  <ProjectCard  title='Travel Company website' description="Travel Company website design with HTML & CSS. eye catching, responsive." imglink={images.travelwebimg} weblink="https://tarvelwebsitebyijjazahmad.surge.sh/" />
                </div>
                <div className="col-12 col-md-6 col-lg-3 my-3">
                  <ProjectCard title='Viking tours Webpage' description="Viking tours Website design with HTML & CSS. sample & responsive." imglink={images.vikingwebimg} weblink="https://vikingtourswebsitebyijjaz.surge.sh/" />
                </div>

                <div className="col-12 col-md-6 col-lg-3 my-3">
                  <ProjectCard title='Vuelamp Webpage' description="Vuelamp Website design with HTML , CSS , bootstrap & Js. simple webpage design." imglink={images.lampwedimg} weblink="https://samplewebpagebyijjazahmad.surge.sh/" />
                </div>
                <div className="col-12 col-md-6 col-lg-3 my-3">
                  <ProjectCard title='Potfolio website' description="Portfolio Website design with HTML , CSS , bootstrap & Js.Responsive, stylish portfolio." imglink={images.portfolioimg} weblink="https://portfoliowebbyijjazahmad.surge.sh/" />
                </div>
                <div className="col-12 col-md-6 col-lg-3 my-3">
                  <ProjectCard title='Calculator' description="Calculator design with HTML , CSS , bootstrap & Js.Responsive, stylish calculator." imglink={images.calculatorimg} weblink="https://calculatorbyijjazahmad.surge.sh/" />
                </div>
                <div className="col-12 col-md-6 col-lg-3 my-3">
                  <ProjectCard title='GYM Landing Page' description="GYM Page design with HTML & CSS. Responsive, stylish web page Landing Page  ." imglink={images.gympage} weblink="https://gympagebyijjaz.surge.sh/" />
                </div>
                <div className="col-12 col-md-6 col-lg-3 my-3">
                  <ProjectCard title='ToDo App' description="ToDo App build in reactjs with help of HTML , CSS , Bootstrap sass.Responsive,stylish web page" imglink={images.todoapp} weblink="https://magical-lebkuchen-51239b.netlify.app/" />
                </div>
                <div className="col-12 col-md-6 col-lg-3 my-3">
                  <ProjectCard title='Movie Recommend web' description="Movie Recommend web build in reactjs with help of HTML , CSS , Bootstrap sass.New hollywood movies web." imglink={images.movieweb} weblink="https://64b18716787656425ed0e478--stellular-piroshki-0c79b6.netlify.app/" />
                </div>
                <div className="col-12 col-md-6 col-lg-3 my-3">
                  <ProjectCard title='Fees Mangment WebApp' description="Fees Mangment WebApp build in reactjs with help of HTML , CSS , Bootstrap sass, Antdesign. Dynamic & responsive with login." imglink={images.fms} weblink="https://inspiring-begonia-64b3f1.netlify.app/" />
                </div>
                <div className="col-12 col-md-6 col-lg-3 my-3">
                  <ProjectCard title='StopWatch' description="StopWatch build in reactjs with help of HTML , CSS. Dynamic start, stop & rest ." imglink={images.stw} weblink="https://radiant-unicorn-ac8f96.netlify.app/" />
                </div>
                <div className="col-12 col-md-6 col-lg-3 my-3">
                  <ProjectCard title='Guess Number Game' description="Guess Number Game build in reactjs with help of HTML , CSS. Dynamic." imglink={images.gng} weblink="https://tourmaline-malabi-0cf258.netlify.app/" />
                </div>


              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
