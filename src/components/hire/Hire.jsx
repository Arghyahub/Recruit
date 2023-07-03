import { useState } from "react"
import { Link } from "react-router-dom"

import "./Hire.css"
// 314c5f
const Hire = () => {
  const [Jobs, setJobs] = useState([
    { name: "Frontend Intern", state: false },
    { name: "Backend Intern", state: false },
    { name: "Full Stack Intern", state: false },
  ])

  const [Applicant, setApplicant] = useState([
    { name: "Arghya", qualif: "BTech CSE", exp: "1", resume: "https://drive.google.com/file/d/1dlRe_f7fy6ucJLLu1phDSszpotDiP52t/view?usp=sharing" },
    { name: "Rohit", qualif: "BTech CSE", exp: "1", resume: "https://drive.google.com/file/d/1dlRe_f7fy6ucJLLu1phDSszpotDiP52t/view?usp=sharing" },
  ])

  const openModel = (name) => {
    let JobState = Jobs.map((elem) => {
      if (elem.name === name){ 
        elem.state =!elem.state; 
      }
      return {...elem };
    })
    setJobs(JobState) ;
  }

  return (
    <div id="Hire" className="flcol acen">

      <Link to={'/'} className="hire-nav flrow acen w100">
        <img src="navImg/navIcon.png" alt="" />
        <p>Recruit</p>
      </Link>

      <h2 className="job-comp">Hiring Platform for CompanyX</h2>

      <h4 className="job-txt">Job postings</h4>

      <div className="appl-wrapper flcol jcen acen">
        { Jobs.map((job,ind) => (
          <div key={`job${ind}`} onClick={() => openModel(job.name)} className="job flcol">
            <h3 className="job-name flrow acen jcen">
              {job.name} 
              <img src="jobImg/drop.png" alt="^" className="job-drop" />
            </h3>
            { job.state && (
              <div className="flcol " >
              {Applicant.map((appl,ind) => (
                  <div key={`appl${ind}`} className="appl">
                    <div className="appl-name">{appl.name}</div> 
                    <div className="appl-ql flrow">
                      <p>Education :{appl.qualif}</p>
                      <p className="exp">Experience :{appl.exp}</p>
                    </div>
                    <a href={appl.resume} className="resume">Resume</a>
                  </div>
              ))}
              </div>
            ) }
          </div>
        ))}
      </div>

    </div>
  )
}

export default Hire;