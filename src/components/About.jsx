
import React from 'react'
import headicon from'../assests/picture (3).jpg'
import '../styles/_about.scss'


function About() {
    return (
        <div className="about" id="about">
           
            <div className="about__subcontainer">
            <img className="about__picture" src={headicon} alt="profilepicture" />
            <div className="about__container">
            <p className="about__heading">Anshu Pasrija</p>
            <p className="about__paragraph">Hi, I am Anshu and I am a web developer based out of Vancouver,Canada.What drew me to web development was my belief that the power of technology will allow me to build systems that can help solve many of the world's current problems.I am eager to begin my career in this field at an organization where I can grow as a professional and individual. </p>
            </div>
            </div>
            {/* <h1 className="about__heading">About</h1> */}
        </div>
    )
}

export default About

