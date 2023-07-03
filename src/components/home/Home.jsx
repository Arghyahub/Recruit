import Navbar from "../navbar/Navbar"
import "./Home.css"
import Contact from "../contact/Contact"

import { useNavigate } from "react-router-dom"


const Home = () => {
  const navigate = useNavigate() ;
  return (
    <div id="Home" className="h100">

      <Navbar />
      
      <div className="flcol homebg-div jcen acen">
        <img src="homeImg/homebg.jpg" alt="Home" className="homebg abs"/>
        <h1 className="home-head">Welcome to Recruit</h1>
        <p className="home-txt">HR's favourite and candidates preferred website</p>

        <div className="flrow join-opt">
          <button className="homejoin-btn" onClick={() => navigate('/hire')}>Hire for Company</button>
          <button className="homejoin-btn" onClick={() => navigate('/apply')}>Get Hired</button>
        </div>
      </div>

      <div id="about" className="product flcol jcen acen">
        <h1>Out Hiring Platform</h1>
        <p className="prod-txt">Our Hiring Platform allows Hiring managers to hire potential candidates with least effor, most of the process is automated and the filter allows you to hire the best candidate as per your choice.</p>
        <p className="prod-txt">For Candidates out platform allows them to showcase their skillset to get the best opportunity and get the best job</p>
        <p className="prod-about">We Started the Hiring platform to support selection of good candidates as well as reducing the cost and effort of recruitment.</p>
      </div>

      <div id="company-perks" className="flcol acen jcen">
        <h1 className="perks-h1">Perks for Companys</h1>
        <ul className="company-ul">
          <li>Seperate section for every job post</li>
          <li>Organized Data</li>
          <li>Apply Advanced Filters</li>
          <li>Create Forms in minutes</li>
        </ul>
        <button className="homejoin-btn" onClick={() => navigate('/hire')}>Hire for Company</button>
      </div>

      <div id="job-seeker" className="flcol jcen acen">
        <h1 className="job-h1">Perks for Applicants</h1>
        <ul className="company-ul">
          <li>Showcase your skillset</li>
          <li>Better recommendation system</li>
          <li>Skill based preference</li>
        </ul>
        <button className="homejoin-btn" onClick={() => navigate('/apply')}>Get Hired</button>
      </div>

      <Contact />

    </div>
  )
}

export default Home