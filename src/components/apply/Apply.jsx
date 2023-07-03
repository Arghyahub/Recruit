import { Link } from "react-router-dom"
import "./Apply.css";
// F0F4F5
const Apply = () => {
  const subForm = (e) => {
    e.preventDefault() ;
  }
  return (
    <div id="Apply" className="flcol jcen acen">
      <Link to={'/'} className="hire-nav flrow acen w100">
        <img src="navImg/navIcon.png" alt="" />
        <p>Recruit</p>
      </Link>

      <h1>Frontend Intern Application</h1>

      <form onSubmit={subForm} className="apply-job flcol acen">
        <div className="flrow ip-div">
          <input type="text" placeholder="First Name" name="firstname" className="appl-ip"/>
          <input type="text" placeholder="Last Name" name="lastname" className="appl-ip"/>
        </div>
        <div className="flrow ip-div">
          <input type="text" placeholder="Qualification" name="study" className="appl-ip"/>
          <input type="text" placeholder="Any experience" name="exp" className="appl-ip"/>
        </div>
        <div className="flrow ip-div">
          <input type="tel" placeholder="Phone" name="phone" className="appl-ip"/>
          <input type="email" placeholder="Email" name="email" className="appl-ip"/>
        </div>
        <div className="flrow ip-div">
          <div className="appl-ip flrow">
            <p className="resume-btn">Resume</p>
            <input type="file" placeholder="Resume" name="resume"/>
          </div>
        </div>
        <button type="submit" className="apply-btn" >Apply</button>
      </form>

    </div>
  )
}

export default Apply;
