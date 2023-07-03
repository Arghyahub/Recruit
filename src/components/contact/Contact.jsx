import { useState } from "react"
import "./Contact.css"



const Contact = () => {
  const [Socials, setSocials] = useState([
    { icon: "contactImg/facebook.png" , name: "Facebook" , link: "https://www.linkedin.com/in/arghya-das-045702222/" },
    { icon: "contactImg/instagram.png" , name: "Instagram" , link: "https://www.instagram.com/argho_das_/" },
    { icon: "contactImg/linkedin.png" , name: "LinkedIn" , link: "https://www.linkedin.com/in/arghya-das-045702222/" },
    { icon: "contactImg/twitter.png" , name: "Twitter" , link: "https://twitter.com/ArghyaDas04" },
  ])
  return (
    <div id="contact" className="flcol jcen acen">
      <p className="cont-head">Contact us</p>
      <div className="flrow">
          {Socials.map((elem,ind) => (
            <a href={elem.link} key={`social${ind}`} className="socials flrow acen">
              <img src={elem.icon} alt="icon" />
              <p>{elem.name}</p>
            </a>
          ))}
      </div>
    </div>
  )
}

export default Contact