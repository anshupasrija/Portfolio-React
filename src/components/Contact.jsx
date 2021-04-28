import React from 'react'
import gitHubLogo from '../assests/GitHub-Mark.png'
import linkedinLogo from'../assests/linkdin.png'
import gmailLogo from'../assests/icon.jpg'
import '../styles/_contact.scss'

function Contact() {
    return (
        <div id="contact" className="contact">
        <div className="contact__links">
          <a className="contact__link" href="https://github.com/anshupasrija"> <img className="contact__logo" src={gitHubLogo} alt="github logo" /></a>
          <a className="contact__link" href="mailto:anshu.pasrija@gmail.com">
              <img className="contact__logo" src={gmailLogo} alt="email logo" />  </a>
          <a className="contact__link" href="https://www.linkedin.com/in/anshu-pasrija/"><img className="contact__logo" src={linkedinLogo} alt="contact logo" /></a>
        </div>
      </div>
  )
}

export default Contact;

    



